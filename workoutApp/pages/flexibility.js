import { Text, SafeAreaView, ScrollView,
    TouchableOpacity, Image } from 'react-native' ;
import { FLEXIBILITYSTYLE } from '../stylesheets/flexibilityStyle';
import { flexibilityWorkouts } from '../data/workouts' ;

export default function FlexibilityScreen()
{
    return (
    <SafeAreaView style={FLEXIBILITYSTYLE.mainContainer}>
        <ScrollView>
        {flexibilityWorkouts.map((exercise) =>
            <TouchableOpacity 
                style = {FLEXIBILITYSTYLE.exerciseContainer}
            >
                <Text style={FLEXIBILITYSTYLE.exercise}>{exercise}</Text>
            </TouchableOpacity>
        )}              
        </ScrollView>
    </SafeAreaView>
    )
}//end flexibilityScreen
