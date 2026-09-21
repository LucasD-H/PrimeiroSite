import { Component, input } from '@angular/core';

const TAMANHO_PADRAO_PX = 24;
const COR_PADRAO = '#000000';

/**
 * Componente base para ícones SVG do projeto.
 *
 * Centraliza o elemento `<svg>` (tamanho e cor padrão) e projeta, via
 * `<ng-content>`, os `<path>` específicos de cada ícone. Componentes de
 * ícone (ex.: `IconMenuAbrir`, `IconMenuFechar`) devem envolver seu
 * conteúdo com `<app-base-svg>` e repassar `tamanho`/`cor` para permitir
 * customização independente em cada uso.
 */
@Component({
  selector: 'app-base-svg',
  imports: [],
  templateUrl: './base-svg.html',
  styleUrl: './base-svg.scss',
})
export class BaseSvg {
  readonly tamanho = input<number>(TAMANHO_PADRAO_PX);
  readonly cor = input<string>(COR_PADRAO);
}
