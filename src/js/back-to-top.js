window.onscroll = () => {
  toggleTopButton();
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTopButton() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.getElementById('up').classList.remove('d-none');
  } else {
    document.getElementById('up').classList.add('d-none');
  }
}
