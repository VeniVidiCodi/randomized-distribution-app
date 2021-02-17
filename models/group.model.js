const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Person = {
  name: {type: String, required: true},
  groupNum: {type: Number, required: true}
}

const GroupName = {
  name: {type: String, required: true}
}

const groupSchema = new Schema({
  projectName: {type: String},
  uniqueID: {type: String},
  accessPassword: {type: String},
  groupNames: [GroupName],
  persons: [Person],
  date: {type: Date}
});

const Group = mongoose.model("groups", groupSchema);

module.exports = Group;
