import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import ArrowStyle from "../styles/arrowToTop.module.css";

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if(typeof window == "object") {
            if (!showScroll && window.pageYOffset > 400) {
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400) {
                setShowScroll(false);
            }
        }
    };

    const scrollTop = () => {
        if(typeof window == "object") {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }

    if(typeof window == "object") {
        window.addEventListener("scroll", checkScrollTop);
    }
    
    
    return (
       <FaArrowCircleUp 
       className={ArrowStyle.scrollTop} 
       onClick={scrollTop} 
       style={{height: 40, display: showScroll ? "flex" : "none"}} />
    );
}

export default ScrollArrow;