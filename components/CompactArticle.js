import Meta from "./cards/Meta";
import Link from "next/link";
import Tags from "./cards/Tags";

import { useState, useCallback } from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

export default function CompactArticle({article}) {
    const [loading, setLoading] = useState(false);

    const override = css`
        width: 25px;
        height: 25px;
    `;

    const renderButton = loading ? (
        <div className="spinner">
            <PuffLoader
                size={15}
                color={"white"}
                loading={loading}
                css={override}
            />
        </div>
    ) : (
        <>Read Newest</>
    )

    return (
        <>
            <div className='featuredMeta__meta'>
                <Meta userImg={true} className="featuredMeta" article={article} />
                <h1>{article.title}</h1>
                <Tags tags={article.tags} />
                <p className='subtitle' style={{ margin:"0", marginBottom:".5rem", width:"100%", textAlign:"left" }} >{article.tldr}</p>
                <Link href={`/post/${article.slug.current}`} >
                <a>
                    <button onClick={() => setLoading(true)} className="btn btn_small">{renderButton}</button>
                </a>
                </Link>
          </div>
        </>
    )
}