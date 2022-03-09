# Numadic Frontend


## Installation
```
npm install
or
yarn install
```

### `develop`

```
npm run dev
# or
yarn dev
```

### `start`

```
npm run start
# or
yarn start
```

### `build`

```
npm run build
# or
yarn build

```

## Environment variables
### `Local Example`
#### place .env file at root to replace values
| Name                           | Required (yes/no) | Default value         | Description                                                  |     |
| ------------------------------ | ----------------- | --------------------- | ------------------------------------------------------------ | --- |
| API_URL                        | yes                | http://localhost:8082/graphql | API Graphql  |
| STORAGE_BASE                   | yes               | http://localhost:8082 | server local host address |
                             
## ⚙️ Deployment

### `production build`

```
npm run build
```

Run the server with the production settings.
```
npm run start
```

 
## License
[MIT](https://choosealicense.com/licenses/mit/)
