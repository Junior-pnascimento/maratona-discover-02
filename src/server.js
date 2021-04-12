/** 
 * CONFIG SERVIDOR COM EXPRESS
 * -> npm init -y
 * -> npm install express
 * [ ] Criar pasta /src
 *                      /server.js
 *                      /views/  todos os html aqui
 * ->npm i nodemon -D 
 * 
 * Editar o package.json 
 *  "main": "src/server.js"
 *  "scripts" : {
 *      "dev":"nodemon ."}
 * 
 *  Para Executar o <Servidor>
 * 
 * -> npm run dev
 * 
 * Organizar estrutura do projetos
 *  criar pasta public na raiz 
 *                 /public/
 *                      public/images/
 *                      public/scripts/
 *                      public/styles
 *  # Criar arquivos routes.js na src
 *  - Criar routes
 *  - Ajustar path dos links profile.html -> /profile
 *  
 * # Template engine EJS 
 * -> npm i ejs
 * Configurando a View engine com EJS no server.js
 *  server.ser('view engine','ejs')
 * - renomear arquivos profile.html para profile.ejs
 * - note que como renomeamos os arquivo precisamos refaturar o routes.js
 * - o EJS ira renderizar os html 
 * ajusta: routes.get('/',(req, res)=>res.sendFile(basePath + '/index.html'))   para    : routes.get('/',(req, res)=>res.render(basePath + 'index'))
 * 
 *  ## Criar componentes page-header.ejs 
 *          <header class="page-header inner">
                <div class="container animate-up">
                <a href="/" class="back">
                    <img src="/images/back.svg" alt="" />
                </a>
                <h1> <%= title %> </h1>
                </div>
            </header>
 *  ### reaproveitar componentes 
 *           <%- include('parts/page-header', {title: 'Editar Job'}) %>            
 * ### Pegando os dados do Back e servindo o FRONT
            * const profile = {
                name: 'Junior Nascimento',
                avatar: 'https://avatars.githubusercontent.com/u/57420189?v=4',
                "monthly-budget": 8000,
                "days-per-week": 5,
                "hours-per-day": 5,
                "vacation-per-year": 3
            }
 * - passar dados como parâmetro nas routes
 * -> routes.get('/profile',(req, res )=>res.render(basePath + 'profile'))
 * -> routes.get('/profile',(req, res )=>res.render(basePath + 'profile', {profile})) 
 *  - ajustando o HTML para pegar os value
 *     - 2 duas forma de acessar a propriedade p/ passagem de dados
 *           - 1 forma: através do . ponto
 *                  <h2><%= profile.name %> </h2>
 *           - no Input use value 
 *                  <input type="text" 
 *                      id="name" 
 *                      name="name" 
 *                      value="<%= profile.name %> " />
 *           - 2 forma: ['traco-traco-traco']
 *           -     <input 
                         type="number"
                         id="hours-per-day" 
                         name="hours-per-day"
                         value="<%= profile['hours-per-day'] %>" />
        - OBS cuidados com o espaço da aspas duplas no fechamento do EJS" "
              
 **/

const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')

// Configurando a View engine com EJS
server.set('view engine', 'ejs')

// Mudar localização da pasta views
server.set('views', path.join(__dirname, 'views'))


//Habilitar arquivos Statics
server.use(express.static('public'))

// Habilitar leitura do req.body no Servidor Express.
server.use(express.urlencoded({ extended: true }))

//Routes
server.use(routes)

server.listen(3000, () => console.log('Servidor listening on port 3000'))