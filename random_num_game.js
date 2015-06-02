//Set upper limit for results, this will define the maximum number a result can be
var upperLimit = 5000;
var response;
while (true) {
  response = prompt("Want to see some results? Just hit enter or enter anything else/press cancel to quit!");
  if (response === undefined || response === "") {
    alert(Math.ceil(Math.random() * upperLimit));
  } else {
    break;
  }
}
