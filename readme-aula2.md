# trabalhando com Form

[  ] Ajustando tag HTML.

* ``` <form id="form-job" method="post" action="/job"> ```

[   ] Habilitar leitura do req.body no Servidor Express.

```javascript
 server.use(express.urlencoded({ extended: true })) 
 ```

[   ]  Criar rota POST no routes.js

```javascript
          routes.post('/job',(req, res )=> {
          console.log(req.body)
          })
```

[   ] Entendimento: O front esta mandando as enformações para o back.

-O envio do form acontece por meio do campo name do input; o campo name eh usado como chave no objeto enviado pelo POST e lido pelo back por meio do req.body .

## Calcular o Tempo de cada JOB

