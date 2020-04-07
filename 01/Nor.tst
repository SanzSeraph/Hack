load Nor.hdl,
output-file Nor.out,
compare-to Nor.cmp,
output-list a%B1.1.1 b%B1.1.1 out%B2.1.2;

set a 0,
set b 0,
eval,
output;

set a 0,
set b 1,
eval,
output;

set a 1,
set b 0,
eval,
output;

set a 1,
set b 1,
eval,
output;