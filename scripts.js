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
    rocket.style.left = '0px'
    rocket.style.position = 'absolute';
    rocket.style.bottom = '0px';
   let movement = null;


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
        movement = parseInt(rocket.style.left) - 10 + 'px';
        rocket.style.left = movement;
    });
    rightButton.addEventListener("click",function(event){
        movement = parseInt(rocket.style.left) + 10 + 'px';
        rocket.style.left = movement;
        
    })
    upButton.addEventListener("click",function(){
        movement = parseInt(rocket.style.bottom) + 10 + 'px';
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)+10000;
    });
    downButton.addEventListener("click",function(){
        movement = parseInt(rocket.style.bottom) - 10 + 'px';
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)-10000;

    });


}

window.onload = init