const express = require('express')
const tankCtrl = require('../controllers/tankController')

const app = express()

const PORT = 5000

app.get('/api/tanks', tankCtrl.getTanks)

app.listen(PORT, () => console.log(`Docked at port ${PORT}`))