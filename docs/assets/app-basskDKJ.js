(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=e(t);fetch(t.href,l)}})();document.documentElement.classList.add("js");const u=[{text:"俊，我永远不会忘记你的笑容和善良。你的乐观精神一直激励着我。安息吧，我的朋友。",author:"平凡1337"},{text:"感谢你带给我们的所有美好记忆。你的智慧和幽默将永远被铭记。",author:"gyc"},{text:"周俊是我见过的最有爱心的人之一。他总是不顾一切地帮助他人。我们都会想念他。",author:"朋友"}],d=[{src:"img/photo1.jpg",alt:"周俊与友人",label:"Shared Laughter",title:"在笑声里留下的片段"},{src:"img/photo2.jpg",alt:"珍贵回忆",label:"Quiet Warmth",title:"平静而珍贵的温度"},{src:"img/photo3.jpg",alt:"美好时光",label:"Golden Time",title:"被时光轻轻照亮的日子"},{src:"img/photo4.jpg",alt:"纪念照片",label:"Gentle Memory",title:"留在心里的柔和影像"}],c=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function m(){const r=document.getElementById("tributes");r&&(r.innerHTML=u.map((n,e)=>`
    <article class="tribute-card" data-reveal style="--reveal-delay: ${e*110}ms;">
      <p class="tribute-card__text">${n.text}</p>
      <p class="tribute-card__author">- ${n.author}</p>
    </article>
  `).join(""))}function g(){const r=document.getElementById("gallery");r&&(r.innerHTML=d.map((n,e)=>`
    <button
      class="gallery-card"
      type="button"
      data-reveal
      data-gallery-index="${e}"
      aria-label="查看照片：${n.title}"
      style="--reveal-delay: ${e*120}ms;"
    >
      <img
        src="${n.src}"
        alt="${n.alt}"
        loading="lazy"
        class="gallery-card__image"
      >
      <span class="gallery-card__overlay">
        <span class="gallery-card__caption">
          <span class="gallery-card__label">${n.label}</span>
          <span class="gallery-card__title">${n.title}</span>
        </span>
      </span>
    </button>
  `).join(""))}function y(){const r=document.querySelectorAll("[data-reveal]");if(!r.length)return;if(c){r.forEach(e=>e.classList.add("is-visible"));return}const n=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),window.setTimeout(()=>{s.target.style.removeProperty("--reveal-delay")},820),n.unobserve(s.target))})},{threshold:.14,rootMargin:"0px 0px -8% 0px"});r.forEach(e=>n.observe(e))}function p(){if(c)return;const r=document.getElementById("ambient-field");if(!r)return;Array.from({length:12},(e,s)=>{const t=document.createElement("span");return t.className="ambient-light",t.style.setProperty("--left",`${8+Math.random()*84}%`),t.style.setProperty("--top",`${6+Math.random()*80}%`),t.style.setProperty("--size",`${10+Math.random()*18}px`),t.style.setProperty("--duration",`${10+Math.random()*8}s`),t.style.setProperty("--delay",`${-s*1.1}s`),t.style.setProperty("--drift-x",`${-18+Math.random()*36}px`),t}).forEach(e=>r.appendChild(e))}function f(){if(c)return;const r=document.documentElement,n=document.querySelector(".hero");if(!n)return;let e=0;const s=l=>{e&&cancelAnimationFrame(e),e=requestAnimationFrame(()=>{const o=n.getBoundingClientRect(),i=((l.clientX-o.left)/o.width-.5)*2,a=((l.clientY-o.top)/o.height-.5)*2;r.style.setProperty("--pointer-x",i.toFixed(3)),r.style.setProperty("--pointer-y",a.toFixed(3))})},t=()=>{const l=Math.min(window.scrollY/900,1);r.style.setProperty("--scroll-shift",l.toFixed(3))};n.addEventListener("pointermove",s),window.addEventListener("scroll",t,{passive:!0}),t()}function h(){const r=document.getElementById("light-rail"),n=document.getElementById("ritual-status");if(!r)return;const e=document.createElement("span");e.className="released-light",e.style.setProperty("--left",`${42+Math.random()*16}%`),e.style.setProperty("--size",`${18+Math.random()*18}px`),e.style.setProperty("--travel-x",`${-80+Math.random()*160}px`),r.appendChild(e),window.setTimeout(()=>{e.remove()},2600),n&&(n.textContent="一束柔光已经升起，愿思念被温柔接住。")}function b(){const r=[document.getElementById("release-light"),document.getElementById("release-light-secondary")].filter(Boolean);r.length&&r.forEach(n=>{n.addEventListener("click",()=>{if(c){const e=document.getElementById("ritual-status");e&&(e.textContent="愿这份思念，安静地停留在这里。");return}h()})})}function E(){const r=document.getElementById("gallery-dialog"),n=document.getElementById("gallery-dialog-image"),e=document.getElementById("gallery-dialog-title"),s=document.getElementById("gallery-dialog-label"),t=document.getElementById("gallery-close");!(r instanceof HTMLDialogElement)||!n||!e||!s||(document.addEventListener("click",l=>{const o=l.target instanceof Element?l.target.closest("[data-gallery-index]"):null;if(!o)return;const i=Number(o.getAttribute("data-gallery-index")),a=d[i];a&&(n.src=a.src,n.alt=a.alt,e.textContent=a.title,s.textContent=a.label,r.showModal())}),t==null||t.addEventListener("click",()=>{r.close()}),r.addEventListener("click",l=>{const o=r.getBoundingClientRect();(l.clientX<o.left||l.clientX>o.right||l.clientY<o.top||l.clientY>o.bottom)&&r.close()}))}document.addEventListener("DOMContentLoaded",()=>{m(),g(),y(),p(),f(),b(),E()});
