# 03: Aplicar a identidade Stribord aos cards responsivos

**What to build:** Quem abre o painel em computador ou celular encontra uma grade clara, legível e fiel à identidade visual oficial, com navegação e cards estáveis em diferentes larguras. A apresentação usa CSS3 puro e movimento discreto.

**Blocked by:** 02 — Transformar cada Markdown individual em um card. **Pré-requisito externo para a fonte exata:** obter arquivos web de Host Grotesk com direito de uso confirmado; eles não estão na pasta de identidade visual. A busca/obtenção pode ocorrer neste ticket, mas, se não for possível, registrar a pendência e manter fallback de sistema.

**Status:** implemented-unverified (commit local `e56e575`)

**Modelo recomendado:** `gpt-6-astra`, reasoning `high` — a fidelidade à referência, tipografia e responsividade pedem julgamento visual cuidadoso.

**Contexto:** Ler `../../../Marca Pessoal/Identidade Visual.md` e a seção de interface de `../../project_spec.md`. Reservar `src/fonts/` para fontes autorizadas hospedadas no próprio projeto. Source Code Pro só é necessária se houver detalhes técnicos que justifiquem fonte monoespaçada.

**Regra de conclusão:** Encerrar este ticket com um commit Git **local e próprio** dentro de `painel-estudantes/`, cuja mensagem identifique `03` e este título. Se houver execução paralela, usar worktree e branch próprios; concluída a entrega, pode fazer merge local em `main`. Não fazer push. Se a fonte autorizada não puder ser obtida, registrar o impedimento e não marcar o ticket como concluído.

**Critérios de aceitação:**

- [ ] O CSS aplica `#FFFFFF` ao fundo e aos cards, `#000000` aos títulos, `#59697F` ao texto secundário, `#E1E3E8` às bordas e `#2563EB` a destaques funcionais; cards não usam vidro, transparência ornamental ou sombras coloridas.
- [ ] A barra tem altura aproximada de 64px; os cards têm padding próximo de 24px e raio entre 6px e 8px. A grade mostra três colunas em largura de desktop, duas em largura intermediária e uma em largura estreita, sem rolagem horizontal causada pelo layout.
- [ ] Arquivos web de Host Grotesk com direito de uso confirmado são guardados em `src/fonts/` e carregados localmente por `@font-face`; o CSS inclui fallback sans de sistema. Se Source Code Pro for usada em código, seus arquivos também têm direito de uso confirmado e fallback monoespaçado.
- [ ] O hover dos cards desloca no máximo 2px, não aplica zoom e usa transição próxima de `160ms ease-out`; sob `prefers-reduced-motion: reduce`, o deslocamento/transição é removido.
- [ ] O CSS é puro, sem biblioteca de estilos; a interface mantém textos, links e cards legíveis em largura de celular, sem JavaScript de aplicação nem controles fora do escopo.
