import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from './store/cartreducer';
import Notification from './components/UI/Notification';


let isIntial = true;
function App() {
  const dispatch = useDispatch()
  const notification = useSelector(state =>state.cart.notification)
  const isCartVisible =  useSelector(state=>state.cart.isCartVisible)
  const cart = useSelector(state=>state.cart)
  useEffect(()=>{
   
     const sendData = async ()=>{
      dispatch(cartActions.showNotification({
        status:"pending..",
        title:"sending..",
        message:"sending cart data.."
      }))
      const response = await fetch("https://react-http-b0681-default-rtdb.firebaseio.com/productcart.json"
        ,{method:"PUT",body:JSON.stringify(cart)}
      )
       if(!response.ok){
         throw new Error("Sending cart data failed!")
       }
       dispatch(cartActions.showNotification({
        status:"success",
        title:"Success",
        message:"sending cart data successfully"
      }))
     }
     if(isIntial){
      isIntial = false;
      return
     }
   sendData().catch(error=>{
    dispatch(cartActions.showNotification({
      status:"error",
      title:"Error",
      message:error.message
    }))
   })
  },[cart,dispatch])
  return (
    <>
    {notification && 
    <Notification 
    status={notification.status}
    title={notification.title}
    message={notification.message}
    />}
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
