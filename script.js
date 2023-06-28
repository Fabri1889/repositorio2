const form = document.getElementById('subscription-form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const ageInput = document.getElementById('age');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const postalCodeInput = document.getElementById('postal-code');
const dniInput = document.getElementById('dni');

// Actualizar el título del formulario en tiempo real
fullNameInput.addEventListener('keydown', () => {
  const formTitle = document.getElementById('form-title');
  formTitle.textContent = 'HOLA ' + fullNameInput.value;
});

// Validar el campo Nombre completo
fullNameInput.addEventListener('blur', () => {
  const fullNameError = document.getElementById('full-name-error');
  if (fullNameInput.value.trim().length < 6 || !fullNameInput.value.includes(' ')) {
    fullNameError.textContent = 'El nombre completo debe tener al menos 6 caracteres y contener un espacio.';
  } else {
    fullNameError.textContent = '';
  }
});

// Validar el campo Email
emailInput.addEventListener('blur', () => {
  const emailError = document.getElementById('email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Por favor, introduce una dirección de email válida.';
  } else {
    emailError.textContent = '';
  }
});

// Validar el campo Contraseña
passwordInput.addEventListener('blur', () => {
  const passwordError = document.getElementById('password-error');
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres, formados por letras y números.';
  } else {
    passwordError.textContent = '';
  }
});

// Validar el campo Repetir contraseña
confirmPasswordInput.addEventListener('blur', () => {
  const confirmPasswordError = document.getElementById('confirm-password-error');
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Las contraseñas no coinciden.';
  } else {
    confirmPasswordError.textContent = '';
  }
});

// Validar el campo Edad
ageInput.addEventListener('blur', () => {
  const ageError = document.getElementById('age-error');
  if (ageInput.value === '' || parseInt(ageInput.value) < 18) {
    ageError.textContent = 'Debes tener al menos 18 años para suscribirte.';
  } else {
    ageError.textContent = '';
  }
});

// Validar el campo Teléfono
phoneInput.addEventListener('blur', () => {
  const phoneError = document.getElementById('phone-error');
  const phoneRegex = /^[0-9]{7,}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.textContent = 'Por favor, introduce un número de teléfono válido.';
  } else {
    phoneError.textContent = '';
  }
});

// Validar el campo Dirección
addressInput.addEventListener('blur', () => {
  const addressError = document.getElementById('address-error');
  if (addressInput.value.trim().length < 5) {
    addressError.textContent = 'La dirección debe tener al menos 5 caracteres.';
  } else {
    addressError.textContent = '';
  }
});

// Validar el campo Ciudad
cityInput.addEventListener('blur', () => {
  const cityError = document.getElementById('city-error');
  if (cityInput.value.trim().length < 3) {
    cityError.textContent = 'La ciudad debe tener al menos 3 caracteres.';
  } else {
    cityError.textContent = '';
  }
});

// Validar el campo Código Postal
postalCodeInput.addEventListener('blur', () => {
  const postalCodeError = document.getElementById('postal-code-error');
  if (postalCodeInput.value.trim().length < 3) {
    postalCodeError.textContent = 'El código postal debe tener al menos 3 caracteres.';
  } else {
    postalCodeError.textContent = '';
  }
});

// Validar el campo DNI
dniInput.addEventListener('blur', () => {
  const dniError = document.getElementById('dni-error');
  const dniRegex = /^[0-9]{7,8}$/;
  if (!dniRegex.test(dniInput.value)) {
    dniError.textContent = 'Por favor, introduce un número de DNI válido (7 u 8 dígitos).';
  } else {
    dniError.textContent = '';
  }
});

// Enviar el formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validar todos los campos antes de enviar
  const errors = [];
  if (fullNameInput.value.trim().length < 6 || !fullNameInput.value.includes(' ')) {
    errors.push('El nombre completo debe tener al menos 6 caracteres y contener un espacio.');
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    errors.push('Por favor, introduce una dirección de email válida.');
  }
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    errors.push('La contraseña debe tener al menos 8 caracteres, formados por letras y números.');
  }
  if (confirmPasswordInput.value !== passwordInput.value) {
    errors.push('Las contraseñas no coinciden.');
  }
  if (ageInput.value === '' || parseInt(ageInput.value) < 18) {
    errors.push('Debes tener al menos 18 años para suscribirte.');
  }
  const phoneRegex = /^[0-9]{7,}$/;
  if (!phoneRegex.test(phoneInput.value)) {
    errors.push('Por favor, introduce un número de teléfono válido.');
  }
  if (addressInput.value.trim().length < 5) {
    errors.push('La dirección debe tener al menos 5 caracteres.');
  }
  if (cityInput.value.trim().length < 3) {
    errors.push('La ciudad debe tener al menos 3 caracteres.');
  }
  if (postalCodeInput.value.trim().length < 3) {
    errors.push('El código postal debe tener al menos 3 caracteres.');
  }
  const dniRegex = /^[0-9]{7,8}$/;
  if (!dniRegex.test(dniInput.value)) {
    errors.push('Por favor, introduce un número de DNI válido (7 u 8 dígitos).');
  }

  if (errors.length === 0) {
    // Mostrar el mensaje de éxito en un cartel emergente
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    alert(JSON.stringify(data));
  } else {
    // Mostrar los errores en el formulario y en un cartel emergente
    const errorMessages = errors.join('\n');
    alert(errorMessages);

    const errorFields = [
      { field: fullNameInput, errorId: 'full-name-error', error: 'El nombre completo debe tener al menos 6 caracteres y contener un espacio.' },
      { field: emailInput, errorId: 'email-error', error: 'Por favor, introduce una dirección de email válida.' },
      { field: passwordInput, errorId: 'password-error', error: 'La contraseña debe tener al menos 8 caracteres, formados por letras y números.' },
      { field: confirmPasswordInput, errorId: 'confirm-password-error', error: 'Las contraseñas no coinciden.' },
      { field: ageInput, errorId: 'age-error', error: 'Debes tener al menos 18 años para suscribirte.' },
      { field: phoneInput, errorId: 'phone-error', error: 'Por favor, introduce un número de teléfono válido.' },
      { field: addressInput, errorId: 'address-error', error: 'La dirección debe tener al menos 5 caracteres.' },
      { field: cityInput, errorId: 'city-error', error: 'La ciudad debe tener al menos 3 caracteres.' },
      { field: postalCodeInput, errorId: 'postal-code-error', error: 'El código postal debe tener al menos 3 caracteres.' },
      { field: dniInput, errorId: 'dni-error', error: 'Por favor, introduce un número de DNI válido (7 u 8 dígitos).' }
    ];

    errorFields.forEach(({ field, errorId, error }) => {
      const errorElement = document.getElementById(errorId);
      if (errors.includes(error)) {
        field.classList.add('error-input');
        errorElement.textContent = error;
      } else {
        field.classList.remove('error-input');
        errorElement.textContent = '';
      }
    });
  }
});
