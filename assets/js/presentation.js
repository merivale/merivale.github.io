const slides = Array.from(document.getElementsByTagName('section'));

const current = () =>
  slides.findIndex(x => x.classList.contains('active'));

const show = (index) => {
  slides.forEach(x => x.classList.remove('active'));
  slides[index].classList.add('active');
};

const delayed = () =>
  Array.from(slides[current()].querySelectorAll('.delayed')).find(x => !x.classList.contains('shown'));

const shown = () =>
  Array.from(slides[current()].querySelectorAll('.shown')).pop();

const next = () => {
  if (delayed()) {
    delayed().classList.add('shown');
  } else if (slides[current() + 1]) {
    show(current() + 1);
  }
};

const prev = () => {
  if (shown()) {
    shown().classList.remove('shown');
  } else if (slides[current() - 1]) {
    show(current() - 1);
  }
};

const presentation = () => {
  document.addEventListener('keyup', (e) => {
    switch (e.key) {
      case 'ArrowRight': next(); break;
      case 'ArrowLeft': prev(); break;
    }
  });
  show(0);
};

if (document.body.classList.contains('presentation') && slides.length > 0) {
  presentation();
}
