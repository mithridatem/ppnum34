const button = document.querySelector(".burgerButton");
        const ul = document.querySelector("nav ul");
            
        button.addEventListener('click', () => {

            if(ul.style.display == "flex"){

                ul.style.animation = "slideout 1s";

                setTimeout(()=>{
                    ul.style.display = "none" 
                }, 1000);
                
            }
            else {
                ul.style.animation = "slidein 1s"
                ul.style.display = "flex"
            }
        })
        // définition de la média query  
        const matchMedia = window.matchMedia("(max-width: 600px)")
                
        //fonction de l'event 
        function handleTabletChange(e) {
            if(e.matches){
                ul.style.display = "none"  
            }else
            {
                ul.style.display = "flex"
                ul.style.animation = ""
            }
        }
        //creation du listener de changement
        matchMedia.addListener(handleTabletChange)

        //verification au demarage
        handleTabletChange(matchMedia)
