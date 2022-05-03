// function display(){
//     document.getElementById('Nationality').value 
//     if(age<18){
//         return 'you are not qualified'
//     }else{
//         return 'you are quaslified'
//     }
// }else if{

// }
//function real(){
//     if(Nationality==Kenyan){
//         return true
//     }else{
//         return false
//     }
// }
// let Age = document.getElementById('Age').value;
// let Nationality = document.getElementById('Nationality').value;
// let result = ""

// console.log("Javascript loaded")



function display(){
    let Age = document.getElementById('Age').value; 
    let Nationality = document.getElementById('Nationality').value; 

    if ((Age >= 18)  && (Nationality == "Kenyan")) {
    // console.log('You are qualified')
    $("button#result").html("you qualify")
        // document.getElementById("result")='you are qualified'
    }else if((Age < 18) && (Nationality != "Kenyan")){
        // console.log('You are not qualified')
        $("button#result").html("you are not qualified")
        // document.write('You are not qualified')
    }else{
        // console.log('you do not meet all requirements')
        $("button#result").html("you do not meet all requirements")
        // document.write('you do not meet all requirements') 
    }
}





     // console.log(Age)
    // console.log(Nationality)
//     switch((Age >= 18) ){
//         console.log(Age)
//         case document.getElementById('Age').value:
//             document.write('you qualify');
//             break;
//     switch((Age < 18) ){
//         case document.getElementById('Age').value:
//             document.write('you do not qualify');
//             break;
//     switch((Nationality == Kenyan) ){
//         case document.getElementById('Age').value:
//             document.write('you qualify');
//             break;
//     switch((Nationality != Kenyan) ){
//         case document.getElementById('Age').value:
//             document.write('you do not qualify');
//             break;
//     };
// };

// function display(){
//     if((Age >= 18) && (Nationality=='Kenyan')){
//         $("button#result").html("you qualify")
//         return document.getElementById('result').value;  
//     }else if((Nationality!='Kenyan') && (Age < 18) ){
//         $("button#result").html("you do not qualify")
//         return document.getElementById('result').value; 
//     }else{
//         $("button#result").html("you are not qualified")
//         return document.getElementById('result').value; 
//     }; 
// };
// function met(){
//     document.write(display())
// }
// display('You are qualified');

// function display(){
//      console.log('tita')
//     document.getElementById('sub').val
//     event.preventDefault()
// }
// }