import Link from 'next/link';
import Image from "next/image";
import imageStyle from "../../styles/imageStyle.module.css";
import GetImageUrl from './GetImageUrl';

export default function backgroundImage({ 
    image, className="article_image", children, 
    spotlight="false", slug, forward="false", userImg="false", 
    postLink="true", onclick, authorProfile=false }) {

    let imageUrl = GetImageUrl(image);

    let classes = authorProfile ? imageStyle.profileImage : imageStyle.image;

    if(postLink == "true") {
        return (
            <Link href={`/post/${slug}`} passHref>
            <div className={className} onClick={onclick} >
                {children}
                <Image style={{ zIndex:"-10", filter:"blur(1px) brightness(25%)", userSelect:"none"}} src={imageUrl} alt="article main image" layout="fill" />
            </div>
            </Link>
        )
    } else {
        return (
            <div className={className}>
                {children}
                <Image src={imageUrl} alt="article main image" priority layout="fill" className={`${classes}`} />
            </div>
        )
    }
}