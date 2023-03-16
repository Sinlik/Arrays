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