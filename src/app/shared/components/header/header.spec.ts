import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve iniciar com o menu fechado em telas pequenas', () => {
    const nav: HTMLElement = fixture.nativeElement.querySelector('.menu-principal');
    expect(nav.classList.contains('menu-principal--fechado')).toBeTrue();
  });

  it('deve abrir o menu ao clicar no botão', async () => {
    const botao: HTMLButtonElement = fixture.nativeElement.querySelector('.menu-principal__btn');
    botao.click();
    await fixture.whenStable();

    const nav: HTMLElement = fixture.nativeElement.querySelector('.menu-principal');
    expect(nav.classList.contains('menu-principal--fechado')).toBeFalse();
  });

  it('deve exibir os links de navegação principais', () => {
    const links: NodeListOf<HTMLAnchorElement> =
      fixture.nativeElement.querySelectorAll('.menu-principal__item');
    const textos = Array.from(links).map((link) => link.textContent?.trim());
    expect(textos).toEqual(['Home', 'Sobre nós', 'Portfolio', 'Contato']);
  });
});
