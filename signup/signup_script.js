function validate() {
		var uname=$("#name").val().trim();
		var email=$("#email").val().trim();
		var pass=$("#signup_password").val().trim();
		var nameError=emailError=passError=true;
		var uname_reg=/^[a-zA-Z0-9\s]+$/;
		if (uname_reg.test(uname)) {
			nameError=false;
		}
		else{
			
			$("#name_label").text("**Enter Valid Username");
		}
		var email_reg=/^[\w\W]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if (email_reg.test(email)) {
			emailError=false;
		}
		else{
			$("#email_label").text("**Enter Valid Email-id");
		}
		var pass_reg=/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
		if (pass_reg.test(pass)) {
			passError=false;
		}
		else{
			alert("Your Password Should contain at least one capital letter, one small letter, one number, one special character and minimum length is 8.")
			//$("#pass_label").text("**Enter Valid Password");
		}
		if((nameError|| emailError || passError) == true){
			return false;
		}
		else{
			return true;
		}
	}

        $('#feed').click(function(){
    		$('#Feedback_container').css("display","flex");
    		$('#feed_text').focus();
    	});
    	$('#close').click(function(){
    		$('#Feedback_container').css("display","none");
    		$(".textarea").focus();
    		$("#feed_text").val("");
    		
    	});
    	$("#verify").click(function(){
    		window.location.href="../signin/sign_in.html";
    	});

$(function(){
const signupform = document.querySelector('#sign_up_form');
  signupform.addEventListener('submit', (e) => {
    e.preventDefault();
    const mail = document.getElementById('email').value;
    const passw = document.getElementById('signup_password').value;
    
    auth.createUserWithEmailAndPassword(mail, passw).then(cred =>{
      sendVerificationEmail();  
    }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error: "+ errorMessage);
  });
       console.log("form clicked")
      db.collection('users').doc(signupform.nameadd.value).set({
      email: signupform.emailadd.value,
      name: signupform.nameadd.value,
      password: signupform.passadd.value,
      samplecount: 0,
      speedsum : 0,
      avgsum : 0
    });
    db.collection('users').doc(signupform.nameadd.value).collection('keys').doc('keyCount').set({
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0,
      f: 0,
      g: 0,
      h: 0,
      i: 0,
      j: 0,
      k: 0,
      l: 0,
      m: 0,
      n: 0,
      o: 0,
      p: 0,
      q: 0,
      r: 0,
      s: 0,
      t: 0,
      u: 0,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0
    });

  });
  const sendVerificationEmail=function(){
    auth.currentUser.sendEmailVerification().then(()=>{
     $(".pre_load").fadeIn(10);
     $(".pre_load").fadeOut(1000);
      signupform.reset();
      $("#sign_up_div1").css("display","none")
      $("#mail_verify").css("display","block");
    }).catch(error=>{
      console.log(error);
    });

  }
});
// db.collection('users').get().then((snapshot) => {
// 	snapshot.docs.forEach(doc => {
// 		console.log(doc.data());
// 	});
// });
//var user_name;
/*const signupform = document.querySelector('#sign_up_form');
signupform.addEventListener('submit', (e) => {
	//user_name = signupform.nameadd.value;
    e.preventDefault();
    db.collection('users').doc(signupform.nameadd.value).set({
    	email: signupform.emailadd.value,
    	name: signupform.nameadd.value,
    	password: signupform.passadd.value
    });
    localStorage.setItem("samples",0);
    db.collection('users').doc(signupform.nameadd.value).collection('keys').doc('keyCount').set({
    	a: 0,
    	b: 0,
    	c: 0,
    	d: 0,
    	e: 0,
    	f: 0,
    	g: 0,
    	h: 0,
    	i: 0,
    	j: 0,
    	k: 0,
    	l: 0,
    	m: 0,
    	n: 0,
    	o: 0,
    	p: 0,
    	q: 0,
    	r: 0,
    	s: 0,
    	t: 0,
    	u: 0,
    	v: 0,
    	w: 0,
    	x: 0,
    	y: 0,
    	z: 0
    });*/
