function addingEventListener() {
    let input = document.querySelector('input#button');

    function clicked(){
        console.log("Somebody clicked me!");
    }

    input.addEventListener('click', clicked)
}
 addingEventListener();

