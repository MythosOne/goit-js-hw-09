const e=document.querySelector(".data-start"),t=document.querySelector(".data-stop");let d=null;e.addEventListener("click",(()=>{d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(()=>{clearInterval(d),t.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.731b3305.js.map
