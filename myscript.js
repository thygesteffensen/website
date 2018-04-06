$(document).ready(function(){
	$("#showbutton").click(function(){
		$("#show").hide(1000);
		$("#create").show(1000);
	});
});

$(document).ready(function(){
	$("#showuser").click(function(){
		$("#show").show(1000);
		$("#create").hide(1000);
	});
});

function onload(){
	//$('body > :not(#login)').hide(); //hide all nodes directly under the body
	$("#logpage").hide();
	$("#create").hide();
	$("#show").hide();
	$("#navbar").hide();
	document.bgColor="#B10101"
}

function loginfunc(){
	$("#navbar").show();
	$("#login").hide(1000);
	$("#show").show(1000);
}