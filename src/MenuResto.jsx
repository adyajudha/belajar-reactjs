import './MenuResto.css'

function MenuResto() {
    const styleMenuItem = {
        backgroundColor: "#333",
        padding: "10px",
        color: "#fff",
        borderRadius: "10px"
    }
    return(
        <div style={styleMenuItem}>
            <div><b>Nama Menu:</b><em>Nasi Bakar 🍙</em></div>
            <div><b>Harga:</b><em>Rp. 20.000</em></div>
        </div>
    )
}

export default MenuResto