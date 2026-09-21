import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface MensagemContato {
  nome: string;
  email: string;
  mensagem: string;
}

export interface RespostaEnvioContato {
  sucesso: boolean;
  mensagem: string;
}

/**
 * Serviço responsável por enviar as mensagens do formulário de contato.
 *
 * Substitui a antiga rotina PHP que utilizava `mail()`. Por enquanto simula
 * o envio de forma assíncrona, mas expõe uma interface pronta para ser
 * trocada por uma chamada HTTP a uma API real no futuro.
 */
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  enviarMensagem(dados: MensagemContato): Observable<RespostaEnvioContato> {
    return of({
      sucesso: true,
      mensagem: 'Mensagem enviada com sucesso!',
    }).pipe(delay(600));
  }
}
