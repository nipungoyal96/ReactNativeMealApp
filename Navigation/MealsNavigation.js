import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import FiltersScreen from '../components/screens/FiltersScreen';
import CategoriesScreens from '../components/screens/CategoriesScreens';
import CategoriesMealsScreen from '../components/screens/CategoriesMealsScreen';
import MealDetailScreen from '../components/screens/MealDetailScreen';
import Colors from '../constants/colors';
import FavoritesScreen from '../components/screens/FavoritesScreen';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTitleStyle:{
        fontFamily:'open-sans-bold'
    },
    headerBackStyle:{
        fontFamily: 'open-sans'
    },
    headerTintColor: 'white'
}
const FavNavigator=createStackNavigator ({
    Favorites:FavoritesScreen,
    MealDetail: MealDetailScreen,
    },
{
    defaultNavigationOptions:defaultStackNavOptions
},
);

const MealsNavigator=createStackNavigator ({
    Categories: {
        screen:CategoriesScreens,
        navigationOptions:{
            headerTitle: 'Meal Categories',
        }},
    CategoryMeals:{
        screen: CategoriesMealsScreen,
    },
    MealDetail: MealDetailScreen,
    },
{
    defaultNavigationOptions:defaultStackNavOptions
},
);

const tabScreenConfig ={ 
    Meals: {screen: MealsNavigator,
    navigationOptions:{
        tabBarIcon: (tabInfo) =>{
            return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor}/>
        },
        tabBarColor:Colors.primaryColor
    }
    },
    Favorites: {screen:FavNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) =>{
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor:Colors.accentColor
        },
        
    },

};



const MealsFavTabNavigator = Platform.OS === 'ios' ? createBottomTabNavigator(tabScreenConfig,
{
    tabBarOptions:{
        labelStyle:{
            fontFamily: 'open-sans'
        },       
        activeTintColor:Colors.accentColor
    }
}): createMaterialBottomTabNavigator(tabScreenConfig,{
    activeTintColor:Colors.accentColor,
    shifting:true,
   
})

const FiltersNavigator = createStackNavigator({
    Filters:FiltersScreen
},
{
    defaultNavigationOptions:defaultStackNavOptions
})

const MainNavigator=createDrawerNavigator({
    MealsFavs:{screen:MealsFavTabNavigator,
    navigationOptions:{
        drawerLabel :'Meals'
    }
    },
    Filters:FiltersNavigator
},
{
    contentOptions:{
        activeTintColor: Colors.accentColor,
        labelStyle:{
            fontFamily:'open-sans-bold'
        }
    }
}
);

export default createAppContainer(MainNavigator);