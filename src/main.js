import './style.css'

document.documentElement.classList.add('js')

const tributes = [
  {
    text: '俊，我永远不会忘记你的笑容和善良。你的乐观精神一直激励着我。安息吧，我的朋友。',
    author: '平凡1337'
  },
  {
    text: '感谢你带给我们的所有美好记忆。你的智慧和幽默将永远被铭记。',
    author: 'gyc'
  },
  {
    text: '周俊是我见过的最有爱心的人之一。他总是不顾一切地帮助他人。我们都会想念他。',
    author: '朋友'
  }
]

const galleryImages = [
  {
    src: 'img/photo1.jpg',
    alt: '周俊与友人',
    label: 'Shared Laughter',
    title: '在笑声里留下的片段'
  },
  {
    src: 'img/photo2.jpg',
    alt: '珍贵回忆',
    label: 'Quiet Warmth',
    title: '平静而珍贵的温度'
  },
  {
    src: 'img/photo3.jpg',
    alt: '美好时光',
    label: 'Golden Time',
    title: '被时光轻轻照亮的日子'
  },
  {
    src: 'img/photo4.jpg',
    alt: '纪念照片',
    label: 'Gentle Memory',
    title: '留在心里的柔和影像'
  }
]

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function renderTributes() {
  const container = document.getElementById('tributes')
  if (!container) return

  container.innerHTML = tributes.map((tribute, index) => `
    <article class="tribute-card" data-reveal style="--reveal-delay: ${index * 110}ms;">
      <p class="tribute-card__text">${tribute.text}</p>
      <p class="tribute-card__author">- ${tribute.author}</p>
    </article>
  `).join('')
}

function renderGallery() {
  const container = document.getElementById('gallery')
  if (!container) return

  container.innerHTML = galleryImages.map((image, index) => `
    <button
      class="gallery-card"
      type="button"
      data-reveal
      data-gallery-index="${index}"
      aria-label="查看照片：${image.title}"
      style="--reveal-delay: ${index * 120}ms;"
    >
      <img
        src="${image.src}"
        alt="${image.alt}"
        loading="lazy"
        class="gallery-card__image"
      >
      <span class="gallery-card__overlay">
        <span class="gallery-card__caption">
          <span class="gallery-card__label">${image.label}</span>
          <span class="gallery-card__title">${image.title}</span>
        </span>
      </span>
    </button>
  `).join('')
}

function setupRevealObserver() {
  const revealItems = document.querySelectorAll('[data-reveal]')
  if (!revealItems.length) return

  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      window.setTimeout(() => {
        entry.target.style.removeProperty('--reveal-delay')
      }, 820)
      observer.unobserve(entry.target)
    })
  }, {
    threshold: 0.14,
    rootMargin: '0px 0px -8% 0px'
  })

  revealItems.forEach((item) => observer.observe(item))
}

function createAmbientLights() {
  if (prefersReducedMotion) return

  const container = document.getElementById('ambient-field')
  if (!container) return

  const lights = Array.from({ length: 12 }, (_, index) => {
    const light = document.createElement('span')
    light.className = 'ambient-light'
    light.style.setProperty('--left', `${8 + Math.random() * 84}%`)
    light.style.setProperty('--top', `${6 + Math.random() * 80}%`)
    light.style.setProperty('--size', `${10 + Math.random() * 18}px`)
    light.style.setProperty('--duration', `${10 + Math.random() * 8}s`)
    light.style.setProperty('--delay', `${-index * 1.1}s`)
    light.style.setProperty('--drift-x', `${-18 + Math.random() * 36}px`)
    return light
  })

  lights.forEach((light) => container.appendChild(light))
}

function setupSceneMotion() {
  if (prefersReducedMotion) return

  const root = document.documentElement
  const hero = document.querySelector('.hero')
  if (!hero) return

  let pointerFrame = 0

  const onPointerMove = (event) => {
    if (pointerFrame) cancelAnimationFrame(pointerFrame)

    pointerFrame = requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      root.style.setProperty('--pointer-x', x.toFixed(3))
      root.style.setProperty('--pointer-y', y.toFixed(3))
    })
  }

  const onScroll = () => {
    const progress = Math.min(window.scrollY / 900, 1)
    root.style.setProperty('--scroll-shift', progress.toFixed(3))
  }

  hero.addEventListener('pointermove', onPointerMove)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

function releaseLight() {
  const rail = document.getElementById('light-rail')
  const status = document.getElementById('ritual-status')
  if (!rail) return

  const light = document.createElement('span')
  light.className = 'released-light'
  light.style.setProperty('--left', `${42 + Math.random() * 16}%`)
  light.style.setProperty('--size', `${18 + Math.random() * 18}px`)
  light.style.setProperty('--travel-x', `${-80 + Math.random() * 160}px`)
  rail.appendChild(light)

  window.setTimeout(() => {
    light.remove()
  }, 2600)

  if (status) {
    status.textContent = '一束柔光已经升起，愿思念被温柔接住。'
  }
}

function setupRitualButtons() {
  const buttons = [
    document.getElementById('release-light'),
    document.getElementById('release-light-secondary')
  ].filter(Boolean)

  if (!buttons.length) return

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (prefersReducedMotion) {
        const status = document.getElementById('ritual-status')
        if (status) {
          status.textContent = '愿这份思念，安静地停留在这里。'
        }
        return
      }

      releaseLight()
    })
  })
}

function setupGalleryDialog() {
  const dialog = document.getElementById('gallery-dialog')
  const image = document.getElementById('gallery-dialog-image')
  const title = document.getElementById('gallery-dialog-title')
  const label = document.getElementById('gallery-dialog-label')
  const closeButton = document.getElementById('gallery-close')

  if (!(dialog instanceof HTMLDialogElement) || !image || !title || !label) {
    return
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target instanceof Element ? event.target.closest('[data-gallery-index]') : null
    if (!trigger) return

    const index = Number(trigger.getAttribute('data-gallery-index'))
    const selected = galleryImages[index]
    if (!selected) return

    image.src = selected.src
    image.alt = selected.alt
    title.textContent = selected.title
    label.textContent = selected.label
    dialog.showModal()
  })

  closeButton?.addEventListener('click', () => {
    dialog.close()
  })

  dialog.addEventListener('click', (event) => {
    const bounds = dialog.getBoundingClientRect()
    const clickedOutside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom

    if (clickedOutside) {
      dialog.close()
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  renderTributes()
  renderGallery()
  setupRevealObserver()
  createAmbientLights()
  setupSceneMotion()
  setupRitualButtons()
  setupGalleryDialog()
})
