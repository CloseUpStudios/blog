import NavbarItem from './NavbarItem'
import { FaBars, FaTimesCircle } from "react-icons/fa";
import Link from "next/link";
import SearchBarComp from "./SearchBarComp";
import SearchOverlay from "./SearchOverlay";
import { useState } from "react";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    const [data, setData] = useState([]);
   
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function openNav() {
        if(typeof window === "object") {
            // set all items off screen
            var navbarItems = document.querySelectorAll("#sidebar a");
        
            document.getElementById("sidebar").style.width = "250px";
            //document.getElementById("mainContent").style.marginRight = "250px";
            document.getElementById("navbarOpener").style.opacity = "0";
            document.getElementById("colorOverlay").style.display = "block";
            
            document.getElementById("colorOverlay").style.backdropFilter = "blur(1px)";
            document.getElementById("colorOverlay").style.opacity = "1";

            document.querySelector("html").style.overflow = "hidden";
        }
    }
    async function closeNav() {
        if(typeof window === "object") {
            document.getElementById("sidebar").style.width = "0";
            document.getElementById("content_wrapper").style.marginRight = "0";
            document.getElementById("navbarOpener").style.opacity = "1";
            document.getElementById("colorOverlay").style.backdropFilter = "blur(0px)";
            document.getElementById("colorOverlay").style.opacity = "0";
            await sleep(250);
            document.getElementById("colorOverlay").style.display = "none";

            document.querySelector("html").style.overflow = "auto";
        }
    }
    const getActive = (item) => {
        if(typeof window === "object") {
            const path = window.location.pathname;
            if(path === "/" && item === "Home") {
                return true;
            }
            const pathArray = path.split("/");
            const active = pathArray[pathArray.length - 1];
            return active === item;
        }
    }
    const items = ["Home", "IT", "Math"];

    return (
        <>
            <div onClick={closeNav} id="colorOverlay"></div>
            <div className='navbar'>
                <Link href="/">
                    <a>
                        <h1 className='rubik-mono-one'>Closed[in]</h1>
                    </a>
                </Link>
                <FaBars id="navbarOpener" onClick={openNav} className="fas fa-bars pointer" />
            </div>
            <div id="sidebar" className="sidenav">
                <span style={{cursor: "default"}}>
                    <FaTimesCircle onClick={closeNav} className="fa-solid fa-times-circle pointer" />
                </span>

                <SearchBarComp closenav={closeNav} setIsActive={setIsActive} setData={setData} />
                <SearchOverlay closeNav={closeNav} isActive={isActive} data={data} />

                {items.map(item => {
                    if(item === "Home") {
                        return(
                            <NavbarItem onclick={closeNav} key={item} item={item} href="/" name={item} disabled={!getActive(item)} />
                        )
                    } else {
                        return (
                            <NavbarItem onclick={closeNav} key={item} item={item} href={`/category/${item}`} name={item} disabled={!getActive(item)} />
                        )
                    }
                })}
            </div>
        </>
    )
}