import { Component } from '@angular/core';
import { TestimonialsCarousel } from './components/testimonials-carousel/testimonials-carousel';
import { Servico } from './models/servico.model';
import { Depoimento } from './models/depoimento.model';

@Component({
  selector: 'app-home',
  imports: [TestimonialsCarousel],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly servicos: Servico[] = [
    {
      icone: '/img/icone-desenvolvimento-web.png',
      alt: 'icone planeta terra',
      titulo: 'Desenvolvimento Web',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum ex a nunc fermentum congue. Aliquam dignissim pulvinar arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    },
    {
      icone: '/img/icone-e-commerce.png',
      alt: 'icone carrinho de compras',
      titulo: 'E-commerce',
      texto:
        'In hac habitasse platea dictumst. Proin ut pellentesque mauris. Nunc in varius justo. Phasellus vulputate ut neque non auctor. Fusce vitae urna egestas, finibus ante non, laoreet nunc.',
    },
    {
      icone: '/img/icone-cafe.png',
      alt: 'icone chicara de café',
      titulo: 'Café',
      texto:
        'Aliquam ac lorem sapien. Nullam suscipit purus vel erat aliquam scelerisque. Aenean sed turpis a nibh laoreet iaculis a et nulla. Aenean at felis ex. Nulla ut dui aliquet, fermentum massa vitae, accumsan erat.',
    },
  ];

  protected readonly depoimentos: Depoimento[] = [
    {
      imagem: '/img/depoimentos/pessoa-1.jpg',
      texto:
        'Phasellus dapibus sapien et est blandit, ornare interdum arcu iaculis. Vestibulum placerat ex sit amet erat mattis bibendum. Mauris non mi augue.',
      pessoa: 'Nome Pessoa - Cargo',
    },
    {
      imagem: '/img/depoimentos/pessoa-1.jpg',
      texto:
        'Phasellus dapibus sapien et est blandit, ornare interdum arcu iaculis. Vestibulum placerat ex sit amet erat mattis bibendum. Mauris non mi augue.',
      pessoa: 'Nome Pessoa - Cargo',
    },
    {
      imagem: '/img/depoimentos/pessoa-1.jpg',
      texto:
        'Phasellus dapibus sapien et est blandit, ornare interdum arcu iaculis. Vestibulum placerat ex sit amet erat mattis bibendum. Mauris non mi augue.',
      pessoa: 'Nome Pessoa - Cargo',
    },
  ];
}
