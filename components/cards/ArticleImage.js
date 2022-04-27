import GetImageUrl from "../../functions/GetImageUrl";

export default function ArticleImage({ imageName }) {
    const {data, isLoading, isError} = GetImageUrl(imageName);

    if (isError) return <div>failed to load</div>
    if (isLoading) return <div className="article_image" style={{backgroundColor:"grey"}}></div>

    return (
        <div className="article_image" style={{backgroundImage:`url('${data}')`}}></div>
    )
}