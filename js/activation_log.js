//点击存为模版按钮跳转
activation();

function activation(){
	$(".content_input button").click(function(){
		self.location='select_template.html';
	});
}
