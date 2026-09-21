import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PageBanner } from '../../shared/components/page-banner/page-banner';
import { ContactService } from './services/contact';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, PageBanner],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  protected readonly formulario = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', Validators.required],
  });

  protected readonly enviando = signal(false);
  protected readonly mensagemErro = signal('');
  protected readonly mensagemSucesso = signal('');

  protected campoInvalido(campo: 'nome' | 'email' | 'mensagem'): boolean {
    const controle = this.formulario.controls[campo];
    return controle.invalid && (controle.dirty || controle.touched);
  }

  protected mensagemDeErroDoCampo(campo: 'nome' | 'email' | 'mensagem'): string {
    const controle = this.formulario.controls[campo];
    if (controle.hasError('required')) {
      const rotulos: Record<string, string> = {
        nome: 'Por favor preencha o nome.',
        email: 'Por favor preencha o e-mail.',
        mensagem: 'Por favor preencha a mensagem.',
      };
      return rotulos[campo];
    }
    if (controle.hasError('email')) {
      return 'Por favor preencha um email válido.';
    }
    return '';
  }

  protected enviar(): void {
    this.mensagemErro.set('');
    this.mensagemSucesso.set('');

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      this.mensagemErro.set('Por favor, verifique se todos os campos estão preenchidos!');
      return;
    }

    this.enviando.set(true);
    this.contactService.enviarMensagem(this.formulario.getRawValue()).subscribe({
      next: (resposta) => {
        this.enviando.set(false);
        if (resposta.sucesso) {
          this.mensagemSucesso.set(resposta.mensagem);
          this.formulario.reset();
        } else {
          this.mensagemErro.set(resposta.mensagem);
        }
      },
      error: () => {
        this.enviando.set(false);
        this.mensagemErro.set(
          'Falha ao enviar o email, por favor tente mais tarde, ou através do email JalimRabei@gmail.com',
        );
      },
    });
  }
}
