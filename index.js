function removeEvent(event) {
  var eventElement = event.target;
  var parent = eventElement.parentElement;
  parent.removeChild(eventElement);
}
var buttons = document.querySelectorAll(".bx bxs-minus-circle");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", removeEvent);
}

