import{a as d}from"./api-6da0aff2.js";let o="";const u=document.querySelector(".header-form"),m=document.querySelector(".header"),l=document.querySelector(".header-find");document.querySelector(".header-output");document.querySelector(".header-icon");document.querySelector(".header-btn");function p(e){const r=e.map(t=>{const{id:s,thumbnail:n,name:h,description:C}=t;return`
      <a class="gallery__link" href="#">
        <div class="gallery-item"">
        <img data-set="${s}"
        src='${n.path}.${n.extension}'
        alt=''
        class='header-find-img'
      />
          <div class="info">
          <h3 data-set="${s}" class='header-find-text'>${h}</h3>
          
          </div>
        </div>
      </a>
    `}).join("");l.insertAdjacentHTML("beforeend",r)}const f=async e=>{e.preventDefault();const{target:r}=e;if(o=r.elements.searchQuery.value,u.reset(),o.trim()==""){console.log("Please specify your search query.");return}const t=await d.getCharacters({nameStartsWith:o});if(t.lengt==0){console.log("Search result is zero. Change your query"),l.innerHTML="";return}else l.innerHTML="",p(t)};u.addEventListener("submit",f);window.addEventListener("scroll",()=>{!window.scrollY==0?m.classList.add("header-color"):m.classList.remove("header-color")});const g=document.querySelector(".rc-list"),y=document.querySelector(".rc-descr-list");let c=0,a=null,i=null;const $=()=>Math.round(Math.random()*1561),v=async()=>{let e=[];for(let r=0;r<5;r+=1){const t=await d.getCharacters({limit:1,offset:$()});if(t[0].thumbnail.path==="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"||!t[0].description){r-=1;continue}e.push(t[0])}console.log(e),g.innerHTML=L(e),y.innerHTML=S(e),a=document.querySelectorAll(".rc-list .slide"),i=document.querySelectorAll(".rc-descr-item"),a[0].className="slide rc-item showing",i[0].className="rc-descr-item rc-descr-active",console.log(a[0].className),setInterval(q,3500)};function L(e){return e.map(({id:t,thumbnail:s})=>`  <li class='rc-item slide' data-id="${t}">
      <picture>
      <source media="(min-width: 1440px)" srcset="${s.path}/portrait_uncanny.${s.extension}" />
      <source media="(min-width: 375px)" srcset="${s.path}/standard_fantastic.${s.extension}"/>
      <img class="rc-img" data-set="${t}"
        src='${s.path}/portrait_uncanny.${s.extension}'
        alt=''
      /></picture>`).join("")}function S(e){return e.map(({name:t,description:s,id:n})=>`
    <li class='rc-descr-item' data-id="${n}">
      <h3 class='rc-descr-title'>${t}</h3>
      <p class='rc-descr-text'>${s}</p>
    </li>`).join("")}v();function q(){console.log(a[c]),a[c].className="slide rc-item",i[c].className="rc-descr-item",c=(c+1)%a.length,a[c].className="slide rc-item showing",i[c].className="rc-descr-item rc-descr-active"}const k=document.querySelector(".lastcomics-url-container");async function w(){const e=await d.getComics({limit:3,dateDescriptor:"lastWeek"});M(x(e.results))}w();function x(e){return e.map(({thumbnail:{path:r,extension:t},title:s,creators:n}={})=>`<div class="comics-container">
    <a href="#" class="lastcomics-link-comics">
        <img src="${r}.${t}" alt="" class="lastcomics-image">
       <h3 class="lastcomics-comics-title">${s}</h3>
    </a></div>
     `).join("")}function M(e){k.insertAdjacentHTML("beforeend",e)}
