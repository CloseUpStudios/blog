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
                <div className={NotFoundStyle.title}>404</div>
                <div className={NotFoundStyle.subtitle}>Page not found</div>
                <button onClick={goBack} className="btn btn_primary">Go back</button>
            </div>
        </div>
        </>
 
    )
}