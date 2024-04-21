document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.sidebar a');

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

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    const requiredFields = form.querySelectorAll('input[required], select[required]');

    requiredFields.forEach((field) => {
      const warningText = field.parentElement.querySelector('.required');
      if (!field.value.trim()) {
          isValid = false;
          warningText.classList.add('error-text'); // Adiciona a classe para tornar o texto vermelho
      } else {
          warningText.classList.remove('error-text'); // Remove a classe para corrigir a cor
      }
    });

    // Verificar formato do CPF
    const cpfField = form.querySelector('#cpf');
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (cpfField && !cpfPattern.test(cpfField.value.trim())) {
        isValid = false;
        cpfField.classList.add('invalid');
    } else {
        cpfField.classList.remove('invalid');
    }

    // Verificar formato da data de nascimento
    const dobField = form.querySelector('#dob');
    const dobPattern = /^\d{2}\/\d{2}\/\d{4}$/;
    if (dobField && !dobPattern.test(dobField.value.trim())) {
        isValid = false;
        dobField.classList.add('invalid');
    } else {
        dobField.classList.remove('invalid');
    }

    if (isValid) {
      form.submit();
    }
  });
});

function showModal() {
  const modal = document.getElementById('success-modal');
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('success-modal');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('success-modal');
  if (event.target === modal) {
    closeModal();
  }
};

function submitForm(event) {
  event.preventDefault();

  const cadastroBemSucedido = true;

  if (cadastroBemSucedido) {
    showModal();
  }
}
