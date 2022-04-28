import Link from 'next/link'
import NavbarItem from './NavbarItem'
import { FaBars, FaTimesCircle } from "react-icons/fa";

export default function Navbar() {

    function sleep(ms) {
    
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function openNav() {

        // set all items off screen
        var navbarItems = document.querySelectorAll("#sidebar a");
      
        document.getElementById("sidebar").style.width = "250px";
        //document.getElementById("mainContent").style.marginRight = "250px";
        document.getElementById("navbarOpener").style.opacity = "0";
        document.getElementById("colorOverlay").style.display = "block";
        
        
        localStorage.setItem("navbarHasBeenOpened", "true");
        document.getElementById("colorOverlay").style.opacity = "1";
      }
      
    async function closeNav() {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("content_wrapper").style.marginRight = "0";
        document.getElementById("navbarOpener").style.opacity = "1";
        document.getElementById("colorOverlay").style.opacity = "0";
        await sleep(250);
        document.getElementById("colorOverlay").style.display = "none";
    }
    return (
        <>
            <FaBars id="navbarOpener" onClick={openNav} className="fas fa-bars pointer"></FaBars>
            <div id="sidebar" className="sidenav">
                <a onClick={closeNav}>
                    <FaTimesCircle className="fa-solid fa-times-circle pointer"></FaTimesCircle>
                </a>
                
                <NavbarItem name="Home" href="/" disabled={false} />
                <NavbarItem name="IT"  disabled={true} />
                <NavbarItem name="Film" disabled={true} />
                <NavbarItem name="Cooking" disabled={true} />
            </div>
        </>
    )
}