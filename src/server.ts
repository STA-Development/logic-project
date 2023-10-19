import express from 'express'
import path from 'path'
import {dbmsMysql} from './libs/db/db'
import {router} from './routes/customer-routes'
import bodyParser from 'body-parser'

const server = express()
const port = 3000

server.use(express.urlencoded({extended: true}))

server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())
server.use('/api', router)
dbmsMysql
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized')
  })
  .catch((err) => {
    console.error('Data source initialized error ', err)
  })

server.set('views', path.join(__dirname, 'views'))

server.set('view engine', 'ejs')

server.get('/', (req, res) => {
  res.render('index', {title: 'Express'})
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
