import { Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import { useState } from 'react';
import Modal from 'react-native-modal';
import { STRENGTHSTYLE } from '../stylesheets/strengthStyle';
import { strengthWorkouts } from '../data/workouts';

export default function StrengthScreen({navigation}) 
{
    const [descModalState, setDescModalState] = useState(false);
    const [listModalState, setListModalState] = useState(false) ;

    const listBtnHandler = () => 
    {
        navigation.navigate('StrengthList') ;
    }//end listBtnHandler

    const generateBtnHandler = () =>
    {
        navigation.navigate('GenerateStrength') ;
    }//end generateBtnHandler

    const displayListPopup = () => 
    {
        setListModalState(true) ;
    }; //end displayListPopup

    return (
        <SafeAreaView style={STRENGTHSTYLE.mainContainer}>
            <ScrollView>
                <SafeAreaView>
                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {STRENGTHSTYLE.mainBtns}
                        onPress = {listBtnHandler}
                    >
                            <Image 
                                style = {STRENGTHSTYLE.listIcon}
                                source = {require('../assets/listIcon.png')}
                            />
                            <Text style={STRENGTHSTYLE.mainText}>Exercise List</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {STRENGTHSTYLE.mainBtns}
                        onPress = {generateBtnHandler}
                    >
                            <Image 
                                style = {STRENGTHSTYLE.listIcon}
                                source = {require('../assets/diceIcon.png')}
                            />
                            <Text style={STRENGTHSTYLE.mainText}>Generate Workout</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {STRENGTHSTYLE.mainBtns}
                    >
                            <Image 
                                style = {STRENGTHSTYLE.listIcon}
                                source = {require('../assets/dumbbellIcon.png')}
                            />
                            <Text style={STRENGTHSTYLE.mainText}>Custom Workout</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    )
}//end StrengthScreen