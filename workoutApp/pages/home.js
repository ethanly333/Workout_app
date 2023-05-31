import React from 'react' ;
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Image, Button } from 'react-native' ;
import { HOMESTYLE } from '../stylesheets/homeStyle' ;

export default function HomeScreen({navigation})
{
    const strengthBtnHandler = () =>
    {
        navigation.navigate('Strength') ;
    }
    const speedBtnHandler = () =>
    {
        navigation.navigate('Speed') ;
    }
    const flexibilityBtnHandler = () =>
    {
        navigation.navigate('Flexibility') ;
    }
    const agilityBtnHandler = () =>
    {
        navigation.navigate('Agility') ;
    }
    const randomBtnHandler = () =>
    {
        navigation.navigate('Speed') ;
    }

    return(
        <SafeAreaView style={HOMESTYLE.container}>
            <SafeAreaView style={HOMESTYLE.btnContainer}>
                <TouchableOpacity 
                    style = {HOMESTYLE.exerciseBtn}
                    onPress = {strengthBtnHandler}
                >
                    <Image
                        style={HOMESTYLE.exerciseIcon}
                        source={require('../assets/strength.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {HOMESTYLE.exerciseBtn}
                    onPress = {speedBtnHandler}
                >
                    <Image
                        style={HOMESTYLE.exerciseIcon}
                        source={require('../assets/speed.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {HOMESTYLE.exerciseBtn}
                    onPress = {flexibilityBtnHandler}
                >
                    <Image
                        style={HOMESTYLE.exerciseIcon}
                        source={require('../assets/flexibility.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {HOMESTYLE.exerciseBtn}
                    onPress = {agilityBtnHandler}
                >
                    <Image
                        style={HOMESTYLE.exerciseIcon}
                        source={require('../assets/agility.png')}
                    />
                </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={HOMESTYLE.randomizeBtn}>
                <TouchableOpacity
                    style = {HOMESTYLE.randomizeBtn}
                    onPress = {randomBtnHandler}
                >
                    <Text style={HOMESTYLE.randomizeTxt}>Randomize</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaView>
    )
}