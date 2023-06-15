<?php 
    global $tituloPagina;
    $tituloPagina = "contato";
    include('partes/cabecalho.php');

    $nome = '';
    $email = '';
    $mensagem = '';
    $erroFormulario = '';
    $sucessoFormulario = '';
    if( isset($_POST['submit']) ) {
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $mensagem = $_POST['mensagem'];
        if (
            $nome != '' 
            && $email != '' 
            && $mensagem =! '')
        {
            // usuário preencheu corretamente
            $mensagemEmail = 'Nome: ' . $nome . ' - ';
            $mensagemEmail .= 'Mail: ' . $email . ' - ';
            $mensagemEmail .= 'Mensagem: ' . $mensagem;
            if(mail('contato@site.com.br', 'Mensagem de contato', $mensagemEmail)){
                //email enviado
                $sucessoFormulario = 'Mensagem enviada com sucesso!';

            }
            else{
                //email não enviadoS
                $erroFormulario = "Falha ao enviar o email, por favor tente mais tarde, ou através do email JalimRabei@gmail.com";
            }
        }
        else{
            // usuário não preencheu todos os campos
            $erroFormulario = "Por favor, verifique se todos os campos estão preenchidos!";
        }
    }
?>
        <header class="pagina-cabecalho">
            <h1 class="pagina-cabecalho__titulo">Contato</h1>
        </header>
        <section class="container" class="pagina-conteudo">
            <p class="text-center">Suspendisse convallis, turpis vitae placerat luctus, est felis dictum augue.</p>
            <form action="contato.php" class="formulario" method="post">
                <?php if($erroFormulario != ''): ?>
                    <div class="formulario__erro">
                        <?php echo $erroFormulario ?>
                    </div>
                <?php endif; ?>
                <?php if($sucessoFormulario != ''): ?>
                    <div class="formulario__sucesso">
                        <?php echo $erroFormulario ?>
                    </div>
                <?php endif; ?>
                <div class="formulario__grupo formulario__grupo--coluna-esq">
                    <label class="formulario__label" for="nome">Nome</label><br>
                    <input class="formulario__campo" id="nome" type="text" name="nome">
                </div>
                <div class="formulario__grupo formulario__grupo--coluna-dir">
                    <label class="formulario__label" for="email">E-mail</label><br>
                    <input class="formulario__campo" id="email" type="email" name="email">
                </div>
                <div class="formulario__grupo">
                    <label class="formulario__label" for="mensagem">Mensagem</label><br>
                    <textarea class="formulario__campo" name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
                </div>
                <input type="submit" class="formulario__botao" value="Enviar" name="submit">
            </form>
            <p class="text-center">
                Maecenas facilisis volutpat ipsum, sed faucibus tortor aliquam non. <br>
                Aliquam erat volutpat. Vivamus cursus pulvinar turpis, nec blandit augue maximus ac.
            </p>
        </section>
        <div class="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83644.47561114567!2d-86.8372088018414!3d21.155771734121704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2zTcOpeGljbw!5e0!3m2!1spt-BR!2sbr!4v1666983537278!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
<?php include('partes/rodape.php'); ?>