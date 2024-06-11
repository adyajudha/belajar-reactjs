import './MenuResto.css'

function MenuResto() {
    const styleMenuItem = {
        backgroundColor: "#333",
        padding: "10px",
        color: "#fff",
        borderRadius: "10px",
        marginBottom: "5px"
    }

    const menu = [
        {nama: 'nasi bakar 🍙',harga: 'Rp. 10.000'},
        {nama: 'mie ayam 🍜',harga: 'Rp. 15.000'},
        {nama: 'ayam goreng 🍗',harga: 'Rp. 20.000'},
    ]

    return(
        <>
            {
                menu.map((item, index)=>{
                    return(
                        <div style={styleMenuItem} key={index}>
                            <div><b>Nama Menu:</b><em>{item.nama}</em></div>
                            <div><b>Nama Menu:</b><em>{item.harga}</em></div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MenuResto