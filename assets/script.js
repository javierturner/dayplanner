//date/moment.js////////////////////////////////////////////

var date = moment().format("dddd, MMMM Do, YYYY");
var currentTime = moment().format("h:mm:ss a");
var displayDate = document.querySelector("#displayDate");

var h3 = document.createElement("h3");
h3.textContent = date;
displayDate.appendChild(h3);

console.log(currentTime);


//change time slot colors//////////////////////////////////////////////

var five = $("#input5");
var four = $("#input4")
var three = $("#input3")
var two = $("#input2")
var one = $("#input1")
var twelve = $("#input12")
var eleven = $("#input11")
var ten = $("#input10")
var nine = $("#input9")
var date1 = moment().format('h A');
console.log(date1);
//5
if (date1 === "5 PM"){
    five.addClass("present")
}

else {
    five.addClass("future")
}


//4
if (date1 === "4 PM"){
    four.addClass("present")
}

else if (date1 > "4 PM") {
    four.addClass("past");
}

else {
    four.addClass("future")
}

//3
if (date1 === "3 PM"){
    three.addClass("present")
}

else if (date1 > "3 PM") {
    three.addClass("past");
}

else {
    three.addClass("future")
}

//2
if (date1 === "2 PM"){
    two.addClass("present")
}

else if (date1 > "2 PM") {
    two.addClass("past");
}

else {
    two.addClass("future")
}

//1
if (date1 === "1 PM"){
    one.addClass("present")
}

else if (date1 > "1 PM") {
    one.addClass("past");
}

else {
    one.addClass("future")
}

//12
if (date1 === "12 PM"){
    twelve.addClass("present")
}

else if (date1 > "12 PM") {
    twelve.addClass("past");
}

else {
    twelve.addClass("future")
}

//11
if (date1 === "11 AM"){
    eleven.addClass("present")
}

else if (date1 > "11 AM") {
    eleven.addClass("past");
}

else {
    eleven.addClass("future")
}

//10
if (date1 === "10 AM"){
    ten.addClass("present")
}

else if (date1 > "10 AM") {
    ten.addClass("past");
}

else {
    ten.addClass("future")
}

//9
if (date1 === "9 AM"){
    nine.addClass("present")
}

else if (date1 > "9 AM") {
    nine.addClass("past");
}

else {
    nine.addClass("future")
}







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