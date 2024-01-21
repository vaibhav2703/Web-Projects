import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

const API_Key = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}`;


export const useGif = (tag) => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    async function fetchData(tag) {
        setLoading(true);
        const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
        const imgSource = data.data.images.downsized_large.url;
        setGif(imgSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    }, []);

    return {gif, loading, fetchData};

}
