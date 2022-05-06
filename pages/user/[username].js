import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import BackgroundImage from '../../components/cards/BackgroundImage';
import userStyle from '../../styles/userView.module.css';
import CardSection from "../../components/sections/CardSection";
import Markdown from '../../components/Markdown';



const ArticleView = ({ user }) => {
  try {
    return (
      <div id="userView" >
          <Header title={user.name} />
          <Navbar />
          <div id='content_wrapper' > 
 
            <BackgroundImage className={userStyle.bgimage} image={user.bgimage} slug={user.slug.current} forward={false} />  
            <div className={userStyle.userWrapper}>
            <div className={userStyle.userMeta}>
              <BackgroundImage className={userStyle.image} image={user.image} slug={user.slug.current} forward={false} />  
              <h1>{user.name}</h1>
            </div>
              <Markdown childs={user.bio} />
              <CardSection data={user.posts} />
            </div>
          </div>
      </div>
  )
  } catch(e) {
    return(
      <div>Error</div>
    )
  }

}

// sanity stuff
import { createClient } from 'next-sanity'
const client = createClient({
  projectId: "g2ejdxre",
  dataset: "production",
  apiVersion: "2022-04-29",
  useCdn: false
});

export const getServerSideProps = async (context) => {
  let user = false;

  // single article for article view
  const usernameSlug = context.params.username;
    // get data from sanity
      
    user = await client.fetch(`*[_type == "author" && slug.current == "${usernameSlug}" ] {
      ...,
      _id,      
      "posts": *[_type == "post" && author._ref == ^._id] {
        ...,
        author->
      }
    }`);

    user = user[0];
    return { props: { user }};
}

export default ArticleView;