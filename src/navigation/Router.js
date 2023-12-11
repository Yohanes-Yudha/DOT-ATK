import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Jendela/Home';
import Checkout from '../Jendela/Checkout';
import Bookmark from '../Jendela/Bookmark';
import Cart from '../Jendela/Cart';
import TambahData from '../Jendela/TambahData';
import DataBarang from '../Jendela/DataBarang';
import EditData from '../Jendela/EditData';
import {ShoppingCart, Home2, LocationDiscover, Receipt21, ProfileCircle, AddSquare, ShoppingBag} from 'iconsax-react-native'; 
import { fontType, colors } from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: colors.blue(),
        tabBarInactiveTintColor: colors.black(),
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 50,
        },
        tabBarLabelStyle: {
          marginTop: 10,
          fontSize: 10,
          fontFamily: fontType['Pjs-Medium'],
        },
        
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <Home2
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused, color}) => (
            <ShoppingCart
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarLabel: 'Bookmark',
          tabBarIcon: ({focused, color}) => (
            <Receipt21
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="DataBarang "
        component={DataBarang}
        options={{
          tabBarLabel: 'DataBarang',
          tabBarIcon: ({focused, color}) => (
            <ShoppingBag
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
       <Tab.Screen
        name="TambahData"
        component={TambahData}
        options={{
          tabBarLabel: 'TambahData',
          tabBarIcon: ({focused, color}) => (
            <AddSquare
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
          headerShown: false,
        }}
      />
    
    </Tab.Navigator>
  );
}
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DataBarang"
        component={DataBarang}
        options={{
          headerShown: false, 
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection : 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <Stack.Screen
        name="EditData"
        component={EditData}
        options={{
          headerShown: false, 
          animationEnabled: true,
          animationTypeForReplace: 'pop',
          gestureEnabled: true,
          gestureDirection : 'horizontal',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Stack.Navigator>
  );
};
export default Router;