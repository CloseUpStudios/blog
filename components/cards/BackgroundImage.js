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


export default function backgroundImage({ image, className="article_image", children, spotlight, slug, forward }) {
    let imageUrl = builder.image(image.asset._ref)

    if(spotlight) {
        imageUrl = `linear-gradient( rgba(0, 0, 0, 0.749), 50%, rgba(0, 0, 0, 0.80)), url('${imageUrl}')`;
    } else {
        imageUrl = `url('${imageUrl}')`;
    }
    
    return (
        <Link href={`/post/${slug}?forward=${forward}`} passHref={true}>
            <div className={className} style={{backgroundImage:`${imageUrl}`}}>{children}</div>
        </Link>
    )
}