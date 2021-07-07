(window.onload = () => {


    /* Botão topo página */
    const btnIndex = document.querySelector('.btn__page-up');

    topoPagina(btnIndex);
    function topoPagina(btn) {

            console.log(btn);
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                window.scrollTo({top: 0, behavior: 'smooth'});
       

            });
        
    }

    /* Botão de menu responsivo para telas pequenas */

    btnMenuResponsivo();
    function btnMenuResponsivo() {

        const bars = document.querySelector('.bars');
        const times = document.querySelector('.times');
        const navegacao = document.querySelector('.navegacao');
        const lista = document.querySelector('.navegacao__lista');
        const btnToggle = document.querySelector('.navegacao__conteudo_toggle-btn');

        var clicked = false;
        
        btnToggle.addEventListener('click', function(e) {

            e.preventDefault();

            if(clicked) {
                bars.style.display='flex';
                times.style.display='none';
                lista.classList.remove('displayShow');
                navegacao.style.height='10rem';
                clicked = false;
                console.log(clicked);
            } else {
                bars.style.display='none';
                times.style.display='flex';
                lista.classList.add('displayShow');
                navegacao.style.height='100vh';
                clicked = true; 
                console.log(clicked);
            }


        });

    }

    /* Redirecionamento dos botões de redes sociais */

    redirecionar();
    function redirecionar() {

        const rede = document.querySelectorAll('.redes');
        rede.forEach(rede => {
            
            rede.addEventListener('click', function(e) {

                e.preventDefault();
                const redeClicada = e.target;

                console.log(redeClicada);

                const linkedin = document.querySelector('.linkedin');
                const github = document.querySelector('.github');
                const facebook = document.querySelector('.facebook');
                const instagram = document.querySelector('.instagram');
                const whatsapp = document.querySelector('.whatsapp');
                const mail = document.querySelector('.mail');
    
                
                
                if(redeClicada === facebook) {
                    window.location.href = 'https://www.facebook.com/diegofariagomes';
                } else if(redeClicada === instagram) {
                    window.location.href = 'https://www.instagram.com/dfgsolutions/';
                } if(redeClicada === whatsapp) {
                    window.location.href = 'https://api.whatsapp.com/send?1=pt_BR&phone=5521992889796/&text=Olá!%20Diego';
                } if(redeClicada === mail) {
                    window.location.href = 'https://www.gmail.com.br';
                } if(redeClicada === github) {
                    window.location.href = 'https://github.com/Diego-DFG';
                } if(redeClicada === linkedin) {
                    window.location.href = 'https://www.linkedin.com/in/diego-faria-gomes-a10832179/';
                }
    
            });

        });

    }

    /* Efeito de typewriting */

    function typeWriter(element, speed) {

        var texto = element.innerHTML;
        element.innerHTML = '';

        var i = 0;
        var timer = setInterval(function() {
            if(i < texto.length) {
                element.append(texto.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);

    }

    var speed = 55;
    var titulo__01 = document.querySelector('.titulo__01');
    var titulo__02 = document.querySelector('.titulo__02');
    var titulo__03 = document.querySelector('.titulo__03');
    
    
    typeWriter(titulo__01, speed);
    typeWriter(titulo__02, speed*1.5);
    typeWriter(titulo__03, speed*2);

})();
