//if-else condition
let number = -9;

if (number > 0) {
    console.log("Number is positive.");
} else if (number < 0) {
    console.log("Number is negative.");
} else {
    console.log("Number is zero.");
}

var day = '5';  

        switch (day) {
            case '1':
                console.log("Sunday");
                break;
            case '2':
                console.log("Monday");
                break;
            case '3':
                console.log("Tuesday");
                break;
            case '4':
                console.log("Wednesday");
                break;
            case '5':
                console.log("Thursday");
                break;
            case '6':
                console.log("Friday");
                break;
            case '7':
                console.log("Saturday");
                break;
            default:
                console.log("Unknown day");
        }
  
    //Loop with break and continue
        for (let i = 1; i <= 5; i++) {
            if (i === 4) {
                break; 
            }
            if (i === 3) {
                continue;  
            }
       
            console.log(i);
        }
    // While Loop with continue
    let i = 1;
    while (i <= 5) {
       if (i === 3) {
            i++;  
            continue;
        }
        
        
        console.log(i);
        i++;
    }
    // Do While Loop with break
    let j = 1;
    do {
        if (j === 4) {
            break;  // Exit the loop when j is 4
        }
        
        console.log(j);
        j++;
    } while (j <= 5);
    
    let globalVar = "I'm global!";  

    function scopeExample() {
        let localVar = "I'm local!";  
        console.log(globalVar);    
        console.log(localVar); 
    }
    scopeExample();
   