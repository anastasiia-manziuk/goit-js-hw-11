import{a as l,S as c,i as u}from"./assets/vendor-CYMld6vM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function p(o){return l.get("https://pixabay.com/api/",{params:{key:"52365869-dd7c55ea3ac5eab5a979f8f09",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(t=>t.data.hits).catch(t=>console.error(t))}const f=new c(".gallery a");function m(o){const t=o.map(s=>`<li class="gallery-item"><a href="${s.largeImageURL}">
                <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}"/>
                </a>
                <ul class="info">
                    <li class="info-item">
                    <p class="text">Likes:</p>
                    <span class="number">${s.likes}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Views:</p>
                    <span class="number">${s.views}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Comments:</p>
                    <span class="number">${s.comments}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Downloads:</p>
                    <span class="number">${s.downloads}</span>
                    </li>

                </ul>
                </li>`).join("");document.querySelector(".gallery").innerHTML=t,f.refresh()}function d(){document.querySelector(".gallery").innerHTML=""}function y(){document.querySelector(".loader").classList.add("is-open")}function h(){document.querySelector(".loader").classList.remove("is-open")}const g=document.querySelector(".search-input"),i=document.querySelector(".form");function L(){const o=g.value.trim();o.length&&(d(),y(),p(o).then(t=>{t.length===0?u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):m(t)}).catch(t=>{console.error(t)}).finally(()=>{h(),i.reset()}))}i.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
