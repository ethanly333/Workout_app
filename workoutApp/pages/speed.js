import { Text, SafeAreaView, ScrollView,
    TouchableOpacity, Image, Button } from 'react-native' ;
import { SPEEDSTYLE } from '../stylesheets/speedStyle' ;
import { speedWorkouts } from '../data/workouts' ;
import { useState } from 'react' ;

export default function SpeedScreen()
{
    const [descModalState, setDescModalState] = useState(false);
    const [listModalState, setListModalState] = useState(false) ;

    const listBtnHandler = () => 
    {
        navigation.navigate('SpeedList') ;
    }//end listBtnHandler

    const generateBtnHandler = () =>
    {
        navigation.navigate('GenerateSpeed') ;
    }//end generateBtnHandler

    const displayListPopup = () => 
    {
        setListModalState(true) ;
    }; //end displayListPopup

    return (
        <SafeAreaView style={SPEEDSTYLE.mainContainer}>
            <ScrollView>
                <SafeAreaView>
                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {SPEEDSTYLE.mainBtns}
                    >
                            <Image 
                                style = {SPEEDSTYLE.listIcon}
                                source = {require('../assets/listIcon.png')}
                            />
                            <Text style={SPEEDSTYLE.mainText}>Exercise List</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {SPEEDSTYLE.mainBtns}
                    >
                            <Image 
                                style = {SPEEDSTYLE.listIcon}
                                source = {require('../assets/diceIcon.png')}
                            />
                            <Text style={SPEEDSTYLE.mainText}>Generate Workout</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {SPEEDSTYLE.mainBtns}
                    >
                            <Image 
                                style = {SPEEDSTYLE.listIcon}
                                source = {require('../assets/dumbbellIcon.png')}
                            />
                            <Text style={SPEEDSTYLE.mainText}>Custom Workout</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    )
}//end SpeedScreen