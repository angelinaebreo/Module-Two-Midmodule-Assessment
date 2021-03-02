// My SMART:
// is to able to store the value of my input user so I can calculate and add the result on my "sum value".
// to be able that by the end of fixing my code i get better understanding of how to use addEventListener().
// how to use different ways to solved my essues.

document.addEventListener("DOMContentLoaded", ()=>{
    const input = document.getElementById('number-Dice') 
    const btn = document.getElementById('roll-dice')
    const p2 = document.querySelector('#dice-para')
    const p = document.querySelector('#sum-para')
    const ul = document.querySelector('#saved')
    let arr = []
    let count = 0
    let arrSum = 0


    btn.addEventListener('click', ()=>{
        if(input.value !== ""){
            const dicelist = [{dice:'⚀', value: 1},
            {dice:'⚁', value: 2},
            {dice:'⚂', value: 3},
            {dice:'⚃', value: 4},
            {dice:'⚄', value: 5},
            {dice:'⚅', value: 6}
            ]
            arr = []
            arrSum = 0
            
            for(i = 0; i < input.value; i++){
                let newArr = Math.floor(Math.random()* dicelist.length)
               arr += dicelist[newArr].dice
               p2.textContent = arr
                arrSum += dicelist[newArr].value
                p.textContent = `Sum = ${arrSum}`
            }
           
            count++
            if(count > 1){
                const li = document.createElement('li')
                li.textContent = `${p2.textContent}  ${p.textContent}`
                ul.appendChild(li)
                
                
            }
               
        }
        


    })
})

