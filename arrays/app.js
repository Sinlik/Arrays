const random = []
const colors = ['red', 'green', 'blue', 'orange']

function randomRange (amount)
{
    random.length = 0
    for (let i = 0; i < amount; i ++)
    {
        random.push(i)
    }
    for (let num of random)
    {
        random[num] = Math.round(Math.random()*10)
    }
    return random
}

function myForEach (array, callback)
{
    for (let i = 0; i < array.length; i ++)
    {
        callback(array[i], i)
    }
}

myForEach(colors, function(color, i)
{
    console.log(`${color.toUpperCase()} at index of ${i + 1}`)
})
console.log("____")
colors.forEach(function(color, i)
{
    console.log(`${color.toUpperCase()}, at index of ${i + 1}`)
})

let numbers = [1, 2, 3]
numbers.map(function(value, index, array)
{
    return value * 10
})


const names = ["Sally", "Bob", "Richard", "Noam", "Chaim", "Nixon"]

const capsNames = names.map(function(names)
{
	console.log(names.toUpperCase())
})
const amountNames = names.map(function(names)
{
    return names.length
})
const firstLetterIs = names.map(function(names)
{
    let input = "B";
    for (let i = 0; i < names[0].length; i ++)
    {
        if (names[0] === input)
        {
            return true
        }
        else
        {
            return false
        }
    }
    // false false false true false true
})
names.push("Dude")

const number = [23, 64, 74, 32]

const negative = number.map(function(num)
{
    return num * - 1
})
const positive = number.map(function(num)
{
    return num * 1
})
const multiply = number.map(function(num)
{
    return num * 2
})
const divide = number.map(function(num)
{
    return num / 2
})
const todos = 
[
    {
        id: 2,
        text: 'eat pizza',
        amount: 3
    },
    {
        id: 3,
        text: 'exircise legs',
        amount: 2
    },
    {
        id: 1,
        text: 'Brush teeth',
        amount: 27
    }
]

const todosText = todos.map(function(list)
{
    return `${list.text} ${list.amount}`
})
const todosType = todos.map(function(p)
{
    return p.type
})
for (let todo = 0; todo < todos.length - 1; todo ++)
{
    const count = []
    if (todos[todo + 1].amount !== '')
    {
        if ((todos[todo].amount > todos[todo + 1].amount))
        {
            console.log(`${todos[todo].amount} is more than ${todos[todo + 1].amount}`)
            count.push(todos[todo])
        }
        if ((todos[todo].amount < todos[todo + 1].amount))
        {
            console.log(`${todos[todo].amount} is less than ${todos[todo + 1].amount}`)
        }
    }
    console.log(count)
}

const links = Array.from(document.querySelectorAll("a"))
const urls = links.map(function(a)
{
    return a.href
})

function myMap(array)
{
    for(let i = 0; i < array.length; i ++)
    {
        console.log(array[i] * 3)
    }
}
const words = 
[
    'fsgrgegregfefe',
    'rrgrhrg',
    'wregtrhtrhr',
    'eweerg',
    'ewegfrd',
    'cefergerhrhrt',
    'egegrhrthrthrhtrhergerhrt'
]

const longwords = words.filter(function(word)
{
})
for (let i = 0; i < words.length; i ++)
{
    if(words[i].length >= 10)
    {
        console.log(words[i].length)
        console.log(words[i])
    }
}

const filterFirst = words.filter(function(w)
{
    return w[0] === 'w' || w[0] === 'c'
})
const isVowel = function(char)
{
    return 'aeiouy'.indexOf(char) !== -1
}