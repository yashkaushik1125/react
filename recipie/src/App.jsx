import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  
  const [data, setData] = useState({})
const   [search, setSearch] =useState("cake")
  
  const myfun= async ()=>{
    let get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then((e)=>e.json());
   setData(get.meals);
   
   
   
  
    
  }
  
  

  return (
    <>
      < div className='w-full h-svh bg-yellow-600 bg-repeat-y relative' >
             <div className='w-3/6 rounded-full h-14  absolute top-2 left-1/4  bg-yellow-400  p-2'>
              <h2 className='h-full text-2xl relative '>Search for your Favourite Recipie</h2>

              <div className='w-3/4 flex bg-red-500 h-14 m-2 absolute justify-between left-20 rounded-full '>
              <input type="text" className='w-5/6 pl-1 rounded-full bg-slate-300 justify-start' 
               onChange={(e)=>{setSearch(e.target.value); 
               }}/>
              <button className='w-14 bg-black text-orange-500 h-14 justify-end rounded-full'
              onClick={myfun}>
              search
              </button>
              </div>
             </div>
             

             <div className=' bg-transparent absolute  w-full top-60 grid grid-cols-6 left-0 h-max '>
              
              <Card></Card>

             
             </div> 
      </div>
    </>
  )
}

export default App
