var currentTab = 0; // Current tab is set to be the first tab (0)

let nun = 1;

const form_01 = document.getElementById('form_01');

const form_02 = document.getElementById('form_02');

const form_03 = document.getElementById('form_03');

const submit_button = document.getElementById('submit');

const show_all = document.getElementById('show_all');

const progress_now = document.querySelector('.progress_now');

const progress = document.querySelector('.progress_less');

const previous_button = document.getElementById('previous_button');

const uso_carro_particular = document.getElementById('particular');

const uso_carro_particularComercialApp = document.getElementById(

    'particularComercialApp'

);

const uso_carro_vendas = document.getElementById('vendas');

const uso_carro_taxi = document.getElementById('taxi');

const uso_carro_carga = document.getElementById('cargas');

const uso_carro_passageiros = document.getElementById('passageiros');

const input_uso_do_carro = document.getElementById('input-uso-do-carro');

const display_cep = document.getElementById('display-cep');

const estado_civil_solteiro = document.getElementById('solteiro');

const estado_civil_casado = document.getElementById('casado');

const estado_civil_separado = document.getElementById('separado');

const estado_civil_viuvo = document.getElementById('viuvo');

const input_estado_civil = document.getElementById('input-estado-civil');



function style_uso_carro(ativo) {

    uso_carro_particular.style.borderColor = '#777';

    uso_carro_particularComercialApp.style.borderColor = '#777';

    uso_carro_vendas.style.borderColor = '#777';

    uso_carro_taxi.style.borderColor = '#777';

    uso_carro_carga.style.borderColor = '#777';

    uso_carro_passageiros.style.borderColor = '#777';



    if (ativo == 1) {

        uso_carro_particular.style.borderColor = '#F7941E';

    } else if (ativo == 2) {

        uso_carro_particularComercialApp.style.borderColor = '#F7941E';

    } else if (ativo == 3) {

        uso_carro_vendas.style.borderColor = '#F7941E';

    } else if (ativo == 4) {

        uso_carro_taxi.style.borderColor = '#F7941E';

    } else if (ativo == 5) {

        uso_carro_carga.style.borderColor = '#F7941E';

    } else if (ativo == 6) {

        uso_carro_passageiros.style.borderColor = '#F7941E';

    }

}



function uso_carro(uso) {

    if (uso == 1) {

        style_uso_carro(1);

        input_uso_do_carro.value = 'particular';

    } else if (uso == 2) {

        style_uso_carro(2);

        input_uso_do_carro.value =

            'Particular, Uso cormercial e Motorista de aplicativo';

    } else if (uso == 3) {

        style_uso_carro(3);

        input_uso_do_carro.value = 'Representante Comercial/Vendas';

    } else if (uso == 4) {

        style_uso_carro(4);

        input_uso_do_carro.value = 'Taxi';

    } else if (uso == 5) {

        style_uso_carro(5);

        input_uso_do_carro.value = 'Transporte de caragas';

    } else if (uso == 6) {

        style_uso_carro(6);

        input_uso_do_carro.value = 'Transporte de passageiros';

    }

}



function transicao(direcao) {

    //Escolhendo a parte do form a ser exibida

    if (direcao == 1) {

        nun++;

    } else if (nun > 1) {

        nun--;

    }



    //Limpando o Form

    form_01.style.display = 'none';

    form_02.style.display = 'none';

    form_03.style.display = 'none';

    //Exibindo o Form requerido

    if (nun == 1) {

        form_01.style.display = 'block';

        progress_now.setAttribute('style', 'width: 25%');

    } else if (nun == 2) {

        form_02.style.display = 'block';

        progress_now.setAttribute('style', 'width: 50%');

    } else if (nun == 3) {

        form_03.style.display = 'block';

        progress_now.setAttribute('style', 'width: 75%');

    } else if (nun == 4) {

        form_01.style.display = 'block';

        form_02.style.display = 'block';

        form_03.style.display = 'block';



        submit_button.style.display = 'inline-block';

        next_button.style.display = 'none';

        previous_button.style.display = 'none';

        progress_now.setAttribute('style', 'width: 100%');

    }

}



//estado_civil



function style_estado_civil(ativo) {

    estado_civil_solteiro.style.backgroundColor = '#FFFFFF';

    estado_civil_casado.style.backgroundColor = '#FFFFFF';

    estado_civil_separado.style.backgroundColor = '#FFFFFF';

    estado_civil_viuvo.style.backgroundColor = '#FFFFFF';



    estado_civil_solteiro.style.color = '#777';

    estado_civil_casado.style.color = '#777';

    estado_civil_separado.style.color = '#777';

    estado_civil_viuvo.style.color = '#777';



    if (ativo == 1) {

        estado_civil_solteiro.style.backgroundColor = '#F7941E';

        estado_civil_solteiro.style.color = '#FFFFFF';

    } else if (ativo == 2) {

        estado_civil_casado.style.backgroundColor = '#F7941E';

        estado_civil_casado.style.color = '#FFFFFF';

    } else if (ativo == 3) {

        estado_civil_separado.style.backgroundColor = '#F7941E';

        estado_civil_separado.style.color = '#FFFFFF';

    } else if (ativo == 4) {

        estado_civil_viuvo.style.backgroundColor = '#F7941E';

        estado_civil_viuvo.style.color = '#FFFFFF';

    }

}



function estado_civil(uso) {

    if (uso == 1) {

        style_estado_civil(1);

        input_estado_civil.value = 'solteiro';

    } else if (uso == 2) {

        style_estado_civil(2);

        input_estado_civil.value = 'casado';

    } else if (uso == 3) {

        style_estado_civil(3);

        input_estado_civil.value = 'separado';

    } else if (uso == 4) {

        style_estado_civil(4);

        input_estado_civil.value = 'viuvo';

    }

}



//codigo para API viacep



('use strict');



const limparFormulario = (endereco) => {

    document.getElementById('endereco').value = '';

    document.getElementById('bairro').value = '';

    document.getElementById('cidade').value = '';

    document.getElementById('estado').value = '';

};



const preencherFormulario = (endereco) => {

    //alert('preencher formulario')

    document.getElementById('endereco').value = endereco.logradouro;

    document.getElementById('bairro').value = endereco.bairro;

    document.getElementById('cidade').value = endereco.localidade;

    document.getElementById('estado').value = endereco.uf;

};



const eNumero = (numero) => /^[0-9]+$/.test(numero);



const cepValido = (cep) => cep.length == 8 && eNumero(cep);



const pesquisarCep = async () => {

    limparFormulario();

    //alert('teste de focusout ativar função pesquisarCep')

    const cep = document.getElementById('cep').value.replace('-', '');

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    display_cep.style.display = 'block';

    if (cepValido(cep)) {

        const dados = await fetch(url);

        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')) {

            document.getElementById('endereco').value = 'CEP não encontrado!';

        } else {

            preencherFormulario(endereco);

        }

    } else {

        document.getElementById('endereco').value = 'CEP incorreto!';

    }

};



let id_cep = document.getElementById('cep');

id_cep.addEventListener('focusout', pesquisarCep);



showTab(currentTab); // Display the current tab



function showTab(n) {

    // This function will display the specified tab of the form ...

    var x = document.getElementsByClassName('tab');

    x[n].style.display = 'block';



    // ... and fix the Previous/Next buttons:

    if (n == 0) {

        document.getElementById('prevBtn').style.display = 'none';
        progress_now.setAttribute("style", "width: 33%");


    } else {

        document.getElementById('prevBtn').style.display = 'inline';

    }
    if(n == 1){
        progress_now.setAttribute("style", "width: 66%");
    }
    if(n == 2){
        progress_now.setAttribute("style", "width: 100%");
    }

    if (n == x.length - 1) {

        document.getElementById('nextBtn').innerHTML = 'Enviar';

    } else {

        document.getElementById('nextBtn').innerHTML = 'Continuar';

    }

}



function nextPrev(n) {

    // This function will figure out which tab to display

    var x = document.getElementsByClassName('tab');



    // Exit the function if any field in the current tab is invalid:

    if (n == 1 && !validateForm()) return false;



    // Hide the current tab:

    x[currentTab].style.display = 'none';



    // Increase or decrease the current tab by 1:

    currentTab = currentTab + n;



    // if you have reached the end of the form... :

    if (currentTab >= x.length) {

        //...the form gets submitted:

        document.getElementById('regForm').submit();

        return false;

    }



    // Otherwise, display the correct tab:

    showTab(currentTab);

}



function validateForm() {

    // This function deals with validation of the form fields

    var x,

        y,

        i,

        valid = true;

    x = document.getElementsByClassName('tab');

    y = x[currentTab].getElementsByTagName('input');



    // A loop that checks every input field in the current tab:

    for (i = 0; i < y.length; i++) {

        // If a field is empty...

        if (y[i].value == '') {

            // add an "invalid" class to the field:

            y[i].className += ' invalid';

            // and set the current valid status to false:

            valid = false;

        }

    }



    return valid; // return the valid status

}

