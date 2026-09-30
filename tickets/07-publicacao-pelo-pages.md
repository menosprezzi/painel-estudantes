# 07: Publicar a saída estática pelo workflow oficial do Pages

**What to build:** Após cada merge em `main` no futuro repositório remoto, um workflow gera o site e entrega o HTML compilado diretamente ao GitHub Pages. O repositório local contém essa automação pronta e instruções para a configuração remota posterior.

**Blocked by:** 01 — Inicializar o repositório local e servir a página inicial. O script, diretório de saída e estratégia de caminho base precisam existir. O ticket 06 não bloqueia este workflow: CI de PR e deploy em `main` são arquivos independentes.

**Status:** implemented-unverified (workflow no commit local `a474c44`; instrução remota no README)

**Modelo recomendado:** `gpt-6.1-sol`, reasoning `high` — permissões, dependência entre jobs, artefato e caminho base exigem cuidado para o Pages funcionar sob a URL futura.

**Contexto:** Criar `.github/workflows/deploy.yml`. O proprietário e o nome do repositório futuro ainda são desconhecidos. Registrar no README, ou em nota curta do próprio projeto, que a configuração posterior é **Settings → Pages → Build and deployment → Source: GitHub Actions** e que a URL base/links devem ser ajustados ao endereço real. Não criar remoto, branch `gh-pages`, PAT ou deploy key.

**Regra de conclusão:** Encerrar este ticket com um commit Git **local e próprio** dentro de `painel-estudantes/`, cuja mensagem identifique `07` e este título. Se houver execução paralela, usar worktree e branch próprios; concluída a entrega, pode fazer merge local em `main`. Não fazer push.

**Critérios de aceitação:**

- [ ] `.github/workflows/deploy.yml` declara gatilho `push` em `main`; seu job de build faz checkout, instala com `npm ci`, executa o script `build` e envia exatamente o diretório de saída do Eleventy por `actions/upload-pages-artifact`.
- [ ] Um job de deploy dependente do build usa `actions/deploy-pages`, ambiente `github-pages` e permissões `pages: write` e `id-token: write`; não publica por branch `gh-pages` nem requer PAT ou deploy key.
- [ ] O workflow ou a configuração do Eleventy permite ajustar o caminho base para a URL real do futuro Pages; os links entre as duas páginas e o CSS usam esse caminho, sem proprietário ou nome de repositório fixados nos arquivos.
- [ ] O README, ou uma nota curta no projeto, indica **Settings → Pages → Build and deployment → Source: GitHub Actions** como passo posterior e explica ajustar a URL base quando o remoto existir; nenhum remoto, Pages remoto ou colaborador é configurado neste ticket.
