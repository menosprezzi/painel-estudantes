# 04: Oferecer a segunda página Git Cheat-sheet

**What to build:** A barra superior permite alternar entre o painel e uma página de consulta rápida dos comandos usados na prática. Um estudante consegue encontrar o propósito de cada comando e copiar um exemplo adaptável sem confundir preparação com commit.

**Blocked by:** 01 — Inicializar o repositório local e servir a página inicial; 03 — Aplicar a identidade Stribord aos cards responsivos, que estabelece a apresentação compartilhada da barra e do conteúdo.

**Status:** implemented-unverified (commit local `c1054c0`)

**Modelo recomendado:** `gpt-6.1-sol`, reasoning `medium` — a tarefa combina conteúdo técnico preciso com uma segunda rota e reutilização do visual existente.

**Contexto:** Seguir a tabela de comandos em `../../project_spec.md`. A barra superior terá somente os links **Estudantes** e **Git Cheat-sheet**. O conteúdo deve ser curto e legível no celular.

**Regra de conclusão:** Encerrar este ticket com um commit Git **local e próprio** dentro de `painel-estudantes/`, cuja mensagem identifique `04` e este título. Se houver execução paralela, usar worktree e branch próprios; concluída a entrega, pode fazer merge local em `main`. Não fazer push.

**Critérios de aceitação:**

- [ ] A geração estática produz a página Git Cheat-sheet; ela e a inicial exibem a mesma barra superior com apenas **Estudantes** e **Git Cheat-sheet**, e cada link leva à página correspondente mesmo sob um caminho base de subdiretório.
- [ ] A página lista exatamente os cinco comandos pedidos — `git clone`, `git add -A`, `git commit -m`, `git pull` e `git push` — cada um com uma finalidade curta e um exemplo adaptável à prática descrita na especificação.
- [ ] O exemplo de `git push` mostra a primeira publicação da branch com `-u origin`; o de `git commit -m` usa uma mensagem curta. Uma nota separada diz que `git add -A` prepara o arquivo e `git commit -m` registra o que foi preparado.
- [ ] Em largura de celular, comandos, explicações e exemplos permanecem legíveis sem rolagem horizontal do layout; a página não inclui busca, filtros, formulário ou JavaScript de aplicação.
