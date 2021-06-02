1. 20pts - **Code Plan** - Include this in a `README.md` file in your folder with comments in your code

**Rules of the Game**
* The 'pyramid' of blocks needs to be moved from the original peg to a different peg, ending up in the same order
* Only one block can be moved at a time
* Only smaller blocks can be placed on top of larger blocks

**Code Plan by Function**
**isLegal function**
* The isLegal function should check to make sure a move is legal
1. If the endStack is empty, the move is automatically legal
2. If the endStack is not empty, the startStack has to be less than the endStack for the move to be legal 
3. Use the .slice() method to save the last item of each stack into a variable
4. Compare those variables to make sure the ending stack variable is greater than the starting stack variable 
5. If this is the case, the move is legal
6. If not, the move is not legal and the user should not be allowed to move the piece

**movePiece function**  
* The movePiece function should move the chosen piece to the chosen stack
1. It should first check to see if the move is legal. If so, movePiece. If not, no action occurs.
2. Move the piece from the starting array (startStack) to the ending array (endStack)
3. Use .pop() to take the last item from the startStack array, and .push() to add it to the end of the endStack array

**checkForWin function**
* The checkForWin function should check for a win
1. A win can be in either stack b or stack c
2. If the length of stack b or stack c is equal to 4, that means the user has won 
3. (the isLegal function makes sure the blocks are in the correct order, so we don't need to worry about that here)

**towersOfHanoi function**
* The towersOfHanoi function should execute all other functions correctly
1. It takes in two parameters, startStack and endStack
2. Using those parameters, the movePiece function executes if the move is legal
3. Once the piece is moved, the checkForWin function executes
4. If checkForWin is true, the user sees a message saying they have won the game. If false, the game continues.
