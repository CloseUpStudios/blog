import imageUrlBuilder from '@sanity/image-url'
import client from "../SanityClient";

const builder = imageUrlBuilder(client);
builder.dataset("production"); builder.projectId("g2ejdxre")

function GetImageUrl( image ) {
    let imageUrl = builder.image(image.asset._ref).url();
    return imageUrl;
}
export default GetImageUrl;
