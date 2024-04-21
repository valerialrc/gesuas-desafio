document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.sidebar a');

  console.log(currentPage);

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.parentElement.classList.add('active');
    }
  });
});