import { useState, useEffect } from "react";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
import useWindowLocation from "./UseWindowLocation";

export default function SpinnerButton({ text }) {
    const [loading, setLoading] = useState(false);
    const [windowLocation, setWindowLocation] = useWindowLocation();

    const override = css`
        width: 25px;
        height: 25px;
    `;

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
        {handleLocationChange()}
    </button>
    </>
    );
}