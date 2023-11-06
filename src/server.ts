import express from 'express'
import path from 'path'
import {dbmsMysql} from './libs/db/db'
import {router} from './routes/customer-routes'
import bodyParser from 'body-parser'
import {errors, initialize, oneDay} from './libs/consts/const'
import customerInfoService from './services/customer-info.service'
import {generateToken, verifyPassword} from './libs/authentication/authuntication'
import cookieParser from 'cookie-parser'
import {protect} from './libs/middleware/middleware'
import * as fs from 'fs'

const server = express()
const port = 80

server.use(express.urlencoded({extended: true}))

server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.json())
server.use(cookieParser())
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
  const jsonFilePath = path.join(__dirname,'public/json/cities.json')
  try {
    const file = fs.readFileSync(jsonFilePath, 'utf-8')
    const jsonData = JSON.parse(file)
    res.render('index', {jsonData: jsonData})
  }
  catch (error){
    res.status(500).send(errors.internalServer)
  }
})

server.get('/success', (req, res) => {
  res.render('success', { title: 'Success' });
});

server.get('/auth', (req, res) => {
  res.render('auth', { title: 'Auth' });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})



server.post('/verify-password', async (req, res) => {
  const { password } = req.body;
  const isValidPassword = await verifyPassword(password);
  if (isValidPassword) {
    const token = generateToken();
    res.cookie('token', token, { httpOnly: true, expires: oneDay});
    res.redirect('/list')
  } else {
    res.redirect('/auth')
  }
});

server.get('/list',protect, async (req, res) => {
  try {
    const result = await customerInfoService.getAllCustomerInfo();
    res.render('list', {result});
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: errors.internalServer });
  }
});

server.get(`/list-id/:id`,protect, async (req, res) => {
  try{
    const customerInfoId = Number(req.params.id)
    const customerInfo =  await customerInfoService.getCustomerInfoById(customerInfoId)
    res.render('list-id', { customerInfo });
  } catch (error) {
    console.log(error);
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
      res.status(500).send(errors.internalServer)
    }
  })
})
