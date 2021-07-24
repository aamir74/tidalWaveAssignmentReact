import React from 'react'
import ordersData from './OrdersData'
import OrderDetails from './OrderDetails'

const Orders = () => {
    return (
        <>
            <div className='ml-20 p-5 flex flex-wrap border-b-2'>
                <p className='text-30 font-bold' >Executing Agri-Input Orders</p>
                <p className='ml-20 text-30 font-bold'> Batched By</p>
            </div>
            {ordersData && ordersData.map(order => {
                return (
                   <OrderDetails order={order}/>
                )
            })}
        </>
    )
}

export default Orders
