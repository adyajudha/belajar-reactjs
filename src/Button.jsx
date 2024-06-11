import { useState } from "react";

function Button() {
    const [counter, setCounter] = useState(0);
    let newCounter = 0;
    function clickHandler(){
        newCounter = counter + 1;
        console.log(`saya diklik ${newCounter} kali`);
        setCounter(newCounter)
    }

    return(
        <button onClick={()=>clickHandler()}>Saya diklik {counter} 😁</button>
    )
}

export default Button