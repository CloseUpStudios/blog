import Image from "next/image";
import GetImageUrl from "./GetImageUrl";
  
export default function UserImage({ image, username }) {
    let imageUrl = GetImageUrl(image);
    
    return (
        <Image className="spotlightAuthorImage" width="16px" height="16px" src={imageUrl} alt={username}></Image>
    )
}