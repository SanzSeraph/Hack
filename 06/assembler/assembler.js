import { LabelParser } from './labelParser.js';

export class Assembler
{
  constructor() {
    this.symbolTable = {};
    this.lines = null;
    this.foundForwardSlash = false;
    this.currentLineNumber = 0;
    this.currentCharacterPosition = 0;
    this.currentSymbol = '';
  }

  assemble(asm) {
    this.lines = asm.split('\n');    
    this.removeEmptyLines();

    let labelParser = new LabelParser();
    let result = labelParser.parse(this.lines);
    this.symbolTable = result.symbolTable;
    this.lines = result.lines;
    
    return this.lines;
  }

  removeEmptyLines() {
    let nonEmpty = [];

    for (let i = 0; i < this.lines.length; i++) {
      let line = this.lines[i];

      if (line === '') {
        continue;
      }

      nonEmpty.push(line);
    }

    this.lines = nonEmpty;
  }

  addLabelsToSymbolTable() {
    for (this.currentLineNumber = 0; this.currentLineNumber < this.lines.length; this.currentLineNumber++) {
      let line = this.lines[this.currentLineNumber];
      
      this.parseLineForLabels(line);
    }
  }

  parseLineForLabels(line) {
    let length = line.length;
    this.inLabel = false;
    this.labelComplete = false;

    for (this.currentCharacterPosition = 0; this.currentCharacterPosition < length; this.currentCharacterPosition++) {
      let char = line[this.currentCharacterPosition];

      this.processCharacter(char);            
    }

    if (this.inLabel) {
      this.inLabel = false;

      throw new Error('Unterminated label on line ' + (this.currentLineNumber + 1));
    }
  }

  processCharacter(char) {
    if (this.inLabel) {
      this.processLabelCharacter(char);
    }
    else {
      this.processNonLabelCharacter(char);
    }    
  }

  processLabelCharacter(char) {
    if (char === ')') {
      this.inLabel = false;
      this.symbolTable[this.currentSymbol] = this.currentLineNumber;
      this.currentSymbol = '';
      this.labelLinesToIgnore.push(this.currentLineNumber);
      this.labelComplete = true;
    }
    else if (!this.isLegalSymbolCharacter(char)) {
      throw new Error(`Illegal symbol character "${char}" at position ${this.currentCharacterPosition + 1} on line ${this.currentLineNumber + 1} .`);
    }
    else {
      this.currentSymbol += char;
    }    
  }

  processNonLabelCharacter(char) {
    if (this.labelComplete) {
      this.processNonLabelCharacterWithLabelComplete(char);
    }
    else {
      this.processNonLabelCharacterWithLabelNotComplete(char);
    }
    
  }

  processNonLabelCharacterWithLabelComplete(char) {
    
  }

  processNonLabelCharacterWithLabelNotComplete(char) {
    if (char === '(') {
      this.inLabel = true;
    }
  }

  convertToMachineCode() {
    
  }
}