const abrirTest = (enlace) => {
    window.open(enlace, "", "height=600,width=800");
}

const mostrarExamenes = () => {
    this.event.preventDefault();
    let lista = document.getElementById('tabla-examenes');
    let asignaturas = `<div>`
    asignaturas += datos.map(dato => {
        let asignatura = `<h2>${dato.asignatura} (${dato.curso}º)</h2><ul>`
        asignatura += dato.examenes.map(examen =>
            `<li>${examen.titulo}: <button onclick="javascript:abrirTest('${examen.enlace}');">${examen.numeroPreguntas}</button></li>`
        ).join("");
        return asignatura + '</ul>';
    }).join("");
    asignaturas += `</div>`;
    lista.innerHTML = asignaturas;
}
