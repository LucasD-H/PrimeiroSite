import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconMenuAbrir } from '../../svg/icon-menu-abrir/icon-menu-abrir';
import { IconMenuFechar } from '../../svg/icon-menu-fechar/icon-menu-fechar';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, IconMenuAbrir, IconMenuFechar],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly menuAberto = signal(false);

  protected alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }
}
