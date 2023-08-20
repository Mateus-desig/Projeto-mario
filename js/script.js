
const mario = document.querySelector(".mario") // Mario.
const pipe = document.querySelector(".pipe") // Pipe.

// Function jump.
const jump = () =>{

    // Add class jump to mario.
    mario.classList.add("jump")

    setTimeout(()=>{

        // Remove class jump to mario.
        mario.classList.remove("jump")
        
    },500)

}

// Check colisions.
const loop = setInterval(()=>{

    // Position to pipe.
    const pipePos = pipe.offsetLeft

    // Possition to mario.
    const marioPos = +window.getComputedStyle(mario).bottom.replaceAll("px", "")

    // Check position to mario and pipe.
    if(pipePos < 120 && pipePos > 0 && marioPos < 80){

        // Pause pipe animation.
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePos}px`

        // Pause mario animation.
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPos}px`

        // Game over.
        mario.src = '/img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        // End loop.
        clearInterval(loop)

    }

},10)

document.addEventListener("keydown", jump)