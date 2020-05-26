import React from 'react';
import {FlatList} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../HeaderButton';
import { Categories } from "../../data/dummyData";

import CategoryGridTile from '../CategoryGridTitle';

const CategoriesScreens = props =>{
    const renderGridItem = (itemData) =>{
        return(
           <CategoryGridTile title={itemData.item.title}
           color={itemData.item.color} onSelect={()=>
            props.navigation.navigate({
                routeName:'CategoryMeals',params:{
                    categoryId: itemData.item.id
                }
            })
           }/>
        )
    }
    
    return(
        <FlatList data={Categories} renderItem={renderGridItem} numColumns={2}/>
    )
}

CategoriesScreens.navigationOptions= navData=>{
    return{
    headerTitle:'Meal Categories',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName='ios-menu' onPress={()=> {
            navData.navigation.toggleDrawer();
        }}/>
    </HeaderButtons>}
};



export default CategoriesScreens;