import { Text, SafeAreaView, ScrollView,
    TouchableOpacity, Image, Button } from 'react-native' ;
import { SPEEDSTYLE } from '../stylesheets/speedStyle' ;
import { speedWorkouts } from '../data/workouts' ;

export default function SpeedScreen()
{
    return (
        <SafeAreaView style={SPEEDSTYLE.mainContainer}>
            <ScrollView>
            {speedWorkouts.map((exercise) =>
                <SafeAreaView key={`${exercise} - mainKey`}>
                    <TouchableOpacity 
                        style = {SPEEDSTYLE.exerciseContainer}
                    >
                        <Text style={SPEEDSTYLE.exercise}>{exercise}</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            )}      
            </ScrollView>
        </SafeAreaView>
    )
}//end SpeedScreen