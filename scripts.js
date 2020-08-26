// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    let button = document.getElementById("takeoff");
    let abortButton = document.getElementById("missionAbort");
    let landButton = document.getElementById("landing");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let rocket = document.getElementById("rocket");
    //rocket.style.position = absolute;
    rocket.style.bottom = '0px';
    rocket.style.top = "0px";
    let verticalLocation;
    let horizontalLocation = null;


    button.addEventListener('click',function(event){
      if(window.confirm("Confirm that the shuttle is ready for takeoff.")){
         document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
         document.getElementById("shuttleBackground").style.backgroundColor = "blue";
         document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
      } 
    });

    landButton.addEventListener('click',function(event){
        window.alert('The shuttle is landing. Landing gear engaged.');
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
        //document.getElementById("rocket").style.margin = "100px";
        //document.getElementById("rocket").style.width = "75";
    });
    abortButton.addEventListener("click",function(event){
        if(window.confirm("Confirm that you want to abort the mission")){
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";

        }
    });

    leftButton.addEventListener("click",function(){
        horizontalLocation = parseFloat(rocket.style.left);
        let leftMove = horizontalLocation - 10;
        rocket.style.left =  leftMove + "px";
        console.log('test')
    });
    rightButton.addEventListener("click",function(event){
        rocket.style.right = "1000px";
        document.getElementById("rocket").style.right = "100px"
    })
    upButton.addEventListener("click",function(){

    });
    downButton.addEventListener("click",function(){
        let move = parseInt(rocket.style.bottom) - 10 + 'px';
        rocket.style.bottom = move;

    });


}

window.onload = init;