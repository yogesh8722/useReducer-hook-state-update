import React, { useReducer } from 'react'

export default function Usereducerhook() {
    const reducer =(state,action)=>{
        // console.log(state,action);
        if (action.type === "Increement") {
            return state +1;
        }

        if (action.type==="Decreement") {
            return state -1;
        }
        
    }

    const [count,dispatch]=useReducer(reducer,0);

    // reducer function
    // 2 perameter 1st state  and  2nd  
    



  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:"Increement"})}>Increement</button>
      <button onClick={()=>dispatch({type:"Decreement"})}>Decreement</button>
    </div>
  )
}
