//business logic
var userNumber;

var numberArr = [];

var pingPong = function(userInput) {
for (var index = 1; index <= userInput; index++){
  if ((index % 3 === 0) && (index % 5 === 0)) {
    numberArr.push("pingpong");
  } else if (index % 5 === 0){
    numberArr.push("pong");
  } else if (index % 3 === 0) {
    numberArr.push("ping");
  } else {
    numberArr.push(index);
  }
}
return numberArr;
};


    function test(val){
      console.log(val);
    }

//user interface logic
$(document).ready(function() {
alert("Welcome to Ping-Pong!!")
  $("form#pong-number").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#ping-pong").val());
    var results = pingPong(userInput);

    $("#results").text("");
    $("#results").append("<ul>");
    results.forEach(function(result) {
      $("#results").append('<li>' + result + '</li>');
    });
    $("#results").append("</ul>");

  });

});
