import { Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import { useState, React } from 'react';
import Modal from 'react-native-modal';
import { AGILITYSTYLE } from '../stylesheets/agilityStyle';
import { agilityWorkouts } from '../data/workouts';

export default function AgilityListScreen() {
    const [descModalState, setDescModalState] = useState(false);

    const [curTitle, setCurTitle] = useState('');
    const [curDesc, setCurDesc] = useState('');

    const displayDescPopup = (title, desc) => {
        setCurTitle(title);
        setCurDesc(desc);
        setDescModalState(true);
    }; //end displayDescPopup

    return (
        <SafeAreaView style={AGILITYSTYLE.listContainer}>
            <ScrollView>
            {agilityWorkouts.map((exercise) =>
                <SafeAreaView key={`${exercise.title} - mainKey`}>
                    <TouchableOpacity
                        style={AGILITYSTYLE.exerciseContainer}
                        onPress={() => displayDescPopup(exercise.title, exercise.description)}
                    >
                        <Text style={AGILITYSTYLE.exercise}>{exercise.title}</Text>
                    </TouchableOpacity>
                    <Modal
                        //This modal is the page that shows the description of the exercise and how to do it
                        isVisible={descModalState}
                        onBackdropPress={() => { setDescModalState(false); }}
                        backdropOpacity={0.95}
                    >
                        <SafeAreaView style={AGILITYSTYLE.descriptionModal}>
                            <ScrollView>
                                <Text style={AGILITYSTYLE.exercise}>{curDesc}</Text>
                            </ScrollView>
                        </SafeAreaView>
                    </Modal>
                </SafeAreaView>
            )}
            </ScrollView>
        </SafeAreaView>
    )
}//end StrengthScreen