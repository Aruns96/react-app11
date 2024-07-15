import { cartActions } from "./cartreducer";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending..",
        title: "sending..",
        message: "sending cart data..",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-b0681-default-rtdb.firebaseio.com/productcart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };
    try {
      await sendRequest();
      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success",
          message: "sending cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-b0681-default-rtdb.firebaseio.com/productcart.json"
      );
      if (!response.ok) {
        throw new Error("could not fetch data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items:cartData.items || [],
        totalQuantity:cartData.totalQuantity
      }));
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    }
  };
};
