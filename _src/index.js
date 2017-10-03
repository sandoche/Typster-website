// JS umports
import ScrollReveal from 'scrollreveal';
import SmoothScroll from 'smooth-scroll';

// CSS and SASS files
import './index.scss';

const scroll = new SmoothScroll('a[href*="#"]');

window.sr = ScrollReveal({ viewOffset: { top: 0, right: 0, bottom: 100, left: 0 }, delay: 300 });

sr.reveal('.feature__row');
sr.reveal('.product', 100);
sr.reveal('.newsletter');
