class Exercise {
    constructor(title, description)
    {
        this.title = title ;
        this.description = description ;
    }//end constructor
}//end Exercise class

export const strengthWorkouts = [
    //Shoulders
    {title: 'Front Raise', description: '1. Stand straight with your shoulders back, squeezing your shoulder blades togethr. Hold a light dumbbell (~10lb).' + 
                                        'Rest your hands in front of your thighs, palms turned down. This is the starting position. \n\n2. While keeping the arms straight, ' +
                                        'elevate both arms to shoulder height, palns down. Lift the arms to the front of the body, out in front of the chest. ' +
                                        'Hold the weights at shoulder height for two seconds. \n\n3. Slowly lower the arms to the starting position and repeat.'}, 
    {title: 'Shoulder Press', description: '1. Stand straight with your shoulders back, squeezing the shoulder blades together. Hold a light dumbell (~10lb) ' + 
                                           'in each hand. Rest your hands on the outsides of your thighs, with palms facing your thighs. \n\n2. While keeping the arms' +
                                           'straight, elevate both arms out to the sides, bringing the weights to shoulder height while keeping the palms turned down.' +
                                           ' Maintain firm wrists and straight arms. Hold for two seconds. \n\n3. Slowly lower the arms to the starting position and repeat.'}, 
    {title: 'Lateral Raise', description: '1. Stand straight with your shoulders back, squeezing your shoulder blades togethr. Hold a light dumbbell (~10lb) in each hand.' + 
                                          'Rest your hands on the outsides of your thighs, with palms facing your thighs. \n\n2. While keeping the arms straight, elevate both ' + 
                                          'arms to shoulder height, palms turned down. Maintain firm wrists and straight arms. Hold for two seconds.  \n\n3. Slowly lower the ' +
                                          'arms to the starting position and repeat.'}, 
    {title: 'Bent-Over Rear Raise', description: '1. Stand with the feet shoulder-width apart. With a slight bend in the knees, flex at the waist while keeping the back straight.' +
                                                 ' Hold a light dumbbell (~10lb) in each hand. Extend the arms toward the ground, palms turned down. Bend the elbows to about 90 ' +
                                                 'degrees, knuckles toward the floor. \n\n2. While keeping an approximate angle of 90 degrees at the elbows, slowly raise the forearms,' +
                                                 ' leading with the dumbbells, to shoulder height. Hold for two seconds. \n\n3. Slowly lower the ars to the starting position and repeat.'}, 
    {title: 'External Rotation', description: '1. Stand sideways adn grab the resistance tubing with your outside hand, your elbow close to the hip at a 90-degree angle and your forearm ' + 
                                              'parallel to the floor. This is the starting position. \n\n2. Slowly rotate the shoulder externally (away from the body) against the resistance ' + 
                                              'from the tubing, making sure the forearm remains parallel to the floor. Maintain your shoulder position, and do not rotate the waist during the ' + 
                                              'movement. Hold near the end range of motion for two seconds.\n\n3. Slowly return to the starting position, and repeat for 10 to 12 repetitions. ' +
                                              'Then perform the same movement with the opposite arm. '},
    {title: '90 External Rotation', description: '1. Stand straight with feet shoulder-width apart, facing the tubing attachment. Grab the resistance tubing at shoulder height with a ' + 
                                                 '90-degree angle at the shoulder and a 90-degree angle at the elbow. This is the starting position. \n\n2. Slowly externally rotate the shoulder ' +
                                                 'against the resistance. The forearm starts parallel to the foor and is perpendicular to the floor at the top of the movement. Hold near the end ' +
                                                 'range of motion for two seconds. \n\n3. Slowly return to the starting position, and repeat for 10 to 12 repetitions. Then perform the same movement ' +
                                                 'with the opposite arm.'},
    {title: '90 Internal Rotation', description: 'Stand straight with feet shoulder-width apart, facing away from the tubing attachment. Grab the resistance tubing at shoulder height with a ' + 
                                                 '90-degree angle at the shoulder and a 90-degree angle at the elbow. This is the starting position. \n\n2. Slowly internally rotate the shoulder against ' +
                                                 'the resistance. The forearm starts perpendicular to the foor and is parallel to the floor at the bottom fo the movement. Hold near the end range of ' +
                                                 'motion for two seconds. \n\n3. Slowly return to the starting position, and repeat for 10 to 12 repetitions. Then perform the same movement with the opposite arm.'}, 
    {title: 'Low Row', description: '1. Stand straight and face the rubing attachment. With your arms low and in front of you, grasp the resitance tubing in each hand. Activate the rhomboids by ' +
                                    'squeezing the shoulder blades together. \n\n2. Slowly push your hands back against the resitance while keeping your arms straight. Maintain a stable wrist position. ' +
                                    'Hold near the end range of motion for two seconds. \n\n3. Slowly return to the starting position and repeat.'},

    //Arms and wrists
    {title: 'Tri-Cable Push-Down', description: ''},
    {title: 'Half Dip', description: ''},
    {title: 'Overhead Extension', description: ''},
    {title: 'Hammer Curl', description: ''},
    {title: 'Wrist Roller', description: ''},
    {title: 'Forearm Supination', description: ''},
    {title: 'Forearm Pronation', description: ''},

    //Chest
    {title: 'Push Up', description: ''},
    {title: 'Bench Press', description: ''},
    {title: 'Incline Bench Press', description: ''},
    {title: 'Med Ball Chest Throw', description: ''},
    {title: 'Dumbbell Chest Fly', description: ''},

    //Back
    {title: 'Lat Pull Down', description: ''},
    {title: 'Rotational Pull', description: ''},
    {title: 'Seated Row', description: ''},
    {title: 'Reverse Fly', description: ''},
    {title: 'Bent Row', description: ''},
    {title: 'Deadlift', description: ''},

    //Core
    {title: 'Crunches', description: ''},
    {title: 'Rotational Crunches', description: ''},
    {title: 'Toe Touches', description: ''},
    {title: 'Plank', description: ''},
    {title: 'Russian Twist', description: ''},
    {title: 'Superman', description: ''},

    //Legs
] ;
/*
export const speedWorkouts = [
    'runAround', 'runAround','runAround','runAround','runAround','runAround','runAround',
    'runAround','runAround','runAround','runAround','runAround','runAround','runAround',
    'runAround','runAround','runAround','runAround','runAround','runAround','runAround',
    'runAround','runAround','runAround','runAround','runAround','runAround','runAround',
    'runAround','runAround','runAround','runAround','runAround','runAround','runAround',
] ;*/

export const speedWorkouts = [
    {title: 'Box Jumps', description: 'Description'}, {title: 'Figure 8 Shuffle', description: 'Description'}, {title: 'Spider Drill', description: 'Description'},
    {title: 'High Knees', description: 'Description'}, {title: 'Crossovers', description: 'Description'}, {title: 'Ski Jumps', description: 'Description'},
    {title: 'In-N-Outs', description: 'Description'}, {title: 'Recovery', description: 'Description'}
] ;

/*
export const agilityWorkouts = [
    'Jump around','Jump around','Jump around','Jump around','Jump around','Jump around',
    'Jump around','Jump around','Jump around','Jump around','Jump around','Jump around',
    'Jump around','Jump around','Jump around','Jump around','Jump around','Jump around',
    'Jump around','Jump around','Jump around','Jump around','Jump around','Jump around',
] ;*/

export const agilityWorkouts = [
    {title: 'Box Jumps', description: '1. Get a box (12in-42in based on your ability). Stand facing the box, approximately 1ft-2ft from it, with feet shoulder-width apart. \n\n2. Jump onto the box. ' +
                                      'Focus on landing as soft as possible, sitting back into your hips. This develops good landing mechanics and reduces the impact on the knees. \n\n3. Jump off the ' +
                                      'box back to the starting position. Again, land as soft as possible to reduce shock to joints. Keep your chest upright and maintain solid posture throughout.'}, 
    {title: 'Figure 8 Shuffle', description: 'Description'}, 
    {title: 'Spider Drill', description: 'Description'},
    {title: 'High Knees', description: 'Description'}, {title: 'Crossovers', description: 'Description'}, {title: 'Ski Jumps', description: 'Description'},
    {title: 'In-N-Outs', description: 'Description'}, {title: 'Recovery', description: 'Description'}
] ;
/*
export const flexibilityWorkouts = [
    'stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch',
    'stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch',
    'stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch',
    'stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch',
] ;*/

export const flexibilityWorkouts = [
    {title: 'Box Jumps', description: 'Description'}, {title: 'Figure 8 Shuffle', description: 'Description'}, {title: 'Spider Drill', description: 'Description'},
    {title: 'High Knees', description: 'Description'}, {title: 'Crossovers', description: 'Description'}, {title: 'Ski Jumps', description: 'Description'},
    {title: 'In-N-Outs', description: 'Description'}, {title: 'Recovery', description: 'Description'}
] ;
