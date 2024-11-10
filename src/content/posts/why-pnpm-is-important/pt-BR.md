---
title: "Por que usar o pnpm em vez do npm"
excerpt: "Tudo isso por que eu apaguei 32gb de node_modules duplicada 😁"
date: "2024-11-10"
tags: ["pnpm", "node"]
lang: "pt-BR"
---

# Por que usar o pnpm em vez do npm para otimizar o `node_modules`

Nos últimos anos, o gerenciamento de pacotes em projetos Node.js tem se tornado cada vez mais importante para garantir não só o bom funcionamento da aplicação, mas também a eficiência no gerenciamento de dependências. Embora o `npm` seja a ferramenta mais popular, o `pnpm` tem ganhado destaque como uma solução mais eficiente e otimizada, especialmente quando o assunto é a pasta `node_modules`. Neste post, vamos explorar as razões pelas quais você deve considerar o uso do `pnpm` em vez do tradicional `npm`.

## 1. **Redução no Espaço de Armazenamento**

Um dos maiores benefícios de usar o `pnpm` em vez do `npm` é a significativa redução no espaço de armazenamento ocupado pela pasta `node_modules`. O `pnpm` utiliza um sistema de hard links para gerenciar as dependências, o que significa que, em vez de duplicar pacotes em cada projeto, ele compartilha as dependências entre diferentes projetos. Isso pode resultar em uma economia considerável de espaço, especialmente em projetos grandes, que podem ocupar centenas de megabytes ou até gigabytes de espaço em disco apenas com a pasta `node_modules`.

Com o `npm`, cada projeto possui suas próprias cópias das dependências, mesmo que elas sejam as mesmas em múltiplos projetos. O `pnpm` resolve isso de forma inteligente, criando um repositório centralizado para as dependências, o que evita duplicações e torna o processo de instalação mais eficiente.

## 2. **Velocidade de Instalação Mais Rápida**

Ao usar o `pnpm`, as instalações de pacotes tendem a ser mais rápidas em comparação com o `npm`. Isso ocorre porque o `pnpm` utiliza um cache global que permite reutilizar pacotes já instalados em projetos anteriores. Em vez de baixar e instalar os mesmos pacotes toda vez que você executar `npm install`, o `pnpm` simplesmente verifica se o pacote já está disponível no cache global e o utiliza.

Além disso, o `pnpm` resolve dependências de maneira mais eficiente e paraleliza mais operações de instalação, o que resulta em uma instalação mais rápida, especialmente em projetos com muitas dependências.

## 3. **Consistência nas Dependências**

O `pnpm` garante que as dependências sejam sempre resolvidas de forma consistente entre os projetos. No `npm`, por vezes, problemas de versões podem ocorrer, o que pode levar a diferenças de comportamento entre ambientes ou mesmo falhas nas instalações. Isso pode ser particularmente problemático em ambientes de CI/CD, onde a consistência é fundamental.

Ao contrário, o `pnpm` cria um arquivo `pnpm-lock.yaml` mais preciso, que garante que as dependências sejam resolvidas de forma consistente, independentemente do ambiente ou da máquina. Isso ajuda a evitar problemas de "funciona na minha máquina" e garante que todos os desenvolvedores e servidores tenham as mesmas versões de pacotes.

## 4. **Melhor Performance com Dependências de Subdependências**

Em projetos Node.js com várias dependências e subdependências, o `pnpm` pode ser especialmente útil. Isso ocorre porque o `pnpm` lida de forma mais eficiente com a instalação de subdependências, criando links diretos para pacotes compartilhados, em vez de duplicá-los em cada subdependência. Isso resulta em menos cópias de pacotes e, consequentemente, em uma performance de instalação superior.

## 5. **Facilidade de Uso e Compatibilidade**

Embora o `pnpm` ofereça essas otimizações significativas, ele mantém uma interface de linha de comando muito similar à do `npm`, o que facilita a transição. Com comandos como `pnpm install` e `pnpm add`, o `pnpm` é fácil de adotar, e a maioria das ferramentas e bibliotecas do ecossistema Node.js são compatíveis com ele.

## Conclusão

A escolha de uma ferramenta de gerenciamento de pacotes é uma decisão importante para qualquer projeto Node.js. O `pnpm` oferece vantagens claras em termos de eficiência, velocidade de instalação e uso de espaço em disco. Se você está lidando com projetos grandes, com várias dependências ou subdependências, ou simplesmente deseja otimizar o gerenciamento de pacotes, o `pnpm` é uma excelente alternativa ao `npm`. Além disso, a facilidade de migração e o impacto positivo na performance tornam o `pnpm` uma escolha altamente recomendada para desenvolvedores que buscam melhorar sua experiência de desenvolvimento.
