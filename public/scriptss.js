document.querySelector('header button').addEventListener("click", function() { 
    document.querySelector('.form').classList.toggle('hide') // toggle significa: se não existir essa classe, adicione, caso já tenha, remova.
})

    function fibonacciGenerator(n) {
        let arr = []
       
        let x = 0
        let y = 1
        let z = x + y
        for(let i = 0; i < n; i++) {
            arr.push(x)
            x = y
            y = z
            z = x + y
        }
        return arr
    }

    let result = fibonacciGenerator(5)


        