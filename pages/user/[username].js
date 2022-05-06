import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import BackgroundImage from '../../components/cards/BackgroundImage';
import SpotlightSection from '../../components/sections/SpotlightSection';
import userStyle from '../../styles/userView.module.css';
import CardSection from "../../components/sections/CardSection";
import ReactMarkdown from 'react-markdown';

const ArticleView = ({ user }) => {
  try {
    return (
      <div id="userView" className={userStyle.wrapper}>
        {console.log(user)}
          <Header title={user.name} />
          <div id="colorOverlay"></div>
          <Navbar />
          <div id='content_wrapper' className={userStyle.contentWrapper} style={{marginTop:0}}> 
            <h1>{user.name}</h1>
            <ReactMarkdown>{user.bio}</ReactMarkdown>
            <CardSection data={user.posts} />
            
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
  const username = context.params.username;
    // get data from sanity
      
    user = await client.fetch(`*[_type == "author" && name == "${username}" ] {
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