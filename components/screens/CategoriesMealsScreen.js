import React from 'react';

import {useSelector} from 'react-redux';

import { Categories} from '../../data/dummyData';
import MealList from '../MealList';
import { View,Text,StyleSheet} from 'react-native';

const CategoriesMealsScreen = props =>{

    
    const catId= props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals)
    console.log(availableMeals);
    const displayedMeals = availableMeals.filter(meal=>
        meal.categoryIds.indexOf(catId)>=0 
        )
    if(displayedMeals.length === 0){
        return(
            <View style={styles.container}>
                <Text>No meals Found May be check your filters</Text>
            </View>
         )
    }
    return(
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    )
}

CategoriesMealsScreen.navigationOptions=(navigationData)=>{

    const catId= navigationData.navigation.getParam('categoryId');

    const selectedCategory = Categories.find(cat =>(
        cat.id === catId
    ))
     return {
        headerTitle :selectedCategory.title
     };
}

const styles=StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'}
})

export default CategoriesMealsScreen;

