
var root=document.documentElement;
var tb=document.getElementById('themeBtn');
if(tb)tb.onclick=function(){var cur=root.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');root.setAttribute('data-theme',cur==='dark'?'light':'dark');};
var sb=document.getElementById('sideBtn');
if(sb)sb.onclick=function(){var c=root.classList.toggle('side-collapsed');try{localStorage.setItem('c_sidebar',c?'collapsed':'open');}catch(e){}};
document.querySelectorAll('.copy').forEach(function(b){
  b.onclick=function(){
    var pre=document.getElementById(b.dataset.target);
    navigator.clipboard.writeText(pre.textContent).then(function(){var o=b.textContent;b.textContent='已複製 ✓';setTimeout(function(){b.textContent=o;},1500);});
  };
});
