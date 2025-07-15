import { color } from 'framer-motion';
import React from 'react'
import { FaArrowPointer } from "react-icons/fa6"; 
import { twMerge } from 'tailwind-merge';

const Pointer = (props: {
  name:string;
  color?:"red" | "blue";
}) => {
  const { name, color } = props;
  return (
    <div className='relative'>
        <FaArrowPointer />
        <div className='absolute left-3'>
            <p className={twMerge("text-sm font-bold inline-flex rounded-full bg-blue-500 px-2 rounded-tl-none", color === 'red' && "bg-red-500")}>{name}</p>
        </div>
    </div>
  )
}

export default Pointer