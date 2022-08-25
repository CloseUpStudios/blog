import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header";

import privacyStyle from "../styles/privacyStyle.module.css";

export default function Privacy() {
    return (
        <div id="root">
            <Header title="Closed[in]" />
            <div id="content_wrapper" style={{margin: "2rem", marginTop: "7rem"}} >
                
                <h1>Privacy Policy</h1>

                <h2>
                    TL;DR
                </h2>
                <div className={privacyStyle.wrapper}>
                    <p>When you visit this website, your get assigned a unique User ID. This ID is used to track the duration of your visit and possible interactions with the website. The following is associated with a User ID:</p>
                    
                    <h3>For User analytics</h3>
                    <ul>
                        <li>User Agent</li>
                        <li>Country</li>
                        <li>Page Views</li>
                        <li>Referrer</li>
                        <li>Usage Duration</li>
                        <li>Unique ID (only for this website)</li>
                    </ul>
                    <h3>To optimize website loading speed</h3>
                    <ul>
                        <li>User Agent</li>
                        <li>Referrer</li>
                        <li>Unique ID (only for this website)</li>
                        <li>Your page loading speed</li>
                    </ul>

                    <p>The User ID is generated each time you visit this domain. It is not tracked across multiple days, or across domains.</p>
                    <p>There is a cookie placed by Vercel (the hosting service provider). Its just there because I dont know how to turn it off. I will as soon as I find out.</p>
        
                    <p>If you wish to opt-out completely, install uBlock Origin. It will block any analytics here.</p>

                </div>
             </div>
        </div>
    )
}