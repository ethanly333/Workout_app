import { Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import { useState, React } from 'react';
import Modal from 'react-native-modal';
import { STRENGTHSTYLE } from '../stylesheets/strengthStyle';
import { strengthWorkouts } from '../data/workouts';

export default function GenerateStrengthScreen()
{
    const [genModalState, setGenModalState] = useState(false) ;
    const [workoutState, setWorkoutState] = useState([]) ;

    const genBtnHandler = () =>
    {
        var workoutIndx = [] ;
        var workout = [] ;

        var count = 0 ;
        while(count < 5)
        {
            var randNum = Math.floor(Math.random()*strengthWorkouts.length) ;
            if(!workoutIndx.includes(randNum))
            {
                workoutIndx.push(randNum) ;
                count++ ;
            }//end if
        }//end for i

        for(var j=0; j<workoutIndx.length; j++)
        {
            workout.push(strengthWorkouts[workoutIndx[j]]) ;
        }//end for j

        setWorkoutState(workout) ;
        setGenModalState(true) ;
    }; //end genBtnHandler

    return (
        <SafeAreaView style={STRENGTHSTYLE.mainContainer}>
            <TouchableOpacity
                style = {STRENGTHSTYLE.generateBtn}
                onPress={() => {genBtnHandler()}}
            >
                <Text style={{
                    color: 'black', 
                    fontSize: 23, 
                    fontWeight: 600
                    }}>
                        Generate
                </Text>
            </TouchableOpacity>
            <Modal
                isVisible = {genModalState} 
                onBackdropPress={() => {setGenModalState(false); }}
            >
                <SafeAreaView style={STRENGTHSTYLE.workoutModalContainer}>
                    <ScrollView>
                    {workoutState.map((exercise) =>     
                        <SafeAreaView key={`${exercise.title} - mainKey`}>
                            <TouchableOpacity style={STRENGTHSTYLE.workoutModalBtns}>
                                <Text style={{
                                    fontSize: 23,
                                    color: 'white',
                                    margin: 10,
                                    }}>
                                        {exercise.title}
                                </Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    )}
                    </ScrollView>
                </SafeAreaView>
            </Modal>
        </SafeAreaView>
    )
}