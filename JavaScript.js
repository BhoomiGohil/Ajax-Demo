const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo(){    
    
    document.querySelector(".loadimg").style.display = "block";
    if(doggos.children.length > 0 ) {        
        doggos.removeChild(doggos.firstChild);
    }
    const promise = fetch(DOG_URL);    

    promise
    .then(function(response){                  
        return response.json();    
    })
    .then(function(processedResponse){
        document.querySelector(".loadimg").style.display = "none";
        var img = document.createElement("img");               
        img.src = processedResponse.message;           
        doggos.appendChild(img);
    });
}