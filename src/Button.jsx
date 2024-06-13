import { useEffect } from "react";
import { useState } from "react"

function Button() {
    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);
    useEffect(()=>{
        console.log(`wadidaw like ${countLike} | dislike ${countDislike}`);
    }, [countLike]);
    return(

        <>
            <button onClick={()=>setCountLike(countLike+1)}>{countLike} Like 👍</button>
            <button onClick={()=>setCountDislike(countDislike+1)}>{countDislike} Dislike 👎</button>
        </>
    )
}
export default Button