const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const requestIp = require('request-ip');
const cors = require('cors');
const nodemailer = require('nodemailer');
// require('dotenv').config();

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(requestIp.mw());


// const dbURI = 'mongodb+srv://admin:rbmatcloud@cluster0.bfdrzqp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const url = 'mongodb+srv://admin:rbmatcloud@cluster0.bfdrzqp.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0'

const visitorSchema = new mongoose.Schema({
  name: String,
  email: String,
  ip: String
}, {timestamps:true});

const Visitor = mongoose.model('Visitor', visitorSchema);

app.post('/', async (req, res) => {
    let {name, email} = req.body;
    if(name == '')  name = "Unknown";
    if(email == '')  email = "Unknown";
    const ip = req.clientIp;
    console.log(req.body)
    const newVisitor = new Visitor({
        name,
        email,
        ip
    });
    try {
        await newVisitor.save();
        console.log('Data added successfully');
    } catch (err) {
        console.log(err);
    }
    
    let config = {
        service: 'gmail',
        auth: {
            user: 'rbmdb.cloud@gmail.com',
            pass: "ftqc sgda ifly ptik"
        }
    }
    let transporter = nodemailer.createTransport(config);
    
    let message = {
        from: 'rbmdb.cloud@gmail.com',
        to: 'rbmdb.cloud@gmail.com',
        subject: 'Our portfolio have been visited...!',
        text: `New visitor's entered info:\n\n
        Name  >> ${name}\n
        Email >> ${email}\n
        IP    >> ${ip}\n
        Data Added to our database...`
    };
    
    transporter.sendMail(message).then((info) => {
        console.log("Email Sent");
        res.status(201).json(
            {
                msg: "Email sent",
                info: info.messageId,
                preview: nodemailer.getTestMessageUrl(info)
            }
        )
    }).catch((err) => {
        res.status(500).json({ msg: err });
    }
    );
})

app.listen(5000, async () => {
    try {
        await mongoose.connect(url)
        console.log('com')
    } catch (error) {
        console.log(error)
    }
    console.log('object')
})