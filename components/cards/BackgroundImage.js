import Link from 'next/link';

import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const SanityClient = createClient({
    projectId: "g2ejdxre",
    dataset: "production",
    apiVersion: "2022-04-29",
    useCdn: false
  });
  
const builder = imageUrlBuilder(SanityClient);
builder.dataset("production"); builder.projectId("g2ejdxre")


export default function backgroundImage({ image, className="article_image", children, spotlight="false", slug, forward="false", userImg="false", postLink="true" }) {
    let imageUrl = builder.image(image.asset._ref)

    if(spotlight) {
        imageUrl = `linear-gradient( rgba(0, 0, 0, 0.749), 50%, rgba(0, 0, 0, 0.80)), url('${imageUrl}')`;
    } else if(userImg) {
        imageUrl = `linear-gradient(180deg, rgba(0,0,0,0) 60%, #1d1328 100%), url('${imageUrl}')`;
    } else {
        imageUrl = `url('${imageUrl}')`;
    }

    if(postLink == "true") {
        return (
            <Link href={`/post/${slug}?forward=${forward}`} passHref>
                    <div className={`${className}`} style={{backgroundImage:`${imageUrl}`}}>{children}</div>
            </Link>
        )
    } else {
        return (
            <div className={`${className}`} style={{backgroundImage:`${imageUrl}`}}>{children}</div>
        )
    }
    

}