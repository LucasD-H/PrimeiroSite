import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

const NOME_SITE = 'Design Responsivo';

@Injectable({
  providedIn: 'root',
})
export class PageTitle {
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  /** Observa a navegação e atualiza o `<title>` da página com base na rota ativa. */
  observar(): void {
    this.router.events
      .pipe(filter((evento) => evento instanceof NavigationEnd))
      .subscribe(() => this.atualizarTitulo());

    this.atualizarTitulo();
  }

  private atualizarTitulo(): void {
    let rota: ActivatedRouteSnapshot | null = this.router.routerState.snapshot.root;
    let tituloPagina = '';

    while (rota) {
      if (rota.data['title']) {
        tituloPagina = rota.data['title'];
      }
      rota = rota.firstChild;
    }

    this.title.setTitle(tituloPagina ? `${NOME_SITE} | ${tituloPagina}` : NOME_SITE);
  }
}
