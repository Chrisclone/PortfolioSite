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
    },500)
})
