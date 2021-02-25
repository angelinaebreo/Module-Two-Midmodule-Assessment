document.addEventListener("DOMContentLoaded", ()=>{
    const input = document.getElementById('number-Dice')
    const inputNum = Number(input) 
    const btn = document.getElementById('roll-dice')
    const p2 = document.querySelector('#dice-rolloed')
    const p = document.querySelector('#sum-para')
    const ul = document.querySelector('#saved')
    let arr = []


    btn.addEventListener('click', ()=>{
        if(input.value !== ""){
            const dice = [{1: '&#9856', 
                2: '&#9857',
                3: '&#9858',
                4: '&#9859',
                5: '&#9860',
                6: '&#9861'}]
            arr = []
            for(i = 0; i < input.value; i++){
                let newArr = dice[Math.floor(Math.random()* dice.length)]
                arr += Number[newArr]
    
                p2.innerHTML = arr[newArr]
                
                if( p2.textContent !== 0){
                    p.textContent += inputNum + `Roll`
                }

                console.log(arr)
                
            }
            const li = document.createElement('li')
                li.textContent = arr.value
                ul.appendChild(li)
                 if(p2.textContent == 1){
                     li.textContent = []
                 }else if(p.textContent > 1){
                     li.textContent = li.textContent + p2.textContent
                 }
        }
        


    })
})

