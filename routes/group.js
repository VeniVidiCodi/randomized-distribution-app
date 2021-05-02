const router = require('express').Router();
let Group = require('../models/group.Model');
const id = require("../uniqueID.js")


router.route("/:id").get((req, res) => {
  Group.findOne({uniqueID: req.params.id})
  .then(group => res.json(group))
  .catch(err => res.status(400).json("Error: " + err));
});


router.route("/add").post((req, res) => {
  const projectName = req.body.projectName;
  const uniqueID = id();
  const accessPassword = id();
  const groupNames = req.body.groupNames;
  const persons = req.body.persons;
  const date = new Date();
  console.log(projectName);

  const newGroup = new Group({
    projectName,
    uniqueID,
    accessPassword,
    groupNames,
    persons,
    date
  });

  newGroup.save()
    .then(() => res.json("Added Part"))
    //.then(group => res.json(newGroup))
    .catch(err => res.status(400).json("Error: " + err));
});


module.exports = router;
