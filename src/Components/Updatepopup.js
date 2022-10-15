import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Updatepopup({ modal, toggle, updateData, obj }) {

    const [taskName, settaskName] = useState('')
    const [taskDes, settaskDes] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        let Obj = {}
        Obj['Name'] = taskName
        Obj['Description'] = taskDes
        updateData(Obj)
    }
    useEffect(() => {
        settaskName(obj.Name)
        settaskDes(obj.Description)
    },[])

    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update the ToDo Here...</ModalHeader>
                <ModalBody>
                    <form>
                        <input name='taskName' type="text" className='form-control mb-3' placeholder='Enter Task' value={taskName} onChange={(e) => settaskName(e.target.value)} />
                        <textarea name='taskDes' className='form-control' placeholder='Enter Task Description...' type='text' value={taskDes} onChange={(e) => settaskDes(e.target.value)}></textarea>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        SaveChanges
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal></>
    )
}
