import Link from "next/link"
import Navbar from "../components/Navbar";
import NotFoundStyle from "../styles/404.module.css";

const goBack = () => {
    window.history.back();
}


export default function Custom404() {
    return (
        <>
        <div id="content_wrapper" className={NotFoundStyle.wrapper}>
            <div className={NotFoundStyle.subWrapper}>
                <div className={NotFoundStyle.title}>500</div>
                <div className={NotFoundStyle.subtitle}>The Server messed up</div>
                <button onClick={goBack} className="btn btn_primary">Go back</button>
            </div>
        </div>
        </>
 
    )
}