const reversePodium = (tab) => {
  let low3 = tab
    .sort((b, a) => {
      return b - a
    })
    .slice(0, 3)
  console.log(`${low3[2]}`)
  console.log(`${low3[1]}`)
  console.log(`${low3[0]}`)
}

let notes = [1, 11, 3, 9, 2, 0, 15, 4]
reversePodium(notes)