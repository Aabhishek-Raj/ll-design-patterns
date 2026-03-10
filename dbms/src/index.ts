import express, {Request, Response} from 'express'
import cors from 'cors'
import * as contol from './control';

const app = express()
app.use(cors)

app.get('/', contol.createUser)

app.use((err: Error, req: Request, res: Response) => {
  console.error(`Error:`, err)
  res.status(500).json({
    message: err.message || 'An unexpected server error occurred.',
  })
})

app.listen(3000, () => {
    console.log('Listening to port 3000')
})