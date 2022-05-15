import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import BackgroundImage from '../../components/cards/BackgroundImage';
import userStyle from '../../styles/userView.module.css';
import CardSection from "../../components/sections/CardSection";
import Markdown from '../../components/Markdown';
import Link from "next/link";
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaArrowDown, FaExternalLinkSquareAlt } from "react-icons/fa";


const ArticleView = ({ user }) => {
  try {

    const scrollDown = () => {
      window.scrollBy({behavior:"smooth", top: 500});
    }
    
    return (
      <div id="userView" >
          <Header title={user.name} />
          <div id='content_wrapper'>
            <BackgroundImage className={userStyle.bgimage} image={user.bgimage} slug={user.slug.current} forward={false} spotlight={false} userImg={true} postLink={false} />  
            <div className={userStyle.userWrapper}>
            <div className={userStyle.userMeta}>
              <BackgroundImage className={userStyle.image} image={user.image} slug={user.slug.current} forward={false} spotlight={false} userImg={false} postLink={false} />  
              <h1>{user.name}</h1>
              <div className={userStyle.introduction}>{user.introduction}</div>
              <div className={userStyle.socials}>

              {user.hasOwnProperty("socials") ? (
                user.socials.hasOwnProperty("website") ? (
                  <a href={user.socials.website} target={"_blank"} rel={"noopener noreferrer"}>
                    <FaExternalLinkSquareAlt className={userStyle.socialIcon} />
                  </a>
                ) : null
              ) : null}


              {user.hasOwnProperty("socials") ? (
                user.socials.hasOwnProperty("instagram") ? (
                  <a href={user.socials.instagram} target={"_blank"} rel={"noopener noreferrer"}>
                    <FaInstagramSquare className={userStyle.socialIcon} />
                  </a>
                ) : null
              ) : null}

              {user.hasOwnProperty("socials") ? (
                user.socials.hasOwnProperty("twitter") ? (
                  <a href={user.socials.twitter} target={"_blank"} rel={"noopener noreferrer"}>
                    <FaTwitterSquare className={userStyle.socialIcon} />
                  </a>
                ) : null
              ) : null}

              {user.hasOwnProperty("socials") ? (
                user.socials.hasOwnProperty("linkedin") ? (
                  <a href={user.socials.linkedin} target={"_blank"} rel={"noopener noreferrer"}>
                    <FaLinkedin className={userStyle.socialIcon} />
                  </a>
                ) : null
              ) : null}
            
              </div>
              <FaArrowDown onClick={scrollDown} className={userStyle.arrow} />
            </div>
            
              <Markdown childs={user.bio} />
              <CardSection data={user.posts} overwrite={`Articles by ${user.name}`} />
            </div>
          </div>
      </div>
  )
  } catch(e) {
    return {
      redirect: {
          destination: "/500",
          permanent: false
      },
    }
  }

}

// sanity stuff
import { createClient } from 'next-sanity'
const client = createClient({
  projectId: "g2ejdxre",
  dataset: "production",
  apiVersion: "2022-04-29",
  useCdn: true
});

export const getServerSideProps = async (context) => {
  let user = false;

  // single article for article view
  const usernameSlug = context.params.username;
    // get data from sanity
    const searchString = `*[_type == "author" && slug.current == "${usernameSlug}" ] {
      ...,
      _id,      
      "posts": *[_type == "post" && author._ref == ^._id] {
        ...,
        category->,
        author->
      }
    }`
    user = await client.fetch(searchString);

    user = user[0];
    return { props: { user }};
}

export default ArticleView;