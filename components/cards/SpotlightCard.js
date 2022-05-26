import Link from 'next/link';
import BackgroundImage from './BackgroundImage';
import Tags from "./Tags";
import Meta from "./Meta";
import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import useWindowLocation from '../UseWindowLocation';

export default function Spotlight({article, forward=true}) {

    const [loading, setLoading] = useState(false);
    const [windowLocation, setWindowLocation] = useWindowLocation();

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

    let oldLocation = "";
    if(typeof window !== "undefined") {
        oldLocation = window.location.pathname;
    }

    const handleLocationChange = () => {
        if(typeof window !== "undefined") {
            if(windowLocation != window.location.pathname) {
                setLoading(false);
                setWindowLocation(oldLocation);
            }
        }
    }

    return (
        <BackgroundImage 
        className="spotlightSlide" image={article.mainImage} 
        spotlight={true} slug={article.slug.current} forward={forward}
        onclick={() => setLoading(true)} 
        >
        {renderContent}
        {handleLocationChange()}
        </BackgroundImage>
    )
}