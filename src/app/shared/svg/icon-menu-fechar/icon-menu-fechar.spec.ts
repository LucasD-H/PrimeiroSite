import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMenuFechar } from './icon-menu-fechar';

describe('IconMenuFechar', () => {
  let component: IconMenuFechar;
  let fixture: ComponentFixture<IconMenuFechar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMenuFechar],
    }).compileComponents();

    fixture = TestBed.createComponent(IconMenuFechar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar as duas linhas do ícone de "X"', () => {
    const linhas = fixture.nativeElement.querySelectorAll('svg path');
    expect(linhas.length).toBe(2);
  });

  it('deve repassar tamanho e cor customizados para o app-base-svg', async () => {
    fixture.componentRef.setInput('tamanho', 40);
    fixture.componentRef.setInput('cor', '#123456');
    await fixture.whenStable();

    const svg: SVGElement = fixture.nativeElement.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('40');
    expect((svg as unknown as HTMLElement).style.color).toBe('rgb(18, 52, 86)');
  });
});
