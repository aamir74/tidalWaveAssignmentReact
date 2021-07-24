import React, { useState } from 'react'
import Orders from '../components/Orders'
import StatusBar from '../components/StatusBar'

const AgriInputPurchaseDetail = () => {

    const [status, setStatus] = useState('pending')

    const setCurrentStatus = id => {
        setStatus(id)
    }

    return (
        <>
            <div className='ml-40'>
                <p className='p-5 text-lg font-bold'>Agri-Input Master Maintainance</p>
                <StatusBar currentStatus={status} status={setCurrentStatus} />
                {status === "pending" && <h1 className='page-content'>PENDING...</h1>}
                {status === "executing" && <Orders />}
                {status === "executed" && <h1 className='page-content'>EXECUTED...</h1>}
                {status === "completed" && <h1 className='page-content'>COMPLETED...</h1>}
            </div>
        </>
    )
}

export default AgriInputPurchaseDetail
