import { useState } from "react"

function Increment(){
    const[count,setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }
    return(
            <div className="flex justify-center items-center gap-6 flex-col min-w-300 min-h-screen">
                <h2 className="">Increment &amp; Decrement</h2>
                 <div className="flex justify-center items-center gap-6 bg-black rounded-md w-11">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={increment}>+</button>
                    <div className="text-2xl text-white ">{count}</div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={decrement}>-</button>
                </div>
                
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={reset}>Reset</button>
            </div>
           
        
        
        
    )
}
export default Increment;