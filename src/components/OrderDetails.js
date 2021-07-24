import React, { useState } from 'react'
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'
import { SiMicrosoftexcel } from 'react-icons/si'
import { RiDownload2Fill } from 'react-icons/ri'
import { HiExternalLink } from 'react-icons/hi'
import { CSVLink, CSVDownload } from "react-csv";
import Modal from './Modal'

const OrderDetails = ({ order }) => {

    const [showDetails, setShowDetails] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalData,setModalData] = useState()

    const showContentHandler = () => {
        setShowDetails(!showDetails)
    }

    const modalHandler = detail => {
        setModalData(detail)
        setShowModal(!showModal)
    }

    return (
        <>
            <div className='ml-20 m-3 p-3 flex flex-wrap bg-gray-200'>
                <p className='flex items-center justify-center text-center'>{order.id}<span onClick={showContentHandler} className='ml-5 cursor-pointer'>{showDetails ? <IoIosArrowDropupCircle size={20} /> : <IoIosArrowDropdownCircle size={20} />}</span></p>
                <p className='sm:ml-5 lg:ml-40 flex items-center justify-center text-center'> <img className='w-10 h-8 mx-2 rounded-full' src={order.creator.image} /> {order.creator.name} </p>
                <p className='sm:ml-5 lg:ml-40 flex flex-wrap items-center justify-center text-center'><span className='mr-5 cursor-pointer'>{<SiMicrosoftexcel size={20} className='bg-green-500' />}</span>{order.id}<span className='ml-5 cursor-pointer'>{<CSVLink data={order.details}>{<RiDownload2Fill size={20} />}</CSVLink>}</span></p>
            </div>
            {showDetails && <div className='ml-20 p-1'>
                <div className=' flex bg-black object-contain'>
                    <p className="ml-10 bg-white h-10 w-0.5 "></p>
                    <p className='p-2 px-10 text-white '>Agri-Input Category</p>
                    <div className="bg-white h-10 w-0.5 "></div>
                    <p className='p-2 px-10 text-white '>Product Image</p>
                    <div className="bg-white h-10 w-0.5 "></div>
                    <p className='p-2 px-10 text-white '>Product Description</p>
                    <div className="bg-white h-10 w-0.5 "></div>
                    <p className='p-2 px-10 text-white '>Order Quantity</p>
                </div>
                {order.details && order.details.map(detail =>
                    <>
                        <div className='flex bg-gray-200 object-contain'>
                            <p className='mx-4 py-1'>{detail.id}</p>
                            <p className="bg-white h-10 w-0.5 "></p>
                            <p className='p-2 w-56 '>{detail.category}</p>
                            <div className="bg-white h-10 w-0.5 "></div>
                            <p className='p-2 px-16 w-44'><img className='w-10 h-8' src={detail.image} /></p>
                            <div className="bg-white h-10 w-0.5 "></div>
                            <p className='p-2 px-10 w-60 text-sm'>{detail.description}</p>
                            <div className="bg-white h-10 w-0.5 "></div>
                            <p className='p-2 px-10 w-40'>{detail.quantity}</p>
                            <p onClick={()=> modalHandler(detail)} className='my-5 cursor-pointer'><HiExternalLink size={20} /></p>
                        </div>
                        {showModal && <Modal
                            onCancel={modalHandler}
                            header="Order Details"
                            show={showModal}
                            detail={modalData}
                            footer={<button className='bg-black text-white rounded-md px-5 py-1' onClick={modalHandler}>Back</button>}
                        />}
                    </>
                )}
            </div>}
        </>)
}

export default OrderDetails
