const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path=require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://Abhii:atlasabhii@freecluster-4d744.mongodb.net/test?retryWrites=true&w=majority)';
mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const friendsRouter = require('./routes/friends');
const usersRouter = require('./routes/user');
const brokerRouter=require('./routes/broker');
app.use('/friends', friendsRouter);
app.use('/users', usersRouter);
app.use('/brokers',brokerRouter);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});