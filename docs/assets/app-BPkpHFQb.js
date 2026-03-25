(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const a=[{text:"俊，我永远不会忘记你的笑容和善良。你的乐观精神一直激励着我。安息吧，我的朋友。",author:"— 平凡1337"},{text:"感谢你带给我们的所有美好记忆。你的智慧和幽默将永远被铭记。",author:"— gyc"},{text:"周俊是我见过的最有爱心的人之一。他总是不顾一切地帮助他人。我们都会想念他。",author:"— 周俊炮友"}],l=[{src:"img/photo1.jpg",alt:"周俊与友人"},{src:"img/photo2.jpg",alt:"珍贵回忆"},{src:"img/photo3.jpg",alt:"美好时光"},{src:"img/photo4.jpg",alt:"纪念照片"}];function c(){const r=document.getElementById("tributes");r&&(r.innerHTML=a.map((t,o)=>`
    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-memorial-border/30 group"
         style="animation: slideUp 0.6s ease-out ${o*.15}s both;">
      <div class="text-amber-500/20 text-4xl font-serif absolute top-4 left-4">"</div>
      <p class="relative z-10 pt-4 text-memorial-muted leading-relaxed group-hover:text-memorial-text transition-colors">
        ${t.text}
      </p>
      <p class="mt-4 text-sm text-right text-memorial-muted/70 font-light">
        ${t.author}
      </p>
    </div>
  `).join(""))}function d(){const r=document.getElementById("gallery");r&&(r.innerHTML=l.map((t,o)=>`
    <div class="relative overflow-hidden rounded-xl group cursor-pointer aspect-square"
         style="animation: slideUp 0.6s ease-out ${o*.1}s both;">
      <img
        src="${t.src}"
        alt="${t.alt}"
        loading="lazy"
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  `).join(""))}function u(){const r=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(o.target.classList.add("animate-fade-in"),r.unobserve(o.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll("section").forEach(t=>{r.observe(t)})}function p(){const r=document.querySelector("header");r&&window.addEventListener("scroll",()=>{const o=window.pageYOffset*.3;r&&(r.style.backgroundPositionY=`${o}px`)},{passive:!0})}document.addEventListener("DOMContentLoaded",()=>{c(),d(),u(),p()});
