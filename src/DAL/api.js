let students = [
  {
    id: 1,
    user: "Gilad",
    email: "giladr777@gmail.com",
    address: "Hasksla 13 nesher",
    course: "JavaScript",
    gender: "male",
    avg: 88,
  },
  {
    id: 2,
    user: "Yoni",
    email: "yoni1994@gmail.com",
    address: "Hasksla 13 nesher",
    course: "Node",
    gender: "male",
    avg: 95,
  },
  {
    id: 3,
    user: "Avi",
    email: "yoni1994@gmail.com",
    address: "Hasksla 13 nesher",
    course: "Node",
    gender: "male",
    avg: 95,
  },
];

function getStudents() {
  if (localStorage.getItem("students")) {
    students = JSON.parse(localStorage.getItem("students"));
  } else {
    localStorage.setItem("students", JSON.stringify(students));
  }
  return [...students];
}

function sortByName(students) {
  return students.sort((a, b) => {
    const name1 = a.user.toLocaleLowerCase();
    const name2 = b.user.toLocaleLowerCase();
    if (name1 > name2) {
      return 1;
    } else if (name2 > name1) {
      return -1;
    } else {
      return 0;
    }
  });
}
function getStudent(id) {
  return students.filter((student) => {
    console.log(student.id, id);
    return student.id == id;
  });
}

function addStudent(newStudent) {
  const avg = Math.floor(Math.random() * 101);
  newStudent.avg = avg;
  newStudent.id = students.length + 1;
  students.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));
}

export { getStudents, getStudent, addStudent };
