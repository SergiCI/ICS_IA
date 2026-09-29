// Seleccionamos todas las tarjetas de actividades
    const activityCards = document.querySelectorAll('.activity-card')

    // Recorremos cada tarjeta para añadirle el evento de clic
    activityCards.forEach(card => {
        card.addEventListener('click', () => {
            // Extraemos el título y la descripción dentro de la tarjeta
            const title = card.querySelector('h3').textContent
            const description = card.querySelector('p').textContent

            // Mostramos la información en una ventana emergente (alert)
            alert(`Actividad: ${title}\n\nDescripción: ${description}`)
        });
    });