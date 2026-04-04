# Guia de Deployment do Site RSA Aviamentos

Este documento detalha o processo de desenvolvimento, deploy e monitoramento do site da RSA Aviamentos.

## 1. Fluxo de Desenvolvimento e Branches

Utilizamos um fluxo de trabalho baseado em Gitflow simplificado:

* `main`: Contém o código da versão em produção, sempre estável.
* `develop`: Contém o código em desenvolvimento, para novas funcionalidades e correções.
* `feature/nome-da-feature`: Branches criadas a partir de `develop` para desenvolver funcionalidades específicas.

### 1.1. Desenvolvimento Local

Para iniciar o desenvolvimento de uma nova funcionalidade ou correção:

1. Atualize sua branch `develop`:
```bash
git checkout develop
git pull origin develop