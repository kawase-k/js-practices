const argv = require('minimist')(process.argv.slice(2))

const year = argv.y || new Date().getFullYear()
const month = argv.m || new Date().getMonth() + 1

const date = new Date(year, month, 1)
const firstDate = new Date(date.getFullYear(), date.getMonth() - 1, 1)
const lastDate = new Date(date.getFullYear(), date.getMonth(), 0)

const padding = 2
process.stdout.write('   '.repeat(padding))
console.log(`${month}月 ${year}`)
console.log('日 月 火 水 木 金 土')

let firstWeek = firstDate.getDay()
process.stdout.write('   '.repeat(firstWeek))

for (let n = firstDate.getDate(); n <= lastDate.getDate(); n++) {
  process.stdout.write(String(n).padStart(2, ' ') + ' ')
  firstWeek += 1
  if (firstWeek % 7 === 0) process.stdout.write('\n')
}

console.log('\n')
