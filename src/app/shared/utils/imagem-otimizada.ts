/**
 * Todas as imagens fotográficas do projeto possuem uma versão .avif
 * pré-gerada ao lado do .webp (mesmo nome, apenas trocando a extensão).
 * O .webp é usado como caminho base (atributo `src`/`url()`) e funciona
 * como fallback para navegadores sem suporte a AVIF; esta função deriva
 * o caminho AVIF para uso em `<picture>`.
 */
export function avifSrc(caminhoWebp: string): string {
  return caminhoWebp.replace(/\.webp$/i, '.avif');
}
