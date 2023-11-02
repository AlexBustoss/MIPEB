
async function startBackup() {
    const statusMessageElement = document.getElementById('statusMessage');
    
    try {
      // Recuperar datos de ventas de localStorage
      const misProductos = JSON.parse(localStorage.getItem('misProductos')) || [];
      const misVentas = JSON.parse(localStorage.getItem('misVentas')) || [];
      
      // Preparar los datos para Google Sheets
      const datosVentas = misVentas.map(venta => {
        const producto = misProductos.find(p => p.id === venta.idProducto);
        return [
          venta.id, 
          venta.fecha, 
          producto ? producto.nombre : "Producto no encontrado", 
          venta.cantidad, 
          venta.precio
        ];
      });
  
      // Enviar datos de ventas a Google Sheets
      await enviarDatosAGoogleSheets(datosVentas, 'ventas');
  
      // Recuperar datos de gastos de localStorage
      const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
      
      // Preparar los datos para Google Sheets
      const datosGastos = expenses.map(gasto => [
        gasto.id, 
        gasto.date, 
        gasto.category, 
        gasto.amount, 
        gasto.description
      ]);
  
      // Enviar datos de gastos a Google Sheets
      await enviarDatosAGoogleSheets(datosGastos, 'gastos');
  
      statusMessageElement.innerText = 'Respaldo completado con éxito';
    } catch (error) {
      console.error('Error al realizar el respaldo:', error);
      // Mostrar el mensaje de error en el elemento de estado
      statusMessageElement.innerText = `Error al realizar el respaldo: ${error.message}`;
    }
  }
  
  async function enviarDatosAGoogleSheets(datos, hoja) {
    const response = await fetch('https://script.google.com/macros/s/AKfycbyEFbm4E_1nfEK3h1A-vGzQMLVv6bpMUDNc20sWzzhO80TfE3-bbdj4Q2gdGxASpCHKTA/exec', {
      method: 'POST',
      body: JSON.stringify({ 
        hoja: hoja,
        values: datos 
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (!response.ok) {
      throw new Error('La solicitud al servidor falló');
    }
  
    const result = await response.json();
    if (result.result !== 'success') {
      throw new Error('Error al completar el respaldo');
    }
  }
  