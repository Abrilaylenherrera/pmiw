// Arreglo 2: Opciones de interacción y el índice de la siguiente escena
let ESCENAS_OPCIONES = [
  // Opciones para ESCENA 0 (indice 0)
  [
    { texto: "ir a Escena 1", indiceSiguiente: 1 },
  ],

  [
    { texto: "ir a Escena 2", indiceSiguiente: 2 },
  ],

  [
    { texto: "ir a Escena 3", indiceSiguiente: 3 },
  ],
  
  [
    { texto: "ir a Escena 4", indiceSiguiente: 4 },
    { texto: "ir a Escena 5", indiceSiguiente: 5 }
  ],
  
  [
    { texto: "Fin 2, reinicio", indiceSiguiente: 0 }
  ],
  
  [
    { texto: "Fin 1, reinicio", indiceSiguiente: 0 }
  ],
  
];

// Arreglo 3: Colores de fondo para diferenciar (Temporalmente, luego usaremos imágenes)
let ESCENAS_COLOR_FONDO = [
  [50, 50, 100],  // Escena 0: Azul oscuro
  [150, 50, 50],  // Escena 1: Rojo oscuro
  [50, 150, 50],   // Escena 2: Verde oscuro
  [50, 50, 120],  // Escena 3: Azul oscuro
  [50, 50, 100],  // Escena 4: Azul oscuro
  [150, 50, 50],  // Escena 5: Rojo oscuro
  [50, 50, 120],  // Escena 3: Azul oscuro
  [50, 50, 100],  // Escena 4: Azul oscuro
  [150, 50, 50]
];
