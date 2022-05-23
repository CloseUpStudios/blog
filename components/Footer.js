import footerStyle from "../styles/footer.module.css";
import Link from "next/link";

export default function Footer({ }) {
    
    return (
        <footer className={footerStyle.footer}>
        <div>
            <h1 className='rubik-mono-one'>Closed[in]</h1>
            <span>Brought to you by Close-up Studios</span>
        </div>
            

        
            <div className={footerStyle.links}>
                <div className={footerStyle.subLinks}>
                    <span>Sitemap</span>
                    <Link href={`/`} ><a className={footerStyle.link}>Home</a></Link>
                    <Link href={`/category/IT`} ><a className={footerStyle.link}>IT</a></Link>
                    <Link href={`/category/Math`} ><a className={footerStyle.link}>Math</a></Link>
                </div>
               
                <div className={footerStyle.subLinks}>
                    <span>Info</span>
                    <Link href={`/about`} ><a className={footerStyle.link}>About</a></Link>
                    <Link href={`/privacy`} ><a className={footerStyle.link}>Privacy Policy</a></Link>

                </div>
            </div>

      

        </footer>
    )
}