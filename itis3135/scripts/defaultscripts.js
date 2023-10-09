// Alert Message
function scriptTest(){
    alert("Hey my script is running");
}
// Welcome Message
function promptUser(){
    let nameInput = prompt("What is your name?");
    let emotionInput = prompt("How are you feeling?");
    let greeting = "Welcome " + nameInput + "!";
    document.getElementById("greeting").innerHTML = greeting;
    let greetMsg = "Yo whats good cuzzo, " + nameInput + "!\nglad you are feeling " + emotionInput + "!";
    document.getElementById("greetMsg").innerHTML = greetMsg;
    let input= prompt("Please enter the amount of sides from 0-10:");
    // Convert words to number
    let numSides = parseInt(input);
    // Check if userInput is within number range
    if(numSides>=0 && numSides <11){
        getShape(numSides); // Runs getShape function
    }
    else{
        alert("You did not enter a number within the range of 0-10"); // Message telling user the input is not within range
    }
}
// Incrementing Clock
function getTodaysDate(){
    const dt = new Date();
    document.getElementById("date-time").innerHTML = dt;
}
setInterval(getTodaysDate, 1000);
function displayToday(){
    var dt = new Date();
    let date = dt.toDateString();
    document.getElementById("day_of_week").innerHTML = date;
}
function randomName(){
    var ranChoice = Math.floor(Math.random()*6);
    let ranName="";
    switch(ranChoice){
        case(0):
            ranName = "Slightly Used Hotdog";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(1):
            ranName = "Lethal Spaghetti";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(2):
            ranName = "Spicy Wet Fart";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(3):
            ranName = "Thunder Snail";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(4):
            ranName = "Toes Sniffer";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(5):
            ranName = "Soggy Cereal";
            document.getElementById("random_name").innerHTML = ranName;
        break;
        case(6):
            ranName = "Doggy Muncher";
            document.getElementById("random_name").innerHTML = ranName;
    
        break;random_name
    }
}

function squareNum(){
    let numInput = prompt("What number would you like to be squared");
    let num = numInput * numInput;
    document.getElementById("number_squared").innerHTML = num;
}

function randInsult(){
    var ranChoice = Math.floor(Math.random()*7);
    let insult="";
    switch(ranChoice){
        case(0):
            insult = "You are a poopyhead";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(1):
            insult = "You are a peepee head";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(2):
            insult = "Bet you dont even know how to boil water";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(3):
            insult = "You smell";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(4):
            insult = "You are too short";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(5):
            insult = "You are not good enough";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(6):
            insult = "You dumb af";
            document.getElementById("insult").innerHTML = insult;
        break;
        case(7):
            insult = "*insert insult to make you mad*";
            document.getElementById("insult").innerHTML = insult;
        break;
    }
}

function randFact(){
    var ranChoice = Math.floor(Math.random()*8);
    let fact="";
    switch(ranChoice){
        case(0):
            fact = "Bread cannot ride bikes";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(1):
            fact = "raccoons dont know how to do taxes";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(2):
            fact = "plants are not able bench 225";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(3):
            fact = "whales are not able to fly over russia";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(4):
            fact = "Babies are not able to compete in the NFL";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(5):
            fact = "Every 60 seconds pass, a minute passes in Vietnam";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(6):
            fact = "Women are scary";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(7):
            fact = "Everytime you drink or eat, you get slightly heavier";
            document.getElementById("fact").innerHTML = fact;
        break;
        case(8):
            fact = "everytime you poop, you lose weight";
            document.getElementById("fact").innerHTML = fact;
        break;
        
        }
    }

   
    function getShape(numSides){
        switch(numSides){
            case(1):
                polygonOutput = "Henagon has 1 side";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;        
            break;
            case(2):
                polygonOutput = "Digon has 2 sides";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;
            break;
            case(3):
                polygonOutput = "Trigon has 3 sides";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;
            break;
            case(4):
                polygonOutput = "Tetragon has 4 sides";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;
            break;
            case(5):
                polygonOutput = "Pentagon has 5 sides";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;
            break;
            case(6):
                polygonOutput = "Hexagon has 6 sides";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;
            break;
            case(7):
                polygonOutput = "Heptagon has 7 sides";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;
            break;
            case(8):
                polygonOutput = "Octagon has 8 sides";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;
            break;
            case(9):
                polygonOutput = "Enneagon has 9 sides";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;
            break;
            case(10):
                polygonOutput = "Decagon has 10 ides";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;
            break;
            default:
                polygonOutput = "Polygon has 0 sides";
                document.getElementById("polygonOutput").innerHTML = polygonOutput;
        }
    }