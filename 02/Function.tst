load Function.hdl,
output-file Function.out,
compare-to Function.cmp,
output-list a%B1.16.1 b%B1.16.1 f%B1.1.1 out%B1.16.1;

set a %B0000000000000000,
set b %B0000000000000000,
set f 0,
eval,
output;

set f 1,
eval,
output;

set f 0,
set b %B1111111111111111,
eval,
output;

set f 1,
eval,
output;

set a %B1111111111111111,
set b %B0000000000000000,
set f 0,
eval,
output;

set f 1,
eval, 
output;

set b %B1111111111111111,
set f 0,
eval,
output;

set f 1,
eval,
output;

set a %B1001010010101100,
set b %B0101110101000010,
set f 0,
eval,
output;

set f 1,
eval,
output;