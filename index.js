
function display(){
    let Age = document.getElementById('Age').value; 
    let Nationality = document.getElementById('Nationality').value; 

    if ((Age >= 18)  && (Nationality == "Kenyan")) {
    $("button#result").html("you qualify")

    }else if((Age < 18) && (Nationality != "Kenyan")){
        $("button#result").html("you are not qualified")
        
    }else{
        $("button#result").html("you do not meet all requirements")
      
    }
}







  