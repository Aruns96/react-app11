import classes from './CartButton.module.css';
import { cartActions } from '../../store/cartreducer';
import { useDispatch,useSelector } from 'react-redux';


const CartButton = (props) => {
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const dispatch = useDispatch()
  const cartHandler = ()=>{
         dispatch(cartActions.toogle())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
