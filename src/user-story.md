# Búsqueda de productos

Como comprador, en la de caja de búsqueda quiero ingresar el nombre de un
producto a búscar y envìar esté formulario para obtener los resultados.

Cómo comprador quiero ver un listado con los productos resultados de la
búsqueda.

Cómo comprador quiero poder ver la imagen e información básica de cada producto
en los resultados aís cómo tener la opción de ver su informacíon detalla.

## Criterios de aceptación:

- Debe haber una página de búsqueda.
- La página debe contener un buscador de productos:
  - Esté debe contener un input text y un botón, al hacer click sobre la tecla
    enter o hacer click en el botón se debe iniciar la búsqueda.
- La sección de resultados debe contener:
  - Antes de la primera búsqueda, muestre el mensaje de estado inicial
    "Encuentre miles de marcas y productos a precios increíbles".
  - Se debe indicar el estado de búsqueda, si se inicia una búsqueda se debe
    mostrar un espinner mientras se están cargando los resultados.
  - Si hay resultados la cabecera de resultados debe tener un breadcrumb con
    información de la categoría del producto.
  - Cada producto en la sección de resultados debe tener: imagen del producto,
    descripción, precio y ubicación, al hacer click se debe abrir el detalle del
    producto selccionado.
  - Si se obtienes resultados se debe mostrar máximo 4 productos y utilizar
    paginación para mostrar el resto de los resultados sí es el caso.
  - Paginación siguiente y anterior cuando el contexto aplica, ejemplo: en la
    primera página, la página anterior debe estar desactivada.
  - Si no hay resultados, muestre un mensaje de estado vacío "No hay
    publicaciones que coincidan con tu búsqueda."
- Manejo de búsqueda:
  - Si el comprador escribe "reloj" en el input por la entrada del nombre del
    producto y hace clic o enter para iniciar la búsqueda, la aplicación debería
    devolver productos con la palabra "reloj" en su descripción asociada.
- Paginación:
  - Si el comprador hace clic en buscar y luego en el botón de la página
    siguiente, la aplicación debería mostrar los próximos productos.
  - Si el desarrollador hace clic en buscar y luego en el botón de la página
    siguiente y luego hace clic en el botón anterior, la aplicación debería
    mostrar los productos anteriores.
- Manejo de errores:
  - Si hay un error inesperado de la aplicación correspondientes al frontend, la
    aplicación debería mostrar un mensaje "Ha ocurrido un error inesperado" y un
    botón de recarga.
  - Si hay un error inesperado del backend, la aplicación debería mostrar un
    error de mensaje de alerta con el mensaje del servicio si lo hay, si no se
    muestra el genérico "Ha ocurrido un error inesperado".
