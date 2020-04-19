import { UI } from './ui.js';
import { Assembler } from './assembler.js';

let ui = new UI();

ui.onAssembleClick = () => {
  let assembler = new Assembler();
  ui.hack.value = assembler.assemble(ui.asm.value);
};