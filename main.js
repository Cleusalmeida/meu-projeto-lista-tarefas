const minhaTarefa = document.getElementById('form-lista');
let tarefa = '<li>';

minhaTarefa.addEventListener('submit', function(e) { 
    e.preventDefault();

    const inputNomeTarefa = document.getElementById('nome-tarefa');//seleciona o id do html
    tarefa += `<li> ${inputNomeTarefa.value} </li>`; //concatenação da const + a variável li

    const listaTarefa = document.querySelector('ul');//seleciona uma tag do html

    listaTarefa.innerHTML = tarefa;//o js chama a constante e escreve no html a variavel criada no js
    $('li').click(function(){
        $(this).addClass("sublinhar");
    })

})