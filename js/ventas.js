window.onload = () => {
    const ventas = JSON.parse(localStorage.getItem('ventas')) || [];
    const ventasTableBody = document.getElementById('ventas').querySelector('tbody');

    const eliminarVenta = (index) => {
        const confirmacion = confirm('¿Estás seguro de que quieres eliminar esta venta?');
        if (confirmacion) {
            ventas.splice(index, 1);
            localStorage.setItem('ventas', JSON.stringify(ventas));
            location.reload(); // Recargar la página para reflejar los cambios
        }
    };

    ventas.forEach((venta, index) => {
        const row = document.createElement('tr');

        const columns = ['producto', 'cliente', 'precioUnitario', 'cantidad', 'costoExtras', 'costoEntrega', 'comentarios', 'total', 'fecha'];
        columns.forEach(column => {
            const cell = document.createElement('td');
            cell.textContent = venta[column];
            row.appendChild(cell);
        });

        // Añadir celda para el botón de eliminación
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => eliminarVenta(index);
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        ventasTableBody.appendChild(row);
    });
};
