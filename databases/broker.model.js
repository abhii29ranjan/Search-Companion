const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const brokerSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
    mystate :{
      type:String,
      required:true
    },
    
    city :{
      type:String,
      required:true
    },
    
    des :{
      type:String,
    
    },
    
    lat:
    {
        type:Number,
        required:true
    },
    lng:
    {
        type:Number,
        required:true

    },
    age:
    {
      type:Number,
      required:true,
    },
    gen:
    {
      type:String,
      required:true
    },
    con:
    {
        type:String,
        required:true
    },
    price:
    {
      type:Number,
      required:true
    },
    year:
    {
      type:Number,
      required:true
    }



}, {
  timestamps: true,
});

const Broker = mongoose.model('broker', brokerSchema);

module.exports = Broker;