// 現在チェック対象の文字インデックス
var current_char_index;


// 初期読み込み時、タグを表示。
$(document).ready(function(){
    if(check() > 0){
		//存在するときの処理
	}else{
		//存在しないときの処理
		create_span();
		current_char_index = 0;
	}
});
  
function key_event() {
	// alert(document.getElementById("typing_tag").innerHTML);
	// alert(document.getElementById("typing_tag").innerHTML.length);
	if(check() > 0){
		//存在するときの処理
		$('#key_down').html($('#input_text').html());
		judge();
		
	}else{
		//存在しないときの処理
		create_span();
		alert("生成しました");
	}
}

//　スパン要素を生成する
function create_span(begin){
	if ( begin == undefined ) begin = 0;
	
	for (var i = begin; i < document.getElementById("typing_tag").innerHTML.length; i++) {
		
		var tag_character = document.getElementById("typing_tag").innerHTML;
		var single_tag = "<span id = tag"+[i]+">"+tag_character.charAt([i])+"</span>";
		
        $('#test').append(single_tag);
        
	};
}

function remove_all_span(){
	console.log('remove_all_span');
	$('#test').html('');
}

function return_type(){
	var key_down_string = document.getElementById("key_down").innerHTML;
	console.log('key_down_strning = '+key_down_string);
	
	key_down_string = key_down_string.replace(/^\s+/, "");
	var last_character = (key_down_string.length) -1;
	var get_character = key_down_string.charAt(last_character);
	alert(get_character);
	return get_character;
}

function clear_tag() {
	
	for (var i=0; i < document.getElementById("typing_tag").innerHTML.length; i++) {
		$("#tag"+[i]).remove();
	}
	
	$("#key_down"+[i]).remove();
}

function judge() {
	if (check == 0){
		
	} else {
		var ch_index = 0;
		if ( $('#tag0').val() == return_type()){
			//$("#tag0").remove();
			remove_all_span();
			current_char_index++;
			create_span(current_char_index);
			alert(current_char_index + "文字目の文字を消去しました。");
		}	
	}
	
	/*
	for (var i=0; i < check(); i++) {

		if(document.getElementById("tag"+[i]).innerHTML == return_type()){
			$("#tag"+[i]).remove();
			alert(($("#tag"+[i])) + "を消去しました。");
			break;
		}else{
			alert("MISS");
		}
		
	}*/
}

function check(){
	var div_element = document.getElementById("test");
	var element_num = div_element.getElementsByTagName("span");
	var len = element_num.length;
	return len;
}