import { useRef } from "react"

function App() {
    const message = useRef(null)
    const displayPesan = useRef(null)

    function clickHandler() {
        console.log(message.current.value);
        displayPesan.current.innerHTML = message.current.value;
    }
    return(
        <>
            <div>
                <input type="text" ref={message} name="" id="" placeholder="kirim pesan kamu"/>
            </div>
            <div>
                <button onClick={clickHandler}>Klik Aku 😁</button>
            </div>
            <div ref={displayPesan}></div>
        </>
    )
}

export default App