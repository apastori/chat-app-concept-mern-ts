import express, { Application }  from "express"

const app: Application = express()

const PORT: string | 5000 = process.env['PORT'] || 5000

app.listen(PORT, () => {
    console.log("Server Running on port " + PORT)
})

