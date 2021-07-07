// Declaring global variables
var saveBtn = $(".saveBtn");
var time = moment();

// This function will initialize the app
function init() {
  // To set current date
  $("#currentDay").text(time.format("dddd, MMMM Do YYYY"));

  //   To check if each time block content has the same as the local storage
  $(".time-block").each(function () {
    var id = $(this).attr("id");
    var schedule = localStorage.getItem(id);

    if (schedule !== null) {
      $(this).children(".schedule").val(schedule);
    }
  });
}

// Added an event listiner to the save button
saveBtn.on("click", savePlan);

// This function will save the given plan to the local storage
function savePlan() {
  var time = $(this).parent().attr("id");
  var schedule = $(this).siblings(".schedule").val();

  localStorage.setItem(time, schedule);
}

// This function will chwck the current time and set the background color of each time block accordingly!
function backgroundListColoring() {
  var nowTime = time.hours();
  $(".time-block").each(function () {
    var plannedTime = parseInt($(this).attr("id"));

    if (plannedTime > nowTime) {
      $(this).addClass("future");
    } else if (plannedTime === nowTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

backgroundListColoring();
init();
