import React,{useState} from 'react'
import Updatepopup from './Updatepopup'

export default function Cards({ obj, index, delet,updateList }) {

     const [modal,setModal]=useState(false)

     const toggle = () => {
        setModal(!modal)
    }
    const updateData=(obj)=>{
        updateList(obj,index)
    }

    console.log(delet, "zainabbas")
    const handleDelete = () => {
        delet(index)
    }

    return (

        <>

            <div className="row flex-nowrap ">
                <div className="col-lg-3 col-sm-12 flex-nowrap">

                    <div className="card m-4" style={{ width: '18rem' }}>
                        <div className="line"></div>
                        <div className="card-body">
                            <h5 className="card-title">{obj.Name}</h5>
                            <p className="card-text">{obj.Description}</p>
                            <i className="fa-solid fa-trash-can icn1" onClick={handleDelete}></i>
                            <i className="fa-solid fa-pen-to-square icn1" onClick={()=>setModal(true)}></i>

                        </div>
                    </div>
                </div>
            </div>
            <Updatepopup modal={modal} toggle={toggle} updateData={updateData} obj={obj}/>

        </>
    )
}
