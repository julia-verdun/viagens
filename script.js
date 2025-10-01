
document.getElementById('search-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const departure = document.getElementById('departure').value;

  const flightsContainer = document.getElementById('flights-container');
  flightsContainer.innerHTML = '<p class="text-center py-10">Carregando voos...</p>';

  setTimeout(() => {
    const flights = [
      {
        id: 1,
        airline: 'Latam Airlines',
        logo: 'latam',
        departureTime: '08:30',
        arrivalTime: '11:45',
        duration: '2h 15m',
        price: 789,
        stops: 0
      },
      {
        id: 2,
        airline: 'Gol Linhas Aéreas',
        logo: 'gol',
        departureTime: '10:15',
        arrivalTime: '13:30',
        duration: '2h 15m',
        price: 699,
        stops: 0
      },
      {
        id: 3,
        airline: 'Azul Linhas Aéreas',
        logo: 'azul',
        departureTime: '14:45',
        arrivalTime: '18:20',
        duration: '2h 35m',
        price: 649,
        stops: 1
      },
      {
        id: 4,
        airline: 'Avianca',
        logo: 'avianca',
        departureTime: '19:30',
        arrivalTime: '22:45',
        duration: '2h 15m',
        price: 899,
        stops: 0
      }
    ];

    displayFlights(flights, origin, destination, departure);
  }, 1500);
});

function displayFlights(flights, origin, destination, departure) {
  const flightsContainer = document.getElementById('flights-container');

  if (flights.length === 0) {
    flightsContainer.innerHTML = `
      <div class="text-center py-10 bg-white rounded-xl shadow-sm">
        <i data-feather="frown" class="text-gray-400 w-12 h-12 mx-auto mb-4"></i>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Nenhum voo encontrado</h3>
        <p class="text-gray-600">Tente alterar suas datas ou destinos.</p>
      </div>
    `;
    feather.replace();
    return;
  }

  let flightsHTML = '';

  flights.forEach(flight => {
    flightsHTML += `
      <div class="flight-card bg-white rounded-xl shadow-sm p-6 transition duration-300 hover:shadow-md">
        <div class="flex flex-col md:flex-row md:items-center justify-between">
          <div class="flex items-center mb-4 md:mb-0">
            <div class="bg-gray-100 p-3 rounded-lg mr-4">
              <i data-feather="plane" class="text-blue-600 w-6 h-6"></i>
            </div>
            <div>
              <h3 class="font-bold text-gray-800">${flight.airline}</h3>
              <p class="text-sm text-gray-600">${flight.stops === 0 ? 'Voo direto' : `${flight.stops} escala${flight.stops > 1 ? 's' : ''}`}</p>
            </div>
          </div>
          <div class="flex items-center justify-between md:justify-end space-x-8 mb-4 md:mb-0">
            <div class="text-center">
              <p class="text-2xl font-bold text-gray-800">${flight.departureTime}</p>
              <p class="text-sm text-gray-600">${origin}</p>
            </div>
            <div class="text-center px-4">
              <p class="text-sm text-gray-600">${flight.duration}</p>
              <div class="w-16 h-px bg-gray-300 my-1"></div>
              <p class="text-xs text-gray-500">${flight.stops === 0 ? 'Direto' : 'Com escala'}</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold text-gray-800">${flight.arrivalTime}</p>
              <p class="text-sm text-gray-600">${destination}</p>
            </div>
          </div>
          <div class="flex flex-col items-end">
            <p class="text-3xl font-bold text-blue-600 mb-2">R$ ${flight.price.toFixed(2)}</p>
            
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              Selecionar
            </button>
          </div>
        </div>
      </div>
    `;
  });

  flightsContainer.innerHTML = flightsHTML;
  feather.replace();
}



document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
  document.querySelectorAll('[id$="-error"]').forEach(el => el.classList.add('hidden'));

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  let isValid = true;

  if (!name) {
    document.getElementById('name').classList.add('input-error');
    document.getElementById('name-error').classList.remove('hidden');
    isValid = false;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('email').classList.add('input-error');
    document.getElementById('email-error').classList.remove('hidden');
    isValid = false;
  }

  if (!message) {
    document.getElementById('message').classList.add('input-error');
    document.getElementById('message-error').classList.remove('hidden');
    isValid = false;
  }

  if (!isValid) return;

  const formSuccess = document.getElementById('form-success');
  const formError = document.getElementById('form-error');

  formSuccess.classList.add('hidden');
  formError.classList.add('hidden');

  const submitButton = this.querySelector('button[type="submit"]');
  const originalText = submitButton.innerHTML;
  submitButton.innerHTML = '<div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mx-auto"></div>';
  submitButton.disabled = true;

  setTimeout(() => {
    if (Math.random() > 0.3) {
      formSuccess.classList.remove('hidden');
      this.reset();
    } else {
      formError.classList.remove('hidden');
    }

    submitButton.innerHTML = originalText;
    submitButton.disabled = false;
  }, 1500);
});

//reservas html//





// Dados de voos de exemplo
const sampleFlights = [
    {
        id: 1,
        airline: 'Latam Airlines',
        departureTime: '08:30',
        arrivalTime: '11:45',
        duration: '2h 15m',
        price: 789,
        stops: 0,
        origin: 'Porto Alegre',
        destination: 'São Paulo'
    },
    {
        id: 2,
        airline: 'Gol Linhas Aéreas',
        departureTime: '10:15',
        arrivalTime: '13:30',
        duration: '2h 15m',
        price: 699,
        stops: 0,
        origin: 'Porto Alegre',
        destination: 'São Paulo'
    },
    {
        id: 3,
        airline: 'Azul Linhas Aéreas',
        departureTime: '14:45',
        arrivalTime: '18:20',
        duration: '2h 35m',
        price: 649,
        stops: 1,
        origin: 'Porto Alegre',
        destination: 'São Paulo'
    },
    {
        id: 4,
        airline: 'Avianca',
        departureTime: '19:30',
        arrivalTime: '22:45',
        duration: '2h 15m',
        price: 899,
        stops: 0,
        origin: 'Porto Alegre',
        destination: 'São Paulo'
    }
];

// Estado do carrinho
let cart = [];

// Elementos DOM
const cartList = document.getElementById('cart-list');
const emptyCartMsg = document.querySelector('.empty-cart-msg');
const paymentSection = document.getElementById('payment-section');
const paymentForm = document.getElementById('payment-form');
const paymentMessage = document.getElementById('payment-message');
const pixInfo = document.getElementById('pix-info');
const cardInfo = document.getElementById('card-info');
const pixQRCode = document.getElementById('pix-qrcode');
const pixKeyElem = document.getElementById('pix-key');
const flightOptions = document.getElementById('flight-options');

// Renderiza opções para adicionar voos no carrinho
function renderFlightOptions() {
    flightOptions.innerHTML = '';
    sampleFlights.forEach(flight => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${flight.airline}</strong>
            <p>${flight.origin} → ${flight.destination}</p>
            <p>Saída: ${flight.departureTime} | Chegada: ${flight.arrivalTime}</p>
            <p>Preço: R$ ${flight.price.toFixed(2)}</p>
            <button class="btn-add" data-id="${flight.id}">Adicionar ao carrinho</button>
        `;
        flightOptions.appendChild(li);
    });

    // Add event listeners aos botões adicionar
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            addToCart(id);
        });
    });
}

// Adiciona voo ao carrinho
function addToCart(flightId) {
    const flight = sampleFlights.find(f => f.id === flightId);
    if (!flight) return;

    // Se já tiver, não adiciona duplicado
    if (cart.some(f => f.id === flightId)) {
        alert('Este voo já está no carrinho.');
        return;
    }

    cart.push(flight);
    renderCart();
}

// Remove voo do carrinho
function removeFromCart(flightId) {
    cart = cart.filter(f => f.id !== flightId);
    renderCart();
}

// Renderiza o carrinho
function renderCart() {
    cartList.innerHTML = '';

    if (cart.length === 0) {
        emptyCartMsg.style.display = 'block';
        paymentSection.classList.add('hidden');
        return;
    }

    emptyCartMsg.style.display = 'none';
    paymentSection.classList.remove('hidden');

    cart.forEach(flight => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="flight-info">
                <strong>${flight.airline}</strong>
                <span class="flight-time">${flight.origin} → ${flight.destination}</span>
                <span class="flight-time">Saída: ${flight.departureTime} | Chegada: ${flight.arrivalTime}</span>
            </div>
            <div class="price">R$ ${flight.price.toFixed(2)}</div>
            <button class="btn-remove" aria-label="Remover voo" title="Remover voo" data-id="${flight.id}">&times;</button>
        `;
        cartList.appendChild(li);
    });

    // Add evento remover
    document.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.id);
            removeFromCart(id);
        });
    });
}

// Gerar chave Pix aleatória simples (string alfanumérica)
function generatePixKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let key = '';
    for (let i = 0; i < 20; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return key;
}

// Atualiza a UI do pagamento (cartão ou pix)
function updatePaymentUI() {
    const method = document.querySelector('input[name="payment-method"]:checked').value;
    if (method === 'card') {
        cardInfo.classList.remove('hidden');
        pixInfo.classList.add('hidden');
        paymentMessage.textContent = '';
    } else {
        cardInfo.classList.add('hidden');
        pixInfo.classList.remove('hidden');
        paymentMessage.textContent = '';

        const pixKey = generatePixKey();
        pixKeyElem.textContent = pixKey;

        // Gerar QR Code usando biblioteca qrcode.min.js
        QRCode.toCanvas(pixQRCode, pixKey, { width: 180 }, function (error) {
            if (error) console.error(error);
        });
    }
}

// Validação simples dos campos do cartão
function validateCardForm() {
    const name = document.getElementById('card-name').value.trim();
    const number = document.getElementById('card-number').value.trim();
    const expiry = document.getElementById('card-expiry').value.trim();
    const cvv = document.getElementById('card-cvv').value.trim();

    if (!name || !number || !expiry || !cvv) {
        alert('Por favor, preencha todos os campos do cartão.');
        return false;
    }

    // Regex simplificado para número do cartão e validade
    if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(number)) {
        alert('Número do cartão inválido. Use o formato: 0000 0000 0000 0000');
        return false;
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
        alert('Validade inválida. Use MM/AA');
        return false;
    }

    if (!/^\d{3}$/.test(cvv)) {
        alert('CVV inválido.');
        return false;
    }

    return true;
}

// Formata número do cartão enquanto o usuário digita
function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, '').substring(0, 16);
    let formatted = '';

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) formatted += ' ';
        formatted += value[i];
    }

    input.value = formatted;
}

// Inicialização
function init() {
    renderFlightOptions();
    renderCart();
    updatePaymentUI();

    // Evento mudança método pagamento
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener('change', updatePaymentUI);
    });

    // Formatação cartão
    const cardNumberInput = document.getElementById('card-number');
    cardNumberInput.addEventListener('input', () => formatCardNumber(cardNumberInput));

    // Form submit pagamento
    paymentForm.addEventListener('submit', e => {
        e.preventDefault();

        if (cart.length === 0) {
            alert('Adicione ao menos um voo ao carrinho antes de concluir.');
            return;
        }

        const method = document.querySelector('input[name="payment-method"]:checked').value;
        if (method === 'card') {
            if (!validateCardForm()) {
                return;
            }
            paymentMessage.textContent = 'Pagamento com cartão aprovado! Obrigado pela compra.';
            paymentMessage.className = 'payment-message success';
        } else {
            // Simula pagamento Pix como aprovado
            paymentMessage.textContent = 'Pagamento via Pix confirmado! Obrigado pela compra.';
            paymentMessage.className = 'payment-message success';
        }

        // Limpa carrinho após "compra"
        cart = [];
        renderCart();
        paymentForm.reset();
        updatePaymentUI();
    });
}

init();

// Menu mobile toggle
const menuBtn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");
if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

// Animação no scroll (já usa AOS, mas extra pra fade-in suave)
document.querySelectorAll("section").forEach(sec => {
  sec.classList.add("opacity-0", "transition", "duration-700");
  window.addEventListener("scroll", () => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.remove("opacity-0");
      sec.classList.add("opacity-100");
    }
  });
});

// Destaque quando o usuário digita na busca
const flightInputs = document.querySelectorAll("#flight-search-form input, #flight-search-form select");
flightInputs.forEach(input => {
  input.addEventListener("input", () => {
    input.style.backgroundColor = input.value ? "#f0f9ff" : "#fff";
  });
});

