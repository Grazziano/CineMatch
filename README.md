<div style="display: inline-flex; flex-direction: column; justify-content: center; align-items: center;">
  <h1>CineMatch</h1>
  <img src="./public/camera.png" alt="movie icon" style="width:100px;"/>
<div>

**CineMatch** é uma aplicação de recomendação de filmes e séries que permite aos usuários buscar títulos, obter informações e descobrir novas opções de entretenimento. Utiliza a API OMDb para fornecer dados detalhados sobre filmes e séries.

## Funcionalidades

- Busca de filmes e séries usando a [API OMDb](http://www.omdbapi.com/).
- Exibição de pôster, título e avaliação dos filmes e séries buscados.
- Interface amigável e responsiva, utilizando Chakra UI para estilização.

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construir a interface de usuário.
- **TypeScript**: Para tipagem estática e maior robustez no desenvolvimento.
- **Chakra UI**: Biblioteca de componentes de UI para uma experiência de usuário agradável e rápida.
- **Axios**: Cliente HTTP para requisições à API OMDb.

## Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação localmente:

### 1. Clone o repositório

```bash
git clone https://github.com/Grazziano/CineMatch.git
cd CineMatch
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configuração da API OMDb

Crie um arquivo `.env` na raiz do projeto e adicione a chave de API do OMDb que você obteve [aqui](http://www.omdbapi.com/apikey.aspx).

```bash
REACT_APP_OMDB_API_KEY=SUA_CHAVE_DE_API_AQUI
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura de Pastas

```bash
src/
├── components/        # Componentes React reutilizáveis
│   ├── MovieList.tsx  # Exibe a lista de filmes/séries
│   ├── MovieSearch.tsx # Componente de busca de filmes/séries
├── services/
│   ├── api.ts         # Serviço de integração com a API OMDb
├── types/
│   ├── Movie.ts       # Definição do tipo Movie
├── App.tsx            # Componente principal
├── index.tsx          # Arquivo de entrada da aplicação
```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch com sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Adicionando minha feature'`.
4. Envie sua branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
