// DISPLAY REQUIREMENTS///////////////////////
// colors show rather timeslot is in the past, present, or future (changes depending on the hour)

// use https://momentjs.com/ to work with date and time https://momentjs.com/docs/#/use-it/browser/


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


//save button & local storage///////////////////////////////////////////////
//9
$(".saveBtn").click(function () {
    var userEvent = $("#input9").val();
    localStorage.setItem("9am", userEvent);
});

function DisplayEvent9() {
    $("#input9").val(localStorage.getItem("9am"))
}
DisplayEvent9();


//10
$(".saveBtn").click(function () {
    var userEvent = $("#input10").val();
    localStorage.setItem("10am", userEvent);
});

function DisplayEvent10() {
    $("#input10").val(localStorage.getItem("10am"))
}
DisplayEvent10();


//11
$(".saveBtn").click(function () {
    var userEvent = $("#input11").val();
    localStorage.setItem("11am", userEvent);
});

function DisplayEvent11() {
    $("#input11").val(localStorage.getItem("11am"))
}
DisplayEvent11();


//12
$(".saveBtn").click(function () {
    var userEvent = $("#input12").val();
    localStorage.setItem("12am", userEvent);
});

function DisplayEvent12() {
    $("#input12").val(localStorage.getItem("12am"))
}
DisplayEvent12();


//1
$(".saveBtn").click(function () {
    var userEvent = $("#input1").val();
    localStorage.setItem("1pm", userEvent);
});

function DisplayEvent1() {
    $("#input1").val(localStorage.getItem("1pm"))
}
DisplayEvent1();


//2
$(".saveBtn").click(function () {
    var userEvent = $("#input2").val();
    localStorage.setItem("2pm", userEvent);
});

function DisplayEvent2() {
    $("#input2").val(localStorage.getItem("2pm"))
}
DisplayEvent2();


//3
$(".saveBtn").click(function () {
    var userEvent = $("#input3").val();
    localStorage.setItem("3pm", userEvent);
});

function DisplayEvent3() {
    $("#input3").val(localStorage.getItem("3pm"))
}
DisplayEvent3();

//4
$(".saveBtn").click(function () {
    var userEvent = $("#input4").val();
    localStorage.setItem("4pm", userEvent);
});

function DisplayEvent4() {
    $("#input4").val(localStorage.getItem("4pm"))
}
DisplayEvent4();


//5
$(".saveBtn").click(function () {
    var userEvent = $("#input5").val();
    localStorage.setItem("5pm", userEvent);
});

function DisplayEvent5() {
    $("#input5").val(localStorage.getItem("5pm"))
}
DisplayEvent5();