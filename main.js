const fila = document.querySelector('.contenedor-carrousel'); 
const peliculas = document.querySelectorAll('.pelicula');

const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

/* -------- event listener para la flecha derecha ----- ---- */
flechaderecha.addEventListener('click', () => {
 fila.scrollLeft += fila.offsetWidth;

 const indicadoractivo = document.querySelector('.indicadores .activo');
 if(indicadoractivo.nextSibling) {
     indicadoractivo.nextSibling.classList.add('activo');
     indicadoractivo.classList.remove('activo');
 }
});

/* -------- event listener para la flecha izquierda ----- ---- */
flechaizquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
    const indicadoractivo = document.querySelector('.indicadores .activo');
if(indicadoractivo.previousSibling) {
    indicadoractivo.previousSibling.classList.add('activo');
    indicadoractivo.classList.remove('activo');
}
   });

   /* -------- paginacion ----- ---- */
   const numeropaginas = Math.ceil(peliculas.length / 4);
   for(let i = 0; i < numeropaginas; i++){
       const indicador = document.createElement('button');

       if(i=== 0){
           indicador.classList.add('activo');
       }     
     document.querySelector('.indicadores').appendChild(indicador);
     indicador.addEventListener('click', (e) => {
         fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');
     });
   }
/* -------- hover ----- ---- */
peliculas.forEach((pelicula) => {
pelicula.addEventListener('mouseenter', (e) => {
const elemento = e.currentTarget;
setTimeout(() => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
    elemento.classList.add('hover');
     }, 300);
  });
}); 

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});