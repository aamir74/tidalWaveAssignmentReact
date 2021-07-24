import React from 'react'
import ReactDom from 'react-dom'
import BackDrop from './Backdrop'


import { CSSTransition } from 'react-transition-group'
import './Modal.css'


const ModalOverlay = props => {
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2 className="px-4 font-bold">{props.header}</h2>
            </header>
            <div className="flex flex-col p-4 font-bold items-center justify-center">
                <h1>id: {props.detail.id}</h1>
                <img className='w-42 h-36 mx-2' src={props.detail.image} />
                <p className='p-2 font-10'>{props.detail.category}</p>
                <p className='p-2 font-10'>{props.detail.description}</p>
                <p className='p-2 font-10'>Quantity: {props.detail.quantity}</p>
                <div>{props.footer}</div>
            </div>
        </div>
    )

    return ReactDom.createPortal(content, document.getElementById('modal-hook'))
}

const Modal = props => {
    return <React.Fragment>
        {props.show && <BackDrop onClick={props.onCancel} />}
        <CSSTransition
            in={props.show}
            mountOnEnter
            unmountOnExit
            timeout={200}
            classNames='modal'>
            <ModalOverlay {...props} />
        </CSSTransition>
    </React.Fragment>

}

export default Modal