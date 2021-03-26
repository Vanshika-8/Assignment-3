const AppReducer = (state, action) => {
  const {
    id,
    setCartItems,
    setTotal,
    setStorage,
    totalPrice,
    cartItem,
  } = action.payload;
  switch (action.type) {
    case "INCREMENT_COUNT":
      let updateCount = cartItem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        } else {
          return item;
        }
      });
      const incrementPrice = totalPrice(updateCount);
      setCartItems(updateCount);
      setTotal(incrementPrice);
      setStorage("data", updateCount);
      return {
        ...state,
        count: updateCount,
      };
    case "DECREMENT_COUNT":
      let updatedCount = cartItem.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count - 1,
          };
        } else {
          return item;
        }
      });
      const decrementPrice = totalPrice(updatedCount);
      const findingItems = updatedCount.find((item) => item.id === id);
      if (findingItems.count === 0) {
        const filterItem = updatedCount.filter((item) => item.id !== id);
        setCartItems(filterItem);
        setStorage("data", filterItem);
        return;
      }
      setCartItems(updatedCount);
      setTotal(decrementPrice);
      setStorage("data", updatedCount);

      return {
        ...state,
        count: updatedCount,
      };
    case "CLEAR_CART":
      localStorage.clear();
      setStorage("data", []);
      return

    default:
      return state;
  }
};

export default AppReducer;
