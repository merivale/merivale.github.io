const slides = Array.from(document.getElementsByTagName('section'))
const count = document.getElementById('count')

const current = () =>
  slides.findIndex(x => x.classList.contains('active'))

const show = (index) => {
  slides.forEach(x => x.classList.remove('active'))
  slides[index].classList.add('active')
  count.innerHTML = `${index + 1} of ${slides.length}`
}

const next = () => {
  const slide = slides.find(x => x.classList.contains('active'))
  const delayed = Array.from(slide.querySelectorAll('.delayed'))
  const step = delayed.findIndex(x => !x.classList.contains('shown'))
  if (step > -1) {
    delayed[step].classList.add('shown')
    if (delayed[step - 1] && delayed[step - 1].classList.contains('hide')) {
      delayed[step - 1].classList.add('hidden')
    }
  } else if (slides[current() + 1]) {
    show(current() + 1)
  }
}

const prev = () => {
  const slide = slides.find(x => x.classList.contains('active'))
  const delayed = Array.from(slide.querySelectorAll('.delayed')).reverse()
  const step = delayed.findIndex(x => x.classList.contains('shown'))
  if (step > -1) {
    delayed[step].classList.remove('shown')
    if (delayed[step + 1] && delayed[step + 1].classList.contains('hide')) {
      delayed[step + 1].classList.remove('hidden')
    }
  } else if (slides[current() - 1]) {
    show(current() - 1)
  }
}

const smaller = () => {
  const slides = document.querySelector('.slides')
  const size = parseFloat(window.getComputedStyle(slides).fontSize)
  slides.style.fontSize = `${size - 2}px`
}

const larger = () => {
  const slides = document.querySelector('.slides')
  const size = parseFloat(window.getComputedStyle(slides).fontSize)
  slides.style.fontSize = `${size + 2}px`
}

const presentation = () => {
  document.addEventListener('keyup', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        prev()
        break
      case 'ArrowRight':
        next()
        break
    }
  })
  document.getElementById('prev').addEventListener('click', prev)
  document.getElementById('next').addEventListener('click', next)
  document.getElementById('smaller').addEventListener('click', smaller)
  document.getElementById('larger').addEventListener('click', larger)
  show(0)
}

presentation()
