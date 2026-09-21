import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir mensagem de erro ao tentar enviar o formulário vazio', async () => {
    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    await fixture.whenStable();

    const erro = fixture.nativeElement.querySelector('.formulario__erro');
    expect(erro?.textContent).toContain('verifique se todos os campos estão preenchidos');
  });

  it('deve marcar o campo de e-mail como inválido para um e-mail mal formatado', () => {
    component['formulario'].controls.email.setValue('email-invalido');
    component['formulario'].controls.email.markAsTouched();
    expect(component['campoInvalido']('email')).toBeTrue();
    expect(component['mensagemDeErroDoCampo']('email')).toContain('válido');
  });

  it('deve exibir mensagem de sucesso ao enviar um formulário válido', async () => {
    component['formulario'].setValue({
      nome: 'Lucas',
      email: 'lucas@teste.com',
      mensagem: 'Olá, tudo bem?',
    });

    const form: HTMLFormElement = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    await new Promise((resolve) => setTimeout(resolve, 700));
    fixture.detectChanges();

    const sucesso = fixture.nativeElement.querySelector('.formulario__sucesso');
    expect(sucesso?.textContent).toContain('sucesso');
  });
});
