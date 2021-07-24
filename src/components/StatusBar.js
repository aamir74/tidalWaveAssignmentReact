import React from 'react'
import Tabs from './Tabs'

const StatusBar = ({ status, currentStatus }) => {
    console.log(currentStatus)
    return (
        <div className="ml-20 flex flex-wrap border-b-2">
            <div onClick={e => status('pending')}><Tabs page={1} content={'PENDING'} bgColor={currentStatus === 'pending' ? 'black' : 'grey'} color={'red-500'} /></div>
            <div onClick={e => status('executing')}><Tabs page={2} content={'EXECUTING'} bgColor={currentStatus === 'executing' ? 'black' : 'grey'} color={'yellow-500'} /></div>
            <div onClick={e => status('executed')}><Tabs page={3} content={'EXECUTED'} bgColor={currentStatus === 'executed' ? 'black' : 'grey'} color={'yellow-300'} /></div>
            <div onClick={e => status('completed')}><Tabs page={4} content={'COMPLETED'} bgColor={currentStatus === 'completed' ? 'black' : 'grey'} color={'green-500'} /></div>
        </div>
    )
}

export default StatusBar
