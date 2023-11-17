import multer from 'multer'
import {Request} from 'express'
import {currentDate, errors} from '../consts/const'

export const filesStorage = multer.diskStorage({
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
  storage: filesStorage,
  limits: {
    fileSize: 5000000,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype == 'application/pdf' ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/png"
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error(errors.formatFile))
    }
  },
})