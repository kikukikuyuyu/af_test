// 初期読み込み時、タグを表示。
$(document).ready(function(){
    if($("#tag0").size() > 0){
		//存在するときの処理
	}else{
		//存在しないときの処理
		create_span();
	}
});
  
function key_event() {
	// alert(document.getElementById("typing_tag").innerHTML);
	// alert(document.getElementById("typing_tag").innerHTML.length);

	if($("#tag0").size() > 0){
		//存在するときの処理
		judge();
	}else{
		//存在しないときの処理
		create_span();
		

	}
}

//　スパン要素を生成する
function create_span(){
	for (var i=0; i < document.getElementById("typing_tag").innerHTML.length; i++) {
		
		var tag_character = document.getElementById("typing_tag").innerHTML;
		var single_tag = "<span id = tag"+[i]+">"+tag_character.charAt([i])+"</span>";
		
        $('#test').append(single_tag);
        
	};
}

function return_type(){
	var last_character = (document.getElementById("key_down").innerHTML.length) -1;
	var get_character = document.getElementById("key_down").innerHTML.charAt(last_character);
	
	return get_character;
	
}

function clear_tag() {
	
	for (var i=0; i < document.getElementById("typing_tag").innerHTML.length; i++) {
		$("#tag"+[i]).remove();
	}
	
	$("#key_down"+[i]).remove();
}

function judge (get_character) {
	for (var i=0; i < document.getElementById("typing_tag").innerHTML.length; i++) {
		if(document.getElementById("tag"+[i]).innerHTML == return_type()){
			$("#tag"+[i]).remove();
			bleak;
		}
	}
}