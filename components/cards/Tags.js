export default function Tags({tags, full=true}) {
    // amout of tags
    const cutoff = 3;
    // splice tags if there are more than 3
    if(!full && tags.length > cutoff) {
       tags.splice(cutoff);
    }
    return (
        <div className='tags'>
            {tags.map((tag, index) => (
                <div key={index} className="tag roboto roboto-bold">{tag}</div>
            ))}
        </div>
    )
}