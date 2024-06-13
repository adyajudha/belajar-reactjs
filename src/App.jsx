import { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
    const [likeCounter, setLikeCounter] = useState(0)
    const [subcribeCounter, setSubcribeCounter ]= useState(0)
    const [name, setName] = useState("RumahRafif")

    function handlerName() {
        let channelName ="";
        if (name == 'RumahRafif') {
            channelName = "WPU";
        } else {
            channelName = "RumahRafif";
        }

        setName(channelName);
        console.log(`setname run ${name}`)
    }

    return(
        <>
            <p>
                <button onClick={()=>setLikeCounter(likeCounter+1)}>{likeCounter}Like 👍</button>
            </p>
            <p>
                <button onClick={()=>setSubcribeCounter(subcribeCounter+1)}>{subcribeCounter}Subcribe ▶</button>
            </p>

            <ChildComponent name={name}/>
            <button onClick={handlerName}>Ganti nama Channel</button>
        </>
    )
}

export default App