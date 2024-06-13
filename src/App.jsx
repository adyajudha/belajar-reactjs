import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
    const [likeCounter, setLikeCounter] = useState(0)
    const [subcribeCounter, setSubcribeCounter ]= useState(0)
    const [name, setName] = useState("RumahRafif")

    

    const handlerName = useCallback(()=> {
        let channelName ="";
        if (name == 'RumahRafif') {
            channelName = "WPU";
        } else {
            channelName = "RumahRafif";
        }

        setName(channelName);
        console.log(`setname run ${name}`)
    }, [name]);

    return(
        <>
            <p>
                <button onClick={()=>setLikeCounter(likeCounter+1)}>{likeCounter}Like 👍</button>
            </p>
            <p>
                <button onClick={()=>setSubcribeCounter(subcribeCounter+1)}>{subcribeCounter}Subcribe ▶</button>
            </p>

            <ChildComponent name={name} aksi={handlerName} />
            
        </>
    )
}

export default App