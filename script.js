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

document.addEventListener('DOMContentLoaded', function() {
  // Aplicar máscara de telefone (formato brasileiro)
  var phoneInput = document.getElementById('phone');
  var phoneMask = new Inputmask("(99) 99999-9999");
  phoneMask.mask(phoneInput);

  // Aplicar máscara de CPF
  var cpfInput = document.getElementById('cpf');
  var cpfMask = new Inputmask("999.999.999-99");
  cpfMask.mask(cpfInput);

  // Aplicar máscara para data de nascimento (dd/mm/aaaa)
  var dobInput = document.getElementById('dob');
  var dobMask = new Inputmask("99/99/9999");
  dobMask.mask(dobInput);
});