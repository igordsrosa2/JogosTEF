<h1>JOGOS TEF</h1>

<p>JogosTEF é um sistema para registrar as partidas realizadas pelo time em 2025. O sistema permite cadastrar informações sobre os jogos, como adversário, 
local, data e resultado, além de, incluir as ferramentas de edição e exclusão das informações que estão conectadas ao banco de dados.</p>

<h2>📁 Estrutura do Projeto</h2>

<p>O projeto é dividido em duas partes:</p>

```
|- api (Backend)
|  |- controllers
|  |  |- jogos.js  # Lógica de manipulação dos jogos
|  |- routes
|  |  |- jogos.js  # Definição das rotas da API
|  |- db.js        # Configuração da conexão com o banco de dados
|  |- index.js     # Arquivo principal do backend
|  |- package.json # Dependências e scripts do backend
|  |- yarn.lock    # Controle de versões do Yarn
|  |- .gitignore   # Arquivos ignorados pelo Git
|
|- frontend (Frontend)
|  |- public       # Arquivos públicos
|  |- src
|  |  |- components
|  |  |  |- Footer.js  # Componente do rodapé
|  |  |  |- Form.js    # Formulário para cadastrar partidas
|  |  |  |- Grid.js    # Exibição dos jogos cadastrados
|  |  |- styles
|  |  |  |- Global.js  # Estilos globais do projeto
|  |  |- App.js        # Componente principal da aplicação
|  |  |- index.js      # Ponto de entrada do frontend
|  |- .gitignore       # Arquivos ignorados pelo Git
|  |- package.json     # Dependências do frontend
|  |- yarn.lock        # Controle de versões do Yarn
|  |- README.md        # Documentação do projeto
```

<h2>🗄 Banco de Dados</h2>

<p>A API se conecta a um banco de dados MySQL chamado jogostef, que possui a tabela jogos:</p>

```
CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    adversario VARCHAR(255),
    local VARCHAR(255),
    data VARCHAR(45),
    resultado VARCHAR(45)
);
```

<h2>🚀 Como Executar o Projeto</h2>

<h3>⚙️ Configuração do Backend</h3>

```
cd api      # Acesse a pasta do backend
yarn install  # Instale as dependências
yarn start    # Inicie a API
```

<h4>Abra outro terminal:</h4>

<h3>🎨 Configuração do Frontend</h3>

```
cd frontend    # Acesse a pasta do frontend
yarn install   # Instale as dependências
yarn start     # Inicie o frontend
```

<p>O frontend será iniciado em http://localhost:3000 e a API rodará em http://localhost:5000 (ou conforme configurado no backend).</p>

<h2>📜 Licença</h2>

<p>Este projeto é de uso pessoal e não possui uma licença específica.</p>

<h1>IMAGENS</h1>

<h3>Página principal:</h3>

![{3E8760E5-30DA-4179-8EBD-754ECDA1144F}](https://github.com/user-attachments/assets/61d1d9c4-b68b-47b2-bd93-88fbe1696ce9)

<h3>Banco de dados:</h3>

![{4E262223-45AA-4373-99B6-D5B5A44646AC}](https://github.com/user-attachments/assets/84874b16-32e3-4ff7-aef6-b71ece4092c3)

<h3>Estrutura do backend:</h3>

![{DE14FFFF-5C77-48E0-BA29-622FA66FFB6E}](https://github.com/user-attachments/assets/5fdee3ed-88e5-46bf-9181-831a727d8e74)

<h3>Estrutura do frontend:</h3>

![{A4BD866B-59D6-4685-8B2F-B6F0837E7802}](https://github.com/user-attachments/assets/0ddeb157-128e-4891-95b1-363cb48113cb)

