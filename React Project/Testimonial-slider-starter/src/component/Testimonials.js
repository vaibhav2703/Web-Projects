import React, { useState } from 'react'
import { Card } from './Card'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


export const Testimonials = (props) => {
    let review = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(review.length - 1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){
        if(index+1 > review.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    }

    function supriceHandler() {
        let randomIndex =Math.floor(Math.random() * review.length);
        setIndex(randomIndex);
    }

    return (
        <div className='w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center 
        mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
            <Card review={review[index]} />

            <div className='flex text-3xl mt-7 gap-3 text-violet-400 font-bold mx-auto'>
                <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft />
                </button>

                <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight />
                </button>
            </div>

            <div className='mt-6'>
                <button onClick={supriceHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer
            px-10 py-2 rounded-md font-bold text-white text-lg'>
                    Surprice me
                </button>
            </div>
        </div>
    )
}
