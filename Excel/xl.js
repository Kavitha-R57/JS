const data = [{
    "Question 1": "What do you understand by HTML",
    "a": "HTML describes the structure of a webpage ",
    "b": "HTML is the standard markup language mainly used to create web pages ",
    "c":  "HTML consists of a set of elements that helps the browser how to view the content",
    "d": "All of the above ",
},
{
    "Question 2":"Who is the father of HTML?",
    "a": "Rasmus Lerdor",
    "b":"Tim Berners-Lee",
    "c": "Brendan Eich",
    "d": "Sergey Brin",
},
{
  "Question 3":"Which is used to create Web Pages ?",
"a": "c++",
"b": "Java",
"c": "HTML",
"d": "JVM",
},

{
"Question 4": "Which tag is used for inserting the largest heading in HTML?",
"a":"head ",
"b":"<h1> ",
"c":"<h6>",
"d":"heading",
},

{"Question 5":"Which tag is used to embed CSS in HTML document?",
"a":"<CSS> ",
"b":"<!DOCTYPE html> ",
"c":"<script> ",
"d": "<style> ",
}];
document.getElementById("json").innerHTML = JSON.stringify(data,undefined,5);
const ec