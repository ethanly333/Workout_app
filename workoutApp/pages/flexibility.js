import { Text, SafeAreaView, ScrollView,
    TouchableOpacity, Image } from 'react-native' ;
import { FLEXIBILITYSTYLE } from '../stylesheets/flexibilityStyle';
import { flexibilityWorkouts } from '../data/workouts' ;
import { useState } from 'react' ;

export default function FlexibilityScreen()
{
    const [descModalState, setDescModalState] = useState(false);
    const [listModalState, setListModalState] = useState(false) ;

    const listBtnHandler = () => 
    {
        navigation.navigate('FlexList') ;
    }//end listBtnHandler

    const generateBtnHandler = () =>
    {
        navigation.navigate('GenerateFlex') ;
    }//end generateBtnHandler

    const displayListPopup = () => 
    {
        setListModalState(true) ;
    }; //end displayListPopup

    return (
        <SafeAreaView style={FLEXIBILITYSTYLE.mainContainer}>
            <ScrollView>
                <SafeAreaView>
                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {FLEXIBILITYSTYLE.mainBtns}
                    >
                            <Image 
                                style = {FLEXIBILITYSTYLE.listIcon}
                                source = {require('../assets/listIcon.png')}
                            />
                            <Text style={FLEXIBILITYSTYLE.mainText}>Exercise List</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {FLEXIBILITYSTYLE.mainBtns}
                    >
                            <Image 
                                style = {FLEXIBILITYSTYLE.listIcon}
                                source = {require('../assets/diceIcon.png')}
                            />
                            <Text style={FLEXIBILITYSTYLE.mainText}>Generate Workout</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //This is the button for exercise list
                        style = {FLEXIBILITYSTYLE.mainBtns}
                    >
                            <Image 
                                style = {FLEXIBILITYSTYLE.listIcon}
                                source = {require('../assets/dumbbellIcon.png')}
                            />
                            <Text style={FLEXIBILITYSTYLE.mainText}>Custom Workout</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    )
}//end flexibilityScreen
