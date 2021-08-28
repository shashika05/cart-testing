// Favourites Array
const favorites = [];
const cartItems = [];

// onPress events for Buttons

// Product Press Handle
const onProductPress = (object) => {
  console.log(object);
};

// Favourite Press Handle
const onFavouriteButtonPress = (object) => {
  // favorites.splice(0, favorites.length);
  // console.log(favorites);
  var alreadyInArray = favorites.includes(object);
  console.log(alreadyInArray);
  if (alreadyInArray) {
    // Need to remove entry and Change Icon
    const index = favorites.findIndex(function checkIndex(obj) {
      return obj === object;
    });
    favorites.splice(index, 1);
    console.log(`${object.name} - Removed from Favourites`);
    console.log(favorites);
  } else {
    // Need to push entry and Change Icon
    favorites.push(object);
    console.log(`${object.name} - Added into Favourites`);
    console.log(favorites);
  }
};

// Cart Press Handle

const onCartButtonPress = (object) => {
  console.log(`${object.name} - Added into Cart`);
};

export {
  favorites,
  cartItems,
  onProductPress,
  onFavouriteButtonPress,
  onCartButtonPress,
};
