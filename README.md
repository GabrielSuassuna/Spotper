# Spotper
Data Base Fundamentals project
Pedro Victor Oliveira Carvalho - 417338
Gabriel Almeida Suassuna - 412715

<<<<<<<<<<<<IMPORTANTE: ALGUNS COMANDOS PODEM PRECISAR DE SUDO PARA MANTER A EXECUÇÃO>>>>>>>>>>>>
<<<<<<IMPORTANTE: Devido a algumas instabilidades no NODE MSSQL, alguns f5 serão necessarios>>>>>>


Primeiramente, abrir o terminal e ir até a pasta Backend, nela,
usar yarn install (ou npm install) e após a conclusão dos processos,
utilizar os comandos yarn dev ou nodemon server.js (nodemon será baixado e instalado
no comando anterior), após isso, com tudo funcionando, o servidor backend estará rodando
em: localhost:3333, para acessar qualquer rota, basta utilizar essa url como base e utilizar
a que deseja verificar. Ex:localhost:3333/createplaylist/Brayner, criará no banco de dados uma
playlist com o nome Brayner, pos é o parâmetro passado para o servidor


Segundamente, com o backend funcionando, vá para spotper em uma outra aba de terminal, mantendo
a anterior funcionando, desta vez utilizar yarn install (ou npm install) e, após o fim dos processos
utilizar o comando yarn start (ou npm start) com isso, ao fim do processo, o servidor de frontend será
inicializado e uma aba será aberta no navegador utilizando a rota localhost:3000


Rotas do frontend: 
    Raiz: localhost:3000/
    Search: localhost:3000/search
    Album: localhost:3000/album/(codigo do album)