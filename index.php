<?php include('partes/cabecalho.php'); ?>
        <header class="cabecalho-home">
            <h2 class="cabecalho-home__titulo">Texto grande bem aqui!</h2>
            <p class="cabecalho-home__subtitulo">Texto menorzinho aqui</p>
            <a class="cabecalho-home__role" href="#servicos">role para ver mais</a>
        </header>
        <section id="servicos" class="servicos"><!--Seção serviços-->
            <div class="container"> 
                <h2 class="home__titulo">o que fazemos</h2>
                <section class="servicos__item">
                    <img src="img/icone-desenvolvimento-web.png" alt="icone planeta terra">
                    <h3>Desenvolvimento Web</h3>
                    <p class="servicos__texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ex a nunc fermentum congue. Aliquam dignissim pulvinar arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
                </section>
                <section class="servicos__item">
                    <img src="img/icone-e-commerce.png" alt="icone carrinho de compras">
                    <h3>E-commerce</h3>
                    <p class="servicos__texto">In hac habitasse platea dictumst. Proin ut pellentesque mauris. Nunc in varius justo. Phasellus vulputate ut neque non auctor. Fusce vitae urna egestas, finibus ante non, laoreet nunc.</p>
                </section>
                <section class="servicos__item">
                    <img src="img/icone-cafe.png" alt="icone chicara de caféS">
                    <h3>Café</h3>
                    <p class="servicos__texto">Aliquam ac lorem sapien. Nullam suscipit purus vel erat aliquam scelerisque. Aenean sed turpis a nibh laoreet iaculis a et nulla. Aenean at felis ex. Nulla ut dui aliquet, fermentum massa vitae, accumsan erat.</p>
                </section>
            </div><!--Fim container-->
        </section><!--Fim Seção serviços-->
        <section class="depoimentos"> <!--Seção depoimentos-->
            <div class="container">
                <h2 class="home__titulo home__titulo--branco">O que falam de nós</h2>
                <div class="depoimentos__caixa"> 
                    <section class="depoimentos__item">
                        <img class="depoimentos__img" src="img/depoimentos/pessoa-1.jpg" alt="foto da pessoa">
                        <p class="depoimentos__texto">Phasellus dapibus sapien et est blandit, ornare interdum arcu iaculis. Vestibulum placerat ex sit amet erat mattis bibendum. Mauris non mi augue.</p>
                        <p class="depoimentos__pessoa">Nome Pessoa - Cargo</p>
                    </section>              
                    <section class="depoimentos__item">
                        <img class="depoimentos__img" src="img/depoimentos/pessoa-1.jpg" alt="foto da pessoa">
                        <p class="depoimentos__texto">Phasellus dapibus sapien et est blandit, ornare interdum arcu iaculis. Vestibulum placerat ex sit amet erat mattis bibendum. Mauris non mi augue.</p>
                        <p class="depoimentos__pessoa">Nome Pessoa - Cargo</p>
                    </section> 
                    <section class="depoimentos__item">
                        <img class="depoimentos__img" src="img/depoimentos/pessoa-1.jpg" alt="foto da pessoa">
                        <p class="depoimentos__texto">Phasellus dapibus sapien et est blandit, ornare interdum arcu iaculis. Vestibulum placerat ex sit amet erat mattis bibendum. Mauris non mi augue.</p>
                        <p class="depoimentos__pessoa">Nome Pessoa - Cargo</p>
                    </section>
                </div> <!-- depoimentos__caixa -->
            </div>
        </section><!--Fim Seção dpoinmentos-->
<?php include('partes/rodape.php'); ?>   