# 05: Guiar a contribuição individual por README e issue

**What to build:** Um estudante consegue seguir a atividade do workshop a partir do README e da issue: escolher o nome público do card, criar seu arquivo exclusivo, abrir branch e PR, revisar o colega e entender quando terminou. O facilitador encontra os passos de instalação e execução local do painel.

**Blocked by:** 02 — Transformar cada Markdown individual em um card; 04 — Oferecer a segunda página Git Cheat-sheet. Esses tickets definem o contrato real do arquivo e o destino da consulta de comandos.

**Status:** implemented-unverified (commit local deste ticket)

**Modelo recomendado:** `gpt-6-luna`, reasoning `medium` — documentação curta e consistente com um contrato de contribuição já definido.

**Contexto:** Criar `README.md` e o modelo nativo `.github/ISSUE_TEMPLATE/issue_template.md`. Usar `../../project_spec.md` como fonte de decisões; o handoff pedagógico está em `../../Handoff - Workshop Github.md`. O exercício dura 90 minutos com 30 estudantes e revisão em duplas.

**Regra de conclusão:** Encerrar este ticket com um commit Git **local e próprio** dentro de `painel-estudantes/`, cuja mensagem identifique `05` e este título. Se houver execução paralela, usar worktree e branch próprios; concluída a entrega, pode fazer merge local em `main`. Não fazer push.

**Critérios de aceitação:**

- [ ] O `README.md` informa objetivo e público do painel, pré-requisito de Node.js e comandos para instalar dependências, iniciar o servidor local e gerar a saída estática, usando os scripts existentes no `package.json`.
- [ ] README e `.github/ISSUE_TEMPLATE/issue_template.md` mostram um exemplo neutro com front matter `nome`, `curso`, `ano`, `musica` e corpo de apresentação; ambos dizem que `nome` é escolhido pela pessoa para exibição pública, sem exigir identidade específica.
- [ ] O modelo de issue fornece checklist em ordem para criar `src/estudantes/<usuario-github>.md` exclusivo, abrir branch própria, adicionar, commitar e enviar a alteração, abrir PR ligado à issue, solicitar revisão à dupla e mesclar após aprovação; não instrui usar fork nem editar template/CSS.
- [ ] O README afirma que cada estudante abre seu próprio PR e revisa o da dupla; define a conclusão individual como PR aprovado e mesclado à `main`, sem esperar o deploy, e aponta para a página Git Cheat-sheet como consulta rápida.
- [ ] Uma seção de preparação remota futura no README registra repositório público, PR obrigatório na `main`, uma aprovação, CI verde, sem exigir atualização da branch após cada merge e com opção de contorno ao facilitador; nenhum remoto ou regra é criado neste ticket.
