import React, { useState, useEffect } from 'react'
import Modalpopup from './Modalpopup'
import Cards from './Cards'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Todo() {
    const [modal, setModal] = useState(false)

    const [todolist, setTodolist] = useState([])
    console.log(todolist, "data a gaya");

    const saveData = (obj) => {
        let templist = todolist
        templist.push(obj)
        localStorage.setItem("List", JSON.stringify(templist))

        setTodolist(templist)
        setModal(false)
    }

    useEffect(() => {
        let arr = localStorage.getItem("List")
        if (arr) {
            let obj = JSON.parse(arr)
            setTodolist(obj)
        }
    }, [])

    const delet = (index) => {
        let tempList = todolist
        tempList.splice(index, 1)
        localStorage.setItem("List", JSON.stringify(tempList))
        setTodolist(tempList)
        toast("Wow so easy!");
        window.location.reload()
       
    }

    const toggle = () => {
        setModal(!modal)
    }

    const updateList= (obj, index) => {
        let tempList = todolist
        tempList[index] = obj
        localStorage.setItem("List", JSON.stringify(tempList))
        setTodolist(tempList)
        window.location.reload()
    }

    return (
        <>
        <div className='container-fluid'>
            <div className='head text-center p-5 '>
                <h3 className='mb-0 mt-2' style={{ color: 'rgb(33, 137, 229)' }}>Things </h3>
                <h3 className='' style={{ color: 'rgb(33, 137, 229)' }}> <span style={{ color: 'rgb(33, 137, 229)', fontWeight: 'bolder' }}>T</span>o<span style={{ color: 'rgb(33, 137, 229)', fontWeight: 'bolder' }}>D</span>o</h3>
                <button className='btn ' style={{ backgroundColor: 'rgb(33, 137, 229)', color: 'white' }} onClick={() => setModal(true)}>Add Task</button>
            </div>
            <div className='container d-flex flex-wrap justify-content-center'>
                {todolist.map((obj, index) => <Cards obj={obj} index={index} delet={delet} updateList={updateList}/>)}
            </div>
            <Modalpopup toggle={toggle} modal={modal} saveData={saveData} />
            </div>
        </>
    )
}
