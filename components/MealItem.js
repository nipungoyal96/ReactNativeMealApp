import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';
import TextInput from './TextInput'

const MealItem = props =>{
    return(
    <View style={{margin:15}}>
    <TouchableOpacity onPress={props.onSelectMeal}>
   <View style={styles.mealItem}>
    <View style={[styles.mealRow,styles.mealHeader]}>
            
            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
            <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            </View>
            </ImageBackground>
    </View>
    <View style={[styles.mealRow,styles.mealDetail]}>
        <TextInput>
            {props.duration}m
        </TextInput>
        <TextInput>{props.complexity}</TextInput>
        <TextInput>{props.affordability}</TextInput>
    </View>
    </View>
    
    </TouchableOpacity>
    </View>
    )
};

const styles = StyleSheet.create({
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    mealRow:{
        flexDirection:'row'
    },
    mealItem:{
        height:200,
        width:'100%',
        backgroundColor:'#f0f0f0',
        borderRadius:10,
        overflow:'hidden'
       
    },
    mealHeader:{
        height:'90%'
    },
    mealDetail:{
        height:'10%',
        paddingHorizontal:10,
        justifyContent:'space-between',
        alignItems:'center'
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical:5,
        paddingHorizontal:12,
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize: 18,
        color: 'white',
        
        textAlign:'center'
    }
});

export default MealItem;