const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

for (i = 0; i < tab.length; ++i) {
  console.log(`${tab[i]}, length : ${tab[i].length}, index : ${tab.indexOf(tab[i])}`)
}


for (element of tab) {
  console.log(`${element}, length : ${element.length}, index : ${tab.indexOf(element)} `)
}

tab.forEach((element) => console.log(`${element}, length : ${element.length}, index : ${tab.indexOf(element)} `))
