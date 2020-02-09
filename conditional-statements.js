let s = Math.floor(Math.random() + (10 - 1 ) )
let yannick = prompt('guess a number')

if (s == yannick) {
    alert('number was correct')
} else {
    alert('the number was incorrect the correct number was' + s)
}