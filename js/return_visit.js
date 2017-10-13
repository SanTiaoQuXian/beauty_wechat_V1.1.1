//点击全文展示
articleClick();

function articleClick(){
	var obj = document.getElementById('article');
	var total_height =  obj.scrollHeight;//文章总高度
	var show_height = 146;//定义原始显示高度
	if(total_height>show_height){
		$("#btn").click(function(){
			obj.style.height = total_height + 'px';
		    btn.style.display = 'none';
		});
	}
	$("#article p").click(function(){
		obj.style.height = 146 + 'px';
		btn.style.display = 'block';
	});
}
