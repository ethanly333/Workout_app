import { Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import { useState, React } from 'react';
import Modal from 'react-native-modal';
import { STRENGTHSTYLE } from '../stylesheets/strengthStyle';
import { strengthWorkouts } from '../data/workouts';

export default function StrengthListScreen() {
    const [descModalState, setDescModalState] = useState(false);

    const [curTitle, setCurTitle] = useState('');
    const [curDesc, setCurDesc] = useState('');

    const displayDescPopup = (title, desc) => {
        setCurTitle(title);
        setCurDesc(desc);
        setDescModalState(true);
    }; //end displayDescPopup

    return (
        <SafeAreaView style={STRENGTHSTYLE.listContainer}>
            <ScrollView>
            {strengthWorkouts.map((exercise) =>
                <SafeAreaView key={`${exercise.title} - mainKey`}>
                    <TouchableOpacity
                        style={STRENGTHSTYLE.exerciseContainer}
                        onPress={() => displayDescPopup(exercise.title, exercise.description)}
                    >
                        <Text style={STRENGTHSTYLE.exercise}>{exercise.title}</Text>
                    </TouchableOpacity>
                    <Modal
                        //This modal is the page that shows the description of the exercise and how to do it
                        isVisible={descModalState}
                        onBackdropPress={() => { setDescModalState(false); }}
                    >
                        <SafeAreaView>
                            <Text style={STRENGTHSTYLE.exercise}>{curDesc}</Text>
                        </SafeAreaView>
                    </Modal>
                </SafeAreaView>
            )}
            </ScrollView>
        </SafeAreaView>
    )
}//end StrengthScreen