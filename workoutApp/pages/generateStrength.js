import { Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import { useState, React } from 'react';
import Modal from 'react-native-modal';
import { STRENGTHSTYLE } from '../stylesheets/strengthStyle';
import { strengthWorkouts } from '../data/workouts';

export default function GenerateStrengthSCreen()
{
    var workout = [] ;

    const [genModalState, setGenModalState] = useState(false) ;

    const genBtnHandler = () =>
    {
        
    }; //end genBtnHandler

    return (
        <SafeAreaView style={STRENGTHSTYLE.mainContainer}>
            <TouchableOpacity
                style = {STRENGTHSTYLE.generateBtn}
            >
                <Text style={{color: 'black', fontSize: 20}}>Generate</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}