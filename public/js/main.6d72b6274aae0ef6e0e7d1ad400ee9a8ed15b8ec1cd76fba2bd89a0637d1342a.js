(()=>{window.onload=function(){let o=document.querySelectorAll("section[id]");window.addEventListener("scroll",c);let n=200;function c(){let e=window.pageYOffset;var t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight;o.forEach(d=>{let i=d.offsetHeight,l=d.offsetTop-100;sectionId=d.getAttribute("id");var s=0;o.forEach(a=>{a.offsetTop>s&&(s=a.offsetTop)});let r=d.offsetTop===s;e>l&&e<=l+i&&e<t-n||e>=t-n&&r?document.querySelector(".section-links a[href*="+sectionId+"]").classList.add("active"):document.querySelector(".section-links a[href*="+sectionId+"]").classList.remove("active")})}c(),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})};document.addEventListener("DOMContentLoaded",()=>{function o(e){e.classList.add("is-active"),document.body.classList.add("modal-open"),document.documentElement.classList.add("modal-open")}function n(e){e.classList.remove("is-active"),document.body.classList.remove("modal-open"),document.documentElement.classList.remove("modal-open")}function c(){(document.querySelectorAll(".modal")||[]).forEach(e=>{n(e)})}(document.querySelectorAll(".js-modal-trigger")||[]).forEach(e=>{let t=e.dataset.target,d=document.getElementById(t);e.addEventListener("click",()=>{o(d)})}),(document.querySelectorAll(".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button")||[]).forEach(e=>{let t=e.closest(".modal");e.addEventListener("click",()=>{n(t)})}),document.addEventListener("keydown",e=>{e.code==="Escape"&&c()})});document.addEventListener("DOMContentLoaded",()=>{(document.querySelectorAll(".js-copy-clipboard")||[]).forEach(o=>{let n=o.dataset.target,c=document.getElementById(n);o.addEventListener("click",()=>{navigator.clipboard.writeText(c.textContent)})})});})();
