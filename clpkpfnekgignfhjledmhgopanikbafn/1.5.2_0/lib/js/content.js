var c,d,a=[{category:"Amazon Games",percentage:"20.00%"},{category:"Luxury Beauty",percentage:"10.00%"},{category:"Luxury Stores Beauty",percentage:"10.00%"},{category:"Amazon Explore",percentage:"10.00%"},{category:"Digital Music",percentage:"5.00%"},{category:"Physical Music",percentage:"5.00%"},{category:"Handmade",percentage:"5.00%"},{category:"Digital Videos",percentage:"5.00%"},{category:"Physical Books",percentage:"4.50%"},{category:"Kitchen",percentage:"4.50%"},{category:"Automotive",percentage:"4.50%"},{category:"Amazon Fire Tablet Devices",percentage:"4.00%"},{category:"Amazon Kindle Devices",percentage:"4.00%"},{category:"Amazon Fashion Women's",percentage:"4.00%"},{category:"Men's & Kids Private Label",percentage:"4.00%"},{category:"Luxury Stores Fashion",percentage:"4.00%"},{category:"Apparel",percentage:"4.00%"},{category:"Amazon Cloud Cam Devices",percentage:"4.00%"},{category:"Fire TV Edition Smart TVs",percentage:"4.00%"},{category:"Amazon Fire TV Devices",percentage:"4.00%"},{category:"Amazon Echo Devices",percentage:"4.00%"},{category:"Ring Devices",percentage:"4.00%"},{category:"Watches",percentage:"4.00%"},{category:"Jewelry",percentage:"4.00%"},{category:"Luggage",percentage:"4.00%"},{category:"Shoes",percentage:"4.00%"},{category:"Handbags & Accessories",percentage:"4.00%"},{category:"Toys",percentage:"3.00%"},{category:"Furniture",percentage:"3.00%"},{category:"Home",percentage:"3.00%"},{category:"Home Improvement",percentage:"3.00%"},{category:"Lawn & Garden",percentage:"3.00%"},{category:"Pets Products",percentage:"3.00%"},{category:"Headphones",percentage:"3.00%"},{category:"Beauty",percentage:"3.00%"},{category:"Musical Instruments",percentage:"3.00%"},{category:"Business & Industrial Supplies",percentage:"3.00%"},{category:"Outdoors",percentage:"3.00%"},{category:"Tools",percentage:"3.00%"},{category:"Sports",percentage:"3.00%"},{category:"Baby Products",percentage:"3.00%"},{category:"Amazon Coins",percentage:"3.00%"},{category:"PC",percentage:"2.50%"},{category:"PC Components",percentage:"2.50%"},{category:"DVD & Blu-Ray",percentage:"2.50%"},{category:"Televisions",percentage:"2.00%"},{category:"Digital Video Games",percentage:"2.00%"},{category:"Amazon Fresh",percentage:"1.00%"},{category:"Physical Video Games & Video Game Consoles",percentage:"1.00%"},{category:"Grocery",percentage:"1.00%"},{category:"Health & Personal Care",percentage:"1.00%"},{category:"Gift Cards",percentage:"0.00%"},{category:"Wireless Service Plans",percentage:"0.00%"},{category:"Alcoholic Beverages",percentage:"0.00%"},{category:"Digital Kindle Products purchased as a subscription",percentage:"0.00%"},{category:"Food prepared and delivered from a restaurant",percentage:"0.00%"},{category:"Amazon Appstore",percentage:"0.00%"},{category:"Prime Now",percentage:"0.00%"},{category:"Amazon Pay Places",percentage:"0.00%"},{category:"All Other Categories",percentage:"4.00%"}],i=[{category:"amazon-tablets",percentage:"4.00%",realCategory:"Amazon Kindle Devices"},{category:"biss",percentage:"3.00%",realCategory:"Business & Industrial Supplies"}],r=[{category:"Luxury Beauty",percentage:"5.00%"},{category:"Luxury Stores Beauty",percentage:"5.00%"},{category:"Amazon Coins",percentage:"5.00%"},{category:"Furniture",percentage:"4.00%"},{category:"Home",percentage:"4.00%"},{category:"Home Improvement",percentage:"4.00%"},{category:"Lawn & Garden",percentage:"4.00%"},{category:"Pets Products",percentage:"4.00%"},{category:"Pantry",percentage:"4.00%"},{category:"Headphones",percentage:"3.00%"},{category:"Beauty",percentage:"3.00%"},{category:"Musical Instruments",percentage:"3.00%"},{category:"Business & Industrial Supplies",percentage:"3.00%"},{category:"Outdoors",percentage:"2.75%"},{category:"Tools",percentage:"2.75%"},{category:"Digital Music",percentage:"2.50%"},{category:"Grocery",percentage:"2.50%"},{category:"Physical Music",percentage:"2.50%"},{category:"Handmade",percentage:"2.50%"},{category:"Digital Videos",percentage:"2.50%"},{category:"Physical Books",percentage:"2.25%"},{category:"Health & Personal Care",percentage:"2.25%"},{category:"Sports",percentage:"2.25%"},{category:"Kitchen",percentage:"2.25%"},{category:"Automotive",percentage:"2.25%"},{category:"Baby Products",percentage:"2.25%"},{category:"Amazon Fire Tablet Devices",percentage:"2.00%"},{category:"Amazon Kindle Devices",percentage:"2.00%"},{category:"Amazon Fashion Women's",percentage:"2.00%"},{category:"Men's & Kids Private Label",percentage:"2.00%"},{category:"Apparel",percentage:"2.00%"},{category:"Amazon Cloud Cam Devices",percentage:"2.00%"},{category:"Fire TV Edition Smart TVs",percentage:"2.00%"},{category:"Amazon Fire TV Devices",percentage:"2.00%"},{category:"Amazon Echo Devices",percentage:"2.00%"},{category:"Ring Devices",percentage:"2.00%"},{category:"Watches",percentage:"2.00%"},{category:"Jewelry",percentage:"2.00%"},{category:"Luggage",percentage:"2.00%"},{category:"Shoes",percentage:"2.00%"},{category:"Handbags & Accessories",percentage:"2.00%"},{category:"Amazon Fresh",percentage:"1.50%"},{category:"Toys",percentage:"1.50%"},{category:"PC",percentage:"1.25%"},{category:"PC Components",percentage:"1.25%"},{category:"DVD & Blu-Ray",percentage:"1.25%"},{category:"Televisions",percentage:"1.00%"},{category:"Digital Video Games",percentage:"1.00%"},{category:"Physical Video Games & Video Game Consoles",percentage:"0.50%"},{category:"Gift Cards",percentage:"0.00%"},{category:"Wireless Service Plans",percentage:"0.00%"},{category:"Alcoholic Beverages",percentage:"0.00%"},{category:"Digital Kindle Products purchased as a subscription",percentage:"0.00%"},{category:"Food prepared and delivered from a restaurant",percentage:"0.00%"},{category:"Amazon Appstore",percentage:"0.00%"},{category:"Prime Now",percentage:"0.00%"},{category:"Amazon Pay Places",percentage:"0.00%"},{category:"Prime Wardrobe Purchases",percentage:"0.00%"},{category:"All Other Categories",percentage:"2.00%"}],n=[{category:"amazon-tablets",percentage:"2.00%",realCategory:"Amazon Kindle Devices"},{category:"biss",percentage:"3.00%",realCategory:"Business & Industrial Supplies"}],p=[];let o=[];var t,s=`
	<div class="fruitDetails fruit-infos" id="detailsProductExt" >
		<div id="card_title" style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 8px;">
			<div></div>
			<div>
				<img style="width: 22px; margin-right: 8px;" src="${chrome.runtime.getURL("lib/assets/banana.png")}"/>
				<span id="ff-score" style="font-size: 20px"></span>
			</div>
			<div style="">
				<div class="allmenu">
				<div class="divselected">
						<img class="icon" src="${chrome.runtime.getURL("lib/assets/column-icon.png")}"/>
					</div>
				</div>
			</div>
		</div>
		<div class="fruit-infos grid-cont">
			<div id="card_asin_container" style="padding: 2px 12px">
				<span class="inside-left">ASIN:</span>
				<span id="ff-asin">
			</div>
			<div id="card_rating_container" style="padding: 2px 12px">
				<span class="inside-left">Rating:</span>
				<span id="ff-rating"></span>
			</div>
			<div id="card_video_carousel" style="padding: 2px 12px" class="inside-left">
				<div>
					<span>Video in carousel:</span>
					<ul type="circle" id="card_video_carousel_list">
						<li>Open video carousel slots</li>
						<li>Influencer videos</li>
					</ul>
				</div>
				<div id="values" style="display: flex; flex-direction: column; align-items: center;">
					<img style="position: relative; top: 8px; width: 12px; height: 12px;" id="ff-videoAvailable"/>
					<div style="display: flex; flex-direction: column; align-items: center; margin-top: 11px;">
						<span id="ff-videoSlotsAvailable"></span>
						<span id="ff-videosByInfluencer_inCarousel"></span>
					</div>
				</div>
			</div>
			<div id="card_low_stock" style="padding: 2px 12px">
				<span class="inside-left">Low stock:</span>
				<span id="ff-isLowStock"></span>
			</div>
			<div id="card_commission_percentage" style="padding: 2px 12px">
				<span class="inside-left">Influencer Commission %:</span>
				<span id="ff-commissionPercentage"></span>
			</div>

			<div id="card_commission_dollar" style="padding: 2px 12px">
				<span class="inside-left">Influencer Commission $:</span>
				<span id="ff-commissionDollar"></span>
			</div>
			<div id="card_affiliate_commision" style="padding: 2px 12px">
				<span class="inside-left">Affiliate Commission %:</span>
				<span id="ff-Affiliate_commision"></span>
			</div>
			<div id="card_affiliate_dollar" style="padding: 2px 12px">
				<span class="inside-left">Affiliate Commission $:</span>
				<span id="ff-affiliateDollar"></span>
			</div>
			<div id="card_bsr" style="padding: 2px 12px; align-items: flex-start">
				<span class="inside-left">BSR:</span>
				<span id="ff-BSR"></span>
			</div>
			<div id="card_sponsored" style="padding: 2px 12px">
				<span class="inside-left">Sponsored:</span>
				<img id="ff-isSponsored" style="width: 12px; height: 12px;"/>
			</div>
			
			<div id="card_first_available" style="padding: 2px 12px">
				<span class="inside-left">First available:</span>
				<span id="ff-dateFirstAvailable"></span>
			</div>

			<div class="ff-part ff-part2" >
				<div style="display:none">
					<span>Seller videos:</span>
					<span id="ff-videosBySeller_inCarousel"></span>
				</div>
				<div style="display:none">
					<span>Main carousel slots:</span>
					<span id="ff-mainCarouselSlots"></span>
				</div>
			</div>
		</div>
	</div>`,l=`
	<div class="fruitDetails" style="padding: 0px; margin-bottom: 18px;">
		<div class="fruit-infos">
			<div id="card_title" style="padding: 8px 10px; display: flex; align-items: center; justify-content: space-between;">
				<div></div>
				<div>
					<img style="width: 26px;" src="${chrome.runtime.getURL("lib/assets/banana.png")}"/>
					<span id="ff-score" style="font-size: 24px; margin-left: 10px;"></span>
				</div>
				<div style="justify-content: flex-end; float: right">
				<div class="allmenu">
				   <div class="divselected">
						  <img noSponsor="true" class="icon" src="${chrome.runtime.getURL("lib/assets/column-icon.png")}"/>
					</div>
				 </div>
				 </div>





			</div>
			<!--<div class="grid-container grid-cont">-->
			<div class="grid-cont row-inf">
				<div class="grid-item item1" id="card_asin_container">
					<span>ASIN:</span>
					<span class="asindiv1" id="ff-asin">
				</div>
				<div class="grid-item item5" id="card_commission_percentage">
					<span>Influencer Commission %:</span>
					<span id="ff-commissionPercentage"></span>
				</div>
				<div class="grid-item item2" id="card_rating_container">
					<span>Rating:</span>
					<span id="ff-rating"></span>
				</div>
				<div class="grid-item item4" id="card_video_carousel">
					<span>Video in carousel:</span>
					<img style="position: relative; width: 10px; height: 10px;" id="ff-videoAvailable" />
				</div>
				<div class="grid-item item8" id="card_commission_dollar">
					<span>Influencer Commission $:</span>
					<span id="ff-commissionDollar"></span>
				</div>
				<div class="grid-item item3" id="card_first_available">
					<span>First available:</span>
					<span id="ff-dateFirstAvailable"></span>
				</div>
				<div class="grid-item item7" id="card_video_carousel">
					<span>Open video carousel slots:</span>
					<span id="ff-videoSlotsAvailable"></span>
				</div>
				<div class="grid-item item11" id="card_affiliate_commision">
					<span>Affiliate Commission %:</span>
					<span id="ff-Affiliate_commision"></span>
				</div>
				<div class="grid-item item9" id="card_bsr">
					<span>BSR:</span>
					<span id="ff-BSR"></span>
				</div>
				<div class="grid-item item10" id="card_video_carousel">
					<span>Influencer videos:</span>
					<span id="ff-videosByInfluencer_inCarousel"></span>
				</div>
				<div class="grid-item item12" id="card_affiliate_dollar">
					<span>Affiliate Commission $:</span>
					<span id="ff-affiliateDollar"></span>
				</div>
				<div class="grid-item item6" id="card_low_stock">
					<span>Low Stock:</span>
					<span id="ff-isLowStock"></span>
				</div>
			
			
			
				<div class="grid-item item13" id="card_sponsored" style="display:none">
					<span>Sponsored:</span>
					<img id="ff-isSponsored" style="width: 10px; height: 10px;" />
				</div>
			</div>
			
			<div class="ff-part ff-part2">
				<div style="display:none">
					<span>Seller videos:</span>
					<span id="ff-videosBySeller_inCarousel"></span>
				</div>
				<div style="display:none">
					<span>Main carousel slots:</span>
					<span id="ff-mainCarouselSlots"></span>
				</div>
			</div>
		</div>
	</div>`;async function u(){document.querySelector(".dropMenuFruits")||document.body.insertAdjacentHTML("beforeend",`
	<div class=" dropMenuFruits" style="position: absolute;font-size: 16px !important;line-height: 24px !important;">
		<div class="fruit-infos">
			<div id="card_title" style="display: flex; align-items: center; justify-content: space-between;">
				<div style="justify-content: flex-end; float: right">
					<ul class="menu">
							<li class="item"><div class="divlink"><a toHide="card_asin_container" class="itemsvisible" data-row="0">ASIN</a></div></li>
							<li class="item"><div class="divlink"><a toHide="card_rating_container" class="itemsvisible" data-row="1">Rating</a></div></li>
							<li class="item"><div class="divlink"><a toHide="card_video_carousel" class="itemsvisible" data-row="2">Video in carousel</a></div></li>
							<li class="item"><div class="divlink"><a toHide="card_low_stock" class="itemsvisible" data-row="3">Low stock</a></div></li>
							<li class="item"><div class="divlink"><a toHide="card_commission_percentage" class="itemsvisible" data-row="4">Influencer Com %</a></div></li>
							<li class="item"><div class="divlink"><a toHide="card_commission_dollar" class="itemsvisible" data-row="5">Influencer Com $</a></div></li>
							<li class="item"><div class="divlink"><a toHide="card_affiliate_commision" class="itemsvisible" data-row="6">Affiliate Com %</a></div></li>
							<li class="item"><div class="divlink"><a toHide="card_affiliate_dollar" class="itemsvisible" data-row="7">Affiliate Com $</a></div></li>
							<li class="item"><div class="divlink"><a toHide="card_bsr" class="itemsvisible" data-row="8">BSR</a></div></li>
							<li id="divSpon" class="item"><div class="divlink"><a toHide="card_sponsored" class="itemsvisible" data-row="9">Sponsored</a></div></li>
							
							<li class="item"><div class="divlink"><a toHide="card_first_available" class="itemsvisible" data-row="10">First available</a></div></li>
							<!-- <li class="item"><div class="divlink"><a toHide="" class="itemsvisible" data-column="11">Main carousel slots</a></div></li> -->
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>`);let t;t=C()?document.querySelectorAll("[data-asin][data-p13n-asin-metadata],[a-carousel-card]"):window.location.href.includes("gp/bestsellers")?document.querySelectorAll(".a-carousel-card, #gridItemRoot"):window.location.href.includes("/gp/history")||document.querySelector(".zg-bdg-text")?document.querySelectorAll("#gridItemRoot"):window.location.href.includes("com/shop/")?document.querySelectorAll(".single-list-item"):window.location.href.includes("com/stores/page")?document.querySelectorAll("li[class*='ProductGridItem__item'] "):window.location.href.includes("com/stores/Jungle")?[...document.querySelectorAll('a[class*="EditorialTile__overlay"][href*="/dp/"]')].map(e=>e.parentElement):window.location.href.includes("com/stores/Crocs/")?document.querySelectorAll('[class*="EditorialTile__tile__"]'):window.location.href.includes("com/stores/Peloton/")?document.querySelectorAll('[data-testid="product-grid-item"]'):document.querySelectorAll("[data-asin]:not([data-asin=''],[a-carousel])");let a,c=0;for(let e=0;e<t.length;e++){var i=t[e];if("true"!=i.getAttribute("isFruitProcessing")){i.setAttribute("isFruitProcessing","true");var r=document.createElement("div"),n=(r.classList.add("FruitDiv"),r.innerHTML=s,"inf"+I(20));r.classList.add(n),i.classList.add("P"+n);let l=q(i.querySelector("a").href);""==l&&(l=i.getAttribute("data-asin"));let e,t;if(C()){if(!(a=i))continue;e=i.querySelector(".a-link-normal"),t=y(e,t,i)}else if(window.location.href.includes("gp/bestsellers")){if(!(a=i.querySelector(".zg-carousel-general-faceout")?i.querySelector(".zg-carousel-general-faceout"):i.querySelector(".p13n-sc-uncoverable-faceout")))continue;e=a.querySelector(".a-link-normal"),t=y(e,t,a)}else if(window.location.href.includes("/gp/history")||document.querySelector(".zg-bdg-text")){if(!(a=i.querySelector(".p13n-sc-uncoverable-faceout")))continue;e=a.querySelector(".a-link-normal"),t=y(e,t,a)}else if(window.location.href.includes("com/shop/")){if(!(a=i.querySelector(".single-product-item")))continue;(e=a.parentElement)&&(t=y(e,t))}else if(window.location.href.includes("com/stores/page")){if(!(a=i.querySelector("[class*='ProductGridItem__imageContainer']").parentElement))continue;(e=i.querySelector("a"))&&(t=y(e,t))}else if(window.location.href.includes("com/stores/Jungle")){if(!(a=i.closest("[class*='EditorialTile__product']")))continue;(e=i.querySelector("a"))&&(t=y(e,t))}else if(window.location.href.includes("com/stores/Crocs/")){if(!(a=i.closest("[class*='TextTileLayer__container__']")))continue;(e=i.querySelector("a"))&&(t=y(e,t))}else if(window.location.href.includes("com/stores/Peloton/")){if(!(a=i.querySelector("[data-testid='add-to-cart']")))continue;(e=i.querySelector("a"))&&(t=y(e,t))}else{if(!(a=i.querySelector(".s-card-container.puis")))continue;e=i.querySelector(".s-title-instructions-style h2 .a-link-normal, .faceout-product-title .a-link-normal"),t=y(e,t,null,i)}if(a&&o.includes(l))a.setAttribute("awaitingDataFor",l);else{if(a){if(a.querySelector(".FruitDiv"))continue;o.push(l),a.appendChild(r),null!==t&&(c++,chrome.runtime.sendMessage({type:"getProductPage",url:t,index:n},async function(e){c--;var a=e.url,i=document.querySelector(`.${e.index} div#detailsProductExt`);if(null==i)(r=document.querySelector(".P"+e.index))&&(r.classList.remove("P"+e.index),r.setAttribute("isFruitProcessing","false")),u();else if(null==e.data)i.querySelector("#detailsProductExt").innerHTML="Failed to scrap data";else{var r=(new DOMParser).parseFromString(e.data,"text/html");let t={};t.randomId=e.index;var e=document.querySelector(".P"+e.index),n=(e.querySelector(".s-image")?.src?t.image=e.querySelector(".s-image")?.src:e.querySelector(".product-image")?.src?t.image=e.querySelector(".product-image")?.src:t.image=e.querySelector("img")?.src,t.isSponsored=e.querySelector("[aria-label*='Sponsored']"),t.url=a,t=await w(t,r,i),p.push(t),chrome.runtime.sendMessage({type:"obj",data:t}),document.querySelectorAll(`[awaitingDataFor = "${l}" ]`));for(let e=0;e<n.length;e++){var o=n[e],s=i.cloneNode(!0);o.appendChild(s),o.classList.add(t.randomId),T(s,l)}0==c&&b({},!0)}}))}L(r)}}}b({},!0),chrome.storage.local.get("hiddenElements",function(e){var t=e.hiddenElements;if(t){var a=Object.keys(t);for(let e=0;e<a.length;e++){var i=a[e];t[i]&&(document.querySelectorAll("#"+i).forEach(e=>{e.classList.add("hidvisible")}),document.querySelectorAll(`[toHide='${i}']`).forEach(e=>{e.classList.add("crossed")}))}}})}let g=location.href,m=!1;function y(e,t,a,i){return e.href.includes("slredirect")||e.href.includes("click?")?window.location.origin+"/"+decodeURIComponent(e.href.split("&url=")[1]):(a?a.querySelector(".a-link-normal"):i?i.querySelector(".s-title-instructions-style h2 .a-link-normal, .faceout-product-title .a-link-normal"):e).href}async function v(){if(C()){document.querySelector(".FruitDiv.Fruit_product_div")?.remove();var t=document.createElement("div"),a=(t.classList.add("FruitDiv"),t.classList.add("Fruit_product_div"),"inf"+I(20)),i=(t.classList.add(a),t.innerHTML=l,document.querySelector("#dp-container"));i&&i.prepend(t);let e={};e.randomId=a,e.image=document.querySelector("img#landingImage"),null==e.image?(e.image=document.querySelector("#imgBlkFront"),null==e.image&&(e.image=document.querySelector(".imgTagWrapper img"))):e.image=document.querySelector("img#landingImage"),e.image=e.image?.src,e.ratingBox=document.querySelector("[title*='out of']"),e.ratingBox?(e.rating=e.ratingBox?.getAttribute("title").split("out of")[0].trim(),e.reviews=parseInt(e.ratingBox.parentElement.parentElement?.querySelector('[href="#customerReviews"]')?.innerText.replaceAll(",","").replaceAll(" ratings","").replaceAll(" rating","").trim())):(e.rating=0,e.reviews=0),e.isSponsored=!1,e.url=document.location.href,e=await w(e,document,t),p.push(e),L(t)}}new MutationObserver(e=>{t&&!0===t?.isSubscribed&&(g!==location.href?(g=location.href,document.querySelector(".FruitDiv.Fruit_product_div")?.remove(),o=[...document.querySelectorAll(".FruitDiv #ff-asin")].map(e=>e.innerText).filter(e=>""!=e.trim()),p=p.filter(e=>-1!=o.indexOf(e.asin)),u(),v(),0==m&&(m=!0,setTimeout(function(){m=!1},1e3))):0==m&&(m=!0,o=[...document.querySelectorAll(".FruitDiv #ff-asin")].map(e=>e.innerText).filter(e=>""!=e.trim()),p=p.filter(e=>-1!=o.indexOf(e.asin)),u(),setTimeout(function(){m=!1},1e3)))}).observe(document.documentElement||document.body,{childList:!0,subtree:!0}),async function(){var o,e=(await chrome.storage.local.get("isLoggedIn"))["isLoggedIn"];e&&(0==(e=await chrome.runtime.sendMessage({type:"check"})).isSuccess?await chrome.storage.local.remove("isLoggedIn"):!0===e?.isSubscribed&&(t=e,location.href.includes("https://www.amazon.com/creatorhub/manage")?o=setInterval(()=>{if(document.querySelector("#cp-video-library-table-header .cp-video-library-views-section")){clearInterval(o),document.querySelector("#cp-video-library-table-header .cp-video-library-views-section").parentElement.insertAdjacentHTML("beforeEnd",`<section class="cp-video-library-view-duration-section">
        <div class="cp-vertically-aligned-table-cell">
            <div class="cp-cursor-pointer cp-video-library-header">
                <div><a class="a-link-normal a-declarative"
                        title="Video Placement" href="#"
                        data-action="a-tooltip"
                        data-a-tooltip="{&quot;position&quot;:&quot;triggerTop&quot;,&quot;content&quot;:&quot;Video Placement&quot;,&quot;allowLinkDefault&quot;: true}"
                        aria-describedby="a-popover-1">Video Placement</a><img
                        src="https://m.media-amazon.com/images/G/01/CreatorPortal/UploadAnywhere/descending-2x._CB1553648457_.png"
                        class="cp-video-library-sort-arrow cp-invisible" width="10px" alt="sort"></div>
            </div>
        </div>
    </section>`),document.querySelector(".cp-inf-video-rows-outline").querySelector(".a-row").insertAdjacentHTML("beforeEnd",`<div class="a-column a-span4 a-text-right" style="margin-top: 15px;"><div style="text-align: left !important;">
        <span class="Select-video-to-upload" style="text-align: left !important;margin-left: 0px;">Placement:</span><span><span class="positionCarousel a-dropdown-container"><span tabindex="-1" id="" data-a-class="button-base" class="a-button a-spacing-none" style="margin: 0;border-radius: 8px 0 0 8px;"><span class="a-button-inner" style="width: 62px;">
        <span class="a-button-text a-declarative positionSpan" role="button" selected="Carousel" tabindex="0" aria-hidden="true">All</span>
    </span></span><span tabindex="-1" id="" data-a-class="button-base" class="a-button a-spacing-none" style="margin: 0;border-radius: 0;"><span class="a-button-inner" style="    width: 62px;">
        <span class="a-button-text a-declarative positionSpan" role="button" selected="Upper Carousel" tabindex="0" aria-hidden="true">Upper</span>
    </span></span><span tabindex="-1" id="" data-a-class="button-base" class="a-button a-spacing-none" style="margin: 0;border-radius: 0;"><span class="a-button-inner" style="    width: 62px;">
        <span class="a-button-text a-declarative positionSpan" role="button" selected="Lower Carousel" tabindex="0" aria-hidden="true">Lower</span>
    </span></span><span tabindex="-1" id="" data-a-class="button-base" class="a-button a-spacing-none" style="margin: 0;border-radius: 0 8px 8px 0;"><span class="a-button-inner" style="width: 100px;">
        <span class="a-button-text a-declarative positionSpan" role="button" selected="No Carousel" tabindex="0" aria-hidden="true">No Carousel</span>
    </span></span></span></span></div></div>`);var e=document.querySelector('[id*="cp-video-library-table-row-"]').parentElement.parentElement;const a=Array.from(e.querySelectorAll('[id*="cp-video-library-table-row-"]')).map(e=>e.parentElement);document.querySelector(".positionCarousel.a-dropdown-container").onclick=function(t){document.querySelector(".loadingImage")||a.forEach(e=>{e.querySelector(".positionSpan").getAttribute("position").includes(t.target.getAttribute("selected"))?e.style.display="":e.style.display="none","Carousel"==t.target.getAttribute("selected")?document.querySelector('[id*="draft-video-section"]').style.display="":document.querySelector('[id*="draft-video-section"]').style.display="none"})};var t=JSON.parse(JSON.parse(document.querySelector('script[data-a-state*="cp-video-library-params"]').innerText).videos);for(let e=0;e<t.length;e++){const n=t[e];if(document.querySelector(`[name="${n.contentId}"] .cp-video-library-views-section`)){let a=document.querySelector(`[name="${n.contentId}"] .cp-video-library-views-section`).parentElement;a.insertAdjacentHTML("beforeEnd",`
                    <section class="loadingSection"> 
                    <div class="cp-vertically-aligned-table-cell"> 
                    <div>
                    <span style="pointer-events: none;" id="cp-dropzone-button" class="a-button a-button-primary cp-dropzone-button-class">
                        <span class="a-button-inner">
                            <img class="loadingImage" style="height: 100%;margin: 0 30px;padding: 5px 0px;" src="${chrome.runtime.getURL("lib/assets/banana.png")}" alt="Loading...">
                        </span>
                        </span>
                        </div>
                    </div>
                    </section>

                    `);var i=[];for(let t of n.associatedAsins){let e="https://www.amazon.com/dp/"+t;var r=new Promise(i=>{chrome.runtime.sendMessage({type:"getProductPage",url:e,index:[t,n.contentId]},async function(e){var t=(new DOMParser).parseFromString(e.data,"text/html"),a=t.querySelector("#videoCount")?t.querySelector("#videoCount"):t.querySelector(".video-count"),e=(a=null==a||""==(a=a.innerText?.trim())?0:2==(a=a.split(" ")).length?a[0]:1,await gfvc(e.index[0],t,a));i(e)})});i.push(r)}Promise.all(i).then(e=>{var t=e.some(e=>e.upperCarousel.find(e=>-1!=e.indexOf(n.contentId))),e=e.some(e=>e.lowerCarousel.find(e=>-1!=e.indexOf(n.contentId))),t=t?"Upper Carousel":e?"Lower Carousel":"No Carousel";a.querySelector(".loadingSection .a-button-inner").innerHTML=`
                                <input class="a-button-input" type="submit" aria-labelledby="cp-dropzone-button-announce">
                                <span id="cp-dropzone-button-announce" content-id="${n.contentId}" position="${t}" class="a-button-text positionSpan" aria-hidden="true">${t}</span>
                    `})}}}},100):(u(),v()),0==m)&&(m=!0,setTimeout(function(){m=!1},1e3)))}();var f,S=[];function b(e,t){e.asin&&(e={asin:e.asin,commission:e.influencer_commission,isSponsored:e.isSponsored,mainCarouselSlots:e.mainCarouselSlots,price:e.price,rating:e.rating,videosAvailable:e.videosAvailable},S.push(e)),(5<=S.length||t)&&(chrome.runtime.sendMessage({type:"fetchScore",fetchedScoresObjs:S},function(e){e.forEach(function(t){var a=p.filter(e=>e.asin==t.asin);for(let e=0;e<a.length;e++){var i=a[e];i.score=t.score,!function(t){var e=document.querySelectorAll("."+t.randomId);e.forEach(e=>{e.querySelector("#ff-score").innerText=t.score,chrome.runtime.sendMessage({type:"objScoreUpdated",prodObj:t})})}(i)}})}),S=[])}function h(t,a){if(!t)return{text:""};if(0==t.length)return{text:""};for(let e=0;e<t.length;e++){var i=t[e].cloneNode(!0).querySelectorAll("th,.a-list-item .a-text-bold");for(let e=0;e<i.length;e++){var r,n,o=i[e];-1!=o.innerHTML.indexOf(a)&&(r={},"TH"==o.tagName?(r.html=o.nextElementSibling.innerHTML,r.html=r.html.replace(/\s+/g," "),r.html=r.html.replace(/[^\w\s:#<>"&;)(]\//g,"").trim(),r.text=o.nextElementSibling.innerText,r.text=r.text.replace(/\s+/g," "),r.text=r.text.replace(/[^\w\s:]/g,"").trim()):"SPAN"==o.tagName&&(n=o.parentElement,o.remove(),r.html=n.innerHTML,r.html=r.html.replace(/\s+/g," "),r.html=r.html.replace(/[^\w\s:#<>"&;)(]\//g,"").trim(),r.text=n.innerText,r.text=r.text.replace(/\s+/g," "),r.text=r.text.replace(/[^\w\s:]/g,"").trim()))}}return r||{text:"",html:""}}function x(e,t){let a,i=100;for(var r=0;r<e.length;r++){var n=e[r],o=n.category.toLowerCase().replaceAll(/['_-]/g," ").replaceAll("&","and").replaceAll(/s(?=\s)|s$/g,"").trim(),s=t.toLowerCase().replaceAll(/['_-]/g," ").replaceAll("&","and").replaceAll(/s(?=\s)|s$/g,"").trim();if(o==s)return n;(o.includes(s)||s.includes(o))&&(s=Number.parseFloat(n.percentage))<i&&(i=s,a=n)}return a}function A(e=""){let t;return void 0!==(t=x([...a,...i],e))?.realCategory&&(t.category=t.realCategory),t=t||{category:"Other",percentage:"4%"}}function _(e=""){let t;return void 0!==(t=x([...r,...n],e))?.realCategory&&(t.category=t.realCategory),t=t||{category:"Other",percentage:"2%"}}async function w(e,t,a){if(e.ratingBox=t.querySelector("[title*='out of']"),e.ratingBox?(e.rating=e.ratingBox?.getAttribute("title").split("out of")[0].trim(),e.reviews=parseInt(e.ratingBox.parentElement.parentElement?.querySelector('[href="#customerReviews"]')?.innerText.replaceAll(",","").replaceAll(" ratings","").replaceAll(" rating","").trim())):(e.rating=0,e.reviews=0),(isNaN(e.rating)||isNaN(e.reviews))&&(e.rating=0,e.reviews=0),e.asin=q(e.url),e.asin&&a.setAttribute("ff-forASIN",e.asin),10!=e.asin.length&&(e.asin=e.asin.replace("ASIN","").replace(":","").replace(/(\s*)/gi,"").replace(/\W/g,"")),e.mainCarouselSlots=7-t.querySelectorAll(".regularAltImageViewLayout .item").length,t.querySelector("#videoCount")?e.videosAvailable=t.querySelector("#videoCount"):e.videosAvailable=t.querySelector(".video-count"),null==e.videosAvailable||(e.videosAvailable=e.videosAvailable.innerText?.trim(),""==e.videosAvailable)?e.videosAvailable=0:(e.videosAvailable=e.videosAvailable.split(" "),2==e.videosAvailable.length?e.videosAvailable=e.videosAvailable[0]:e.videosAvailable=1),C()){var i=document.querySelector("#detailBullets_feature_div");if(i){var r=i?.querySelectorAll("span");d="Not Available";for(var n=0;n<r.length;n++){var o=r[n];if(o.innerText.includes("ASIN")){d=o.innerText.split(":")[1].replace(/(\s*)/gi,"").replace(/\W/g,"").trim();break}}e=e.asin==d?P(document,e):P(t,e)}else e=P(t,e)}else e=P(t,e);e.title=t.querySelector("#productTitle")?.textContent||"",e.title=e.title.trim(),e.dateFirstAvailableText=h(t.querySelectorAll(".prodDetTable,.detail-bullet-list"),"Release date")?.text,""==e.dateFirstAvailableText&&(e.dateFirstAvailableText=h(t.querySelectorAll(".prodDetTable,.detail-bullet-list"),"Date First Available")?.text),""==e.dateFirstAvailableText?e.dateFirstAvailableText="Date Not Available":e.dateFirstAvailable=new Date(e.dateFirstAvailableText);var i=h(t.querySelectorAll(".prodDetTable,.detail-bullet-list"),"Best Sellers Rank"),s=(e.BSR=i?.html,e.videosByNonSeller_inCarousel=t.querySelectorAll("div[data-product-asin='"+e.asin+"'][data-element-id='video-carousel-item']:not([data-creator-type='Seller']):not([data-creator-type='']) h4"),e.videosByNonSeller_inCarousel=[...e.videosByNonSeller_inCarousel].filter(e=>-1!=e.innerHTML.indexOf("this product")).map(e=>e.parentElement),e.videosByInfluencer_inCarousel=t.querySelectorAll("div[data-product-asin='"+e.asin+"'][data-element-id='video-carousel-item'][data-creator-type='Influencer'] h4"),e.videosByInfluencer_inCarousel=[...e.videosByInfluencer_inCarousel].filter(e=>-1!=e.innerHTML.indexOf("this product")).map(e=>e.parentElement),e.videosByInfluencer_inCarousel=(await gfvc(e.asin,t,e.videosAvailable)).count,e.videosBySeller_inCarousel=t.querySelectorAll("div[data-product-asin='"+e.asin+"'][data-element-id='video-carousel-item'][data-creator-type='Seller'] h4"),e.videosBySeller_inCarousel=[...e.videosBySeller_inCarousel].filter(e=>-1!=e.innerHTML.indexOf("this product")).map(e=>e.parentElement),function(e){let t=[],a=e.querySelector('input[name="productCategory"]')?.value.replace("gl_","");void 0!==a&&t.push(a);e.querySelector("#snsCSM")?.classList.forEach(e=>{"gl_"===e.slice(0,3)&&t.push(e.replace("gl_",""))});e=e.querySelectorAll('script[type="a-state"]');return e.forEach(e=>{try{(jsonData=JSON.parse(e.innerHTML)).hasOwnProperty("pageRefreshUrlParams")&&t.push(jsonData.pageRefreshUrlParams.storeID)}catch(e){}}),t[0]}(t)),l={category:"Other",percentage:"2.00%"},c={category:"Other",percentage:"4.00%"},i=(void 0!==s&&(l=_(s),c=A(s)),s=i?.text&&""!=i?.text?i?.text.split(" in ")[1].split("See Top 100")[0].replaceAll("(","").trim()||"":h(t.querySelectorAll(".prodDetTable,.detail-bullet-list"),"See Top 100")?.text,"Other"===l.category&&void 0!==s&&(l=_(s)),"Other"===c.category&&void 0!==s&&(c=A(s)),e.influencer_commission=parseFloat(l.percentage.replace("%","")),e.affiliate_commission=parseFloat(c.percentage.replace("%","")),e.score="-",b(e),-1==e.price?(e.influencer_commission_dollar=-1,e.affiliate_commission_dollar=-1):(e.influencer_commission_dollar=(e.influencer_commission*e.price/100).toFixed(2),e.affiliate_commission_dollar=(e.affiliate_commission*e.price/100).toFixed(2)),t.querySelector("#availability"));return null==i?e.lowInStock=!1:(i=i.innerText).includes("unavailable")||i.includes("out of stock")?e.lowInStock=null:!i.includes("In Stock")&&i.includes("Only")?e.lowInStock=!0:e.lowInStock=!1,a.querySelector("#ff-asin").innerText=e.asin,e.asin&&T(a,e.asin),a.querySelector("#ff-rating").innerText=e.rating+" ("+e.reviews+")",a.querySelector("#ff-mainCarouselSlots").innerText=0<e.mainCarouselSlots?"Yes":"No",a.querySelector("#ff-videoAvailable").src=0!=e?.videosAvailable?""+chrome.runtime.getURL("lib/assets/check-icon.svg"):""+chrome.runtime.getURL("lib/assets/x-icon.svg"),a.querySelector("#ff-videoSlotsAvailable").innerText=0==e?.videosAvailable?0:6-parseInt(e.videosAvailable),a.querySelector("#ff-videosByInfluencer_inCarousel").innerText=e.videosByInfluencer_inCarousel,a.querySelector("#ff-videosBySeller_inCarousel").innerText=e.videosBySeller_inCarousel.length,a.querySelector("#ff-isLowStock")&&(0!=e.lowInStock&&null!=e.lowInStock||(a.querySelector("#ff-isLowStock").innerText="No",a.querySelector("#ff-isLowStock").style.color="#17b75c"),1==e.lowInStock)&&(a.querySelector("#ff-isLowStock").innerText="Yes",a.querySelector("#ff-isLowStock").style.color="#ff0101"),a.querySelector("#ff-dateFirstAvailable").innerText=e.dateFirstAvailableText,a.querySelector("#ff-BSR").innerHTML=e.BSR,a.querySelector("#ff-isSponsored")&&(a.querySelector("#ff-isSponsored").src=null!=e.isSponsored?""+chrome.runtime.getURL("lib/assets/check-icon.svg"):""+chrome.runtime.getURL("lib/assets/x-icon.svg")),a.querySelector("#ff-commissionPercentage").innerText=e.influencer_commission.toFixed(2)+"%",a.querySelector("#ff-Affiliate_commision").innerText=e.affiliate_commission.toFixed(2)+"%",-1==e.price?(a.querySelector("#ff-commissionDollar").innerText="Not Available",a.querySelector("#ff-affiliateDollar")&&(a.querySelector("#ff-affiliateDollar").innerText="Not Available")):(a.querySelector("#ff-commissionDollar").innerText="$"+e.influencer_commission_dollar,a.querySelector("#ff-affiliateDollar")&&(a.querySelector("#ff-affiliateDollar").innerText="$"+e.affiliate_commission_dollar)),e.FruitDiv=[...a.querySelectorAll("span[id]")].map(e=>({id:e.id,innerText:e.innerText})),e}async function gfvc(o,s,l){return new Promise(async(e,t)=>{c||(i=(a=document.documentElement.innerHTML).indexOf('"marketplaceID":"'),c=-1!==i?a.substr(i+17,13):"ATVPDKIKX0DER");var a=c;if(!a)return 0;var i=[],r=[];try{var n=await(await fetch("https://www.amazon.com/vap/ew/subcomponent/relatedvideos",{headers:{accept:"text/html,*/*","accept-language":"fr,ar;q=0.9,en;q=0.8","content-type":"application/json"},body:JSON.stringify({pageContext:{page:"DetailPage",placement:"ImageBlock",device:"Desktop",marketplaceID:a,locale:"en_US",product:{contentID:o,contentIDType:"ASIN"}},configuration:{id:"div-relatedvideos",type:"relatedvideos",binder:"relatedvideos",loader:"lazyload",features:{features:{verticalcarousel:"true",segmentOneHeaderId:"vse_ib_segment_one",segmentTwoHeaderId:"vse_ib_segment_two",segmentThreeHeaderId:"vse_ib_segment_three",segmentOneHeaderDefault:"Videos for this product",segmentTwoHeaderDefault:"Related videos",segmentThreeHeaderDefault:"Customer review videos",includeProfiles:"true",showCustomerReviewMetadata:"true",enableCustomerReviewVideos:"true"}},sources:{source:"VideoAdsDataAggregatorService"}}}),method:"POST",mode:"cors",credentials:"include"}).catch(e=>console.error("coudn't get upper carousel : "+e))).text(),i=[...(new DOMParser).parseFromString(n,"text/html").querySelectorAll("div[data-element-id='video-carousel-item'][data-creator-type='Influencer'] h4")].filter(e=>-1!=e.innerHTML.indexOf("this product")||"Related videos"==e.innerHTML).map(e=>e.parentElement?.getAttribute("data-aci-content-id")||e.parentElement?.parentElement?.getAttribute("data-aci-content-id")||e.parentElement?.getAttribute("data-csa-c-item-id")).filter(e=>null!=e)}catch(e){console.error("coudn't get upper carousel : "+e)}try{r=[...s.querySelectorAll("div[data-element-id='video-carousel-item'][data-creator-type='Influencer'] h4")].filter(e=>-1!=e.innerHTML.indexOf("this product")).map(e=>e.parentElement.getAttribute("data-csa-c-item-id"))}catch(e){console.error("coudn't get lower carousel : "+e)}n=[...i,...r],n=new Set(n).size;e({upperCarousel:0<l?i:[],lowerCarousel:r,count:n})})}function q(e){var e=new URL(e),t=(e.origin+e.pathname).split("/");for(let e=0;e<t.length;e++){if("dp"==t[e])return t[e+1];if("gp"==t[e]&&"product"==t[e+1])return t[e+2]}return""}function C(){return window.location.href.includes("/dp/")||window.location.href.includes("/gp/product/")}function T(e,t){let a=e.querySelector("#ff-asin"),i;a.addEventListener("mouseover",function(e){a.querySelector("#copyASIN_Tooltip")||(a.style.color="rgb(247,228,131)",(i=document.createElement("div")).id="copyASIN_Tooltip",i.innerHTML="Copy ASIN",a.appendChild(i))}),a.addEventListener("mouseleave",function(){a.style.color="black",i&&i.remove()}),a.addEventListener("click",function(e){navigator.clipboard.writeText(t).then(function(){alert("ASIN copied to clipboard: "+t)})})}function L(e){e=e.querySelector(".divselected");const a=document.querySelector(".dropMenuFruits").querySelector(".menu");e.addEventListener("click",e=>{var t=document.querySelector("#divSpon");e.target.getAttribute("noSponsor")?t.style.display="none":t.style.display="list-item",e.preventDefault(),e.stopPropagation(),console.log("Button clicked!"),null!=f&&f!=e.target||a.classList.toggle("menu-open"),f=e.target,document.querySelector(".dropMenuFruits").style.left=f.getBoundingClientRect().left+window.scrollX+"px",document.querySelector(".dropMenuFruits").style.top=f.getBoundingClientRect().top+window.scrollY+"px"}),document.querySelectorAll(".itemsvisible").forEach(e=>{"true"!=e.getAttribute("menuClickHandeled")&&(e.setAttribute("menuClickHandeled","true"),e.addEventListener("click",function(){var t,a=document.querySelectorAll("#"+e.getAttribute("toHide"));for(let e=0;e<a.length;e++){var i=a[e];i&&i.classList.toggle("hidvisible")}document.querySelectorAll(`[toHide='${e.getAttribute("toHide")}']`).forEach(e=>{e.classList.toggle("crossed")}),document.querySelector(".dropMenuFruits").style.left=f.getBoundingClientRect().left+window.scrollX+"px",document.querySelector(".dropMenuFruits").style.top=f.getBoundingClientRect().top+window.scrollY+"px",t=e.getAttribute("toHide"),chrome.storage.local.get("hiddenElements",function(e){e=e.hiddenElements||{card_asin_container:!1,card_rating_container:!1,card_video_carousel:!1,card_low_stock:!1,card_commission_percentage:!1,card_commission_dollar:!1,card_affiliate_commision:!1,card_affiliate_dollar:!1,card_bsr:!1,card_sponsored:!1,card_first_available:!1};1==e[t]?e[t]=!1:0==e[t]&&(e[t]=!0),chrome.storage.local.set({hiddenElements:e})})}))})}function I(e){for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",i=a.length,r=0;r<e;r++)t+=a.charAt(Math.floor(Math.random()*i));return t}function P(e,t){return!e.querySelector('[class*="priceToPay"] .a-offscreen, [class*="PriceToPay"] .a-offscreen ,[data-testid*="grid-item-buy-price"]  [class*="Price__whole"] ,.a-color-base > .a-color-price')||(t.price=parseFloat(e.querySelector('[class*="priceToPay"] .a-offscreen, [class*="PriceToPay"] .a-offscreen ,[data-testid*="grid-item-buy-price"]  [class*="Price__whole"], .a-color-base > .a-color-price')?.innerText.replaceAll(",","").replace("$","")),isNaN(t.price))?t.price=-1:t.price=parseFloat(t.price),t}chrome.runtime.onMessage.addListener(function(e,t,a){return"Product_data"===e.type&&a({Product_data:p}),!0});