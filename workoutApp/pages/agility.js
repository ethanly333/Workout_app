import { Text, SafeAreaView, ScrollView,
    TouchableOpacity, Image } from 'react-native' ;
import { AGILITYSTYLE } from '../stylesheets/agilityStyle' ;
import { agilityWorkouts } from '../data/workouts' ;
import { useState } from 'react' ;

export default function AgilityScreen({navigation})
{
    const [descModalState, setDescModalState] = useState(false);
    const [listModalState, setListModalState] = useState(false) ;

    const listBtnHandler = () => 
    {
        navigation.navigate('AgilityList') ;
    }//end listBtnHandler

    const generateBtnHandler = () =>
    {
        navigation.navigate('GenerateAgility') ;
    }//end generateBtnHandler

    const displayListPopup = () => 
    {
        setListModalState(true) ;
    }; //end displayListPopup

    return (
        <SafeAreaView style={AGILITYSTYLE.mainContainer}>
            <ScrollView>
                <SafeAreaView>
                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {AGILITYSTYLE.mainBtns}
                        onPress = {listBtnHandler}
                    >
                            <Image 
                                style = {AGILITYSTYLE.listIcon}
                                source = {require('../assets/listIcon.png')}
                            />
                            <Text style={AGILITYSTYLE.mainText}>Exercise List</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {AGILITYSTYLE.mainBtns}
                    >
                            <Image 
                                style = {AGILITYSTYLE.listIcon}
                                source = {require('../assets/diceIcon.png')}
                            />
                            <Text style={AGILITYSTYLE.mainText}>Generate Workout</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {AGILITYSTYLE.mainBtns}
                    >
                            <Image 
                                style = {AGILITYSTYLE.listIcon}
                                source = {require('../assets/dumbbellIcon.png')}
                            />
                            <Text style={AGILITYSTYLE.mainText}>Custom Workout</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    )
}//end AgilityScreen