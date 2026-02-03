class School {
  constructor(name,level,numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }

  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }

//static methods belong to the class itself, not to istances
  static pickSubstituteTeacher(substituteTeachers){
    const teachersLength = substituteTeachers.length;
    const chosenTeacherIndex = Math.floor(Math.random() * teachersLength);
    return substituteTeachers[chosenTeacherIndex];
  }

  set numberOfStudents(newNumberOfStudents){
    if(typeof newNumberOfStudents === Number){
      this._numberOfStudents = newNumberOfStudents;
    }
    else{
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
}


class PrimarySchool extends School{
  //constructor defines all customizable parameter
  constructor(name,numberOfStudents,pickupPolicy){
    //super inherits from parent class 
    //but prameter value can be "forced"
    super(name,"primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class highSchool extends School{
  constructor(name,numberOfStudents,sportsTeams){
    super(name,"high", numberOfStudents);
    this._sportsTeams = sportsTeams;

  }
  get sportsTeams(){
    console.log(this._sportsTeams);
    return this._sportsTeams;
    }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

const mathSubTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];

//static method are called on Class not on istances
console.log(School.pickSubstituteTeacher(mathSubTeachers));

const alSmith = new highSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

//getter are like properties, accessed without parentheses
alSmith.sportsTeams;


