// 获取样式 参数obj：元素节点 ，name：属性名 
// 返回是 字符串

function getCss(obj,name) {
		if (obj.currentStyle) {
			// 判断是不是旧版本
			return obj.currentStyle[name];
		}else{
			
			// [name 是类似于 left 一样的]
			return getComputedStyle(obj)[name];
		}
}
//加载完成执行某函数 func
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;

	}else{
		window.onload = function (argument) {
			oldonload();
			func();
		}
	}
}
// 相对应的是insertBefore
function insertAfter (newElemnet, targetElement) {
	var parent = targetElement.parentNode;
	console.log(parent);
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElemnet);
	}
	else{
		parent.insertBefore(newElemnet,targetElement.nextSibling);
	}
}