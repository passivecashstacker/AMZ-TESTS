var d,s=[];function c(e){var t="https://www.amazon.com/dp/"+e.asin.replace(/[^a-zA-Z0-9]/g,""),r=[`<td td-order="0" style="text-align: center;"><a href="${t}" target="_blank"  rel="noopener"><img src="${e.image}" style="max-height:40px; max-width:30px ;"></a></td>`,`<td td-order="1" style="font-size: 15px; text-align: center;">${e.score}</td>`,`<td td-order="2" style="font-size: 13px; text-align: center; white-space: nowrap;"><a href="${t}" title="${e.title}" target="_blank">${e.title.substr(0,12)}</a></td>`,`<td td-order="3" style="font-size: 15px; text-align: center;">${e.price<0?"Not Available":"$"+e.price}</td>`,`<td td-order="4" style="font-size: 15px; text-align: center;">${e.influencer_commission}%</td>`,`<td td-order="5" style="font-size: 15px; text-align: center;">${e.price<0?"Not Available":"$"+e.influencer_commission_dollar}</td>`,`<td td-order="6" style="font-size: 15px; text-align: center;">${e.affiliate_commission}%</td>`,`<td td-order="7" style="font-size: 15px; text-align: center;">${e.price<0?"Not Available":"$"+e.affiliate_commission_dollar}</td>`,`<td td-order="8" style="font-size: 15px; text-align: center;">${e.rating}</td>`,`<td td-order="9" style="font-size: 15px; text-align: center;">${e.reviews.toLocaleString("en-US")}</td>`,`<td td-order="10" style="font-size: 15px; text-align: center;">${0!=e.videosAvailable?"Yes":"No"}</td>`,`<td td-order="11" style="font-size: 15px; text-align: center;">${e.FruitDiv.find(e=>"ff-videoSlotsAvailable"==e.id).innerText} </td>`,`<td td-order="12" style="font-size: 15px; text-align: center;">${e.FruitDiv.find(e=>"ff-videosByInfluencer_inCarousel"==e.id).innerText}</td>`],o=document.createElement("tr"),n=document.querySelectorAll("[order]");for(let e=0;e<n.length;e++){var i=n[e];o.insertAdjacentHTML("beforeend",r[i.getAttribute("order")])}return`
    <tr style="height: 60px;">
    ${o.innerHTML}
    </tr>
  `}chrome.runtime.onMessage.addListener(function(t,e,r){var o,n,i,a,l;return"obj"===t.type&&e.tab.id==d&&(o=t.data,-1==s.findIndex(e=>e.asin==o.asin))&&(s.push(o),$("table").DataTable().row.add($(c(o))).draw()),"objScoreUpdated"===t.type&&e.tab.id==d&&((e=s.find(e=>e.asin==t.prodObj.asin)).score=t.prodObj.score,n=e,i=$("table").DataTable(),e=[...document.querySelectorAll("[order]")],a=e.findIndex(e=>"2"==e.getAttribute("order")),l=e.findIndex(e=>"1"==e.getAttribute("order")),i.rows()[0].forEach(function(e){var e=i.row(e),t=e.data();-1!=t[a].indexOf(n.asin)&&(t[l]=n.score,e.data(t).draw())})),!0}),$(document).ready(function(){for(var n=$("table").DataTable(),e=($("a.toggle-vis").on("click",function(e){e.preventDefault();var t=$(this).text();n.columns().every(function(){var e=this;$(e.header()).text().trim()===t.trim()&&e.visible(!e.visible())})}),n.on("column-reorder",function(e,t,r){var o=n.order();console.log(r),console.log(o)}),$("table").css("visibility","visible"),document.querySelectorAll(".toggle-vis")),t=0;t<e.length;t++)e[t].addEventListener("click",function(){this.classList.toggle("firstClick"),this.classList.toggle("secondClick")})}),document.querySelectorAll(".dropdown").forEach(e=>{var t=e.querySelector(".select");const r=e.querySelector(".menu");t.addEventListener("click",()=>{r.classList.toggle("menu-open")})}),document.addEventListener("DOMContentLoaded",function(){}),document.querySelector("#logout").addEventListener("click",async e=>{e.preventDefault(),console.log("LOGOUT"),chrome.runtime.sendMessage({type:"logout"}).then(async()=>{await chrome.storage.local.remove("isLoggedIn"),window.location.href="login.html"})});document.querySelector("#belek").addEventListener("click",async e=>{var t=(await chrome.storage.local.get("billingPortal"))["billingPortal"];console.log(t),t&&chrome.tabs.create({url:t})}),chrome.tabs.query({active:!0,currentWindow:!0},async function(e){var t=(await chrome.storage.local.get("isLoggedIn"))["isLoggedIn"];t?0==(t=await chrome.runtime.sendMessage({type:"check"})).isSuccess?(await chrome.storage.local.remove("isLoggedIn"),window.location.href="login.html"):0==t.isSubscribed?window.location.href=chrome.runtime.getURL("lib/html/stripe.html"):!0===t.isSubscribed&&await chrome.storage.local.set({...t}):(await chrome.storage.local.remove("isLoggedIn"),window.location.href=chrome.runtime.getURL("lib/html/login.html")),null!=e[0]&&-1!=e[0].url.indexOf("amazon.com")&&(d=e[0].id,chrome.tabs.sendMessage(d,{type:"Product_data"},function(e){if(null!=e){s=e.Product_data;for(let e=0;e<s.length;e++){var t=s[e];$("table").DataTable().row.add($(c(t))).draw()}}}))});$("table").DataTable({columnDefs:[{orderable:!1,targets:0},{orderable:!1,targets:2}],order:[[1,"desc"]],bPaginate:!1,bFilter:!1,paging:!1,searching:!1,colReorder:{realtime:!1}});