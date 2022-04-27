import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.blob()).then(res => URL.createObjectURL(res));

export default function GetImageUrl( imageName ) {
    const { data, error } = useSWR(`http://localhost:30005/getImage/${imageName}`, fetcher);

    return {
        data,
        isLoading: !error && !data,
        isError: error
    }
}