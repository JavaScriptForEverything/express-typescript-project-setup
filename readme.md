## Express-Typescript

```
$ yarn dev 			# development mode

$ yarn build 		# before start must be compiled
$ yarn start 		# run after `yarn build`
```



### Setup Typescript Project

```
$ yarn init -y
$ yarn add express
$ yarn add -D typescript @types/express @types/node nodemon ts-node
$ yarn tsc --init
```

##### /app.ts
```
import express from 'express'
import type { Express, Request, Response, NextFunction } from 'express'
import routers from './routes'

const app: Express = express()

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
	res.status(200).json({
		status: 'success',
		data: {}
	})
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server running on ${PORT}`))
```


### /tsconfig.json
```
...
"outdir": "dist",
...
```

### /package.json
```
...
"main": "dist/server.js",
"scripts": {
	"dev": "nodemon server.ts --ext ts", 			# nodemon uses ts-node as dependencies
	"build": "yarn tsc",
	"start": "node ."
},
...
```


### Run TypeScript Project
```
$ yarn dev 			# development mode

$ yarn build 		# before start must be compiled
$ yarn start 		# run after `yarn build`
```



## Add Eslint
```
$ yarn add eslint
$ yarn eslint --init
```

### eslint.config.mjs
```
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,


	{
		"rules": {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					"args": "all",
					"argsIgnorePattern": "^_",
					"caughtErrors": "all",
					"caughtErrorsIgnorePattern": "^_",
					"destructuredArrayIgnorePattern": "^_",
					"varsIgnorePattern": "^_",
					"ignoreRestSiblings": true
				}
			]
		}
	}

];
```

