import express from 'express'
import path from 'path'
import {dbmsMysql} from './libs/db/db'
import {router} from './routes/customer-routes'
import bodyParser from 'body-parser'
import {errors, initialize} from './libs/consts/const'

const server = express()
const port = 80

server.use(express.urlencoded({extended: true}))

server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())
server.use('/api', router)
dbmsMysql
  .initialize()
  .then(() => {
    console.log(initialize)
  })
  .catch((error) => {
    console.log(error)
    throw new Error(errors.internalServer, error)
  })

server.set('views', path.join(__dirname, 'views'))

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  res.render('index', {title: 'Express'})
})

server.get('/success', (req, res) => {
  res.render('success', { title: 'Success' });
});


server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
