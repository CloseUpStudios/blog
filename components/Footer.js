import footerStyle from "../styles/footer.module.css";
import Link from "next/link";

export default function Footer({ }) {
    
    return (
        <footer className={footerStyle.footer}>
            <h1 className='rubik-mono-one'>Closed[in]</h1>

        
            <div className={footerStyle.links}>
                <div className={footerStyle.subLinks}>
                    <h3>Sitemap</h3>
                    <Link href={`/`} ><a className={footerStyle.link}>Home</a></Link>
                    <Link href={`/it`} ><a className={footerStyle.link}>IT</a></Link>
                    <Link href={`/film`} ><a className={footerStyle.link}>Film</a></Link>
                    <Link href={`/cooking`} ><a className={footerStyle.link}>Cooking</a></Link>
                </div>
               
                <div className={footerStyle.subLinks}>
                    <h3>Info</h3>
                    <Link href={`/`} ><a className={footerStyle.link}>About</a></Link>
                    <Link href={`/privacy`} ><a className={footerStyle.link}>Privacy Policy</a></Link>
                    <Link href={`/`} ><a className={footerStyle.link}>Home</a></Link>
                    <Link href={`/`} ><a className={footerStyle.link}>Home</a></Link>
                </div>
            </div>

      

        </footer>
    )
}