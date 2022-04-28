import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import BackgroundImage from '../../components/cards/BackgroundImage';
import SpotlightSection from '../../components/sections/SpotlightSection';
import articleStyle from '../../styles/articleView.module.css';

const ArticleView = ({ article, data }) => {
    const tagArray = article.meta.tags.split(",");
    // remove last tag if empty
    if(tagArray[tagArray.length-1].length == 0) {
        tagArray.splice(-1);
    } 
    return (
        <div id="articleView">
            <Header title={article.content.title} />
            <div id="colorOverlay"></div>
            <Navbar />
            <div id='content_wrapper' style={{marginTop:0}}> 
              <BackgroundImage imageName={article.imageName} />  
              <div className={articleStyle.articleWrapper}>
                <div className={`${articleStyle.meta}`}>
                  <span className="roboto roboto-light">{article.meta.author} <span style={{fontStyle:"italic"}}>on {new Date(parseInt(article.log.timestamp)).toDateString()}</span></span>
                </div>
                <div className={`${articleStyle.title} roboto-slab`}>{article.content.title}</div>
                <div className={articleStyle.tags}>
                    {tagArray.map((tag, index) => (
                        <div key={index} className={`${articleStyle.tag} roboto roboto-bold`}>{tag}</div>
                    ))}
                </div>
                <div className={`${articleStyle.subtitle} roboto `} style={{fontStyle:"italic"}}>{article.content.subtitle}</div>
                <div className={`${articleStyle.content} roboto roboto-light`}>{article.content.htmlText}</div>
              </div>
              <SpotlightSection className={articleStyle.article_spotlight} data={data} />
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
  // single article for article view
  let res;
  let article;
  const options = {
    "method": 'GET',
    "Content-Type": "application/json"
  }
  const id = context.params.id;
  if(id != undefined) {
    article = [id];

    res = await fetch(`https://www.cr4yfish.digital:8443/blog/request/${id}`, options);
    let temp = await res.json();
    if(temp.length != 0) {
      article = temp;
    }
  }


  // all articles for spotlight view
  let data = [];

  res = await fetch("https://www.cr4yfish.digital:8443/blog/request/0/all/all/all/all/all", options);
  data = await res.json();

  return { props: { article, data }};
}

export default ArticleView;