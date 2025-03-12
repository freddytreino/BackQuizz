## Descrição do Projeto

Este projeto é uma aplicação backend construída com Node.js. Utiliza várias bibliotecas populares para gerenciamento de autenticação, encriptação, comunicação com o banco de dados, entre outras funcionalidades essenciais.

## Instalação
Para executar esta aplicação, siga as etapas abaixo:

1. Clone o repositório para a sua máquina local.  git clone https://github.com/freddytreino/BackQuizz.git
2. Navegue até o diretório do projeto. cd src  
3. Execute npm install para instalar todas as dependências.  npm install
4. Crie um arquivo .env na raiz do projeto e configure suas variáveis de ambiente conforme necessário.  (Enviadas pelo email)
5. Execute npm run dev para iniciar o servidor de desenvolvimento com nodemon.

## Dependências

As principais dependências do projeto são:

- bcrypt: ^5.1.1  
- cors: ^2.8.5  
- dotenv: ^16.4.5  
- express: ^4.19.1  
- jsonwebtoken: ^9.0.2  
- mongoose: ^8.2.3  
- nodemon: ^3.1.0  

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
tipo | Enum [ "Linguagens", "" ]*
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
/perfil | POST | Não | Cadastrar novo perfil | Perfil, nome, pontuação, id
/perfil/pontuacao | POST | Sim | Atualiza a pontuacao do perfil | Perfil, nome, pontuação, id
/perfil/:id | POST | Sim | Busca o perfil pelo id | Perfil, nome, pontuação, id




## Login
Recurso | método | autenticado? | Objetivo | Retorno
---- | ---- | ---- | ---- |---- 
/login | POST | Não | Efetuar autenticação do usuário | Token, Email e Perfil

## Questoes
Recurso | método | autenticado? | Objetivo | Retorno
---- | ---- | ---- | ---- |---- 
/quest/linguagens | POST | Sim | Criar uma nova questão de Linguagem | id da questão
/quest/linguagens | GET | Sim | Busca as questões de linguagens | questões
/quest/ultimoLinguagens | GET | Sim | Busca o número da última questão criada para Linguagens | INT
/quest/biologia | POST | Sim | Criar uma nova questão de Linguagem | id da questão
/quest/biologia | GET | Sim | Busca as questões de linguagens | questões
/quest/ultimoBiologia | GET | Sim | Busca o número da última questão criada para Linguagens | INT
/quest/filosofia | POST | Sim | Criar uma nova questão de Linguagem | id da questão
/quest/filosofia | GET | Sim | Busca as questões de linguagens | questões
/quest/ultimoFilosofia | GET | Sim | Busca o número da última questão criada para Linguagens | INT
/quest/fisica | POST | Sim | Criar uma nova questão de Linguagem | id da questão
/quest/fisica | GET | Sim | Busca as questões de linguagens | questões
/quest/ultimoFisica | GET | Sim | Busca o número da última questão criada para Linguagens | INT
/quest/geografia | POST | Sim | Criar uma nova questão de Linguagem | id da questão
/quest/geografia | GET | Sim | Busca as questões de linguagens | questões
/quest/ultimoGeografia | GET | Sim | Busca o número da última questão criada para Linguagens | INT
/quest/historia | POST | Sim | Criar uma nova questão de Linguagem | id da questão
/quest/historia | GET | Sim | Busca as questões de linguagens | questões
/quest/ultimoHistoria | GET | Sim | Busca o número da última questão criada para Linguagens | INT
/quest/matematica | POST | Sim | Criar uma nova questão de Linguagem | id da questão
/quest/matematica | GET | Sim | Busca as questões de linguagens | questões
/quest/ultimoMath | GET | Sim | Busca o número da última questão criada para Linguagens | INT
/quest/quimica | POST | Sim | Criar uma nova questão de Linguagem | id da questão
/quest/quimica | GET | Sim | Busca as questões de linguagens | questões
/quest/ultimoQuimica | GET | Sim | Busca o número da última questão criada para Linguagens | INT
