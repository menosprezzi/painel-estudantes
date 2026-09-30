# Tickets — painel de estudantes

**Implementação local:** os sete tickets têm commits separados na `main` local. Os status `implemented-unverified` registram arquivos entregues sem build, testes, lint ou preview, conforme a instrução do usuário.

Referência principal: [`project_spec.md`](../../project_spec.md). A identidade visual está em [`Identidade Visual.md`](../../../Marca%20Pessoal/Identidade%20Visual.md); o contexto da atividade está em [`Handoff - Workshop Github.md`](../../Handoff%20-%20Workshop%20Github.md).

| Ticket | Entrega | Bloqueado por |
| --- | --- | --- |
| [01](01-repositorio-e-pagina-inicial.md) | Repositório local e página inicial | Ninguém |
| [02](02-cards-por-markdown.md) | Um card por Markdown individual | 01 |
| [03](03-identidade-visual-responsiva.md) | Interface Stribord responsiva | 02; obtenção de fonte autorizada para fidelidade tipográfica |
| [04](04-git-cheat-sheet.md) | Segunda página de comandos | 01, 03 |
| [05](05-guia-de-contribuicao.md) | README e modelo nativo de issue | 02, 04 |
| [06](06-ci-em-pull-requests.md) | CI de compilação em PRs | 01 |
| [07](07-publicacao-pelo-pages.md) | Workflow de publicação após merge | 01 |

Os bloqueadores de cada arquivo são os que realmente impedem seu início. Os tickets 06 e 07 podem avançar em paralelo com os tickets de conteúdo depois do 01. Todos começam com status `ready-for-agent`; isso não significa que seus bloqueadores já foram concluídos.

**Limite desta fase:** produzir apenas estes tickets. Na implementação, inicializar Git dentro de `painel-estudantes/` e entregar o repositório local funcional. Não criar remoto, colaboradores, proteção de `main` nem configurar Pages no GitHub. A configuração remota fica para outra etapa. Conforme a instrução AGENTS do usuário, não executar build, teste, lint ou preview como verificação sem pedido explícito; criar os workflows é permitido.

**Conclusão de cada ticket:** fazer um commit Git local próprio, com número e título identificáveis na mensagem, dentro de `painel-estudantes/`. Não fazer push. Os critérios abaixo foram escritos para serem conferíveis na futura entrega; esta etapa de planejamento não executa verificações.

**Execução paralela:** depois que o ticket 01 criar a branch local `main`, tickets executados ao mesmo tempo devem usar **worktrees e branches separados**, um par por ticket. Cada ticket termina com seu commit local identificável. Quando a entrega do ticket estiver concluída, o agente pode fazer o merge local da respectiva branch em `main` automaticamente, respeitando os bloqueadores antes de iniciar tickets dependentes. Não fazer push. A permissão de merge não altera a proibição de executar build, teste, lint ou preview sem pedido explícito.

**Pendências externas:** os arquivos web de Host Grotesk com direito de uso ainda não estão disponíveis na pasta de identidade visual. O proprietário, nome e URL do futuro repositório GitHub também não estão definidos; o workflow local deve deixar o caminho de publicação ajustável e documentar o passo remoto, sem executar esse passo.
