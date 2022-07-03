const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const data = {
    "string-list": ["panel", "introduction", "reactor", "water", "mature", "strikebreaker", "put", "manufacture", "lecture", "zone", "cultivate", "rough", "partner", "conclusion", "sound", "fantasy", "agree", "snack", "boy", "note", "ladder", "genuine", "opera", "communist", "administration", "whip", "need", "incapable", "collar", "adjust", "fan", "leaflet", "freighter", "correspondence", "level", "small", "incredible", "raid", "dentist", "main", "extension", "mosque", "action", "glow", "pat", "means", "complication", "prefer", "business", "guerrilla"]
  }
  res.send(data)
})

app.get('/health', (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date()
  }

  res.status(200).send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

