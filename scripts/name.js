const name = document.getElementsByTagName("strong")[0];
const description = document.getElementById("description")

let supposedtextone = "Christopher Pestano";
let supposedtexttwo = "Programmer. Designer. Dreamer.";


window.addEventListener("load", ()=> {
    let i = 0;

    let c = setInterval( () => {
        if (i !== 0){
            let a = name.innerHTML.split("_").join("")
            name.innerHTML = a;
        }

        name.innerHTML = name.innerHTML + supposedtextone[i] + "_"
        i += 1;

        if (i === supposedtextone.length){
            console.log("hurray");
            i = 0;
            clearInterval(c);
            let a = name.innerHTML.split("_").join("")
            name.innerHTML = a;
            desc();
        }
    },250)

    function desc(){
        let d = setInterval( () => {
            if (i !== 0){
                let a = description.innerHTML.split("_").join("")
                description.innerHTML = a;
            }

            description.innerHTML = description.innerHTML + supposedtexttwo[i] + "_"
            i += 1;

            if (i === supposedtexttwo.length){
                console.log("hurray");
                clearInterval(d);
                let a = name.innerHTML.split("_").join("")
                name.innerHTML = a;
            }
        },250)
    }
})
