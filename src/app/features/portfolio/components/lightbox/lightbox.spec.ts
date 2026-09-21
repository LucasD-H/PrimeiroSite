import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lightbox } from './lightbox';

describe('Lightbox', () => {
  let component: Lightbox;
  let fixture: ComponentFixture<Lightbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lightbox],
    }).compileComponents();

    fixture = TestBed.createComponent(Lightbox);
    fixture.componentRef.setInput('imagemUrl', '/img/portfolio/foto.jpg');
    fixture.componentRef.setInput('titulo', 'Trabalho exemplo');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve emitir "fechar" ao clicar no botão de fechar', () => {
    const spy = spyOn(component.fechar, 'emit');
    const botao: HTMLButtonElement = fixture.nativeElement.querySelector('.lightbox__fechar');
    botao.click();
    expect(spy).toHaveBeenCalled();
  });

  it('deve emitir "proxima" ao clicar no botão de próxima imagem', () => {
    const spy = spyOn(component.proxima, 'emit');
    const botao: HTMLButtonElement = fixture.nativeElement.querySelector(
      '.lightbox__navegacao--proxima',
    );
    botao.click();
    expect(spy).toHaveBeenCalled();
  });

  it('deve emitir "fechar" ao pressionar Esc', () => {
    const spy = spyOn(component.fechar, 'emit');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(spy).toHaveBeenCalled();
  });
});
