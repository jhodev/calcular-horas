// Variables y Selectores
const formulario = document.querySelector('#hora-individual');

//Eventos

eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarhoras);
}



//Clases
class Hora{
    constructor(hora){
        this.hora = Number(hora);
    }
}



class UI {
    insertarHoras(horaIndividual, horaGrupal){
        console.log(horaIndividual + ' '+ horaGrupal);
        document.querySelector('#total-individual').textContent = horaIndividual;
        document.querySelector('#total-grupal').textContent = horaGrupal;
    }

    imprimirAlerta(mensaje, tipo){
        //crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        divMensaje.textContent = mensaje;

        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

}

// instanciar
const ui = new UI();


//Funciones

function agregarhoras(e) {
    e.preventDefault();
    
    // lee datos del formulario
    const individual = Number(document.querySelector('#individual').value);
    const grupal = Number(document.querySelector('#grupal').value);

    if(individual === '' || grupal === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    }else if(individual < 0 || isNaN(individual) || grupal < 0 || isNaN(grupal)){
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }

    calcularHoras(individual, grupal);
    

    // ui.imprimirAlerta('Horas agregado correctamente');

    formulario.reset();
}

function calcularHoras(individual, grupal) {
    horaIndividual = individual/40*4;
    horaGrupal = grupal/40*4
    ui.insertarHoras(horaIndividual, horaGrupal);
    formulario.reset();
   
}