function calculate () {
    var number = document.getElementById("number").value;
if (number < 0) {
 document.getElementById("result").innerHTML = "Plss provide a positive integer";
}
if (number == 0) {
    document.getElementById("result").innerHTML = "0! = 0";
}
if (number > 0) {
    var tempout = 1;
    for (var i = number; i>0; i--) {
      tempout *= i;
    document.getElementById("result").innerHTML = number + "!" +" "+ "="+" "+ tempout;
    }
  }












} 