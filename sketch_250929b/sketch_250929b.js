// Variable global para rastrear el índice de la escena actual
let indiceEscenaActual = 0; 

function setup() {
  // Define el tamaño de tu ventana de juego
  createCanvas(640, 480);
  // Solo se ejecuta una vez al inicio
}

function draw() {
  // Esto se ejecuta constantemente, actualizando la pantalla
  // Llama a la función principal para dibujar la escena actual
  dibujarEscena();
}

function dibujarEscena() {
  // 1. Dibuja el fondo de la escena
  let colorFondo = ESCENAS_COLOR_FONDO[indiceEscenaActual];
  background(colorFondo);

  // 3. Dibuja los botones de las opciones
  let opcionesActuales = ESCENAS_OPCIONES[indiceEscenaActual];
  
  textSize(18);
  for (let i = 0; i < opcionesActuales.length; i++) {
    let x = 50;
    let y = 300 + i * 50;
    const anchoBoton = 350;
    const altoBoton = 40;
    
    // Dibuja el botón como un rectángulo
    fill(100, 100, 150); // Color del botón
    // Añadimos una pequeña interacción: si el mouse está encima, cambia de color
    if (mouseX > x && mouseX < x + anchoBoton && mouseY > y - altoBoton && mouseY < y) {
      fill(150, 150, 200); // Color de resaltado
    }
    rect(x, y - altoBoton, anchoBoton, altoBoton);
    
    // Dibuja el texto de la opción dentro del botón
    fill(255); // Color de texto blanco
    text(opcionesActuales[i].texto, x + 15, y - 15);
  }
}
function mousePressed() {
  let opcionesActuales = ESCENAS_OPCIONES[indiceEscenaActual];
  
  for (let i = 0; i < opcionesActuales.length; i++) {
    let x = 50;
    let y = 300 + i * 50;
    const anchoBoton = 350;
    const altoBoton = 40;
    
    // Comprueba si el clic está dentro del área del botón
    if (mouseX > x && mouseX < x + anchoBoton &&
        mouseY > y - altoBoton && mouseY < y) {
      
      // La clave: actualiza la variable de estado con el nuevo índice
      indiceEscenaActual = opcionesActuales[i].indiceSiguiente;
      
      // ¡IMPORTANTE! Detiene la comprobación de botones después de un clic válido
      return; 
    }
  }
}
