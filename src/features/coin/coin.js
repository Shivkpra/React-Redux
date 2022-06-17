import { useSelector } from "react-redux";


function Coin() {
    const count = useSelector((state) => state.counter.count)
    const themeTextColor = useSelector((state) => state.theme.color)



    return (
        <div>
            <span className='value' style={{ color: themeTextColor }}>coins: {count}</span>

        </div>
    )
}
export default Coin;