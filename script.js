document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();
  const links = document.querySelectorAll('.sidebar a');

  // Verifica a página atual e evidencia no menu
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

    // Validação do CPF
    const cpfField = form.querySelector('#cpf');
    const cpfValue = cpfField.value.trim();
    if (cpfField && !isValidCPF(cpfValue)) {
      isValid = false;
      cpfField.classList.add('invalid');
    } else {
      cpfField.classList.remove('invalid');
    }
 
    // Validação da Data de Nascimento
    const dobField = form.querySelector('#dob');
    const dobValue = dobField.value.trim();
    if (dobField && !isValidDate(dobValue)) {
      isValid = false;
      dobField.classList.add('invalid');
    } else {
      dobField.classList.remove('invalid');
    }

    if (isValid) {
      showModal();
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const newRegistrationBtn = document.getElementById('new-registration-btn');

  newRegistrationBtn.addEventListener('click', function () {
    resetForm();
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

function isValidCPF(cpf) {
  // Remover caracteres não numéricos
  cpf = cpf.replace(/[^\d]+/g, '');

  // Verificar se o CPF tem 11 dígitos
  if (cpf.length !== 11) {
    return false;
  }

  // Checar se todos os dígitos são iguais (casos como "111.111.111-11")
  if (/^(.)\1*$/.test(cpf)) {
    return false;
  }

  // Cálculo para verificar os dígitos verificadores
  function calculateDigit(cpf, factor) {
    let sum = 0;
    for (let i = 0; i < factor - 1; i++) {
      sum += parseInt(cpf.charAt(i)) * (factor - i);
    }
    let result = 11 - (sum % 11);
    return result > 9 ? 0 : result;
  }

  const firstDigit = calculateDigit(cpf, 10);
  const secondDigit = calculateDigit(cpf, 11);

  return (
    firstDigit === parseInt(cpf.charAt(9)) &&
    secondDigit === parseInt(cpf.charAt(10))
  );
}

function isValidDate(date) {
  const [day, month, year] = date.split('/').map(Number);

  // Verifica se é uma data válida
  const dateObject = new Date(year, month - 1, day);
  if (
    dateObject.getFullYear() !== year ||
    dateObject.getMonth() + 1 !== month ||
    dateObject.getDate() !== day
  ) {
    return false;
  }

  // Verifica se a data não está no futuro
  const today = new Date();
  if (dateObject > today) {
    return false;
  }

  return true;
}

function resetForm() {
  const form = document.getElementById('registrationForm');

  // Limpa todos os campos do formulário
  form.reset();

  // Remove as classes de erro/aviso
  const fieldsWithErrors = form.querySelectorAll('.invalid, .error-text');
  fieldsWithErrors.forEach(field => {
    field.classList.remove('invalid', 'error-text');
  });

  // Fecha o modal, se estiver aberto
  const successModal = document.getElementById('success-modal');
  if (successModal.style.display === 'flex') {
    successModal.style.display = 'none';
  }
}
