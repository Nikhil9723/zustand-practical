import { Card } from 'antd'
import { useCartStore, type ProductData } from '../store/productStore';

export default function ProductCard({product}: {product: ProductData[]}) {
   
    const addCart = useCartStore((state) => state.addCart);
    console.log(addCart);
    

    return (
    <div>
    {product.map((item) => (
           <Card key={item.id} title='Product data' variant='outlined' style={{width: 300}}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <button style={{border: '2px solid black', padding: '5px'}} onClick={() => addCart(item)}>add to cart</button>
           </Card>
    ))}
    </div>
  )
}
