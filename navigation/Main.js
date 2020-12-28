import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from '@expo/vector-icons';
import Explore from "../screens/Main/Explore/Index";
import MyPage from "../screens/Main/MyPage/Index";

import styled from "styled-components/native";

const TabNav = createBottomTabNavigator();
const SearchContainer =  styled.View`
margin-top : 40px;
flex-direction: row;
width: 80%;
border-radius: 10px;

`;
const SearchBar = styled.TextInput`
height: 40px;
width: 80%;
border-color: #F2F2F2;
border-width : 2;
border-radius: 30px;
padding-left: 10px;
`;
const Tabs =() => (
<TabNav.Navigator 

tabBarOptions={{
  activeTintColor: "red",
  tabStyle: {
    paddingTop: 10
  },
  labelStyle: {
    textTransform: "uppercase",
    fontWeight: "600"
  }
}}
screenOptions={({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconName = ``;
    if (route.name === "식단입력") {
      iconName += "edit-3"; 
    } 
    else if (route.name === "마이페이지") {
      iconName += "github";
    }else if (route.name === "Favs") {
      iconName += "heart";
    } else if (route.name === "최근 댓글") {
      iconName += "github";
    }
    return (
      <Feather name={iconName} size={24} color={focused ? "red" : "grey"} />
    );
  }
})}
>
<TabNav.Screen name="식단입력" component={Explore}/>
<TabNav.Screen name="마이페이지" component={MyPage}/>

</TabNav.Navigator>
)

const MainNavigator = createStackNavigator();
export default () => (
  <MainNavigator.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <MainNavigator.Screen
      name="Tabs"
      component={Tabs}
      options={{ headerShown: false }}
    />
    {/* <MainNavigator.Screen name="제품정보" component={Food} /> */}
  </MainNavigator.Navigator>
);