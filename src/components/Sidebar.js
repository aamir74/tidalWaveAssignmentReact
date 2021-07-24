import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Sidebar = () => {
    const history = useHistory()

    const currentPath = window.location.pathname.split('/')
    const [isActive, setIsActive] = useState(currentPath[1])

    const sidebarClickHandler = (e) => {
        setIsActive(e.target.id)
        console.log(`/${e.target.id}`)
        history.push(`/${e.target.id}`)
    }

    return (
        <div onClick={sidebarClickHandler} className='fixed p-5 h-screen w-40 text-white bg-grey flex flex-col flex-start text-center'>
            <p className="pb-3 text-base font-bold">Agri-Purchase Management</p>
            <hr />
            <p id='inputMaster' className={isActive === 'inputMaster' ? "sidebar-title text-green-300" : "sidebar-title"}>Agri-Input Master Maintainance</p>
            <hr />
            <p id='supplierMaster' className={isActive === 'supplierMaster' ? "sidebar-title text-green-300" : "sidebar-title"}>Supplier Master Maintainance</p>
            <hr />
            <p id='inputPurchase' className={isActive === 'inputPurchase' ? "sidebar-title text-green-300" : "sidebar-title"}>Agri-Input Purchase Requests</p>
        </div>
    )
}

export default Sidebar
