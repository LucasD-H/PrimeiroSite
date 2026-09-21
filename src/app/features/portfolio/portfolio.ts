import { Component, computed, signal } from '@angular/core';
import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { Lightbox } from './components/lightbox/lightbox';
import { Trabalho } from './models/trabalho.model';

@Component({
  selector: 'app-portfolio',
  imports: [PageBanner, Lightbox],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  protected readonly trabalhos: Trabalho[] = [
    {
      titulo: 'Nome do trabalho de salvar',
      miniatura: '/img/portfolio/miniaturas/aircraft-2806035_min.jpg',
      imagemCompleta: '/img/portfolio/aircraft-2806035_1280.jpg',
    },
    {
      titulo: 'Nome do trabalho de salvar',
      miniatura: '/img/portfolio/miniaturas/gear-2291916_min.jpg',
      imagemCompleta: '/img/portfolio/gear-2291916_1280.jpg',
    },
    {
      titulo: 'Nome do trabalho de salvar',
      miniatura: '/img/portfolio/miniaturas/hong-kong-1990268_min.jpg',
      imagemCompleta: '/img/portfolio/hong-kong-1990268_1280.jpg',
    },
    {
      titulo: 'Nome do trabalho de salvar',
      miniatura: '/img/portfolio/miniaturas/landscape-2268775_min.jpg',
      imagemCompleta: '/img/portfolio/landscape-2268775_1280.jpg',
    },
    {
      titulo: 'Nome do trabalho de salvar',
      miniatura: '/img/portfolio/miniaturas/saddle-2614038_min.jpg',
      imagemCompleta: '/img/portfolio/saddle-2614038_1280.jpg',
    },
    {
      titulo: 'Nome do trabalho de salvar',
      miniatura: '/img/portfolio/miniaturas/town-2430571_min.jpg',
      imagemCompleta: '/img/portfolio/town-2430571_1920.jpg',
    },
  ];

  protected readonly indiceSelecionado = signal<number | null>(null);

  protected readonly trabalhoSelecionado = computed(() => {
    const indice = this.indiceSelecionado();
    return indice === null ? null : this.trabalhos[indice];
  });

  protected abrirTrabalho(indice: number): void {
    this.indiceSelecionado.set(indice);
  }

  protected fecharLightbox(): void {
    this.indiceSelecionado.set(null);
  }

  protected irParaAnterior(): void {
    this.navegar(-1);
  }

  protected irParaProximo(): void {
    this.navegar(1);
  }

  private navegar(passo: number): void {
    const indiceAtual = this.indiceSelecionado();
    if (indiceAtual === null) {
      return;
    }
    const total = this.trabalhos.length;
    this.indiceSelecionado.set((indiceAtual + passo + total) % total);
  }
}
