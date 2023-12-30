const quizData =[
    {
   question: "What do you understand by HTML?",
a: "HTML describes the structure of a webpage",
b: "HTML is the standard markup language mainly used to create web pages",
c: "HTML consists of a set of elements that helps the browser how to view the content",
d: "All of the above",
correct: "d",
},


{
question: "Who is the father of HTML?",
a: "Rasmus Lerdor",
b: "Tim Berners-Lee",
c: "Brendan Eich",
d: "Sergey Brin",
correct: "b",
},


{
question:"Which is used to create Web Pages ?",
a: "C++",
b: "Java",
c: "HTML",
d: "JVM",
correct: "c",
},


{
question:"Which tag is used for inserting the largest heading in HTML?",
a: "head",
b: "<h1>",
c: "<h6>",
d: "heading",
correct: "b",
},


{
question:"Which tag is used to embed CSS in HTML document?",
a: "<CSS>",
b: "<!DOCTYPE html>",
c: "<script>",
d: "<style>",
correct: "d"
},
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('b_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked = false)
}
function getSelcted(){
    let answerEls
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
       }
    })
    return answer
}
submitBtn.addEventListener('click',() =>{
    const answer = getSelcted()
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++            
        }
        currentQuiz++
        if(currentQuiz<quizData.length){
            loadQuiz()
               
        }else{
            quiz.interHTML = `
            <h2> Your Answerd   
            `
    
        }
    }
})
