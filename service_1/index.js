const express= require('express')
const kafka= require('kafka-node')
const app= express()
app.use(express.json())

const client= new kafka.KafkaClient({kafkaHost: process.env.KAFKA_HOST})
const producer= new kafka.Producer(client)
producer.on('ready', ()=>{
    // console.log("producer ready!")
    app.post('/', (req, res)=>{
        producer.send([{ topic: process.env.KAFKA_TOPIC, messages: JSON.stringify(req.body)}], (err, body)=>{
            if(err){
                console.log(err)
            } 
            else{
                console.log(data)
            } 

        })
    })
})






app.listen(process.env.PORT)