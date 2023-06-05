import { Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Button } from 'react-native';
import { useState } from 'react';
import Modal from 'react-native-modal';
import { STRENGTHSTYLE } from '../stylesheets/strengthStyle';
import { strengthWorkouts } from '../data/workouts';

export default function StrengthScreen() {
    const [descModalState, setDescModalState] = useState(false);
    const [listModalState, setListModalState] = useState(false) ;

    const [curTitle, setCurTitle] = useState('');
    const [curDesc, setCurDesc] = useState('');

    const displayDescPopup = (title, desc) => {
        setCurTitle(title);
        setCurDesc(desc);
        setDescModalState(true);
    }//end exerciseHandler

    const displayListPopup = () => {
        setListModalState(true) ;
    }

    return (
        <SafeAreaView style={STRENGTHSTYLE.mainContainer}>
            <ScrollView>
                <SafeAreaView>
                    <TouchableOpacity
                        style = {STRENGTHSTYLE.mainBtns}
                        onPress = {() => {displayListPopup}}
                    >
                            <Image 
                                style = {STRENGTHSTYLE.listIcon}
                                source = {require('../assets/listIcon.png')}
                            />
                            <Text style={STRENGTHSTYLE.mainText}>Exercise List</Text>
                    </TouchableOpacity>
                    <Modal
                        isVisible = {listModalState}
                        onBackdropPress={() => { setListModalState(false); }}
                    >
                    {strengthWorkouts.map((exercise) =>
                        <SafeAreaView key={`${exercise.title} - mainKey`}>
                            <TouchableOpacity
                                style={STRENGTHSTYLE.exerciseContainer}
                                onPress={() => displayDescPopup(exercise.title, exercise.description)}
                            >
                                <Text style={STRENGTHSTYLE.exercise}>{exercise.title}</Text>
                            </TouchableOpacity>
                            <Modal
                                isVisible={descModalState}
                                onBackdropPress={() => { setDescModalState(false); }}
                            >
                                <SafeAreaView>
                                    <Text style={STRENGTHSTYLE.exercise}>{curDesc}</Text>
                                </SafeAreaView>
                            </Modal>
                        </SafeAreaView>
                    )}
                    </Modal>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    )
}//end StrengthScreen