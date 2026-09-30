# 01: Inicializar o repositório local e servir a página inicial

**What to build:** Um projeto Git independente em `painel-estudantes/` que gere uma página inicial estática para o workshop. Mesmo antes das contribuições, quem abre a página entende o propósito do painel e vê um estado vazio útil. Esta entrega estabelece a base que os demais tickets ampliam.

**Blocked by:** None (can start immediately).

**Status:** implemented-unverified (commit local do ticket 01)

**Modelo recomendado:** `gpt-6.1-sol`, reasoning `medium` — coordena configuração Eleventy, estrutura de saída e histórico Git local com escopo pequeno.

**Contexto:** Ler `../../project_spec.md`. O projeto será um subdiretório independente do material do workshop; executar `git init` dentro dele, sem remoto. A barra inicial pode mostrar apenas a página que já existe; o link Git Cheat-sheet entra no ticket 04.

**Regra de conclusão:** Encerrar este ticket com um commit Git **local e próprio** dentro de `painel-estudantes/`, cuja mensagem identifique `01` e este título. Não fazer push.

**Critérios de aceitação:**

- [ ] Há um diretório `.git` dentro de `painel-estudantes/`, com branch local `main` e sem remoto registrado; o projeto não usa o Git da pasta do workshop como seu repositório.
- [ ] `package.json` declara Eleventy como única dependência direta de desenvolvimento, com versão fixa, e `package-lock.json` registra a instalação; os scripts `dev` e `build` chamam o Eleventy.
- [ ] A geração estática produz uma página inicial HTML a partir de `src/index.njk`; sem arquivos de estudantes, ela mostra título, propósito do painel e uma mensagem de estado vazio, sem card de pessoa fictícia.
- [ ] `.gitignore` exclui `node_modules/` e o diretório de saída gerada; o HTML da página não carrega JavaScript de aplicação nem biblioteca de interface.
- [ ] A configuração oferece um caminho base ajustável e a página usa esse caminho nos links e assets locais, inclusive quando o site for servido sob um subdiretório do Pages.
