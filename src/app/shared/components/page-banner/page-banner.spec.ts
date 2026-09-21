import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBanner } from './page-banner';

describe('PageBanner', () => {
  let component: PageBanner;
  let fixture: ComponentFixture<PageBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(PageBanner);
    fixture.componentRef.setInput('titulo', 'Contato');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o título informado', () => {
    const titulo: string = fixture.nativeElement.querySelector(
      '.pagina-cabecalho__titulo',
    ).textContent;
    expect(titulo.trim()).toBe('Contato');
  });
});
