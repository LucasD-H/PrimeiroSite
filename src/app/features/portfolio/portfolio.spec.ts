import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio } from './portfolio';

describe('Portfolio', () => {
  let component: Portfolio;
  let fixture: ComponentFixture<Portfolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio],
    }).compileComponents();

    fixture = TestBed.createComponent(Portfolio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('não deve exibir o lightbox por padrão', () => {
    expect(fixture.nativeElement.querySelector('app-lightbox')).toBeFalsy();
  });

  it('deve abrir o lightbox ao clicar em um trabalho', async () => {
    const botao: HTMLButtonElement = fixture.nativeElement.querySelector(
      '.lista-trabalhos__botao',
    );
    botao.click();
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('app-lightbox')).toBeTruthy();
  });

  it('deve fechar o lightbox ao clicar no botão de fechar', async () => {
    const botao: HTMLButtonElement = fixture.nativeElement.querySelector(
      '.lista-trabalhos__botao',
    );
    botao.click();
    await fixture.whenStable();

    const botaoFechar: HTMLButtonElement =
      fixture.nativeElement.querySelector('.lightbox__fechar');
    botaoFechar.click();
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('app-lightbox')).toBeFalsy();
  });
});
