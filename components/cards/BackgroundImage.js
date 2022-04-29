import GetImageUrl from "../../functions/GetImageUrl";
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


export default function backgroundImage({ image, className="article_image", children, spotlight, slug }) {
    let imageUrl = builder.image(image.asset._ref)

    if(spotlight) {
        imageUrl = `linear-gradient( rgba(0, 0, 0, 0.149), 20%, rgba(0, 0, 0, 0.749)), url('${imageUrl}')`;
    } else {
        imageUrl = `url('${imageUrl}')`;
    }
    
    return (
        <Link href={`/post/${slug}`} passHref>
            <div className={className} style={{backgroundImage:`${imageUrl}`}}>{children}</div>
        </Link>
    )
}