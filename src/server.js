require('dotenv').config()
const express = require('express')

const BullBoard = require('bull-board')
const Queue = require('./app/lib/Queue')
BullBoard.setQueues(Queue.queues.map(queue => queue.bull))

const app = express()

Queue.process()

app.use(express.json())
app.use(require('./app/routes'))
app.use('/queues', BullBoard.UI)


app.listen(3333,()=>{
    console.log(`Server running on 3333`)
})