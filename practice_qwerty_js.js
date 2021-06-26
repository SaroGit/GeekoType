var count_a=count_b=count_c=count_d=count_e=count_f=count_g=count_h=0;
var count_i=count_k=count_m=count_o=count_q=count_s=count_u=count_w=count_y=0;
var count_j=count_l=count_n=count_p=count_r=count_t=count_v=count_x=count_z=0;
function count_letters(key){
	if(key =="a" || key == "A") count_a+=1;
	else if(key =="b" || key == "B") count_b+=1;
	else if(key =="c" || key == "C") count_c+=1;
	else if(key =="d" || key == "D") count_d+=1;
	else if(key =="e" || key == "E") count_e+=1;
	else if(key =="f" || key == "F") count_f+=1;
	else if(key =="g" || key == "G") count_g+=1;
	else if(key =="h" || key == "H") count_h+=1;
	else if(key =="i" || key == "I") count_i+=1;
	else if(key =="j" || key == "J") count_j+=1;
	else if(key =="k" || key == "K") count_k+=1;
	else if(key =="l" || key == "L") count_l+=1;
	else if(key =="m" || key == "M") count_m+=1;
	else if(key =="n" || key == "N") count_n+=1;
	else if(key =="o" || key == "O") count_o+=1;
	else if(key =="p" || key == "P") count_p+=1;
	else if(key =="q" || key == "Q") count_q+=1;
	else if(key =="r" || key == "R") count_r+=1;
	else if(key =="s" || key == "S") count_s+=1;
	else if(key =="t" || key == "T") count_t+=1;
	else if(key =="u" || key == "U") count_u+=1;
	else if(key =="v" || key == "V") count_v+=1;
	else if(key =="w" || key == "W") count_w+=1;
	else if(key =="x" || key == "X") count_x+=1;
	else if(key =="y" || key == "Y") count_y+=1;
	else if(key =="z" || key == "Z") count_z+=1;
}

var old_count_a=old_count_b=old_count_c=old_count_d=old_count_e=old_count_f=old_count_g=old_count_h=0;
var old_count_i=old_count_k=old_count_m=old_count_o=old_count_q=old_count_s=old_count_u=old_count_w=old_count_y=0;
var old_count_j=old_count_l=old_count_n=old_count_p=old_count_r=old_count_t=old_count_v=old_count_x=old_count_z=0;


$(function(){

// db.collection('users').doc('Saravanan').collection('errors_and _speed').get().then((snapshot) => {
// 	snapshot.docs.forEach(doc => {
// 		console.log(doc.data());
// 	});
// });
//console.log(signupform.nameadd.value);

		//sessionStorage.setItem("samples",0);
		
		// sessionStorage.removeItem("count");
		//sessionStorage.removeItem("lesson");
		var count=Number(sessionStorage.getItem("count"));
		var less=sessionStorage.getItem("lesson");
		if (less==null||less=="1_home_row") {less="1_home_row";}
		else{
			$("#1_home_row").removeClass("active1");
			$("#"+less).addClass("active1");
		}
		var file="json_qwerty\\"+less+"\\json_ex"+String(count)+".json";
		if (count==0) {
			file="json_qwerty\\"+less+"\\json_ex1.json";
			loadfile(file);
		}
		if (count>0) {
			loadfile(file);
		}

		$("#restart").click(function(){
			sessionStorage.setItem("count",count);
			sessionStorage.setItem("lesson",less);
			location.reload();
		});
		$("#next_sample").click(function(){
			if (count==0) { count=1;}
			let temp=count+1;
			sessionStorage.setItem("count",temp);
			sessionStorage.setItem("lesson",less);
			location.reload();
		});
		$('#feed').click(function(){
    		$('#Feedback_container').css("display","flex");
    		$('#feed_text').focus();
    	});
    	$('#close').click(function(){
    		$('#Feedback_container').css("display","none");
    		$(".textarea").focus();
    		$("#feed_text").val("");
    		
    	});
    	$("#next").click(function(){
    		
    		$('#stats_container').css("display","none");
    		if (count==0) { count=1;}
			let temp=count+1;
			sessionStorage.setItem("count",temp);
			location.reload();
    	});
});
loadfile=function(file){
		fetch(file).then(response=>response.json())
		.then(function(json){
			call(json);
		}).catch(function(){
			sessionStorage.setItem("count",0);
			location.reload();
		});
function call(json){
	auth.onAuthStateChanged((user) => {
	if (user) { 
		db.collection('users').where("email", "==", user.email).get().then((snapshot) => {
		snapshot.docs.forEach(doc => {
			 $("#pc_name").html(doc.data().name);
			 user_name=doc.data().name;
			 sample_count=doc.data().samplecount;
			 speed_sum=doc.data().speedsum;
		});
	});
	}
	});
		var $textarea = $('.textarea'),
		shift = false,
		capslock = false,
		tab=false,
		enter=false;
		$textarea.focus();
		var $curr_key=$("#curr_key");
		var errors=0,speed=0,wpm=0,startTime=0,endTime=0,totalTime=0;
		var $backdrop=$(".backdrop");
		var len=[];
		var textData="";
		for(var key in json)
		{
			len.push(json[key].length);
			textData+=json[key];
		}
		for(i=1;i<len.length;i++)
		{
			len[i]+=len[i-1];
		}
		$textarea.html(textData);
		var select=false;
		var text="";
		var count=0;
		var letr="";
		var caret=$textarea.val();
		var wordcount=caret.split(" ").length-len.length;
		var prev_index=4;
		var line=0;
		$backdrop.html(caret);
		var index=0;
		$backdrop.html(replaceAt(index));
		$curr_key.html("Current Key: "+caret[0]);
	$('#keyboard li').click(function(){
		if (index==len[len.length-1]-1) {
			$backdrop.html(replaceAt(index));
			endTest();
			index=0;
			return false;}
		$curr_key.html("Current Key: "+caret[index+1]);
		tab=false;
		enter=false;
		var $this = $(this),
			character = $this.html();
	    // If it's a lowercase letter, nothing happens to this variable
	    //tab
	    if ($this.hasClass('tab')){
	    	prev_index=index;
	    	index+=4; 
	    	tab=true;
	    	$backdrop.html(replaceAt(index));
	    	return false;
	     }
		
		// Shift keys
		else if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
			$('.letter').toggleClass('uppercase');
			$('.symbol span').toggle();
			
			shift = (shift === true) ? false : true;
			capslock = false;
			return false;
		}
		
		// Caps lock
		else if ($this.hasClass('capslock')) {
			$('.letter').toggleClass('uppercase');
			capslock = true;
			return false;
		}
		
		// backspace
		else if ($this.hasClass('backspace')) {
			index--;
			let temp="<mark>"+caret[index]+"</mark>"
			letr=letr.substring(0,letr.length-45);
			$backdrop.html(letr+temp);
			return false;
		}
		
		// Special characters
		else if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
		else if ($this.hasClass('space')) character = ' ';
		else if ($this.hasClass('enter')){
			prev_index=index;
			index=len[line];
			if(line!=len.length-1) line++;
			else{endTest();return false;}
			tab=true;
			enter=true;
			$backdrop.html(replaceAt(index));
			return false;
		}
		
		// Uppercase letter
		 else if ($this.hasClass('uppercase')) character = character.toUpperCase();
		
		// Remove shift once a key is clicked.
		if (shift === true) {
			$('.symbol span').toggle();
			if (capslock === false) $('.letter').toggleClass('uppercase');
			
			shift = false;
		}
		if (caret[index]==character) {
			index++;
			select=false;
			$backdrop.html(replaceAt(index));
			
		}else{
			index++;
			select=true;
			errors++;
			$backdrop.html(replaceAt(index));
		}								
	});
	function replaceAt(index){
		if (index==1) {startTest();}
		text="<mark>"+caret[index]+"</mark>";
		if (caret[index]==" ") {text="<mark>"+"\xa0"+"</mark>";}
	if (!tab) {
		if (index!=0) {
			if (select) {
				letr+="<mark style='background-color:red'>"+caret[index-1]+"</mark>";
			}else{
				letr+="<mark style='background-color:green'>"+caret[index-1]+"</mark>";
			}
			
			}
		return letr+text+caret.substr(index+1);
		}else{
			if(enter){
				letr+="<mark style='background-color:gray'>"+caret.substring(prev_index,index)+"</mark>";
			}
			else{
			for(i=prev_index;i<index;i++)
			{
				if(caret[i]==" ")
					{letr+="<mark style='background-color:#fff'>"+"\xa0"+"</mark>";}
				else{letr+="<mark style='background-color:red'>"+caret[i]+"</mark>";}

			}
		}
		return letr+text+caret.substring(index+1);
	}
}
	function showstats(){

	if (wpm>=10&&wpm<=100&&totalTime<200) {
		$("#errors").html("Errors: "+errors);
		$("#speed").html("Speed: "+wpm);
		$("#stat_error").html(errors);
		$("#stat_speed").html(wpm);
		$("#stat_time").html(totalTime);
		$("#stats_container").css("display","flex");
	firebase.auth().onAuthStateChanged((user) => {
  if (user) {	
	db.collection('users').doc(user_name).collection('keys').doc('keyCount').set({
    	a: old_count_a + count_a,
    	b: old_count_b + count_b,
    	c: old_count_c + count_c,
    	d: old_count_d + count_d,
    	e: old_count_e + count_e,
    	f: old_count_f + count_f,
    	g: old_count_g + count_g,
    	h: old_count_h + count_h,
    	i: old_count_i + count_i,
    	j: old_count_j + count_j,
    	k: old_count_k + count_k,
    	l: old_count_l + count_l,
    	m: old_count_m + count_m,
    	n: old_count_n + count_n,
    	o: old_count_o + count_o,
    	p: old_count_p + count_p,
    	q: old_count_q + count_q,
    	r: old_count_r + count_r,
    	s: old_count_s + count_s,
    	t: old_count_t + count_t,
    	u: old_count_u + count_u,
    	v: old_count_v + count_v,
    	w: old_count_w + count_w,
    	x: old_count_x + count_x,
    	y: old_count_y + count_y,
    	z: old_count_z + count_z
    });
}
});
}//end of if
else{
		$("#errors").html("Errors: "+errors);
		$("#speed").html("Speed: "+wpm);
		$("#stat_error").html("couldn't calculate");
		$("#stat_speed").html("couldn't calculate");
		$("#stat_time").html("couldn't calculate");
		$("#stats_container").css("display","flex");
}
		return;
	}

	function startTest(){
		 startTime=new Date().getTime()
	}
	function endTest(){
		endTime=new Date().getTime();
		totalTime=Math.round((endTime-startTime)/1000);
		wpm=Math.round((((len[len.length-1])/5)/totalTime)*60);
		if(wpm>=10&&wpm<=100&&totalTime<200){
    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
  			for(var key in textData)
		{
			count_letters(textData[key]);
		}

  	db.collection('users').doc(user_name).collection('keys').doc('keyCount').get().then(function(doc) {
		old_count_a = doc.data().a;
		old_count_b = doc.data().b;
		old_count_c = doc.data().c;
		old_count_d = doc.data().d;
		old_count_e = doc.data().e;
		old_count_f = doc.data().f;
		old_count_g = doc.data().g;
		old_count_h = doc.data().h;
		old_count_i = doc.data().i;
		old_count_j = doc.data().j;
		old_count_k = doc.data().k;
		old_count_l = doc.data().l;
		old_count_m = doc.data().m;
		old_count_n = doc.data().n;
		old_count_o = doc.data().o;
		old_count_p = doc.data().p;
		old_count_q = doc.data().q;
		old_count_r = doc.data().r;
		old_count_s = doc.data().s;
		old_count_t = doc.data().t;
		old_count_u = doc.data().u;
		old_count_v = doc.data().v;
		old_count_w = doc.data().w;
		old_count_x = doc.data().x;
		old_count_y = doc.data().y;
		old_count_z = doc.data().z;
		//console.log(doc.data().a);
		db.collection('users').doc(user_name).collection('errors_and_speed').doc('sample'+String(sample_count)).set({
    	error : errors,
    	speed : wpm
    });
		showstats();
		db.collection('users').doc(user_name).update({samplecount: sample_count+1});
		db.collection('users').doc(user_name).update({speedsum: speed_sum+wpm});
		var a = (speed_sum+wpm)/(sample_count+1);
		var b = a.toFixed(2);
	 	var avg = Number(b);
	 	db.collection('users').doc(user_name).update({avgsum: avg});
	});
  } //end of if
  else showstats();
});
		}
}

	$textarea.keydown(function(event){
		if(event.keyCode>=65 && event.keyCode<=90){
			var str="#"+String(event.keyCode);
			$(".letter").filter(str).click().css(
         "background","blue"
				);
		}else if(event.keyCode>=5 && event.keyCode<=32){
			var str="#"+String(event.keyCode);
			$("ul li").filter(str).click().css(
         "background","#FFE297"
				);
			return false;
		}else{
		var str="#"+String(event.keyCode);
		$(".symbol").filter(str).click().css(
         "background","blue"
		         );
	    }
	});

	$textarea.keyup(function(event){
		if(event.keyCode>=65 && event.keyCode<=90){
			var str="#"+String(event.keyCode);
			$(".letter").filter(str).css(
         "background","#fff"
				);
		}
		else if(event.keyCode>=5 && event.keyCode<=32){
			var str="#"+String(event.keyCode);
			$("ul li").filter(str).css(
         "background","#fff"
				);
		}else{
		var str="#"+String(event.keyCode);
		$(".symbol").filter(str).css(
         "background","#fff");
	    }
	});
		}
	}