function average(note1, note2) {
  return (note1 + note2) / 2;
}

let students = [
  {
    name: "Douglas",
    note1: 8,
    note2: 9,
  },
  {
    name: "Maisa",
    note1: 10,
    note2: 9,
  },
  {
    name: "Marcos",
    note1: 10,
    note2: 10,
  },
  {
    name: "Sabrina",
    note1: 7,
    note2: 6,
  }
];

for (const student of students) {
  let avg = average(student.note1, student.note2);
  let avgText = `A média do(a) aluno(a) ${student.name} é: ${avg}`;
  if (avg >= 7) {
    alert(`
      ${avgText}
      Parabéns ${student.name}! Você foi aprovado(a) no concurso!
    `);
  } else {
    alert(`
      ${avgText}
      Não foi dessa vez ${student.name}! Tente novamente!
    `);
  }
}
