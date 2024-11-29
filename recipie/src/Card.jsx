import React from 'react'


function Card({detail}) {

return(detail.map((e)=>{
    <img src={e.strMealThumb} alt="" />
}))

}
  


 


export default Card