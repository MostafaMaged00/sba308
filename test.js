// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};
// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",//2023-02-27
      score: 140
    }
  }
];




//get ids from the array 
const Ids = [...new Set(LearnerSubmissions.map(obj => obj.learner_id))];
console.log( Ids) //125,132


// Creates empty objects
const students = Array.from({ length: Ids.length }, () => ({})); 
// add keys
let keys = ['studId','score1','score2','avgScore']


//fill the array with keys a=but no values yet
students.forEach(student => {
  keys.forEach(key => {
      student[key] = '';  
  });
});

//  console.log(students)





//get due dates from AssignmentGroup 

console.log(AssignmentGroup.assignments[0].due_at)


// declare empty variables
 let avgScore=0;
 let score1 =0
 let score2 =0

for(let i=0;i<students.length;i++){

LearnerSubmissions.forEach(obj => {

  if(obj.learner_id === Ids[i] && obj.assignment_id == AssignmentGroup.assignments[0].id ){
    if(new Date(obj.submission.submitted_at) > new Date(AssignmentGroup.assignments[0].due_at)){
      score1 =  (obj.submission.score) -15
    }else{
      score1 =  (obj.submission.score) 
    }
  }

  if(obj.learner_id === Ids[i] && obj.assignment_id == AssignmentGroup.assignments[1].id){
    if(new Date(obj.submission.submitted_at) > new Date('2023-02-27')){

      score2 =  (obj.submission.score) - 15
    }else{
      score2 =  (obj.submission.score) 
    }
  
  }
  

})

students[i].studId=Ids[i]
students[i].score1=(score1/50).toFixed(2)
students[i].score2=(score2/150).toFixed(2)
students[i].avgScore=(score1 + score2 )/200


}
const result = students
console.log( result)