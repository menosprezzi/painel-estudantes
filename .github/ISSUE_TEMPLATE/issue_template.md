---
name: Contribuir com meu card
about: Adicione seu arquivo Markdown individual ao painel de estudantes.
title: "feat: card de SEU_USUARIO"
labels: ""
assignees: ""
---

## Objetivo

Adicionar meu card ao painel por meio de um arquivo Markdown individual. Vou trabalhar no [repositório central](https://github.com/menosprezzi/painel-estudantes), sem fork, e editar somente meu arquivo em `src/estudantes/`.

O nome público do card é uma escolha minha. Não é necessário usar nome completo nem um apelido específico.

## Arquivo Markdown

Crie `src/estudantes/<usuario-github>.md`, substituindo o marcador pelo seu usuário do GitHub. Confira se o nome do arquivo ainda não está sendo usado. Preencha este modelo:

```md
---
nome: "Como você quer aparecer no card"
curso: "Desenvolvimento de Sistemas ou Eletrônica"
ano: "Seu ano do curso"
musica: "Sua banda ou seu gênero musical favorito"
---

Escreva aqui duas ou três frases de apresentação e conte seus interesses.
```

Os quatro campos são obrigatórios. Escreva sua apresentação no corpo Markdown. Não altere o template, o CSS nem os arquivos de outras pessoas.

## Checklist — siga em ordem

Use o padrão `feat/ISSUE_ID-SEU_USUARIO-card`: substitua `ISSUE_ID` pelo número desta issue (sem `#`) e `SEU_USUARIO` pelo seu usuário do GitHub.

- [ ] Atualize sua branch `main` local (`git switch main` e `git pull`) e crie sua branch própria (`git switch -c feat/ISSUE_ID-SEU_USUARIO-card`).
- [ ] Crie e preencha somente `src/estudantes/SEU_USUARIO.md`.
- [ ] Prepare a alteração (`git add -A`) e depois registre-a (`git commit -m "feat: adiciona meu card"`). São duas etapas separadas.
- [ ] Envie sua branch (`git push -u origin feat/ISSUE_ID-SEU_USUARIO-card`).
- [ ] Abra um Pull Request (PR) para `main` e inclua `Closes #<número desta issue>` na descrição para vinculá-lo a esta issue.
- [ ] Peça à sua dupla para revisar seu PR; cada estudante abre seu próprio PR e revisa o PR da dupla.
- [ ] Após a aprovação, combine o merge do PR com a dupla ou com o facilitador.

Consulte a página **Git Cheat-sheet** do painel para exemplos rápidos dos comandos Git. A atividade individual termina quando seu PR é aprovado e mesclado à `main`; não é preciso esperar o deploy do site.
