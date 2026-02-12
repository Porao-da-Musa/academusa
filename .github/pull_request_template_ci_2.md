# Configurações de Testes e Cobertura

Este projeto agora conta com testes unitários automatizados e validação de cobertura de código.

**Link de referência da task:**
[Taiga - Task -38](https://tree.taiga.io/project/psbruno-academusa/us/38?kanban-status=10629135)

## 🛠️ Mudanças Realizadas

- **Biblioteca Instalada**: `@testing-library/user-event` para simulação de interações de usuário de forma mais realista.

- **Configuração do Vitest**: Implementado threshold de **75%** para `lines`, `branches`, `functions` e `statements`.

- **Pipeline (CI)**: A esteira de integração contínua agora valida se a cobertura mínima foi atingida antes de permitir o merge.

## ⚠️ Observação sobre Arquivos Legados

O projeto possui arquivos criados nas primeiras 3 semanas que ainda não possuem cobertura de testes.

- **Estratégia Atual**: Para não bloquear o desenvolvimento (pipeline), a configuração atual do Vitest foca na cobertura dos arquivos que estão sendo testados/modificados.

- **Discussão Necessária**: Precisamos definir um plano de ação para subir os testes dos componentes antigos sem comprometer a velocidade das entregas atuais.

## Como rodar

```bash
# Executar testes com relatório de cobertura
npm run test:coverage

```
