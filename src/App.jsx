import { useMemo } from "react";
import { useState } from "react"

function App() {
    const [likeCounter, setLikeCounter] = useState(0)
    const [subcribeCounter, setSubcribeCounter ]= useState(0)
    function pesanLike(){
        console.log(`pesan like rendered`);
        return (likeCounter<10)?'Like kurang dari 10':'Mantap! Like lebih dari 10'
    }

    const displayPesanLike = useMemo(()=>pesanLike(),[likeCounter]);
    return(
        <>
            <p>
                <button onClick={()=>setLikeCounter(likeCounter+1)}>{likeCounter}Like 👍</button> {displayPesanLike}
            </p>
            <p>
                <button onClick={()=>setSubcribeCounter(subcribeCounter+1)}>{subcribeCounter}Subcribe ▶</button>
            </p>
        </>
    )
}

export default App