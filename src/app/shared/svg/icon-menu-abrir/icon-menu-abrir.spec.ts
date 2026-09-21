import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMenuAbrir } from './icon-menu-abrir';

describe('IconMenuAbrir', () => {
  let component: IconMenuAbrir;
  let fixture: ComponentFixture<IconMenuAbrir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconMenuAbrir],
    }).compileComponents();

    fixture = TestBed.createComponent(IconMenuAbrir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar as três linhas do ícone de hambúrguer', () => {
    const linhas = fixture.nativeElement.querySelectorAll('svg path');
    expect(linhas.length).toBe(3);
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
