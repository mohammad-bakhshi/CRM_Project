const express = require('express');
const app = express();
const Project = require('./routes/projectRouter');
const Manager=require('./routes/managerRouter');
const Customer=require('./routes/customerRouter');
const Ticket=require('./routes/ticketRouter');
const port = 3000;




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/project', Project);
app.use('/manager',Manager);
app.use('/customer',Customer);
app.use('/ticket',Ticket)


app.listen(port, () => console.log(`Server is listening on port ${port}`));