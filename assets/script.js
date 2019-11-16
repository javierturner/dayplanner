// DISPLAY REQUIREMENTS///////////////////////
// colors show rather timeslot is in the past, present, or future (changes depending on the hour)

// use https://momentjs.com/ to work with date and time https://momentjs.com/docs/#/use-it/browser/


//when user clicks save, info is saved and locked in/appended to text area
//when time = __, change color of textarea
//when 12:00 am hits, reset planner or include reset button



//date/moment.js////////////////////////////////////////////

var date = moment().format("dddd, MMMM Do, YYYY")
var time = moment().format("h:mm:ss a")
var displayDate = document.querySelector("#displayDate");

var h3 = document.createElement("h3");
h3.textContent = date;
displayDate.appendChild(h3);

console.log(time);



//time slots////////////////////////////////////////////////




//save button///////////////////////////////////////////////

function saveTask() {
    var task = document.querySelector(".form-control");
    console.log(task.innerHTML);
}