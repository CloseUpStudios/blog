import { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import ArrowStyle from "../styles/arrowToTop.module.css";

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    }, [showScroll]);

    const scrollTop = () => {
        if(typeof window == "object") {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }
    
    
    return (
       <FaArrowCircleUp 
       className={ArrowStyle.scrollTop} 
       onClick={scrollTop} 
       style={{height: 40, display: showScroll ? "flex" : "none"}} />
    );
}

export default ScrollArrow;