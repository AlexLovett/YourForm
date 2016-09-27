var YourForm = function(){
	var now = new Date();
	var Year = now.getFullYear();
	var Hour = now.getHours();
	var Minute = now.getMinutes();
	var Second = now.getSeconds();
	function initPage(){
		//给右边所有的组件绑定拖拽事件
		var formGrop = document.getElementsByClassName("form-group");
		for(var i = 0;i < formGrop.length;i++){
			formGrop[i].ondragstart = function(e){
				drag(e);
			}
		}
		/*$(".form-group").on("mousedown",function(e){
			var that = $(this);
			var a = '<div class="form-group" draggable="true">' + that.html() + '</div>';
			if(that[0].nextElementSibling == null){
				that.parent().append(a);
			}else{
				$(that[0].nextElementSibling).before(a);
			}
			document.getElementById("drag1").ondragstart = function(e){
				drag(e);
			}
		});*/
		
		document.getElementById("formtarget").ondragover = function(e){
			allowDrop(e);
		}
		document.getElementById("formtarget").ondrop = function(e){
			drop(e);
		}
	}
	
	//放下元素
	function allowDrop(e){
		e.preventDefault();
	}
	
	//拖动元素
	function drag(e){
		e.dataTransfer.setData("Text",e.target.id);
	}
	
	//放下元素后执行操作
	function drop(e){
		e.preventDefault();
		var $Input = $("#Input");
		var data = e.dataTransfer.getData("Text");
		var origin = document.getElementById(data);
		var dynamicId = 'ID'+ Year + Hour + Minute + Second;
		$(origin).before('<div class="form-group" draggable="true" id="'+ dynamicId +'">'+ $(origin).html() +'</div>')
		document.getElementById(dynamicId).ondragstart = function(e){
			drag(e);
		}
		e.target.appendChild(origin);
		origin.removeAttribute("id");
		$("#codeBox").html($("#formtarget").html());
	}
	
	
	return{
		init:function(){
			initPage();	
		}
	}
}();
