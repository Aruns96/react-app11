import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartreducer';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartHandler = ()=>{
         dispatch(cartActions.toogle())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
