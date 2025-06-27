import { Flex } from "antd"
import Cart from "./components/Cart"
import ProductCard from "./components/ProductCard"
import { data } from "./Data"

function App() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap:'30px'}}>
    <ProductCard product={data}/>
    <Cart />
    </div>
  )
}

export default App
