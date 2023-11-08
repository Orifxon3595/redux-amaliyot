import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateTotal } from './redux/features/shopSlice'

import Navbar from './components/Navbar'
import ShopProducts from './components/ShopProducts'

function App() {
  const { products } = useSelector((data) => data.shop)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTotal())
  }, [products, dispatch])

  return (
    <div>
      <Navbar />
      <ShopProducts />
    </div>
  )
}

export default App