import Link from 'next/link';
import Image from "next/image";
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const SanityClient = createClient({
    projectId: "g2ejdxre",
    dataset: "production",
    apiVersion: "2022-04-29",
    useCdn: true
  });
  
const builder = imageUrlBuilder(SanityClient);
builder.dataset("production"); builder.projectId("g2ejdxre")


export default function UserImage({ image, username }) {
    let imageUrl = builder.image(image.asset._ref).url();
    
    return (
        <Image className="spotlightAuthorImage" width="16px" height="16px" src={imageUrl} alt={username}></Image>
    )
}