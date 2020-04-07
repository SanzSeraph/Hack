load Register.hdl,
output-file Register.out,
compare-to Register.cmp,
output-list data%B1.16.1 z%B1.1.1 n%B1.1.1 out%B1.16.1;

set data %B0000000000000000,
set z 0,
set n 0,
eval,
output;

set n 1,
eval,
output;

set z 1,
set n 0,
eval,
output;

set n 1,
eval,
output;

set data %B1111111111111111,
set z 0,
set n 0,
eval,
output;

set n 1,
eval,
output;

set z 1,
set n 0,
eval,
output;

set n 1,
eval,
output;

set data %B0101010101010101,
set z 0,
set n 0,
eval,
output;

set n 1,
eval,
output;

set z 1,
set n 0,
eval,
output;

set n 1,
eval,
output;

set data %B1101101111011100,
set z 0,
set n 0,
eval,
output;

set n 1,
eval,
output;

set z 1,
set n 0,
eval,
output;

set n 1,
eval,
output;