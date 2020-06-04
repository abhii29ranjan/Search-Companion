const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendSchema = new Schema({
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
    occ :{
        type:String,
        required:true
    },
    city :{
      type:String,
      required:true
    },
    col :{
      type:String,
    
    },
    com :{
      type:String,
      
    },
    des :{
      type:String,
    
    },
    rel :{
        type:String,
        required:true
    },
    
    location: {
      type: { type: String },
      coordinates: [],
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
    }



}, {
  timestamps: true,
});
friendSchema.index({ location: "2dsphere" });
const Friend = mongoose.model('friend', friendSchema);

module.exports = Friend;