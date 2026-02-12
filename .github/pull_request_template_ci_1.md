# 📋 Descrição da Pull Request

### 🔍 O que foi feito?

Esta PR estabelece a fundação de DevOps e Qualidade de Código do projeto.
Implementamos um pipeline de CI completo, testes unitários e automação de dependências.

**Link de referência da task:** [Taiga - Task 23](https://tree.taiga.io/project/psbruno-academusa/us/23)

**Alterações principais:**

1.  **Workflow do GitHub Actions (`ci.yml`):**
    - Execução automática em _Pull Requests_ e _Pushes_ na branch `main`.
    - Matriz de testes rodando em **Node.js 22.x** e **24.x**.
    - Steps configurados: Instalação limpa (`npm ci`), Linting, Auditoria de Segurança (`high`), Testes e Build.
    - Configuração do Dependabot para atualizações de dependências (agrupamento de "minors" e "patch").
2.  **Testes Unitários (Vitest):**
    - Configuração do ambiente de testes com `vitest` e `@testing-library`.
    - Teste de componente: Valida se o `<App />` renderiza o título "Academusa".
    - Teste unitário: Validação básica de sanidade.

### 🧪 Como Testar

Siga os passos abaixo para validar as alterações localmente:

1.  **Instale as dependências (modo limpo):**

    ```bash
    npm ci
    ```

2.  **Execute o Linter para verificar o estilo do código:**

    ```bash
    npm run lint
    ```

3.  **Rode a suíte de testes:**

    ```bash
    npm test
    ```

    _(O resultado esperado é: 2 Test Files passed, 2 Tests passed)_

4.  **Simule o build de produção:**
    ```bash
    npm run build
    ```

---

### 📸 Evidências

![Testes Passando](url_da_imagem_ou_upload_do_github)

### ✅ Checklist de Verificação

- [x] O pipeline de CI foi configurado corretamente (`ci.yml`).
- [x] O código compila sem erros (`npm run build`).
- [x] `npm audit` não aponta vulnerabilidades críticas.
- [x] Testes adicionados cobrem as funcionalidades básicas implementadas.
