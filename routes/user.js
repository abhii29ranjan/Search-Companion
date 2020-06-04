const router = require('express').Router();
let User = require("../databases/user.model");
console.log("hello");

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/rec').get((req,res) => {
  console.log(req.query);
  console.log(req.query.email);
  const mail=req.query.email;
  const password=req.query.pass;
  //console.log(data);
  User.find({"email":mail ,"password":password})
  .then(users => res.json(users))
  .catch(error => res.status(400).json('Error: ' + err) )
}
)

router.route('/add').post((req, res) => {
  let name = req.body.username;
  let e=req.body.email;
  let pass=req.body.password;
  let h=req.body.hint;
    
  const newUser = new User({
      username:name,
      email:e,
      password:pass,
      hint:h
    });
    console.log("in user");
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;