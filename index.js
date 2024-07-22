import app from './src/server.js'
import {sequelize} from './src/db.js'
import s from './src/envConfig.js'

app.listen(s.Port, async () => {
  try {
    await sequelize.sync({force: false})
    console.log(`Database connect succesfully ${s.Status} 😉!!`)
    console.log(`Server started at http://localhost:${s.Port}`)
  } catch (error) {
    console.error('Error syncing database', error)
  }
})
