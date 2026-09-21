# Portfolio Angular

Este projeto é a migração do site "Design Responsivo" (originalmente em PHP, HTML, SCSS e jQuery) para o Angular. Ele foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 21.2.8.

## Estrutura do projeto

- `src/app/shared/components` — componentes reutilizados em várias páginas (cabeçalho, rodapé, banner de página).
- `src/app/features` — uma pasta por página/funcionalidade (`home`, `about`, `portfolio`, `contact`), cada uma com lazy-loading via rotas.
- `src/app/core` — serviços transversais da aplicação (ex.: atualização do título da página).
- `src/styles` — estilos globais organizados em camadas (`abstracts`, `base`, `layout`, `components`).
- `public/img` e `public/fonts` — imagens e fontes do projeto original.

## Servidor de desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Depois que o servidor estiver rodando, acesse `http://localhost:4200/` no navegador. A aplicação recarrega automaticamente sempre que um arquivo-fonte é alterado.

## Geração de código

O Angular CLI inclui ferramentas de scaffolding. Para gerar um novo componente, execute:

```bash
ng generate component nome-do-componente
```

Para ver a lista completa de schematics disponíveis (como `components`, `directives` ou `pipes`), execute:

```bash
ng generate --help
```

## Build

Para compilar o projeto, execute:

```bash
ng build
```

Isso compila o projeto e armazena os artefatos de build no diretório `dist/`. Por padrão, o build de produção otimiza a aplicação para performance e velocidade.

## Testes unitários

Os testes unitários utilizam o [Jasmine](https://jasmine.github.io/) com o [Karma](https://karma-runner.github.io/) como test runner. Para executá-los, use:

```bash
ng test
```

## Testes end-to-end (e2e)

O Angular CLI não vem com um framework de testes e2e por padrão. Nenhum framework de e2e foi configurado neste projeto até o momento.

## Recursos adicionais

Para mais informações sobre o Angular CLI, incluindo referência detalhada de comandos, acesse a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
