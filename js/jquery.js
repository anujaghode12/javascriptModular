var oldcolor=0;
alert("ok");
(function( $ ){
  $.fn.btnFunction = function() {
    if(oldcolor == 0) {
      oldcolor++;
      $("#board").css("background","grey");
      $("#msg").html("switch is on");
      $("#row1").css("background","grey");
      $("#row2").css("background","black");
      $("#row3").css("background","grey");
      $("#row4").css("background","black");
      $("#text").css("display","none");
      $("#msg").css("display","block");
    }
    else {
      oldcolor=0;
      $("#switchBoard").css("background","red");
      $("#msg").html("switch is off");
      $("#row1").css("background","grey");
      $("#row2").css("background","black");
      $("#row3").css("background","grey");
      $("#row4").css("background","black");
      $("#msg").css("display","none");
      $("#text").css("display","block");
    }
  }
  (function( $ ){
   $.fn.myCheck = function() {
   console.log(check);
   if(myCheck.checked == true)
   {
      $("#btn").css("background","green");
      $("#msg").css("display","none");
      $("#text").css("display","block");
      $("msg").html("switch is on");
      setTimeout(function(){
        $("#para1").css("display","none");
      },5000);
    }
    else {
      $("#btn").css("background","yellow");
      $("#text").css("display","none");
      $("#msg").css("display","none");
  }

}
