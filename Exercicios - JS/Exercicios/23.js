function aluno(codAluno, nota1, nota2, nota3) {
    let nota = []
   nota.push(nota1)
   nota.push(nota2)
   nota.push(nota3)
   nota.sort((a,b)=> a < b ? 1 : -1)

    let mediaFinal = (nota[0] * 4 + nota [1] * 3 + nota [2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)

}


aluno(123, 2.8, 6, 3.5)
