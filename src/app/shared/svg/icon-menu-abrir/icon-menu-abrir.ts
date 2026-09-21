import { Component, input } from '@angular/core';
import { BaseSvg } from '../base-svg/base-svg';

const TAMANHO_PADRAO_PX = 24;
const COR_PADRAO = '#000000';

/** Ícone de "hambúrguer" (três linhas), usado para abrir o menu principal. */
@Component({
  selector: 'app-icon-menu-abrir',
  imports: [BaseSvg],
  templateUrl: './icon-menu-abrir.html',
})
export class IconMenuAbrir {
  readonly tamanho = input<number>(TAMANHO_PADRAO_PX);
  readonly cor = input<string>(COR_PADRAO);
}
