import Link from 'next/link'
import BackgroundImage from './BackgroundImage';
import Tags from "./Tags";
import Meta from "./Meta";

import { useState, useCallback } from "react";

import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

// TODO - add spinner onClick
export default function Card({article}) {
    const [loading, setLoading] = useState(true);

    const override = css`
        width: 160px;
        height: 160px;
        transform: translateX(-6%);
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
            <span className="spotlightTitle articleCardTitle roboto roboto-bold">{article.title}</span>
            <Tags tags={article.tags} full={false} />
            <div className="subtitle roboto roboto-light">{article.subtitle}</div>
        </div>
        <div>
            <Meta article={article} />
        </div>
        </>
    )

    return (
        <Link href={`/post/${article.slug.current}?forward=true`} passHref>
            <a>
                <BackgroundImage onclick={() => setLoading(true)} className="spotlightSlide articleCard" image={article.mainImage} spotlight={true} slug={article.slug.current} >
                    {renderContent}
                </BackgroundImage>
            </a>
        </Link>
    )
}