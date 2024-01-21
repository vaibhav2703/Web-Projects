import axios from 'axios';
import React, { useState } from 'react'
import { Loader } from './Loader';
import { useGif } from '../hooks/useGif';

const API_Key = process.env.REACT_APP_GIPHY_API_KEY;
export const Tag = () => {
    const [tag, setTag] = useState('');

    const { gif, loading, fetchData } = useGif(tag);



    return (
        <div className='w-1/2 bg-blue-500 
    rounded-lg border border-black flex flex-col items-center
     gap-y-5 mt-[15px] mb-[35px]'>

            <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
            {
                loading ? (<Loader />) : (<img src={gif} width="450" />)
            }

            <input
                className='w-10/12 text-lg py-2 rounded-lg 
                mb-[3px] text-center'
                onChange={(event) => setTag(event.target.value)}
                value={tag}
            />

            <button
                className='w-10/12 bg-blue-200 text-lg py-2
         rounded-lg mb-[20px]'
                onClick={() => fetchData(tag)}>
                Generate
            </button>
        </div>
    )
}
