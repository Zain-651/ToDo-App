import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Modalpopup({modal,toggle,saveData}) {

    const [taskName, settaskName]=useState('')
    const [taskDes, settaskDes]=useState('')

    const handleSubmit =()=>{
        let obj={}
        obj["Name"]=taskName
        obj["Description"]=taskDes
        saveData(obj)
    }


    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Task Here..</ModalHeader>
                <ModalBody>
                          <form>
                            <input name='taskName' type="text" className='form-control mb-3' placeholder='Enter Task' value={taskName} onChange={(e)=>settaskName(e.target.value)}/>
                            <textarea name='taskDes' className='form-control' placeholder='Enter Task Description...' type='text' value={taskDes} onChange={(e)=>settaskDes(e.target.value)}></textarea>
                          </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>
                        Add Task
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal></>
    )
}
