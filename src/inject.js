
elements = document.getElementsByName('duration')
elements.forEach(element => {
    element.addEventListener("click", function(event) {
        console.log(event)
    })
})