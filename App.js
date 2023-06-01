//expo init <project-name:react-native-navigation-app>
import React from "react";
//Image from Unsplash.com
//SafeAreaView for sliding the content bellow smartphone Notches
import { StyleSheet, StatusBar } from "react-native";

//Expo-Commands:
//Clean build cache:npm cache clean –force

//Screens
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealItemDetails from "./screens/MealItemDetails";

/************************ CONTEXT API WRAPPER ********************************
 //Importing the Context API wrapper and wrapping the app.js, root component for acess throughout the app.
*/
import FavouritesContextProvider from "./store/context/FavouritesContext";

// React Navigation:
// npm install @react-navigation/native
// for Expo Managed Projects : npx expo install react-native-screens react-native-safe-area-context
import { NavigationContainer } from "@react-navigation/native";
//Wrap your app component with NavigationContainer,

//NAVIGATION

//Stack-Navigator:-
//Wrap in <NavigationContainer>
//Register the screen on Stack.Navigator to which you want to navigate,
//that component will automatically get a navigate prop by react,
//apply onPress to navigation.navigate(<component screen registered name>)
//for a component which is not registered on screeen you can use useNavigation hook,
//import useNavigation from '@react-navigation/native'
//const navigation = useNavigation();

//Stack:
//npm install @react-navigation/native-stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

//Drawer Navigation

//Drawer:
//npm install @react-navigation/drawer
// import { createDrawerNavigator } from "@react-navigation/drawer";
// const Drawer = createDrawerNavigator();
//for expo:npx expo install react-native-gesture-handler react-native-reanimated,
//for native:npm install react-native-gesture-handler react-native-reanimated
//navigators can be added with other navigators, like drawer with stack

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Categories" compponent={CategoriesScreen} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <React.Fragment>
      <StatusBar barStyle="light" />

      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            //set default styles for react navigation screen
            screenOptions={{
              headerStyle: {
                backgroundColor: "#ccc",
              },
              headerTintColor: "black",
              contentStyle: { backgroundColor: "white" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={CategoriesScreen}
              //set styles fo react navigation specific screen
              // options={{ title: "All Categories" }}
            />
            <Stack.Screen
              name="MealsOverviewScreen"
              component={MealsOverviewScreen}
              //set dynamic react navigation screen title for every  page
              //set Title : 1st way
              // options={({ route, navigation }) => {
              //   const catTitle = route.params.CategoryName;
              //   return {
              //     title: catTitle,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealItemDetails"
              component={MealItemDetails}
              options={({ route, navigate }) => ({
                itemId: route.params.mealItemId,
                title: route.params.title,
                //First way of adding component to header,
                //like : Button
                // headerRight: () => (
                //   <IconButton
                //     icon="star"
                //     color="white"
                //     onPress={addToFavourites}
                //   />
                // ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
