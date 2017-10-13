$(function(){
	//点击信息模板内容显示到上级页面中 
	$.ajax({
		type:"get",
		url:"js/select_template.json",
		success:function(data){
			console.info(data);
			$('#tab1 textarea').html(data[0].text1);
			$('#tab2 textarea').html(data[0].text2);
			$('#tab3 textarea').html(data[0].text3);
		}
	});
	
	$("#tab1 textarea").click(function(){
		console.log(11);
		self.location='activation_log.html';
	});
	$("#tab2 textarea").click(function(){
		console.log(11);
		self.location='activation_log.html';
	});
	$("#tab3 textarea").click(function(){
		console.log(11);
		self.location='activation_log.html';
	});
});

