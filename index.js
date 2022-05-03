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

let Age = document.getElementById('Age').value
let Nationality = document.getElementById('Nationality').value
// let result = document.getElementById('result').value = display()

function display(){
    if((Age >= 18) && (Nationality=='Kenyan')){
        $("button#result").html("you qualify")
        return document.getElementById('result').value  
    }else if((Nationality!='Kenyan') && (Age < 18) ){
        $("button#result").html("you do not qualify")
        return document.getElementById('result').value 
    }else{
        $("button#result").html("you are not qualified")
        return document.getElementById('result').value 
    }; 
};
// function met(){
//     document.write(display())
// }
// display('You are qualified');

// function display(){
//      console.log('tita')
//     document.getElementById('sub').val
//     event.preventDefault()
// }