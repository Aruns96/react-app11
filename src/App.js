import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';

import Notification from './components/UI/Notification';
import { sendCartData } from './store/cartactions';
import { fetchCartData } from './store/cartactions';


let isIntial = true;
function App() {
  const dispatch = useDispatch()
  const notification = useSelector(state=>state.cart.notification)
  const isCartVisible =  useSelector(state=>state.cart.isCartVisible)
  const cart = useSelector(state=>state.cart)

  useEffect(()=>{
        dispatch(fetchCartData())
  },[dispatch])
  useEffect(()=>{
   if (isIntial){
    isIntial = false;
    return;
   }
     if(cart.changed){
      dispatch(sendCartData(cart))
     }
  
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
