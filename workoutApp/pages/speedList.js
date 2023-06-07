import { Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import { useState, React } from 'react';
import Modal from 'react-native-modal';
import { SPEEDSTYLE } from '../stylesheets/strengthStyle';
import { speedWorkouts } from '../data/workouts';

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
        <SafeAreaView style={SPEEDSTYLE.listContainer}>
            <ScrollView>
            {speedWorkouts.map((exercise) =>
                <SafeAreaView key={`${exercise.title} - mainKey`}>
                    <TouchableOpacity
                        style={SPEEDSTYLE.exerciseContainer}
                        onPress={() => displayDescPopup(exercise.title, exercise.description)}
                    >
                        <Text style={SPEEDSTYLE.exercise}>{exercise.title}</Text>
                    </TouchableOpacity>
                    <Modal
                        //This modal is the page that shows the description of the exercise and how to do it
                        isVisible={descModalState}
                        onBackdropPress={() => { setDescModalState(false); }}
                        backdropOpacity={0.95}
                    >
                        <SafeAreaView style={SPEEDSTYLE.descriptionModal}>
                            <ScrollView>
                                <Text style={SPEEDSTYLE.exercise}>{curDesc}</Text>
                            </ScrollView>
                        </SafeAreaView>
                    </Modal>
                </SafeAreaView>
            )}
            </ScrollView>
        </SafeAreaView>
    )
}//end StrengthScreen