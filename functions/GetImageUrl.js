import useSWR from 'swr';
const options = {

    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
}

const fetcher = url => fetch(url, options).then(res => res.blob()).then(res => URL.createObjectURL(res));

export default function GetImageUrl( imageName ) {
    const { data, error } = useSWR(`http://localhost:30005/getImage/${imageName}`, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}