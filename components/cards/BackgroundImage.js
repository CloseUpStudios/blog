import Link from 'next/link';
import NoSsr from '../NoSsr';
import Image from "next/image";
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

import imageStyle from "../../styles/imageStyle.module.css";

const SanityClient = createClient({
    projectId: "g2ejdxre",
    dataset: "production",
    apiVersion: "2022-04-29",
    useCdn: true
  });
  
const builder = imageUrlBuilder(SanityClient);
builder.dataset("production"); builder.projectId("g2ejdxre")


export default function backgroundImage({ 
    image, className="article_image", children, 
    spotlight="false", slug, forward="false", userImg="false", 
    postLink="true", onclick, authorProfile=false }) {

    let imageUrl = builder.image(image.asset._ref).url();

    let classes = authorProfile ? imageStyle.profileImage : imageStyle.image;

    if(postLink == "true") {
        return (
            <Link href={`/post/${slug}?forward=${forward}`} passHref>
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
                <Image src={imageUrl} alt="article main image" layout="fill" className={`${classes}`} />
            </div>
        )
    }
}