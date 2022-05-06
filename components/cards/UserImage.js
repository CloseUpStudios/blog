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


export default function UserImage({ image, username }) {
    let imageUrl = builder.image(image.asset._ref)
        imageUrl = `url('${imageUrl}')`;
    
    return (
        <div className="spotlightAuthorImage" style={{backgroundImage:`${imageUrl}`}}></div>
    )
}