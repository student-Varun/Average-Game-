const Q1 = document.getElementById("Q1");
const Q2 = document.getElementById("Q2");
const Q3 = document.getElementById("Q3");
const Q4 = document.getElementById("Q4")
const Q5 = document.getElementById("Q5")


const answere = {1: "45 years", 2: "n-1", 3: "Rs.28" ,4: "73.2%",5: "9"}


const answerSubmit = (id)=>{

 if(id == '1'){
    const chckedAnswere = document.querySelector('input[name="option"]:checked').value;
    if(chckedAnswere == answere[1]){
        Q1.classList.add('hide');
        Q2.classList.toggle('hide');
    }
    else{
        document.body.innerHTML = "<h1> Game Over </h1>"
    }
 }
 else if(id=='2'){
    const chckedAnswere = document.querySelector('input[name="option2"]:checked').value;
    if(chckedAnswere == answere[2]){
        Q2.classList.add('hide');
        Q3.classList.toggle('hide');
    }
    else{
        document.body.innerHTML = "<h1> Game Over </h1>"
    }
 }
 else if(id=='3'){
    const chckedAnswere = document.querySelector('input[name="option3"]:checked').value;
    if(chckedAnswere == answere[3]){
        Q3.classList.add('hide');
        Q4.classList.toggle('hide')
    }
    else{
        document.body.innerHTML = "<h1> Game Over </h1>"
    }
}
    else if(id=='4'){
        const chckedAnswere = document.querySelector('input[name="option4"]:checked').value;
        if(chckedAnswere == answere[4]){
            Q4.classList.add('hide');
            Q5.classList.toggle('hide');
            
        }
        else{
            document.body.innerHTML = "<h1> Game Over </h1>"
        }
    }
        else if(id=='5'){
            const chckedAnswere = document.querySelector('input[name="option5"]:checked').value;
            if(chckedAnswere == answere[5]){
                Q5.classList.add('hide');
                document.body.innerHTML = "<h1> score 50</h1>"
                alert('your score is 50')
                
            }
        else{
            document.body.innerHTML = "<h1> Game Over </h1>"
        }
    
 }

}
