# Anotações

## CONFIG SERVIDOR COM EXPRESS

 npm init -y
 npm install express
 [ ] Criar pasta /src
                       /server.js
                      /views/  todos os html aqui
 ->npm i nodemon -D 
 
 -Editar o package.json 
  "main": "src/server.js"
  "scripts" : {
      "dev":"nodemon ."}
 
  Para Executar o <Servidor>
 
 -> npm run dev
 
 ## Organizar estrutura do projetos
  criar pasta public na raiz 
                 /public/
                      public/images/
                      public/scripts/
                      public/styles
  ## Criar arquivos routes.js na src
  - Criar routes
  - Ajustar path dos links profile.html -> /profile
  
 # Template engine EJS 
 -> npm i ejs
 Configurando a View engine com EJS no server.js
  server.ser('view engine','ejs')
 - renomear arquivos profile.html para profile.ejs
 - note que como renomeamos os arquivo precisamos refaturar o routes.js
 - o EJS ira renderizar os html 
 ajusta: routes.get('/',(req, res)=>res.sendFile(basePath + '/index.html'))   para    : routes.get('/',(req, res)=>res.render(basePath + 'index'))
 
  - Criar componentes page-header.ejs 
          <header class="page-header inner">
                <div class="container animate-up">
                <a href="/" class="back">
                    <img src="/images/back.svg" alt="" />
                </a>
                <h1> <%= title %> </h1>
                </div>
            </header>
  - reaproveitar componentes 
           <%- include('parts/page-header', {title: 'Editar Job'}) %>            
 
/