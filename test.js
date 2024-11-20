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
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


//get ids from the array 
const Ids = [...new Set(LearnerSubmissions.map(obj => obj.learner_id))];
console.log( Ids)

// Creates empty objects
const students = Array.from({ length: Ids.length }, () => ({})); 
console.log(students)

let studId = ""
let score1 = 0
let score2 = 0
let avgScore = 0

for(let i = 0 ;i<=Ids.length;i++){

console.log(Ids[i])


}

LearnerSubmissions.forEach(obj => {

  // studId = obj.learner_id;
  studId = 125;

  if(obj.learner_id === 125 && obj.assignment_id !== 3){
    avgScore += obj.submission.score
  
  }

  if(obj.learner_id === 125 && obj.assignment_id == 1){
   score1 =  (obj.submission.score / 50).toFixed(2); 
  }

  if(obj.learner_id === 125 && obj.assignment_id == 2){
    score2 = (obj.submission.score / 150).toFixed(2); 
  }



    
});

students[0].id = studId
students[0].avg = avgScore
students[0].score1 = score1
students[0].score2 = score2



console.log(students)
