import GetImageUrl from "../../functions/GetImageUrl";
import Link from 'next/link';
export default function backgroundImage({ imageName, className="article_image", children, spotlight, articleId }) {
    const {data, isLoading, isError} = GetImageUrl(imageName);

    if (isError) return <div>failed to load</div>
    if (isLoading) return <div className={className} style={{backgroundColor:"grey"}}></div>

    let cutomData;

    if(data && spotlight) {
        cutomData = `linear-gradient( rgba(0, 0, 0, 0.149), 20%, rgba(0, 0, 0, 0.749)), url('${data}')`;
    } else if (data) {
        cutomData = `url('${data}')`;
    }

    return (
        <Link href={`/post/${articleId}`} passHref>
            <div className={className} style={{backgroundImage:`${cutomData}`}}>{children}</div>
        </Link>
    )
}