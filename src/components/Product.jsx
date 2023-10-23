import ShopProducts from "./ShopProducts"
import {useDispatch} from "react-redux"
import { incrementAmount, decrementAmount } from "../redux/features/shopSlice"

function Product({name, price, image, amount}) {
    const dispatch = useDispatch();
    return (
    <div className='max-w-3xl mx-auto py-5 px-3 flex justify-between items-center'>
        <img src={image} alt={name + ' glasses'} className="w-40" />
        <div className="w-1/2">
            <p className="text-lg font-medium">{name}</p>
            <p className="font-semibold  text-orange-500">$ {price}</p>
        </div>
        <div className="flex flex-col items-center gap-1">
            <h3 className="font-medium">Amount</h3>
            <div className="flex justify-between items-center gap-2">
                <button onClick={() => dispatch(decrementAmount({name}))} className="btn btn-sm"> - </button>
                <span className="font-medium text-lg">{amount}</span>
                <button onClick={() => dispatch(incrementAmount({name}))} className="btn btn-sm"> + </button>
            </div>
        </div>
    </div>
  )
}

export default Product