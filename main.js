// let x = "25";
// let y = "25";
// let d = "Jeffrey";
// let f = "Sesgundo";


// let x = true;
// let y = true;

// let result = x || y;
// logical operators
// and = &&
// or = ||

// let x = (24 + 5 /2) < (23 + 4);
// let y = 5 > 4;
// let result = x || y;
// alert(result);


// const ageCalculation = () => {
//     let age = Number(document.querySelector("#ageInput").value);
//     // alert(age);

//     if(age >= 18){
//         alert("You can now vote!");
//     }else if(age > 12){
//         alert("You are still in Highschool");
//     }else if(age >= 0 && age <= 12){
//         alert("You are still a minor");
//     }else{
//         alert("Not a valid age");
//     }
// }



const phasesOflife = () => {
    let age = Number(document.querySelector("#ageInput").value);
    // alert(age);

    if(age >= 61){
        alert("Elderly!");
    }else if(age >= 36 && age <= 60){
        alert("Adolescence");
    }else if(age >= 20 && age <= 35){
        alert("Early Adolescence");
    }else if(age >= 17 && age <= 19){
        alert("Late Teenager");
    }else if(age >= 8 && age <= 12){
        alert("Childhood");
    }else if(age >= 0 && age <= 7){
        alert("Early Childhood");
    }else{
        alert("Not a valid age");
    }
    
}

// let age = 18;

// switch(true){
//     case (age >= 18):
//         alert("You can now vote!");
//     break;
//     case (age > 12):
//         alert("You are still in Highschool");
//     break;
//     case (age >= 0 && age <= 12):
//         alert("You are still a minor");
//     break;
//     default:
//         alert("Not a valid age")
// }

// let fruit = "atis";

// switch(fruit){
//     case "apple":
//         alert("Wow you choose apple");
//         break;
//         case "banana":
//             alert("Wow you choose banana");
//         break;
//         default:
//         alert("None of the above!");

// }
