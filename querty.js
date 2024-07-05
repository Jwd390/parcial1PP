document.addEventListener("DOMContentLoaded", function() {
      flatpickr("#fecha", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        minDate: "today",
        locale: "es"
    });

    const form = document.getElementById('formulario-contacto');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        const fecha = document.getElementById('fecha').value.trim();

        if (!nombre || !email || !mensaje || !fecha) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        alert('Formulario enviado exitosamente.');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

  
    fetchEvents();

    function fetchEvents() {
        const events = [
            { date: '2024-07-10', title: 'Cumpleaños Mágico', description: 'Sala AVENTURA.' },
            { date: '2024-07-15', title: 'Fiesta de Verano', description: 'Sala DIVERSION.' },
            { date: '2024-07-21', title: 'Cumpleaños Mágico', description: 'Sala FANTASIA  .' },
            { date: '2024-07-28', title: 'Fiesta de Verano', description: 'Sala MAGIAS.' },
          
        ];

        const eventosLista = document.getElementById('eventos-lista');
        events.forEach(event => {
            const eventoItem = document.createElement('div');
            eventoItem.className = 'evento-item';
            eventoItem.innerHTML = `
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p><strong>Fecha:</strong> ${event.date}</p>
            `;
            eventosLista.appendChild(eventoItem);
        });
    }
});
