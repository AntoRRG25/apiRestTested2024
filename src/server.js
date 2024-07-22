import express from 'express'
import mainRouter from './routes/mainRouter.js'
import errhand from './middlewares/middlewares.js'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))
app.use(express.json()) 
app.use('/api',mainRouter)

app.use(errhand.lostRoute)
app.use(errhand.errorEndWare)


export default app;
