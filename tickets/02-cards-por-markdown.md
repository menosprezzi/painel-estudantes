# 02: Transformar cada Markdown individual em um card

**What to build:** Ao adicionar um Markdown exclusivo de estudante, a página inicial passa a mostrar exatamente um card com a apresentação escolhida por essa pessoa. A contribuição exige editar somente esse arquivo individual; o exemplo de preenchimento não aparece entre os estudantes.

**Blocked by:** 01 — Inicializar o repositório local e servir a página inicial.

**Status:** implemented-unverified (commit local do ticket 02)

**Modelo recomendado:** `gpt-6.1-sol`, reasoning `high` — a coleção, o front matter e a saída do Eleventy precisam concordar sem gerar páginas individuais por engano.

**Contexto:** Usar o contrato em `../../project_spec.md`. Os arquivos dos estudantes ficam em `src/estudantes/<usuario-github>.md`; o modelo neutro fica em `exemplos/modelo-estudante.md`, fora da coleção. Aproximadamente 30 estudantes contribuirão em paralelo.

**Regra de conclusão:** Encerrar este ticket com um commit Git **local e próprio** dentro de `painel-estudantes/`, cuja mensagem identifique `02` e este título. Se houver execução paralela, usar worktree e branch próprios; concluída a entrega, pode fazer merge local em `main`. Não fazer push.

**Critérios de aceitação:**

- [ ] A coleção do Eleventy inclui somente arquivos `src/estudantes/*.md`: um arquivo válido resulta em um card, dois arquivos válidos resultam em dois cards, e nenhum desses arquivos gera página HTML individual.
- [ ] Cada card mostra os valores de `nome`, `curso`, `ano` e `musica` com rótulos em português; o corpo Markdown aparece como texto de apresentação formatado, sem marcadores Markdown crus.
- [ ] O texto de `nome` é apresentado como foi escolhido no Markdown, sem regra que force nome completo, apelido ou identidade predefinida.
- [ ] `exemplos/modelo-estudante.md` contém os quatro campos e orientação neutra para duas ou três frases; ele fica fora da coleção e não produz card.
- [ ] Com a coleção vazia, a mensagem de estado vazio permanece; com pelo menos um Markdown válido, os cards aparecem e a mensagem de estado vazio deixa de aparecer. Para contribuir, basta criar o próprio Markdown, sem tocar em template, CSS ou configuração.
