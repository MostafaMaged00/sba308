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
    }
  ];


let avg = 0
let id = "";
for (const stdnt of LearnerSubmissions){

    id = stdnt.learner_id
    avg +=stdnt.submission.score

    // console.log(stdnt.learner_id,stdnt.assignment_id,stdnt.submission.score,stdnt.submission.submitted_at)
}
avg = avg / 200
console.log(id)
console.log(parseFloat(avg.toFixed(2)))