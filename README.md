# Quiz BRAINUP

Projeto Quiz BRAINUP tem como objetivo criar uma aplicação para a disciplina Programação Web do 1 semestre de 2024 da UFMS.

Este projeto implementa uma **API** em **NodeJS**, utilizando ***Express*** como gerenciador de requisições **HTTP**, banco de dados não relacional **MongoDB** e o framework ODM **Mongoose** para intermediar a comunicação entre a aplicação e o banco de dados.

O projeto trata-se de uma aplicação de gerenciamento de perfis de jogadores. Portanto é possível cadastrar perfis e criar perguntas.

Este documento tem por objetivo detalhar os elementos no projeto do Quiz BRAINUP, incluindo dependências, *scripts* de execução, definição de entidades e *endpoints*.

----
## Entidades
---
- Perfil
- Perguntas

## Perfil

Atributo | Tipo
-------- | ------
perfil | Perfil*
nome | String*
pontucacao | Number
usuario | boolean
respondido | Number


## Questoes
Atributo | Tipo
---- | ----
numero | Number
question | String*
level | Enum  ['fácil', 'médio', 'difícil']*
tipo | Enum [ "Contato", "Solicitação de amizadade" ]*
alternatives | Alternatives

> Entidades marcadas com asterisco são entidades obrigatórias. As definições das mesmas estão abaixo.

## Entidades Internas

### Perfil

Atributo | Tipo
---- | ----
email | String
senha | String

### Questions
Atributo | Tipo
---- | ----
text | String
isCorrect | Boolean

# Endpoints

## Perfil
Recurso | método | autenticado? | Objetivo | Retorno
---- | ---- | ---- | ---- |---- 


## Login
Recurso | método | autenticado? | Objetivo | Retorno
---- | ---- | ---- | ---- |---- 
/login | POST | Não | Efetuar autenticação do usuário | Token, Email e Perfil

## Questoes
Recurso | método | autenticado? | Objetivo | Retorno
---- | ---- | ---- | ---- |---- 
