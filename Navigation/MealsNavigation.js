import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import CategoriesScreens from '../components/screens/CategoriesScreens';
import CategoriesMealsScreen from '../components/screens/CategoriesMealsScreen';
import MealDetailScreen from '../components/screens/MealDetailScreen';

const MealsNavigator=createStackNavigator ({
    Categories: CategoriesScreens,
    CategoryMeals:{
        screen: CategoriesMealsScreen
    },
    MealDetailScreen: MealDetailScreen
});

export default createAppContainer(MealsNavigator);