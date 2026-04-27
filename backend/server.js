import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import {YSocketIO} from 'y-socket.io/dist/server'

const app=express()

const http=createServer()

const io= new Server(http,()=>{
    cors:{
        origin:"*"
        methods:["GET","POST"]
    }
})

const YsocketIO=new YSocketIO(io)
YsocketIO.initialize()

app.get('/health',(req,res)=>{
    res.send({
        "status":"202",
        "message":"ALL ISZZ WELLl"
    })
})

app.listen(4000,()=>{
    console.log('Server chal rha hai!!!')
})