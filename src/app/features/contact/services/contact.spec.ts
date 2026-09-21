import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve simular o envio de uma mensagem com sucesso', (done) => {
    service
      .enviarMensagem({ nome: 'Lucas', email: 'lucas@teste.com', mensagem: 'Olá!' })
      .subscribe((resposta) => {
        expect(resposta.sucesso).toBeTrue();
        expect(resposta.mensagem).toContain('sucesso');
        done();
      });
  });
});
