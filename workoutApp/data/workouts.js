class Exercise {
    constructor(title, description)
    {
        this.title = title ;
        this.description = description ;
    }//end constructor
}//end Exercise class

/*
export const strengthWorkouts = [
    'liftWeights','liftWeights','liftWeights','liftWeights','liftWeights','liftWeights',
    'liftWeights','liftWeights','liftWeights','liftWeights','liftWeights','liftWeights',
    'liftWeights','liftWeights','liftWeights','liftWeights','liftWeights','liftWeights',
    'liftWeights','liftWeights','liftWeights','liftWeights','liftWeights','liftWeights',
    'liftWeights','liftWeights','liftWeights','liftWeights','liftWeights','liftWeights',
] ;*/

export const strengthWorkouts = [
    {title: 'lift weights', description: 'this is an exercise where you lift weights'}, 
    {title: 'shoulder press', description: 'lift the weights over your head'},
    {title: 'push ups', description: 'do push ups'}
] ;


export const speedWorkouts = [
    'runAround', 'runAround','runAround','runAround','runAround','runAround','runAround',
    'runAround','runAround','runAround','runAround','runAround','runAround','runAround',
    'runAround','runAround','runAround','runAround','runAround','runAround','runAround',
    'runAround','runAround','runAround','runAround','runAround','runAround','runAround',
    'runAround','runAround','runAround','runAround','runAround','runAround','runAround',
] ;
export const agilityWorkouts = [
    'Jump around','Jump around','Jump around','Jump around','Jump around','Jump around',
    'Jump around','Jump around','Jump around','Jump around','Jump around','Jump around',
    'Jump around','Jump around','Jump around','Jump around','Jump around','Jump around',
    'Jump around','Jump around','Jump around','Jump around','Jump around','Jump around',
] ;
export const flexibilityWorkouts = [
    'stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch',
    'stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch',
    'stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch',
    'stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch','stretch',
] ;
