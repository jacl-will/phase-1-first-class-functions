/* This is doing too much and can be simplified 
function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
}

function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
}

function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
}

function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps")
}

function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function liftWeights() {
    console.log("Pump iron");
}

function swimFortyLaps() {
    console.log("Swim 40 laps");
}

Monday can now look like:
function Monday() {
    runFiveMiles();
    liftWeights();
}
but we can simplify it more

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function Monday() {
    exerciseRoutine(liftWeights);
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
} );

exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
}); 
These can be simplified to: 

exerciseRoutine(() => console.log("Stretch! Work that core!"));
*/

function receivesAFunction (hope) {
    console.log(hope());
}

//receivesAFunction(function (){return "I hope I am doing this right."})

function returnsANamedFunction(){
    return function nameds() {};
}

function returnsAnAnonymousFunction(){
    return function() {};
}