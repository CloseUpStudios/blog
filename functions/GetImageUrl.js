import useSWR from 'swr';
const options = {

    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
}

const fetcher = url => fetch(url, options).then(res => res.blob()).then(res => URL.createObjectURL(res));

export default function GetImageUrl( imageName ) {
    const { data, error } = useSWR(`https://www.cr4yfish.digital:8443/getImage/${imageName}`, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}