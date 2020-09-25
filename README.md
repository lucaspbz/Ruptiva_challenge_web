### Descrição:

Aplicação web desenvolvida com CRA para desafio de processo seletivo.
Utilizei Typescript e Styled Components, consumindo dados da API do github e da api desenvolvida também nesse processo. Repositorio da api está [aqui](https://github.com/lucaspbz/Ruptiva_challenge_server/blob/master/README.md).

Ao entrar pela primeira vez na aplicação, o usuário cai numa página de login para inserir email e senha. Caso não possua, o usuário pode ir para uma página de criação de conta, onde ele digita um email, senha e confirmação da senha. Ao criar uma conta o usuário é direcionado automaticamente para o dashboard.

No dashboard o usuário pode digitar no campo de busca um repositório no github seguindo o padrão "donoDoRepositório/nomeDoRepositório". Exemplo: facebook/react.
Ao clicar em pesquisar o usuário cria um card e salva o repositório no seu banco de dados.

Ao clicar no ícone de seta do card vai ser aberto um modal com os detalhes do repositório escolhido e informações sobre as 5 últimas Issues em aberto.

Ao clicar no botão de lixeira o usuário deleta o repositório do banco de dados e remove da lista.

O usuário pode fazer logout da aplicação tocando no ícone de sair localizado no topo direito da tela.


### Instruções para instalação:

Faça o clone do repositório com esse [link](https://github.com/lucaspbz/Ruptiva_challenge_web.git)

Abra seu terminal na pasta raiz do projeto e rode o comando "yarn" ou "npm install" para instalar as dependências.

Rode o comando "yarn start" ou "npm run start" para iniciar o servidor.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
