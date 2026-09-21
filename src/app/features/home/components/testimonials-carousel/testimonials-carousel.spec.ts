import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsCarousel } from './testimonials-carousel';
import { Depoimento } from '../../models/depoimento.model';

describe('TestimonialsCarousel', () => {
  let component: TestimonialsCarousel;
  let fixture: ComponentFixture<TestimonialsCarousel>;

  const depoimentos: Depoimento[] = [
    { imagem: '/img/a.jpg', texto: 'Texto 1', pessoa: 'Pessoa 1' },
    { imagem: '/img/b.jpg', texto: 'Texto 2', pessoa: 'Pessoa 2' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialsCarousel);
    fixture.componentRef.setInput('depoimentos', depoimentos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar um slide para cada depoimento, com o texto sempre acima do nome da pessoa', () => {
    const itens: NodeListOf<HTMLElement> =
      fixture.nativeElement.querySelectorAll('.depoimentos__item');
    expect(itens.length).toBe(2);

    const conteudo = itens[0].querySelector('.depoimentos__conteudo') as HTMLElement;
    const texto = conteudo.querySelector('.depoimentos__texto') as HTMLElement;
    const pessoa = conteudo.querySelector('.depoimentos__pessoa') as HTMLElement;
    expect(texto.compareDocumentPosition(pessoa) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('deve trocar de depoimento ao clicar em um dot', async () => {
    const dots: NodeListOf<HTMLButtonElement> =
      fixture.nativeElement.querySelectorAll('.depoimentos__dot');
    dots[1].click();
    await fixture.whenStable();

    expect(component['indiceAtual']()).toBe(1);
  });

  it('deve avançar automaticamente após o intervalo de autoplay', async () => {
    jasmine.clock().install();
    try {
      const fixtureComRelogioMockado = TestBed.createComponent(TestimonialsCarousel);
      fixtureComRelogioMockado.componentRef.setInput('depoimentos', depoimentos);
      const componenteComRelogioMockado = fixtureComRelogioMockado.componentInstance;
      await fixtureComRelogioMockado.whenStable();

      jasmine.clock().tick(5000);
      await fixtureComRelogioMockado.whenStable();

      expect(componenteComRelogioMockado['indiceAtual']()).toBe(1);
    } finally {
      jasmine.clock().uninstall();
    }
  });

  it('deve avançar de slide ao arrastar para a esquerda', () => {
    component['aoIniciarArraste']({ clientX: 200, target: document.createElement('div') } as unknown as PointerEvent);
    component['aoMoverArraste']({ clientX: 100 } as PointerEvent);
    component['aoFinalizarArraste']();

    expect(component['indiceAtual']()).toBe(1);
  });

  it('deve voltar ao slide anterior ao arrastar para a direita', () => {
    component['aoIniciarArraste']({ clientX: 100, target: document.createElement('div') } as unknown as PointerEvent);
    component['aoMoverArraste']({ clientX: 200 } as PointerEvent);
    component['aoFinalizarArraste']();

    expect(component['indiceAtual']()).toBe(1);
  });
});
