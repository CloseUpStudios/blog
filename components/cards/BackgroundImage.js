import Link from 'next/link';
import NoSsr from '../NoSsr';

import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

import imageStyle from "../../styles/imageStyle.module.css";

const SanityClient = createClient({
    projectId: "g2ejdxre",
    dataset: "production",
    apiVersion: "2022-04-29",
    useCdn: false
  });
  
const builder = imageUrlBuilder(SanityClient);
builder.dataset("production"); builder.projectId("g2ejdxre")


export default function backgroundImage({ image, className="article_image", children, spotlight="false", slug, forward="false", userImg="false", postLink="true", onclick }) {
    let imageUrl = builder.image(image.asset._ref)

    if(spotlight) {
        imageUrl = `linear-gradient( rgba(0, 0, 0, 0.749), 50%, rgba(0, 0, 0, 0.80)), url('${imageUrl}')`;
    } else if(userImg) {
        imageUrl = `linear-gradient(180deg, rgba(0,0,0,.5) 30%, #1e1428 100%), url('${imageUrl}')`;
    } else {
        imageUrl = `url('${imageUrl}')`;
    }

    if(postLink == "true") {
        return (
            <NoSsr>
                <Link href={`/post/${slug}?forward=${forward}`} passHref>
                        <div 
                        className={`${className}`} 
                        style={{backgroundImage:`${imageUrl}`}}
                        onClick={onclick}>
                        {children}</div>
                </Link>
            </NoSsr>
        )
    } else {
        return (
            <NoSsr>
                <div className={`${className} ${imageStyle.image}`} style={{backgroundImage:`${imageUrl}`}}>{children}</div>
            </NoSsr>
        )
    }
    

}