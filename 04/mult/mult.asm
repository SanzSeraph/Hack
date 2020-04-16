// Multiplies R0 and R1 and stores the result in R2.
// (R0, R1, R2 refer to RAM[0], RAM[1], and RAM[2], respectively.)

// Initialize
@R0
D=M // Temporarily load first operand into D
@i
M=D // Set i to the first operand
@product
M=0

(LOOP) 
@i
D=M // Load i into D so we can compare and conditionally jump
@BREAK
D;JEQ // if i = 0, leave the loop
@R1
D=M // Load the second operand into so we can sum with running product
@product
M=M+D
@i
M=M-1
@LOOP
0;JMP

(BREAK)
@product
D=M
@R2
M=D // load answer into R2