import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./src/routes";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./src/redux/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/redux/saga";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const sagaMiddleware = createSagaMiddleware();
const Tab = createBottomTabNavigator();

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const App = () => {
  // const renderRoute = useCallback((routers: any) => {
  //   let result = null;
  //   result = routers.map((route: any, i: number) => {
  //     let { name, options, component } = route;

  //     return (
  //       <Stack.Screen
  //         key={i}
  //         name={name}
  //         component={component}
  //         options={options}
  //       />
  //     );
  //   });
  //   return result;
  // }, []);

  const renderWithTabs = useCallback((routers: any) => {
    let result = null;
    result = routers.map((route: any, i: number) => {
      let { name, component } = route;

      return <Tab.Screen key={i} name={name} component={component} />;
    });
    return result;
  }, []);

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>{renderRoute(routes)}</Stack.Group>
      </Stack.Navigator> */}

      {/* Use bottom tab bar navigation */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => {
            return (
              <Ionicons
                name={routes.find((e) => e.name === route.name).iconName}
                size={22}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        {renderWithTabs(routes)}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
