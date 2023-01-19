let guess_count = 0
const answers = []

function Update_Count(){
    document.getElementById("guesses").innerHTML = 5-guess_count +"/5 guesses left"
}
function Generate_New(){
    for(i = 0;i<5;i++){
        answers[i] = Math.floor(Math.random()*10);
    }
    guess_count = 0;
}

function Submit(){
    var fields = document.querySelectorAll("input");
    for(i=0;i<5;i++){
        if (document.getElementById(fields[i].id).value == answers[i]){
            document.getElementById(fields[i].id).style.backgroundColor = "green"
        }

        if (document.getElementById(fields[i].id).value != answers[i]){

            if(document.getElementById(fields[i].id).value > answers[i]){
                    document.getElementById(fields[i].id).style.backgroundColor = "red"
                }

            else{
                document.getElementById(fields[i].id).style.backgroundColor = "blue"
            }
        }
    }
    guess_count++;
    Update_Count();
    if(guess_count === 5){
        for(i=0;i<5;i++){
            document.getElementById(fields[i].id).value = "";
            document.getElementById(fields[i].id).style.backgroundColor = "white";
        }
        Generate_New();
        Update_Count();
    }
    
}
