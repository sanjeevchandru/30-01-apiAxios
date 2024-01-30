import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
export const Home = () => {
    const a = useSelector((ar) => ar.data)
    const [ar, setAr] = useState([])
    console.log(a.arr)
    const sta = () => {
        axios.get(a.arr,{id:101,userId:11,title:"asasdda asdadlorw asa asdad3f "})
        .then((x) => setAr(x.data))
        .catch(console.log)
    }
    useEffect(() => {
        sta()
    })
    const create=()=>{
        axios.post(a.arr,{id:101,userId:11,title:"hlo"})
        .then((r)=>console.log(r.data))
    }
    const updatePut=()=>{
        axios.put(a.arr,{id:101,userId:11,title:"hlo"})
        .then((r)=>console.log(r.data))
    }
    // const updatePatch=()=>{
    //     axios.patch(a.arr,{id:101,title:"hlo"})
    //     .then((r)=>console.log(r.data))
    // }
    return (
        <div>
            <div style={{width:"80%",margin:'auto',boxSizing:"border-box"}}>
                <div style={{display:'flex',flexWrap:'wrap',width:"100%",boxSizing:"border-box"}}>
                <button onClick={create}>create </button>
                <button onClick={updatePut}>update</button>
                    {
                        ar.map((e, i) => {
                            return (
                                <div key={i} style={{width:'25%',padding:"10px",boxSizing:"border-box"}}>
                                    <div style={{boxShadow:'0 0 10px #000 ',border:'1px solid #999',boxSizing:"border-box",height:'100%',padding:'10px'}}>
                                    <h3>ID : {e.id} <span>, USER ID :{e.userId}</span></h3>
                                    <h4 style={{color:'purple'}}>{e.title}</h4>
                                    <p>{e.body}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}