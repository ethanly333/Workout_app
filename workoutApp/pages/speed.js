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
            <TouchableOpacity 
                style = {SPEEDSTYLE.exerciseContainer}
            >
                <Text style={SPEEDSTYLE.exercise}>{exercise}</Text>
            </TouchableOpacity>
        )}      
        </ScrollView>
    </SafeAreaView>
    )
}//end SpeedScreen