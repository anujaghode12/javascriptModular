var s,oldcolor = 0,
SwitchBoard = {
	settings: {
    board: document.getElementById('board'),
    btn: document.getElementById('btn'),
    msg: document.getElementById('msg'),
    text: document.getElementById('text'),
    myCheck: document.getElementById('myCheck'),
    row1: document.getElementById('row1'),
    row2: document.getElementById('row2'),
    row3: document.getElementById('row3'),
    row4: document.getElementById('row4')
    
  },
  init: function() {
    s = this.settings;
    this.bindUIActions();
  },
  bindUIActions: function() {
    s.btn.addEventListener("click", function() {
      SwitchBoard.btnFunction();  
    });
    s.myCheck.addEventListener("click", function() {
      SwitchBoard.checkFunction();  
    });
  },
  btnFunction: function() {
  	if(oldcolor == 0) {
      oldcolor++;
  		s.board.style.backgroundColor = 'grey';
  		s.msg .innerHTML = "Switch is ON";
  		s.row1.style.backgroundColor ='grey';
  		s.row2.style.backgroundColor ='black';
      s.row3.style.backgroundColor ='grey';
      s.row4.style.backgroundColor ='black';
      s.text.style.display = "none";
      s.msg.style.display = "block";
    }
    else {
      oldcolor=0;
  	  s.board.style.backgroundColor ='red';
      s.msg.innerHTML = "Switch is Off";
      s.row1.style.backgroundColor ='black';
      s.row2.style.backgroundColor ='grey';
      s.row3.style.backgroundColor ='black';
      s.row4.style.backgroundColor ='grey';
      s.text.style.display = "none";
      s.msg.style.display = "block";
    }
  },
  checkFunction: function() {
    if (myCheck.checked == true) {
	    s.btn.style.backgroundColor = 'green';
	    s.msg.innerHTML = "Switch is ON";
	    s.text.innerHTML = "Hello";
	    s.text.style.display = "block";
	    setTimeout(function() {
	    s.text.style.display = "none";
	    }, 5000);
	  }
    else {
  		s.btn.style.backgroundColor = 'yellow';
  		s.text.style.display = "none";
  		s.msg.innerHTML = "Switch is OFF";
    	s.text.innerHTML = "Hello";	
  	}
  }
}
SwitchBoard.init();