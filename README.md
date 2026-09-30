# Painel de estudantes

Site estático do workshop de 90 minutos sobre Git e GitHub. Cerca de 30 estudantes contribuem com um card próprio e praticam colaboração por issues, branches e Pull Requests (PRs). O [repositório é público](https://github.com/menosprezzi/painel-estudantes) para consulta e portfólio; cada pessoa escolhe como quer aparecer publicamente no card. A versão publicada está no [GitHub Pages](https://menosprezzi.github.io/painel-estudantes/).

## Executar localmente

É necessário Node.js 20 ou superior. Na pasta do projeto, instale as dependências e inicie o servidor local:

```sh
npm ci
npm run dev
```

Abra o endereço informado pelo Eleventy no terminal. Para gerar os arquivos estáticos em `_site/`, use:

```sh
npm run build
```

O site tem a página de estudantes e a página Git Cheat-sheet, acessível pela barra superior na rota `/git-cheatsheet/`. O [arquivo da página](src/git-cheatsheet.njk) também pode ser consultado aqui no repositório.

## Contribuir com seu card

Cada estudante edita somente seu próprio arquivo `src/estudantes/<usuario-github>.md`. Use seu usuário do GitHub no nome do arquivo para que ele seja exclusivo. Não edite o template, o CSS ou os arquivos de outra pessoa. O exemplo abaixo mostra o contrato: os quatro campos do front matter preenchem os dados do card; o texto depois do separador é sua apresentação em Markdown.

```md
---
nome: "Como você quer aparecer no card"
curso: "Desenvolvimento de Sistemas ou Eletrônica"
ano: "Seu ano do curso"
musica: "Sua banda ou seu gênero musical favorito"
---

Escreva aqui duas ou três frases de apresentação e conte seus interesses.
```

O campo `nome` é como você escolhe ser apresentado publicamente. Não precisa ser nome completo nem apelido específico. Escreva em português e mantenha os campos curtos.

### Passos da atividade

1. Abra sua issue de contribuição e leia o checklist. Cada pessoa trabalha no repositório central, sem fork.
2. Atualize sua cópia local antes de começar: `git switch main` e `git pull`.
3. Crie sua branch no padrão `feat/ISSUE_ID-SEU_USUARIO-card`, substituindo `ISSUE_ID` pelo número da sua issue (sem `#`) e `SEU_USUARIO` pelo seu usuário do GitHub: `git switch -c feat/ISSUE_ID-SEU_USUARIO-card`.
4. Crie e preencha apenas `src/estudantes/SEU_USUARIO.md`.
5. Prepare e registre a alteração, em etapas separadas: `git add -A` e `git commit -m "feat: adiciona meu card"`.
6. Envie sua branch ao repositório: `git push -u origin feat/ISSUE_ID-SEU_USUARIO-card`.
7. Abra um PR para `main`, vincule-o à sua issue e peça à sua dupla para revisar. Cada estudante abre seu próprio PR e também revisa o PR da dupla.
8. Depois da aprovação, o PR pode ser mesclado à `main`.

Consulte o Git Cheat-sheet pela barra superior do site (rota `/git-cheatsheet/`) para os exemplos de `git clone`, `git branch`, `git status`, `git add -A`, `git commit -m`, `git pull` e `git push`. Use o [repositório do workshop](https://github.com/menosprezzi/painel-estudantes) e abra sua issue de contribuição.

**Sua atividade individual termina quando seu PR é aprovado e mesclado à `main`.** A publicação do site pode levar mais tempo; você não precisa esperar pelo deploy. Os cards publicados podem ser vistos em conjunto no encerramento.

### Convenções de commits e branches

**Mensagem de commit:** siga o formato Conventional Commits, `tipo(escopo opcional): descrição curta`. Use um verbo no presente, escreva a descrição em minúsculas e não coloque ponto final. O escopo, quando útil, identifica a parte alterada. Exemplos: `feat: adiciona card de estudante` e `docs(readme): explica o fluxo de contribuição`.

| Tipo | Quando usar |
| --- | --- |
| `feat` | Nova funcionalidade ou conteúdo do painel |
| `fix` | Correção de comportamento ou conteúdo |
| `docs` | Documentação e instruções |
| `style` | Alteração visual sem mudar o comportamento |
| `ci` | Workflows e automações de integração ou publicação |
| `chore` | Manutenção do projeto |

**Nome de branch:** use `<tipo>/<issue_id>-<breve_descrição>`. O `tipo` segue a mesma lista dos commits; `issue_id` é o número da issue, sem `#`; e `breve_descrição` resume a tarefa em palavras minúsculas separadas por hífens. Por exemplo, para a issue `#12`: `feat/12-card-estudante`. Crie uma branch por issue.

Esses nomes mostram a finalidade da mudança antes mesmo de abrir o PR. O número no nome da branch ajuda a localizar a issue correspondente; o tipo e a descrição tornam branches e commits fáceis de buscar e entender no histórico. Isso dá rastreabilidade entre tarefa, código e revisão e facilita futuras automações. Quando a mudança resolver uma issue, inclua `Closes #12` no corpo do commit e na descrição do PR, substituindo `12` pelo número real.

## Para o facilitador

O exercício foi planejado para aproximadamente 30 estudantes em duplas ao longo de 90 minutos. A contribuição de cada estudante fica em um Markdown exclusivo para reduzir conflitos durante o trabalho simultâneo. A dupla revisa o PR da outra pessoa; o facilitador apoia a abertura de issues, a revisão e o merge.

### Preparação local

Com Node.js 20 ou superior instalado, rode `npm ci` uma vez e `npm run dev` para apresentar e editar o painel localmente. `npm run build` gera a versão estática em `_site/`. O script `dev` inicia o servidor do Eleventy; `build` compila as páginas.

### Configuração do repositório no GitHub

O repositório público usa `main` como branch padrão. Nas regras dessa branch, exigir PR, uma aprovação e CI verde antes do merge. Não exigir que a branch do PR esteja atualizada com `main`, para evitar trabalho adicional de integração durante a atividade. Permitir que o facilitador contorne a regra em uma emergência.

Em **Settings → Pages → Build and deployment**, a origem selecionada é **GitHub Actions**. O workflow de deploy usa `actions/configure-pages` para descobrir a URL e definir o `base_path` do Pages; assim, a navegação e os assets funcionam no endereço do projeto. Cada push ou merge em `main` publica o artefato estático. Não é necessário criar uma branch `gh-pages` nem adicionar credenciais de publicação manual.
