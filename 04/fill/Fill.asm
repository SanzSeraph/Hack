// Runs an infinite loop that listens to the keyboard input.
// When a key is pressed (any key), the program blackens the screen,
// i.e. writes "black" in every pixel;
// the screen should remain fully black as long as the key is pressed. 
// When no key is pressed, the program clears the screen, i.e. writes
// "white" in every pixel;
// the screen should remain fully clear as long as no key is pressed.

(LOOP)
// @KBD
// D=M // Load the keyboard input into D
@BLACK
// D;JGT
0;JMP
@WHITE
D;JEQ
@LOOP
0;JMP

(BLACK)
@color
M=0;
M=!M;
@FILL
0;JMP

(WHITE)
@color
M=0;
@FILL
0;JMP

(FILL)
@SCREEN
D=A
@current
M=D
  (FILL_LOOP)
  @current
  D=M
  @32767
  D=A-D
  @LOOP
  D;JEQ // Once the offset has reached the end of the screen, break out of the loop
  @color
  D=M // store the "color" in D
  @current
  A=M // Set the address to the current address
  M=D // Set the current chunk pointed to by A to the color stored in D
  @current
  M=M+1 // Increment the current screen address
  @FILL_LOOP
  0;JMP
  
 