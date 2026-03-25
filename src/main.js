import './style.css'

// Tribute data
const tributes = [
  {
    text: '俊，我永远不会忘记你的笑容和善良。你的乐观精神一直激励着我。安息吧，我的朋友。',
    author: '— 平凡1337'
  },
  {
    text: '感谢你带给我们的所有美好记忆。你的智慧和幽默将永远被铭记。',
    author: '— gyc'
  },
  {
    text: '周俊是我见过的最有爱心的人之一。他总是不顾一切地帮助他人。我们都会想念他。',
    author: '— 周俊炮友'
  }
]

// Gallery data - paths relative to index.html location
const galleryImages = [
  { src: 'img/photo1.jpg', alt: '周俊与友人' },
  { src: 'img/photo2.jpg', alt: '珍贵回忆' },
  { src: 'img/photo3.jpg', alt: '美好时光' },
  { src: 'img/photo4.jpg', alt: '纪念照片' }
]

// Render tributes
function renderTributes() {
  const container = document.getElementById('tributes')
  if (!container) return

  container.innerHTML = tributes.map((tribute, index) => `
    <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-memorial-border/30 group"
         style="animation: slideUp 0.6s ease-out ${index * 0.15}s both;">
      <div class="text-amber-500/20 text-4xl font-serif absolute top-4 left-4">"</div>
      <p class="relative z-10 pt-4 text-memorial-muted leading-relaxed group-hover:text-memorial-text transition-colors">
        ${tribute.text}
      </p>
      <p class="mt-4 text-sm text-right text-memorial-muted/70 font-light">
        ${tribute.author}
      </p>
    </div>
  `).join('')
}

// Render gallery
function renderGallery() {
  const container = document.getElementById('gallery')
  if (!container) return

  container.innerHTML = galleryImages.map((img, index) => `
    <div class="relative overflow-hidden rounded-xl group cursor-pointer aspect-square"
         style="animation: slideUp 0.6s ease-out ${index * 0.1}s both;">
      <img
        src="${img.src}"
        alt="${img.alt}"
        loading="lazy"
        class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  `).join('')
}

// Intersection Observer for scroll animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section)
  })
}

// Parallax effect for header
function setupParallax() {
  const header = document.querySelector('header')
  if (!header) return

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * 0.3
    if (header) {
      header.style.backgroundPositionY = `${rate}px`
    }
  }, { passive: true })
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderTributes()
  renderGallery()
  setupScrollAnimations()
  setupParallax()
})
