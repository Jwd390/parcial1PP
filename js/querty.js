document.addEventListener('DOMContentLoaded', function() {

  // Lista ampliada de salas con más información
  const sala = [
    {
      nombre: "Salon Aventura",
      zona: "Sala externa",
      tipo: "",
      descripcion: "Capacidad máxima 30 personas.",
      direccion: "",
      horarioApertura: ["12:00", "15:00", "18:00", "21:00"],
      horarioCierre: ["14:30", "17:30", "20:30", "23:30"],
    },
    {
      nombre: "Salon Diversión",
      zona: "Sala principal",
      tipo: "",
      descripcion: "Capacidad máxima 80 personas.",
      direccion: "",
      horarioApertura: ["12:00", "15:00", "18:00", "21:00"],
      horarioCierre: ["14:30", "17:30", "20:30", "23:30"],
    },
    {
      nombre: "Salon Fantasia",
      zona: "Sala central",
      tipo: "",
      descripcion: "Capacidad máxima 45 personas.",
      direccion: "",
      horarioApertura: ["12:00", "15:00", "18:00", "21:00"],
      horarioCierre: ["14:30", "17:30", "20:30", "23:30"],
    },
    {
      nombre: "Salon Magico",
      zona: "Sala externa",
      tipo: "",
      descripcion: "Capacidad máxima 75 personas.",
      direccion: "",
      horarioApertura: ["12:00", "15:00", "18:00", "21:00"],
      horarioCierre: ["14:30", "17:30", "20:30", "23:30"],
    },
    // Añadir más salas según sea necesario
  ];

  // Mostrar todas las salas
  function mostrarsala() {
    const salaList = document.getElementById("sala-list");

   
    
    sala.forEach(sala => {
      const card = document.createElement("div");
      card.classList.add("sala-card");
      
      // Generar el string de horarios
      let horarios = "";
      if (Array.isArray(sala.horarioApertura) && Array.isArray(sala.horarioCierre)) {
        horarios = sala.horarioApertura.map((apertura, index) => {
          const cierre = sala.horarioCierre[index] || ""; // Tomar horario de cierre correspondiente
          return `${apertura} a ${cierre}`;
        }).join(", ");
      } else {
        horarios = `${sala.horarioApertura} a ${sala.horarioCierre}`;
      }

      card.innerHTML = `
        <h3>${sala.nombre}</h3>
        <p>${sala.zona} - ${sala.tipo}. ${sala.descripcion}. Ubicación: ${sala.direccion}. Horarios: ${horarios}</p>
        <button class="btn reserve-button">Reservar</button>
      `;
      
      card.querySelector('.reserve-button').addEventListener('click', () => {
        mostrarFormularioReserva(sala);
      });
      
      salaList.appendChild(card);
    });
  }

  // Función para mostrar el formulario de reserva
  function mostrarFormularioReserva(sala) {
    const selectedsalaSpan = document.getElementById("selected-sala");
    const reservationForm = document.getElementById("reservation-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    selectedsalaSpan.textContent = sala.nombre;
    reservationForm.style.display = "block";
    confirmationMessage.style.display = "none";

    // Validación de la fecha mínima (fecha actual)
    const hoy = new Date().toISOString().split("T")[0];
    document.getElementById("reservation-date").setAttribute("min", hoy);
  }

  // Cargar las salas cuando el DOM esté listo
  mostrarsala();
  
});