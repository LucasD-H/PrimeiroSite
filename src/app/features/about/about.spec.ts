import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o título "Sobre nós" no banner da página', () => {
    const titulo: string = fixture.nativeElement.querySelector(
      '.pagina-cabecalho__titulo',
    ).textContent;
    expect(titulo.trim()).toBe('Sobre nós');
  });
});
