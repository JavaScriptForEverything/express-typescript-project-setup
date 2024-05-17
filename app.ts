import express from 'express'
import type { Express } from 'express'
import routers from './routes'

const app: Express = express()

app.use('/', routers)


export default app