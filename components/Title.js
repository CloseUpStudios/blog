import BackgroundImage from "./cards/BackgroundImage";
import CompactArticle from "./CompactArticle";

const Title = ({article}) => {
    return (
      <>
        <BackgroundImage userImg={true} className="featuredBG " image={article.mainImage} spotlight={false} slug={article.slug.current} postLink={false} />
        <div className='featuredMeta'>
          <div>
            <p style={{ margin:"0", fontStyle:"italic" }} >Welcome to</p>
              <h1>Closed[in]</h1>
            <p>The Blog brought to you by Close-up Studios!</p>
          </div>
          <CompactArticle article={article} />
        </div>
      </>
    )
}

export default Title;