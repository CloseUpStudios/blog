import Link from 'next/link';
import BackgroundImage from './BackgroundImage';
import Tags from "./Tags";
import Meta from "./Meta";
import { useState } from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

export default function Spotlight({article, forward=true}) {

    const [loading, setLoading] = useState(false);

    const override = css`
        width: 160px;
        height: 160px;
    `;

    // check if loading is true
    // if so, render spinner, else render content
    const renderContent = loading ? (
        <div className="spinner">
            <PuffLoader
                size={150}
                color={"#F8CD86"}
                loading={loading}
                css={override}
            />
        </div>
    ) : (
        <>
        <div>
            <span className="spotlightTitle vollkorn">{article.title}</span>
            <Tags tags={article.tags} full={false} />
        </div>
        <div>
            <Meta article={article} />
        </div>
        </>
    )



    return (
        <BackgroundImage 
        className="spotlightSlide" image={article.mainImage} 
        spotlight={true} slug={article.slug.current} forward={forward}
        onclick={() => setLoading(true)} 
        >
        {renderContent}
        </BackgroundImage>
    )
}