import { useCartStore } from '../store/productStore'
import { Card } from 'antd'

export default function Cart() {

    const handler = useCartStore((state) => state);
    
  return (
    <div>
        <h1>Cart</h1>
        <button onClick={() => handler.clearCart()}>Clear Cart</button>
        {handler.cart.map((item) => (
            <Card key={item.id} title='cartData'>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <button style={{border: '2px solid black', padding: "5px"}} onClick={() => handler.removeCart(item.id)}>remove</button>
            </Card>
        ))}
    </div>
  )
}
