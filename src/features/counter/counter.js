import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './countersl';

function Counter() {
    const count = useSelector((state) => state.counter.count)
    const themeTextColor = useSelector((state) => state.theme.color)

    const dispatch = useDispatch()


    return (
        <div>
            <div className="App">


                <button className='button' aria-label='Increament' onClick={() => { dispatch(increment()) }}> + </button>
                <span className='value' style={{ color: themeTextColor }}>{count}</span>
                <button className='button' aria-label=' decrement' onClick={() => { dispatch(decrement()) }}> - </button>

            </div>

        </div>
    )
}
export default Counter 