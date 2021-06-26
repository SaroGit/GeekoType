function validate() {
	    // $("#username").focus();
		var uname=$("#username").val().trim();
		var pass=$("#password").val().trim();
		var nameError=passError=true;
		var uname_reg=/^[\W\w]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if (uname_reg.test(uname)) {
			nameError=false;
		}
		else{
			
			$("#text_label").text("**Enter Valid Id");
		}
		if (pass.length!==0) {
			passError=false;
		}
		else{
			$("#pass_label").text("**Your Password must be filled.");
		}
		if((nameError|| passError) == true){
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
