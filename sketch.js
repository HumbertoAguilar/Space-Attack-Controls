
function setup(){

    reset=createButton('⇦')
    reset.position(300,20);


}
function draw(){
    reset.mousePressed(regresar)

}

function regresar(){
    location.replace('https://humbertoaguilar.github.io/Space-Attack/')
}