import React from 'react'
import { VscTriangleDown } from 'react-icons/vsc'

const Tabs = (props) => {
    return (
        <div className='flex flex-col items-center justify-center text-center'>
            <div className={`mx-10 my-2 bg-${props.bgColor} w-40 h-20 flex flex-col items-center justify-center text-center text-white cursor-pointer hover:bg-black`}>
                <div className={`pt-2 h-10 w-10 rounded-full bg-${props.color}`}>{props.page}</div>
                <p>{props.content}</p>
            </div>
            {props.bgColor === 'black' && <VscTriangleDown className='text-black'/>}
        </div>
    )
}

export default Tabs
