import {useState,useEffect} from 'react'

export default function UseFetchData(url) {
    const [data,setData]=useState(null);
    console.log(data);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(`Error: ${err}`));
    }, [url]);

    return {data};
}