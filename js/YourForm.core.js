var YourForm = function(){
	//获取独一无二的ID
	function getID(){
		var now = new Date();
		var Year = now.getFullYear();
		var Month = now.getMonth();
		var Hour = now.getHours();
		var Minute = now.getMinutes();
		var Second = now.getSeconds();
		var Millsecond = now.getMilliseconds();
		return ID = 'ID'+ Year + Month + Hour + Minute + Second + Millsecond;
	}

	//初始化页面
	function initPage(){
		//给右边所有的组件绑定拖拽事件
		var formGrop = document.getElementsByClassName("dragele");
		for(var i = 0;i < formGrop.length;i++){
			formGrop[i].ondragstart = function(e){
				drag(e);
			}
		}

		//元素放下的目标区域
		document.getElementById("formtarget").ondragover = function(e){
			allowDrop(e);
		}
		//元素放下时执行
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
		var dynamicId = getID();
		var $origin = $(origin);
		var Type = $origin.attr("data-yf-type");
		switch(Type){
			case 'input':
			$origin.before('<div class="form-group" draggable="true" id="'+ dynamicId +'" data-yf-type="input">'+ $(origin).html() +'</div>');
			break;
			case 'radio':
			$origin.before('<div class="form-group" draggable="true" id="'+ dynamicId +'" data-yf-type="radio">'+ $(origin).html() +'</div>');
			break;
			case 'select':
			$origin.before('<div class="form-group" draggable="true" id="'+ dynamicId +'" data-yf-type="select">'+ $(origin).html() +'</div>');
			break;
			case 'button':
			$origin.before('<button type="button" class="btn btn-default dragele" draggable="true" id="'+ dynamicId +'" data-yf-type="button">'+ $(origin).html() +'</button>');
			break;
			case 'iconbutton':
			$origin.before('<a href="javascript:void(0);" class="btn btn-info dragele" draggable="true" id="'+ dynamicId +'" data-yf-type="iconbutton">'+ $(origin).html() +'</a>');
			break;
		}
		document.getElementById(dynamicId).ondragstart = function(e){
			drag(e);
		}
		e.target.appendChild(origin);
		origin.removeAttribute("id");
		origin.removeAttribute("draggable");
		$(origin).removeClass("dragele");
		$("#codeBox").html($("#formtarget").html());
		addAttr(origin);
	}

	//给生成的表单元素添加自定义属性和样式
	function addAttr(target){
		var $formtarget = $("#formtarget");
		var $target = $(target);
		var $setAttrBox = $("#setAttrBox");
		var _html = '' ;
		//为新添加绑定事件
		$target.off().on("click",function(){
			var that = $(this);
			var _this = this;
			var Type = this.getAttribute("data-yf-type");
			switch(Type){
				case 'input':
				_html = '';
				$setAttrBox.html();
<<<<<<< HEAD

=======
>>>>>>> origin/master
				//获取设置属性的框的Top值
				var Top = _this.offsetTop + _this.clientHeight/2 - $setAttrBox.height()/2;
				$setAttrBox.css({"top":Top,"right":-$setAttrBox.width()-10}).fadeIn();
<<<<<<< HEAD

=======
>>>>>>> origin/master
				//保存属性设置
				$("#save").on("click",function(){
					//获取属性值
					var $defaultIn = $("#defaultIn").val();
					var $defaultId = $("#defaultId").val();
					var $labelText = $("#labelText").val();
					var $placeholder = $("#placeholder").val();
					var $customAttr = $("#customAttr").val();
					var $customAttrArr = $customAttr.indexOf("；")==-1?$customAttr.split(";"):$customAttr.split("；");
					var $inputsize = $("#inputsize").val();
					var childInput = that.find("input");
					var customAttrSingle;
					that.children("label").html($labelText);
					childInput.attr({"name":$defaultIn,"placeholder":$placeholder,"id":$defaultId});
					for(var i=0;i<$customAttrArr.length;i++){
						customAttrSingle = $customAttrArr[i].split("=");
						childInput.attr(customAttrSingle[0],customAttrSingle[1]);
					}
					childInput.attr("class","").addClass('form-control '+$inputsize);
					$("#codeBox").html($("#formtarget").html());
					$setAttrBox.fadeOut();
				});

				//取消按钮
				$("#cancel").on("click",function(){
					$setAttrBox.fadeOut();
				});
				break;
				case 'Radio':
				break;
			}
		});
	}


	return{
		init:function(){
<<<<<<< HEAD
			initPage();
=======
			initPage();	
			$("#select2_sample5").select2({
            	tags: ["red", "green", "blue", "yellow", "pink"]
       		});
>>>>>>> origin/master
		}
	}
}();
