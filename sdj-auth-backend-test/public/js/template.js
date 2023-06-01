const templateFormHandler = async function(event){
    event.preventDefault();
    const inputEl = document.querySelector("#input").value.trim();
    const textAreaEl = document.querySelector("#text-output").value.trim();
    const likeButtonEl = document.querySelector('button[name = "likebtn"]');
    const hateButtonEl = document.querySelector('button[name = "hatebtn"]');
    
    if(body){
        await fetch("", {
            method:POST ,
            body:JSON.stringify({
                inputEl, 
                textAreaEl,
                likeButtonEl,
                hateButtonEl
            }),
            headers:{"Content-type":"appliation/json"},

        })
        document.location.reload();
    }
}
document.querySelector("#template-submit").addEventListener("submit", templateFormHandler)

