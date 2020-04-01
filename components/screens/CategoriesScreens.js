import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';


const CategoriesScreens = props =>{
    console.log(props);
    return(
        <View style={styles.screen}>
            <Text>
                The Categories  Screen!
            </Text>
            <Button title="Go To Meals" onPress={()=>{
                props.navigation.push({routeName: 'CategoryMeals'})
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CategoriesScreens;