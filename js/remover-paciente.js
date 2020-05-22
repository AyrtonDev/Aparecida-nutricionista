var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente que quer remover
    paiDoAlvo.classList.add("fadeOut");

    setTimeout(() => {
        paiDoAlvo.remove(); //FUniona tbm se for event.target.parentNode.remove()
    }, 500);
});


//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function(){
//        this.remove();
//    });
//});