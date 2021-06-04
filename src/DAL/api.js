let students = [];
function sortByName(a, b) {
  const name1 = a.user.toLocaleLowerCase();
  const name2 = b.user.toLocaleLowerCase();
  if (name1 > name2) {
    return 1;
  } else if (name2 > name1) {
    return -1;
  } else {
    return 0;
  }
}

let studentsSortByName = [...students].sort(sortByName);

function getStudents() {
  if (localStorage.getItem("students")) {
    students = JSON.parse(localStorage.getItem("students"));
    studentsSortByName = [...JSON.parse(localStorage.getItem("students"))].sort(
      sortByName
    );
  } else {
    localStorage.setItem("students", JSON.stringify(students));
  }
  return [...students];
}

function getStudent(id) {
  return students.filter((student) => {
    return student.id === id;
  });
}

function getSortOrUnSortArr(sortBy) {
  if (sortBy === "Name") {
    return studentsSortByName;
  } else {
    return students;
  }
}

function addStudent(newStudent) {
  newStudent.id = students.length + 1;
  students.push(newStudent);
  addStudetToSortedArr(newStudent);
  localStorage.setItem("students", JSON.stringify(students));
}

function addStudetToSortedArr(student) {
  for (const [index, { user }] of studentsSortByName.entries()) {
    console.log(student.user.toLocaleLowerCase() <= user.toLocaleLowerCase());
    if (student.user.toLocaleLowerCase() <= user.toLocaleLowerCase()) {
      studentsSortByName.splice(index, 0, student);
      return;
    }
  }
  studentsSortByName.splice(studentsSortByName.length, 0, student);
}

export { getStudents, getStudent, addStudent, getSortOrUnSortArr };
