

const information = (prenom, nom, age, sexe) => {
  console.log(`prenom: ${prenom}`)
  console.log(`nom: ${nom}`)
  console.log(`age: ${age}`)
  console.log(`sexe: ${sexe}`)
  

  if (age >= 18) {
    console.log(`vous êtes majeur depuis ${age - 18} ans`)
  } else {
    console.log(`vous serez majeur dans ${18 - age} ans`)
  }
}

information('Sofiane', 'Akermoun', 39, 'M')
information('Alice', 'Liddell', 7, 'F')
information('Valerie', 'Dupont', 7, '?')