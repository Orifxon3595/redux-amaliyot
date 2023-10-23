import {useSelector} from "react-redux";
import Product from "./Product";
function ShopProducts() {
  const {products, total} = useSelector((data) => data.shop)
  return (
    <div>
      {products.map((product) => {
        const {name, price, image, amount} = product;
        return <Product key={name} name={name} price={price} image={image} amount={amount}/>
      })}

      <div className="max-w-md flex justify-between items-center mx-auto mt-5">
        <h2 className="text-3xl">Total</h2>
        <h2 className="text-3xl">$ {total}</h2>
      </div>
    </div>
  );
}

export default ShopProducts