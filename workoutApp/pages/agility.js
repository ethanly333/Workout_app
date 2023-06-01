import { Text, SafeAreaView, ScrollView,
    TouchableOpacity, Image } from 'react-native' ;
import { AGILITYSTYLE } from '../stylesheets/agilityStyle' ;
import { agilityWorkouts } from '../data/workouts' ;

export default function AgilityScreen()
{
    return (
    <SafeAreaView style={AGILITYSTYLE.mainContainer}>
        <ScrollView>
        {agilityWorkouts.map((exercise) =>
            <TouchableOpacity 
                style = {AGILITYSTYLE.exerciseContainer}
            >
                <Text style={AGILITYSTYLE.exercise}>{exercise}</Text>
            </TouchableOpacity>
        )}                  
        </ScrollView>
    </SafeAreaView>
    )
}//end AgilityScreen