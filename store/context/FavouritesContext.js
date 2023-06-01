//1- context API imported
import { createContext, useState } from "react";

//2- Context API value initial state
export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  //3- Manage a context value through state management
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);
  //3- Manage a context value through state management:introduction
  const addFavourite = (AddId) => {
    setFavouriteMealIds((previousState) => [AddId, ...previousState]);
  };
  //3- Manage a context value through state management:removal/updation/deletion
  const removeFavourite = (removeId) => {
    setFavouriteMealIds((previousState) =>
      previousState.filter((id) => id !== removeId)
    );
  };
  //4- Assigning the functionality to context provider values,
  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  //5- exporting the context wrapper with values integrated.
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;

/* ************************* CONTEXT API INTEGRATION MANUAL *****************************

- Import createContext from react and create and ititial state of context api value you want to use like:FavouritesContext,
- Create a contextProvider wrapper and wrap the main component in which you want to use context, and 
  it will show grass root effect, or you can make a wrapper in the same context file and export it like : FavouritesContextProvider,
- Manage every value update with the help of useState and update or create it through a function,
- create a value object and then assign the values to it,
- pass this object to the contaxt provider wrapper and export the contaxt wrappper.

  ************************* Context Variable usage *************************************

  Implementation : import MealItemDetails from "../../screens/MealItemDetails";
  - Import the context api hook from react, import the initial state of context api value
  - Add these initial context value in the context hook and initialize it, the return object will have all the properties
    and methods of your context value and you can update them accordingly,
  - If you are updating the UI, use useLayoutEffect() to ingnore rendering lags,
*/
