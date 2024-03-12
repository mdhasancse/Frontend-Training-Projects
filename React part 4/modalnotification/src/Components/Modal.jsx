import React, { useState } from 'react'
import "./Modal.css";
export default function Modal() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
      };
      const CloseModal = () => {
        setOpenModal(false);
      };

      // child component for modal contents
      const MyModal=()=>{
        return<>
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={CloseModal}>X</button>
                </div>
                <div className='title'>
                    <h1>Are you sure you want to continue?</h1>
                </div>
                <div className='body'>
                    <p>lets see next page, you should move, you will enjoy</p>
                </div>
                <div className='footer'>
                    <button onClick={CloseModal} id='cancelBtn'>cancel</button>
                    <button >continue</button>
                </div>
            </div>
        </div>
        </>
      }

    return (
        <>
        <h4>Heyy, click on the button to open the modal</h4>
        <button className='openModalBtn' onClick={handleOpen}>Click me</button>
        {openModal && <MyModal />}
      </>
    )
}
