document.addEventListener("DOMContentLoaded", ()=>{
    const input = document.getElementById('number-Dice') 
    const btn = document.getElementById('roll-dice')
    const p2 = document.querySelector('#dice-rolloed')
    const p = document.querySelector('#sum-para')
    const ul = document.querySelector('#saved')
    let arr = []


    btn.addEventListener('click', ()=>{
        if(input.value !== ""){
            const dice = ['⚀',
                '⚁',
                '⚂',
                '⚃',
                '⚄',
                '⚅',]
            arr = []
            for(i = 0; i < input.value; i++){
                let newArr = dice[Math.floor(Math.random()* dice.length)]
                arr += newArr
                if(arr.length = 1){
                    p2.textContent = arr
                }else{
                    p2.textContent = arr[newArr]
                }
                

                if(p2.textContent === '⚀'){
                    p.textContent = `Sum = ${1}`
                    p.textContent.length.value
                } else if(p2.textContent === '⚁'){
                    p.textContent = `Sum = ${2}`
                }else if(p2.textContent === '⚂'){
                    p.textContent = `Sum = ${3}`
                }else if(p2.textContent === '⚃'){
                    p.textContent = `Sum = ${4}`
                }else if(p2.textContent === '⚄'){
                    p.textContent = `Sum = ${5}`
                }else if(p2.textContent === '⚅'){
                    p.textContent = `Sum = ${6}`
                
                }
                console.log(arr)
                
            }
            const li = document.createElement('li')
                li.textContent = arr
                ul.appendChild(li)
                if(p.textContent === li.textContent){
                    return 
                }else{
                    li.textContent = `${arr} ${p.textContent}`
                }
               
        }
        


    })
})

