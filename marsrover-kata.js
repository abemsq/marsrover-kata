// Rover Object Goes Here
// ======================
let grid;
let rover = {
  direction: "N",
  location: {
    x: 0,
    y: 0
  },
  // path: [{x:0,y:0}]
}

// ======================

//Turn left function
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log(`turnLeft was called!. Rover is now facing ${rover.direction}`);
}


//Turn right function
function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log(`turnRight was called!. Rover is now facing ${rover.direction}`);
}


//  Function for moving rover
function moveForward(theRover) {
  //Variables
  let locationX = theRover.location.x;
  let locationY = theRover.location.y;
  let roverDir = theRover.direction;

// Restricted Moves  
  if ((roverDir === "N" && locationY <= 0) ||
    (roverDir === "E" && locationX >= 9) ||
    (roverDir === "S" && locationY >= 9) ||
    (roverDir === "W" && locationX <= 0)) {

    console.log(`Cannot move in that direction. The rover would move to a restricted area.
                ${roverInfoConsole}`);

    //allowed moves
    //North
  } else if (roverDir === "N" && locationY <= 9) {
    locationY = locationY - 1;
    //East
  } else if (roverDir === "E" && locationX < 9) {
    locationX = locationX + 1;
    //South
  } else if (roverDir === "S" && locationY < 9) {
    locationY = locationY + 1;
    //West
  } else if (roverDir === "W" && locationX < 9) {
    locationX = locationX - 1;
  }
  theRover.location.x = locationX;
  theRover.location.y = locationY;
  console.log(`moveForward was called. 
               Current rover position is x:${locationX} y:${locationY}
               Current rover direction is ${roverDir} `);
};

turnRight(rover);
moveForward(rover);
moveForward(rover);
turnRight(rover);
moveForward(rover);
moveForward(rover);