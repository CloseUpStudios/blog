import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

export default function SpinnerButton({ text }) {
    const [loading, setLoading] = useState(false);
    
    const override = css`
        width: 25px;
        height: 25px;
    `;

    //set loading to false when loading is done
    useEffect(() => {
        if(loading) {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [loading]);

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
        <>
        {text}
        </>
    );
    
    return (
    <>
    <button 
        onClick={() => setLoading(true)}
        className="btn btn_small"
        aria-label={`${text} Button`}
        >
        {renderButton}
    </button>
    </>
    );
}