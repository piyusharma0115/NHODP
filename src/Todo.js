import React,{useState} from 'react'
import './todo.css';
export default function Todo() {
    const [activity, setActivity]=useState("")
    const [listData, setListData]=useState([]);
    function addActivity(){
    //   setListData([...listData,activity])
    //   console.log(listData)
      setListData((listData)=>{
        const updatedlist=[...listData,activity]
        console.log(updatedlist)
        setActivity('');
        return updatedlist
      })
    }
    function removeActivity(i){
        const updatedlistdata= listData.filter((ele,id)=>{
            return i!==id;}
        )
        setListData(updatedlistdata)
    }
    let num=0;

    function clear(){
        const updatedlistdata=listData.filter(()=>{
            return ;}
        )
        setListData(updatedlistdata)
        }
    
  return (
    <>
    <div className='container'>
        <p className='heading'>Todo-List</p>
        <div className='outerbox'>
        <input className='input' type='text' placeholder='   Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button className='search' onClick={addActivity}>Add</button>
        <button className='clear' onClick={clear}>Clear All</button>
        <h2 className='listheading'>Here is your list:-</h2>
        <div className='main'>
        {listData!==[] && listData.map((data, i)=>{
            return(
                <>
                    <p  key={i}>
                        <div className='listdata'>{++num}. {data}</div>
                        <button className='remove' onClick={()=>removeActivity(i)}>Remove</button>
                    </p>
                </>
            )
        })}
        </div>
        </div>
    </div>
    </>
  )
}
