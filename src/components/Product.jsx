import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/Cart/cartSlice';

export default function Product({
  id,
  image,
  title,
  price,
  description
}) {
  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(addItem(id));
  }
  
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
