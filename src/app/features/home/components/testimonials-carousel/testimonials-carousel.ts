import { Component, DestroyRef, OnInit, computed, inject, input, signal } from '@angular/core';
import { Depoimento } from '../../models/depoimento.model';

const INTERVALO_AUTOPLAY_MS = 5000;
const LIMITE_ARRASTO_PX = 50;

@Component({
  selector: 'app-testimonials-carousel',
  imports: [],
  templateUrl: './testimonials-carousel.html',
  styleUrl: './testimonials-carousel.scss',
})
export class TestimonialsCarousel implements OnInit {
  readonly depoimentos = input.required<Depoimento[]>();

  protected readonly indiceAtual = signal(0);
  protected readonly deltaArrastoPx = signal(0);

  protected readonly larguraItemPercentual = computed(() => {
    const total = this.depoimentos().length;
    return total === 0 ? 0 : 100 / total;
  });

  protected readonly larguraTrackPercentual = computed(
    () => this.depoimentos().length * 100,
  );

  protected readonly transformTrack = computed(
    () =>
      `translateX(calc(-${this.indiceAtual() * this.larguraItemPercentual()}% + ${this.deltaArrastoPx()}px))`,
  );

  private readonly destroyRef = inject(DestroyRef);
  private intervalId?: ReturnType<typeof setInterval>;
  private arrastando = false;
  private posicaoInicialX = 0;

  ngOnInit(): void {
    this.iniciarAutoplay();
    this.destroyRef.onDestroy(() => this.pararAutoplay());
  }

  protected irPara(indice: number): void {
    this.indiceAtual.set(indice);
    this.reiniciarAutoplay();
  }

  protected proximo(): void {
    const total = this.depoimentos().length;
    if (total === 0) {
      return;
    }
    this.indiceAtual.update((indice) => (indice + 1) % total);
  }

  protected anterior(): void {
    const total = this.depoimentos().length;
    if (total === 0) {
      return;
    }
    this.indiceAtual.update((indice) => (indice - 1 + total) % total);
  }

  protected aoIniciarArraste(evento: PointerEvent): void {
    this.arrastando = true;
    this.posicaoInicialX = evento.clientX;
    try {
      (evento.target as HTMLElement).setPointerCapture?.(evento.pointerId);
    } catch {
      // Ambiente sem suporte a Pointer Capture (ex.: testes) — arraste continua funcionando normalmente.
    }
  }

  protected aoMoverArraste(evento: PointerEvent): void {
    if (!this.arrastando) {
      return;
    }
    this.deltaArrastoPx.set(evento.clientX - this.posicaoInicialX);
  }

  protected aoFinalizarArraste(): void {
    if (!this.arrastando) {
      return;
    }
    this.arrastando = false;

    const delta = this.deltaArrastoPx();
    if (delta > LIMITE_ARRASTO_PX) {
      this.anterior();
    } else if (delta < -LIMITE_ARRASTO_PX) {
      this.proximo();
    }

    this.deltaArrastoPx.set(0);
    this.reiniciarAutoplay();
  }

  private iniciarAutoplay(): void {
    this.intervalId = setInterval(() => this.proximo(), INTERVALO_AUTOPLAY_MS);
  }

  private pararAutoplay(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
    }
  }

  private reiniciarAutoplay(): void {
    this.pararAutoplay();
    this.iniciarAutoplay();
  }
}
