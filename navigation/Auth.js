import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn/Index";
import SignUp from "../screens/SignUp/Index";
import BackBtn from "../components/Auth/BackBtn";
const Auth = createStackNavigator();

export default () => (
    <Auth.Navigator
    mode="modal"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      // headerBackImage: () => <BackBtn />
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{
        title: '',
        headerTitleStyle: {
          color: "black"
        }
      }}
    />
   <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "로그인하기 !" }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: "가입하기 !" }}
    />
  </Auth.Navigator>
);