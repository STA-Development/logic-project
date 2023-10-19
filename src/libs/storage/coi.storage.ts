import multer from 'multer'
import {Request} from 'express'
import {currentDate, pdfError} from '../consts/const'

export const coiStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/public/img')
  },
  filename: (req: Request, file, cb) => {
    const [name, extension] = file.originalname.split('.')
    const fileName = `${currentDate}_${name}.${extension}`
    cb(null, fileName)
  },
})
export const uploadCoi = multer({
  storage: coiStorage,
  limits: {
    fileSize: 5000000,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == 'application/pdf') {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error(pdfError))
    }
  },
})
