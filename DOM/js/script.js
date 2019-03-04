var oldcolor=0;
function btnFunction() {
	if(oldcolor == 0) {
	  document.getElementById('board').style.backgroundColor = 'grey';
	  oldcolor++;
	  document.getElementById('msg').innerHTML = "Switch is ON";
	  document.getElementById('row1').style.backgroundColor ='grey';
    document.getElementById('row2').style.backgroundColor ='black';
    document.getElementById('row3').style.backgroundColor ='grey';
    document.getElementById('row4').style.backgroundColor ='black';
    document.getElementById('text').style.display = "none";
    document.getElementById('msg').style.display = "block";


  }
  else {
    document.getElementById('board').style.backgroundColor ='red';
    oldcolor=0;
    document.getElementById('msg').innerHTML = "Switch is Off";
    document.getElementById('row1').style.backgroundColor ='grey';
    document.getElementById('row2').style.backgroundColor ='black';
    document.getElementById('row3').style.backgroundColor ='grey';
    document.getElementById('row4').style.backgroundColor ='black';
    document.getElementById('msg').style.display = "none";
    document.getElementById('text').style.display = "block";

  }
}
function checkFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
    document.getElementById('btn').style.backgroundColor = 'green';
    document.getElementById('msg').innerHTML = "Switch is ON";
    document.getElementById('text').innerHTML = "Hello";
    document.getElementById('msg').style.display = "block";
    setTimeout(function() {
    document.getElementById('text').style.display = "none";
    }, 5000);
  }
  else {
  	document.getElementById('btn').style.backgroundColor = 'yellow';
  	document.getElementById('text').style.display = "none";
  	document.getElementById('msg').style.display = "block";
  	document.getElementById('msg').innerHTML = "Switch is OFF";
    document.getElementById('text').innerHTML = "Hello";  
  }
  
} 


