chrome.runtime.onMessage.addListener(function(t,e,o){if("init"===t.type&&!document.querySelector("#draggablePopup_d")){t=document.createElement("div");t.id="draggablePopup",t.innerHTML=`
		<div id="draggablePopup_d" style="box-shadow: 1px 0px 20px 3px grey; width:890px; z-index: 200000">
		<div id="draggablePopup_header" style="display:inline-block; width:890px; height: 15px;"> 
		<img
			id="draggablePopup_close"
			style="display: inline-block; width: 25px; height: 25px; margin: 1px; color: black; position: absolute; top: 25px; right: 19px;"
			src="${chrome.runtime.getURL("lib/assets/close.svg")}"/>
		</div> 
		<iframe scrolling="no" style="height: 433px; width: 890px;margin-bottom: -7px; margin-top: -10px" frameborder="0" src="${chrome.runtime.getURL("lib/html/table.html")}"></iframe>
		<style>
			#draggablePopup_d {
				width:650px;
				position: fixed;
				right:10px;
				top:10px;
				background-color: #f1f1f1;
				text-align: right;
			}
			#draggablePopup_header {
				cursor: move;
				background-color: #fde33b;
				color: #fff;
			}
			#draggablePopup_close{
				cursor:pointer;
			}
			</style>
		</div>
	`;let e=t.querySelector("#draggablePopup_d");document.body.appendChild(e),!function(t){var o=0,n=0,i=0,r=0;(document.getElementById(t.id+"_header")?document.getElementById(t.id+"_header"):t).addEventListener("mousedown",e);function e(e){(e=e||window.event).preventDefault(),t.querySelector("iframe").style.pointerEvents="none",i=e.clientX,r=e.clientY,document.addEventListener("mouseup",l),document.body.addEventListener("mouseleave",l),document.addEventListener("mousemove",d)}function d(e){(e=e||window.event).preventDefault(),o=i-e.clientX,n=r-e.clientY,i=e.clientX,r=e.clientY,t.style.top=t.offsetTop-n+"px",t.style.left=t.offsetLeft-o+"px",t.style.right="unset"}function l(){document.removeEventListener("mouseup",l),document.removeEventListener("mousemove",d),document.body.removeEventListener("mouseleave",l),t.querySelector("iframe").style.pointerEvents="unset"}}(e),e.querySelector("#draggablePopup_close").addEventListener("click",function(){e.remove()})}});