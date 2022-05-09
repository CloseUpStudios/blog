import NavbarItem from './NavbarItem'
import { FaBars, FaTimesCircle } from "react-icons/fa";

export default function Navbar() {

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

    const items = ["Home", "IT", "Film", "Cooking"];

    return (
        <>
            <div onClick={closeNav} id="colorOverlay"></div>
            <div className='navbar'>
                <h1 className='rubik-mono-one'>Closed[in]</h1>
                <FaBars id="navbarOpener" onClick={openNav} className="fas fa-bars pointer" />
            </div>
            <div id="sidebar" className="sidenav">
                <a onClick={closeNav}>
                    <FaTimesCircle className="fa-solid fa-times-circle pointer" />
                </a>

                {items.map(item => {
                    if(item === "Home") {
                        return(
                            <NavbarItem key={item} item={item} href="/" name={item} disabled={!getActive(item)} />
                        )
                    } else {
                        return (
                            <NavbarItem key={item} item={item} href={`/category/${item}`} name={item} disabled={!getActive(item)} />
                        )
                    }
                })}
            </div>
        </>
    )
}