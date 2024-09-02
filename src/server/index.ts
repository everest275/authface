import {app} from '../app/authface'

const port = Number(process.env.PORT)
app.listen(port, () => {
    console.log(`server on port ${port}`)
})

