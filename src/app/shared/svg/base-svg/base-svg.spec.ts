import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSvg } from './base-svg';

describe('BaseSvg', () => {
  let component: BaseSvg;
  let fixture: ComponentFixture<BaseSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseSvg],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseSvg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve usar tamanho e cor padrão quando nenhum input é informado', () => {
    const svg: SVGElement = fixture.nativeElement.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('height')).toBe('24');
    expect((svg as unknown as HTMLElement).style.color).toBe('rgb(0, 0, 0)');
  });

  it('deve aplicar tamanho e cor customizados', async () => {
    fixture.componentRef.setInput('tamanho', 32);
    fixture.componentRef.setInput('cor', '#ff0000');
    await fixture.whenStable();

    const svg: SVGElement = fixture.nativeElement.querySelector('svg');
    expect(svg.getAttribute('width')).toBe('32');
    expect(svg.getAttribute('height')).toBe('32');
    expect((svg as unknown as HTMLElement).style.color).toBe('rgb(255, 0, 0)');
  });
});
