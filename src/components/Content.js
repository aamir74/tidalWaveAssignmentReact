import React from 'react'

const Content = () => {
    return (
        <>
        <div className='menu-card'>
            <img src='https://hips.hearstapps.com/vidthumb/images/delish-cloud-eggs-horizontal-1536076899.jpg' alt='egg' className="img h-full rounded mb-20 shadow" />
            <div className='center-content'>
                <h2 className="text-2xl mb-2">Egg Muffins</h2>
                <p className="mb-2">Crispy, delicious and nutritious</p>
                <span>$16</span>
            </div>
        </div>
        <div className='menu-card'>
        <img src='https://c.ndtvimg.com/2020-05/rdcvrtb_fried-egg_625x300_29_May_20.jpg' alt='egg' className="img h-full rounded mb-20 shadow" />
        <div className='center-content'>
            <h2 className="text-2xl mb-2">Egg Salad</h2>
            <p className="mb-2">Crispy, delicious and nutritious</p>
            <span>$18 </span>
        </div>
    </div>
        </>
    )
}

export default Content
