const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const axios = require('axios');
const port=4000
/////////////////////////
app.use(bodyparser())
app.use(cors())
// webjs
// const fs=require('fs');
// const { Client ,LocalAuth} = require('whatsapp-web.js');
// const session="./session.json"
// let sessionConf
// if(fs.existsSync(session)){
//     sessionConf=require(session)
// }
// const client = new Client({puppeteer:{headless:true},authStrategy:new LocalAuth()});

// client.on('qr', (qr) => {
//        qrcode.generate(qr, { small: true });
//         console.log("this is qr ",qr) 
  
// })
// client.on("ready",()=>{
//     console.log("ready sir")
// });
// client.on('ready', () => {
//     console.log('Client is ready!');
//  client.sendMessage("201027741310@c.us","بحبك")

// });
// client.initialize();
// const qr="2@xBUMY37aYOU+aM1pydf77GTgS9FJUalWgLY0WFYVRfhG8Tpke+tQxK0b1fhXFIubjy5IPAxRlrWI5A==,KgRxo67tjllSJZUyWC7myV4KVpZ95jODoesC4PXvnlY=,yRzTM+INJY0aIeqxz9Al5mxbjsbrNeeFCNiJJnIyEE4=,qE8KEIn1YHTdZXTq5C0uQuwpKlJRhDvufQ1zo+W+vVU=,1"
// qrcode.generate(qr,{small:true})
// app.get("/",(req,res)=>{
//     res.send("this is node js server !!!")
// })
// app.post("/",(req,res)=>{
//     const {message}=req.body
//     res.send(`welcome Mr ${message}`)
// })
// const qrcode = require('qrcode-terminal');

app.get("/home",(req,res)=>{
    res.send("this is page home in node js")
})
app.post("/verification",(req,res)=>{
    const {name}=req.body
    const {otp} =req.body
    const {reciever} =req.body
    ////////////////////////////
    const accessToken = 'EAAFK1x95FaoBOy9U4iykZCuPUxHdruo1wGK3IFxCvPPWgZCkUWuAG9jrU4PqfTEZCirfIuNGNnnXD6EJlQV7lRa3FrgzZA4aush2f3rSYNbVRstoJ2HWQJ0NvnjR3jUvwKVdwgEJTmyfrCyxhp9fr8wnTdlXbv1B85Txr1RuZCD8myQ4at3ZAViRInNuTOgyIV';
const endpoint = 'https://graph.facebook.com/v18.0/245233415340081/messages';

// Data for the request
const requestData = {
    messaging_product: "whatsapp",
    to: reciever,
    type: "template",
    template: {
        name: "otp",
        language: {
            code: "en"
        },
        components:[{type:"body",
        parameters:[{type:"text",text:name},{type:"text",text:otp}]}]
    }
};

// Function to send a message via Facebook Graph API
async function sendFacebookMessage() {
    try {
        const response = await axios.post(endpoint, requestData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        console.log('Message sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending message:', error.response.data);
    }
}

// Call the function
sendFacebookMessage();
res.json({message:"okkkkk"})
})







app.listen(port,()=>{
    console.log("example app")
})