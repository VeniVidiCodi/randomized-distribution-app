class Group {
  constructor() {
    this.projectName = "";
    this.groupNames = [];
    this.persons = [];
  }

  getProjectName() {
    return this.projectName;
  }

  setProjectName(projectName) {
    this.projectName = projectName;
  }

  getGroupNames() {
    return this.groupNames;
  }

  addGroupNames(groupNames) {
    this.groupNames.push(groupNames);
  }

  removeGroupNames(groupNames) {
    this.groupNames.pop(groupNames);
  }

  getPerson() {
    return this.persons;
  }

  addPerson(person) {
    this.persons.push(person);
  }

  removePerson(person) {
    this.persons.pop(person);
  }
}


class Person {
  constructor(name, groupNum) {
    this.name = name;
    this.groupNum = groupNum;
  }
}


export {Group, Person}


//Testing the class to check if the class works correctly
//and how to stringify the Object
/*
const groups = new Group();

groups.setProjectName("Grouper");
groups.addPerson(new Person("Kenly", 1));
groups.addPerson(new Person("Victor", 2));
groups.addGroupNames("Group1");
groups.addGroupNames("Group2");
//console.log(groups.getProjectName());
//console.log(groups.getGroupNames());
//console.log(groups.getPerson());

const tempGroup = groups.getPerson();
const index = tempGroup.findIndex( ({name}) => name === "Victor" );
console.log(index);
groups.removePerson(index);

var myJSON = JSON.stringify(groups);

//console.log(myJSON);
console.log(JSON.stringify(JSON.parse(myJSON), null, 2));
*/
