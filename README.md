## LAB | JS: Mars Rover Kata ##

Simple javascript exercise code that turns and moves an object (Mars Rover) in
x,y axis using different types of variables and manipulating nested data
structures, and invoking various functions.

## Iteration 1 | The rover object ##
Create an object to represent the rover. This object will have only one property for now: the direction.

![mars-rover-kata](/img/mars-rover.jpg)

The direction property can contain one of four values: "N", "S", "E", or "W". The rover’s default direction will be "N" (as North).

## Iteration 2 | Turning the rover ##
The rover has a direction attribute. We have already provided functions named turnLeft() and turnRight(). Each function receives a rover object as an argument. Your job is to turn the rover in the appropriate direction based on its current direction.

Examples:

Rover is facing North and turns left => Rover is now facing West

Rover is facing West and turns left => Rover is now facing South

Rover is facing North and turns right => Rover is now facing East.

![changing-direction](/img/changing-direction.jpg)

Suggested approach
Begin with a switch statement. Based on which function is being called, turn the rover in the correct direction based on its current direction.

Test these functions putting console logs in them, which will tell you which direction is rover facing and check the output in the console of the CodePen.

## Iteration 3 | Moving the rover ##
The rover’s position
To move the rover around, we have to keep track of the rover’s position.

Positions can be represented as a pair of coordinates, x and y. Add two properties to your rover called x and y. Their default values will both be set to 0.

Again, is this familiar to you?

![grid1](/img/grid1.jpg)

Moving forward
Once the rover has a position, it is time to move it.

![grid2](/img/grid2.jpg)

moveForward() is a function of the rover’s current direction, and the movement forward.

For instance, if the rover is facing west and moves forward, we would decrease the rover’s x by 1.

If the rover is facing north and moves forward, we would decrease the rover’s y by 1.

If the rover is facing south and moves forward, we would increase the y by 1.

Fill in this logic in the moveForward() function. After each movement, console.log the rover’s coordinates so you can see where it is positioned.

## Iteration 4 | Commands ##
Create a function that receives a list of commands. These commands will be the first letter of either (f)orward, (r)ight, or (l)eft.

To test it, use the string: ‘rffrfflfrff’.

Suggested approach
Use a loop to iterate over the string. Inside this loop, write a switch or if statement to call the correct function. For instance, if the letter is f, you are going to want to call the goForward() function.

Iteration 5 | Tracking
We want to know where our rover has been so far. Create a property on the rover object that contains the coordinates of the places where it has been. This property will be an array, and you can call it travelLog.

After each move, push the coordinates of the previous place where the rover was to the travelLog array. After the rover has finished its moves, print out all of the places the rover has traveled over.
