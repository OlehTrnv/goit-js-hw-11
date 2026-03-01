import{a as u,S as f,i as d}from"./assets/vendor-dNBuWDsd.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="54847700-f9ce1488f27107b1b46500c94",p="https://pixabay.com/api/";function y(i){return u.get(p,{params:{key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const a=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper"),h=new f(".gallery a");function g(i){let o=i.map(t=>`<li class="gallery-item">
    <a href="${t.largeImageURL}"><img src="${t.webformatURL}" alt="${t.tags}" title=""></a>
    <ul class="info">
    <li class="info-item">likes: ${t.likes}</li>
    <li class="info-item">views: ${t.views}</li>
    <li class="info-item">comments: ${t.comments}</li>
    <li class="info-item">downloads: ${t.downloads}</li>
    </ul>
    
</li>`).join("");a.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){a.innerHTML=""}function b(){c.classList.add("active")}function l(){c.classList.remove("active")}const S=document.querySelector(".form");S.addEventListener("submit",v);function v(i){i.preventDefault();const o=document.querySelector('[name="search-text"]').value;L(),b(),y(o).then(t=>{l(),t.hits.length===0?d.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}):g(t.hits)}).catch(t=>{l()})}
//# sourceMappingURL=index.js.map
