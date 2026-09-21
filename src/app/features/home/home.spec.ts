import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir um item de serviço para cada serviço cadastrado', () => {
    const itens = fixture.nativeElement.querySelectorAll('.servicos__item');
    expect(itens.length).toBe(3);
  });

  it('deve renderizar o carrossel de depoimentos', () => {
    const carrossel = fixture.nativeElement.querySelector('app-testimonials-carousel');
    expect(carrossel).toBeTruthy();
  });
});
