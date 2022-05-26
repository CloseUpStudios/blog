import Image from "next/image";
import GetImageUrl from "./GetImageUrl";
  
export default function UserImage({ image, username }) {
    let imageUrl = GetImageUrl(image);
    
    return (
        <Image className="spotlightAuthorImage" layout="fixed" width={16} height={16} src={imageUrl} alt={username}></Image>
    )
}