<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php 
        $titulo = 'Desing Responsivo';
        global $tituloPagina;
        if($tituloPagina != ''){
            $titulo .= ' | ' . $tituloPagina;
        }
    ?>
    <title><?php echo $titulo ?></title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
    <header class="cabecalho">
        <div class="container">
            <?php if($tituloPagina == ''): ?>
                <h1 class="logo">Desing Responsivo</h1>
            <?php else: ?>  
                <a href="index.php" class="logo">Desing Responsivo</a>
            <?php endif; ?>
            <nav class="menu-principal menu-principal--fechado">
                <button class="menu-principal__btn">Abrir/fechar menu</button>
                <ul class="menu-principal__lista">
                    <li><a class="menu-principal__item <?php echo $tituloPagina == '' ? 'menu-principal__item--atual' : '' ?>" href="index.php">Home</a></li>
                    <li><a class="menu-principal__item <?php echo $tituloPagina == 'Sobre' ? 'menu-principal__item--atual' : '' ?>" href="sobre.php">Sobre nós</a></li>
                    <li><a class="menu-principal__item <?php echo $tituloPagina == 'Portfolio' ? 'menu-principal__item--atual' : '' ?>" href="portfolio.php">Portfolio</a></li>
                    <li><a class="menu-principal__item <?php echo $tituloPagina == 'contato' ? 'menu-principal__item--atual' : '' ?>" href="contato.php">Contato</a></li>
                </ul>
            </nav>
        </div><!--Fim container-->
    </header>
    <main>