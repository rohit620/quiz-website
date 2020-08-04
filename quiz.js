window.onload = function () {

    show(0);

}
let questions = [
    {
        id: 1,
        question: "What's rohit's favorite school subject?",
        answer: "random access memory",
        options: [
            "English",
            "Math",
            "Music",
            "History"
        ]
    },
    {
        id: 2,
        question: "What food does rohit hate ?",
        answer: "Central Processing Unit",
        options: [
            "tomotos",
            "cheese",
            "spinach",
            "brinjal"
        ]
    },
    {
        id: 3,
        question: "What's rohit's favorite season?",
        answer: "electronic mail",
        options: [
            "Spring",
            "Summer",
            "Autumn",
            "Winter"
        ]
    },
    {
        id: 4,
        question: "During which month is rohit's birthday?",
        answer: "electronic mail",
        options: [
            "January, February, or March",
            "April, May, or June",
            "July, August, or September",
            "October, November, or December"
        ]
    },
    {
        id: 5,
        question: "What's rohit's favorite sport?",
        answer: "electronic mail",
        options: [
            "Football",
            "Volleyball",
            "Basketball",
            "cricket"
        ]
    },
    {
        id: 6,
        question: "What talent does rohit have?",
        answer: "electronic mail",
        options: [
            "Singing",
            "Dancing",
            "Drawing",
            "acting"
        ]
    }
    
];
function submitform(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    //store player name
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";

}
let question_count = 0;
let point =0;
function next() {
let user_answer=document.querySelector("li.option.active").innerHTML;
if(user_answer == questions[question_count].answer)
{
point +=10;
sessionStorage.setItem("points",point);   
}
    if(question_count==questions.length-1){
        sessionStorage.setItem("time",`${minutes}minutes and ${seconds} seconds`);
clearInterval(mytime);

    location.href="end.html";
    return;
}

//check answer by user

question_count++;
show(question_count);
}
function show(count){
   let question = document.getElementById("questions");
    //question.innerHTML="<h2>"+questions[count].question+"</h2>";
    question.innerHTML = `<h2>${question_count+1}. ${questions[count].question} </h2>
    <ul class="option_group">
                <li class="option ">${questions[count].options[0]}</li>
                <li class="option ">${questions[count].options[1]}</li>
                <li class="option ">${questions[count].options[2]}</li>
                <li class="option ">${questions[count].options[3]}</li>
               </ul>
;
    toggleActive();
    
}
function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
           option[j].classList.remove("active");
}
 }
            option[i].classList.add("active");
    }    }
}



