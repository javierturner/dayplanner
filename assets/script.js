// FUNCTION REQUIREMENTS/////////////////////
// save events for each hour of day
// 9:00 - 5:00 √√
    // each time slot displays
        // time√√√√
        // field for input √√
        // save button √√
            // stores time and user input in localStorage

// DISPLAY REQUIREMENTS///////////////////////
// near top shows current day √√
// colors show rather timeslot is in the past, present, or future (changes depending on the hour)
    // use https://momentjs.com/ to work with date and time https://momentjs.com/docs/#/use-it/browser/


//when user clicks save, info is saved and locked in/appended to text area
//when time = __, change color of textarea
//when 12:00 am hits, reset planner or include reset button


//moment.js////////////////////////////////////////////
var date = moment().format("dddd, MMMM Do, YYYY")
var time = moment().format("h:mm:ss a")
var displayDate = document.querySelector("#displayDate");

var h3 = document.createElement("h3");
h3.textContent = date;
displayDate.appendChild(h3);

// function appendDate()