import multer from 'multer'
import {Request} from 'express'
import {currentDate, pdfError} from '../consts/const'

export const w9Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/img/coi')
  },
  filename: (req: Request, file, cb) => {
    const [name, extension] = file.originalname.split('.')
    const fileName = `${currentDate}_${name}.${extension}`
    cb(null, fileName)
  },
})
export const uploadW9 = multer({
  storage: w9Storage,
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
