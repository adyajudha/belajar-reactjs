function Button() {

    function clickHandler(){
        console.log(`saya diklik`);
    }
    return(
        <button onClick={()=>clickHandler()}>Klik Saya 😁</button>
    )
}

export default Button