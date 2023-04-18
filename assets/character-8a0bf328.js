import{n,P as b,d as w,l as H,a as s}from"./tui-pagination-79f0dc82.js";/* empty css               */import"./modal2-a76038e3.js";n.exports.Loading.init({backgroundColor:"rgba(0,0,0,0.95)",svgColor:"#34387F",clickToClose:!1});const t={charFormEl:document.querySelector(".char-search-form"),cardContainer:document.querySelector(".char-card-container"),paginationEl:document.querySelector(".tui-pagination"),mainContainer:document.querySelector(".container")},L=t.charFormEl.elements.searchComics;console.log(L);const S=t.charFormEl.elements.searchName,M=t.charFormEl.elements.select,x=t.charFormEl.elements.searchDate;let E=null,l=null,c=null,d=null,m=null,i=[],o=null,y=1,T=window.getComputedStyle(t.mainContainer).width;console.log(T);switch(T){case"365px":o=5;break;case"100%":o=5;break;case"1440px":o=16;break;default:o=8;break}console.log(o);const k={totalItems:0,itemsPerPage:o,visiblePages:2,page:1},g=new b(t.paginationEl,k),f=w(x,{dateSelected:new Date,formatter:(r,e,a)=>{const h=e.toLocaleDateString();r.value=h},onSelect:(r,e)=>{R(r,e),console.log(e)}});f.calendarContainer.style.setProperty("background-color","var(--background)");f.calendarContainer.style.setProperty("color","var(--text)");f.calendarContainer.style.setProperty("font-family","Poppins");f.calendarContainer.style.setProperty("font-weight","400");t.charFormEl.addEventListener("submit",D);S.addEventListener("input",H(N,300));M.addEventListener("change",O);P();async function P(){console.log(o);try{const r=await s.getAllCharacters({limit:o,offset:0});if(n.exports.Loading.remove(),u(r.results),t.paginationEl.classList.remove("is-hidden"),r.total<=o)return;g.reset(r.total),g.on("beforeMove",async e=>{const{page:a}=e;console.log(a);let h=o*(a-1);try{const p=await s.getAllCharacters({limit:o,offset:h,nameStartsWith:l,orderBy:c,comics:m,modifiedSince:d});t.cardContainer.innerHTML="",n.exports.Loading.remove(),u(p.results)}catch{console.log("Error!!!!!!!!!!!")}})}catch{console.log("Error!!!!!!!!!!!")}}async function D(r){t.paginationEl.classList.add("is-hidden"),n.exports.Loading.standard("Loading..."),r.preventDefault(),S.value=null,l=null,c=null,d=null,i=[],E=L.value;try{const e=await s.getComics({title:E,limit:100,offset:0});if(e.total===0){n.exports.Loading.remove(),t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER");return}y=Math.ceil(e.total/100),console.log(y);for(let a=1;a<=y;a++){const p=100*(a-1);try{const C=await s.getComics({title:E,limit:100,offset:p});i.length<10&&C.results.map(v=>{if(v.characters.available&&i.length<10)i.push(v.id);else return})}catch{n.exports.Loading.remove(),console.log("Error!!!!!!")}}if(i.length>0){m=i.join(", ");try{console.log(i.length);const a=await s.getAllCharacters({nameStartsWith:l,orderBy:c,comics:m,modifiedSince:d,limit:o});console.log(a),a.results.length===0&&(t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER")),t.cardContainer.innerHTML="",g.reset(a.total),u(a.results),t.paginationEl.classList.remove("is-hidden"),n.exports.Loading.remove()}catch{console.log("Error!!!!!!!!!!!")}}}catch{n.exports.Loading.remove(),console.log("Error!!!!!!!!!!!")}}async function N(r){t.paginationEl.classList.add("is-hidden"),l=r.target.value;try{const e=await s.getAllCharacters({nameStartsWith:l,orderBy:c,comics:m,modifiedSince:d,limit:o});if(e.results.length===0){t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER");return}g.reset(e.total),t.cardContainer.innerHTML="",u(e.results),t.paginationEl.classList.remove("is-hidden")}catch{console.log("Error!!!!!!!!!!!")}}async function O(r){r.preventDefault,c=r.target.value;try{const e=await s.getAllCharacters({orderBy:c,limit:o,nameStartsWith:l,comics:m,modifiedSince:d});g.reset(e.total),t.cardContainer.innerHTML="",u(e.results),console.log(e.results)}catch{console.log("Error!!!!!!!!!!!")}}async function R(r,e){d=e;try{const a=await s.getAllCharacters({orderBy:c,nameStartsWith:l,limit:o,comics:m,modifiedSince:d});if(a.results.length===0){t.cardContainer.innerHTML='<span class="char-error"></span>',console.log("NOTHIG TO RENDER");return}g.reset(a.total),t.cardContainer.innerHTML="",u(a.results),console.log(a.results)}catch{console.log("Error!!!!!!!!!!!")}}function u(r){t.cardContainer.insertAdjacentHTML("beforeend",A(r))}function A(r){return r.map(e=>`
    <div class="char-card">
      <a class="char-image-wrap" data-id="${e.id}" href="#">
        <img
          class="char-card-image"
          data-id="${e.id}"
          src= "${e.thumbnail.path}/portrait_uncanny.${e.thumbnail.extension}"
          alt=""
          loading="lazy"
        />
        <div class="char-card-descr" data-id="${e.id}">
          <p class="char-card-descr-name" data-id="${e.id}">${e.name}</p>
        </div>
      </a>
    </div>`).join("")}
