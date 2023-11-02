export const currentDate = Date.now()
export const initialize = 'Data Source has been initialized'
const oneDayInSeconds = 24 * 60 * 60;

export const oneDay = new Date(Date.now() + oneDayInSeconds * 1000)




export const errors = {
  pdf : "Only PDF files are allowed",
  uploadFile : "No file uploaded",
  internalServer : "Internal Server Error",
  initialize : "Data source initialized error ",
}
