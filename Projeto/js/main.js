/*let botao = document.querySelector('.menu-principal__btn');
let menuPrincipal = document.querySelector('.menu-principal');

botao.addEventListener("click", abreFechaMenu);

function abreFechaMenu(evento){
    menuPrincipal.classList.toggle('menu-principal--fechado');
} */

// jquery
$(document).ready(function(){
    //Botão do menu
    $('.menu-principal__btn').click(function(){
        $('.menu-principal').toggleClass('menu-principal--fechado')
    });

    // Slide depoimentos
    $('.depoimentos__caixa').slick({
        autoplay: true,
        arrows: false,
        dots: true
    });

    // Validação do formulário de contato
    $('.formulario').validate({
        rules: {
            nome: 'required',
            email: {
                required: true,
                email: true
            },
            mensagem: 'required',
        },
        messages: {
            email: {
                required: 'Por favor preencha o e-mail.',
                email: 'Por favor preencha um email válido.'
            },
            nome: {
                required: 'Por favor preencha o nome.'
            },
            mensagem: {
                required: 'Por favor preencha a mensagem.'
            }
        }
    });
});

