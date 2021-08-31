// Favourites Array
const favourites = [];
const cartItems = [];

// onPress events for Buttons

// Product Press Handle
const onProductPress = (object) => {
  console.log(object);
};

// Favourite Press Handle
const onFavAdd = (object) => {
  var alreadyInArray = favourites.includes(object);
  !alreadyInArray ? favourites.push(object) : null;
  console.log(`${object.name} - Added into Favourites`);
  console.log(favourites);
};

const onFavRemove = (object) => {
  const index = favourites.findIndex(function checkIndex(obj) {
    return obj === object;
  });
  favourites.splice(index, 1);
  console.log(`${object.name} - Removed from Favourites`);
  console.log(favourites);
};

// Cart Press Handle
const onCartAdd = (object) => {
  var alreadyInArray = cartItems.includes(object);
  !alreadyInArray ? cartItems.push(object) : null;
  console.log(`${object.name} - Added into cartItems`);
  console.log(cartItems);
};

const onCartRemove = (object) => {
  const index = cartItems.findIndex(function checkIndex(obj) {
    return obj === object;
  });
  cartItems.splice(index, 1);
  console.log(`${object.name} - Removed from cartItems`);
  console.log(cartItems);
};

export {
  favourites,
  cartItems,
  onProductPress,
  // onFavouriteButtonPress,
  onFavAdd,
  onFavRemove,
  onCartAdd,
  onCartRemove,
};
