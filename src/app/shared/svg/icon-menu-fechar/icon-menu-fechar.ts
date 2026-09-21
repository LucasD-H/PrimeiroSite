import { Component, input } from '@angular/core';
import { BaseSvg } from '../base-svg/base-svg';

const TAMANHO_PADRAO_PX = 24;
const COR_PADRAO = '#000000';

/** Ícone de "X", usado para fechar o menu principal quando ele está aberto. */
@Component({
  selector: 'app-icon-menu-fechar',
  imports: [BaseSvg],
  templateUrl: './icon-menu-fechar.html',
})
export class IconMenuFechar {
  readonly tamanho = input<number>(TAMANHO_PADRAO_PX);
  readonly cor = input<string>(COR_PADRAO);
}
