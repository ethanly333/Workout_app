import { Text, SafeAreaView, ScrollView,
         TouchableOpacity, Image, Button } from 'react-native' ;
import { STRENGTHSTYLE } from '../stylesheets/strengthStyle';
import { strengthWorkouts } from '../data/workouts';

export default function StrengthScreen()
{
    return (
        <SafeAreaView style={STRENGTHSTYLE.mainContainer}>
            <ScrollView>
            {strengthWorkouts.map((exercise) =>
                <TouchableOpacity 
                    style = {STRENGTHSTYLE.exerciseContainer}
                >
                    <Text style={STRENGTHSTYLE.exercise}>{exercise}</Text>
                </TouchableOpacity>
            )}
            </ScrollView>
        </SafeAreaView>
    )
}//end StrengthScreen