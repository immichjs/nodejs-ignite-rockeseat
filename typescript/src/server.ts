import express from 'express'
import { createCourse } from './routes'
const app = express()
const PORT = process.env.PORT || 3333



app.get('/', createCourse)

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
