const Queue = require('bull');
const redisConfig = require('../../config/redis')

const jobs = require('../jobs')

const queues = jobs.map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle
}))

const add = (name, data) => {
    const job = queues.find(queue => queue.name === name)
    return job.bull.add(data)
}

const process = () => {
    return queues.forEach(queue => {
        queue.bull.process(queue.handle)

        queue.bull.on('failed',(job, err)=>{
            console.log('Job Failed', job.data)
            console.log(err)
        })
    })
}

module.exports = { queues, add, process }