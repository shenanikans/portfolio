const scrollWrapper = document.querySelector('.scroll-wrapper');

function smoothScroll() {
  if (scrollWrapper.scrollTop < (scrollWrapper.scrollHeight - scrollWrapper.clientHeight)) {
    scrollWrapper.scrollBy({ top: 1, behavior: 'smooth' });
    requestAnimationFrame(smoothScroll);
  }
}

setTimeout(() => {
  smoothScroll();
}, 1000);
