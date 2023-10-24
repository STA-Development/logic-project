import express from 'express'
import path from 'path'
import {dbmsMysql} from './libs/db/db'
import {router} from './routes/customer-routes'
import bodyParser from 'body-parser'
import {errors, initialize} from './libs/consts/const'
import customerInfoService from './services/customer-info.service'

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


server.get('/list', async (req, res) => {
  try{
    const result =  await customerInfoService.getAllCustomerInfo()
    res.render('list', { result });
  } catch (error) {
    return res.status(500).json({error: errors.internalServer});
  }
});

server.get(`/list-id/:id`, async (req, res) => {
  try{
    const customerInfoId = Number(req.params.id)
    const customerInfo =  await customerInfoService.getCustomerInfoById(customerInfoId)
    res.render('list-id', { customerInfo });
  } catch (error) {
    return res.status(500).json({error: errors.internalServer});
  }
});

server.get('/img/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname,'public',fileName);
  if (!fileName) {
    return res.status(400).send('Bad Request: Invalid file name');
  }
  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
  res.download(filePath,fileName,(err) => {
    if(err){
      res.status(500).send('Can not get !')
    }
  })
} )