import { Component, HostListener, input, output } from '@angular/core';
import { avifSrc } from '../../../../shared/utils/imagem-otimizada';

@Component({
  selector: 'app-lightbox',
  imports: [],
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss',
})
export class Lightbox {
  readonly imagemUrl = input.required<string>();
  readonly titulo = input.required<string>();

  protected readonly avifSrc = avifSrc;

  readonly fechar = output<void>();
  readonly anterior = output<void>();
  readonly proxima = output<void>();

  @HostListener('document:keydown.escape')
  protected aoPressionarEsc(): void {
    this.fechar.emit();
  }

  @HostListener('document:keydown.arrowleft')
  protected aoPressionarSeteEsquerda(): void {
    this.anterior.emit();
  }

  @HostListener('document:keydown.arrowright')
  protected aoPressionarSetaDireita(): void {
    this.proxima.emit();
  }
}
