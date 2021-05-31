function addToNameObj(newStudent) {
  for (const [index, student] of studentsByName.entries()) {
    if (newStudent.user <= student.user) {
      studentsByName.splice(index, 0, newStudent);
      break;
    }
  }
}

function addToAvgObj(newStudent) {
  console.log(studentsAvg);
  console.log(newStudent);
  for (const [index, student] of studentsAvg.entries()) {
    if (newStudent.avg >= student.avg) {
      studentsAvg.splice(index, 0, newStudent);
      break;
    }
  }
}
