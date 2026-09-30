# 06: Compilar o site automaticamente em Pull Requests

**What to build:** Quando alguém abrir um PR no futuro repositório GitHub, o workflow de CI sinalizará se a contribuição ainda permite gerar o site antes do merge. O arquivo da automação fica pronto no repositório local.

**Blocked by:** 01 — Inicializar o repositório local e servir a página inicial. A compilação Eleventy e o script de geração já precisam estar definidos.

**Status:** implemented-unverified (commit local do ticket 06)

**Modelo recomendado:** `gpt-6.1-sol`, reasoning `medium` — requer um workflow GitHub Actions enxuto e alinhado ao script e lockfile do projeto.

**Contexto:** Criar `.github/workflows/ci.yml`. O usuário proibiu executar verificações locais sem pedido explícito; a entrega é o arquivo do workflow, não sua execução agora.

**Regra de conclusão:** Encerrar este ticket com um commit Git **local e próprio** dentro de `painel-estudantes/`, cuja mensagem identifique `06` e este título. Se houver execução paralela, usar worktree e branch próprios; concluída a entrega, pode fazer merge local em `main`. Não fazer push.

**Critérios de aceitação:**

- [ ] `.github/workflows/ci.yml` declara gatilho `pull_request` com destino `main` e um job de compilação com checkout, configuração da versão Node adotada pelo projeto, `npm ci` e o script `build` do `package.json`, nessa ordem.
- [ ] O job termina com falha quando `npm ci` ou a compilação retorna erro; sua compilação usa as duas páginas e a coleção do projeto, sem segredo, token pessoal ou configuração do Pages.
- [ ] O workflow tem nome de job estável e identificável para futura seleção como check obrigatório na proteção da `main`; o ticket não cria nem altera proteção remota.
