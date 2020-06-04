const router = require('express').Router();
let Brokers = require("../databases/broker.model");
console.log("hello");

router.route('/').get((req, res) => {
  Brokers.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/val').get((req,res) => {
  let obj={};

  console.log("inserver query",req.query);
  for( let key in req.query)
  { 
    if(req.query[key].length>0)
    {
      if(key==="lat")
      {
        lat=req.query.lat;
      }
      else if(key==="lng")
      {
        lng=req.query.lng;
      }
      else
      {
      obj[key]=req.query[key];
      }
    }
  }

  console.log("in server obj is", obj,lat,lng);
  Brokers.find({
    location: {
     $near: {
      $maxDistance: 5000,
      $geometry: {
       type: "Point",
       coordinates: [lng, lat]
      }
     }
    }
  })
  .find(obj)
   .then(results=>res.json(results))
   .catch(error=>console.log(error))

}
)

router.route('/add').post((req, res) => {
  let username = req.body.name;
  let e=req.body.email;
  let mystate=req.body.city;
  
  let lat =req.body.lat;
  let lng = req.body.lng;
  let con=req.body.con;
  let  age= req.body.age;
  let  des= req.body.des;
  let  city= req.body.city;
  let  gen= req.body.gen;
  let price=req.body.price;
  let year=req.body.year;
    
  const newUser = new Brokers({
      username,
      email:e,
      mystate,
      lat,
      lng,
      age,
      des, 
      city,
      gen,
      con,
      price,
      year,
    });
    console.log("in friends");
  newUser.save()
    .then(() => res.json('Broker added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;