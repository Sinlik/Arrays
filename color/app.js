const classes = ['red', 'green', 'purple', 'orchid']
let color = 0;
const heading = document.getElementById('heading')

heading.addEventListener("click", changeColor);
document.addEventListener("click", function()
{
    console.log(color)
    if (color < classes.length - 1)
    {
        color++
    }
    else
    {
        color = 0
    }
})

function changeColor()
{
    heading.style.color = classes[color]
    heading.style.transition = 'classes[color] 10s ease-in-out'
}