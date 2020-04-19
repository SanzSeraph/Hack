import { Parser } from './parser.js';

export class LabelParser extends Parser
{
  constructor() {
    this.symbolTable = {};
    this.lines = null;
    this.inLabel = false;
    this.labelComplete = false;
    this.inSymbol = false;
    this.foundForwardSlash = false;
    this.currentLineNumber = 0;
    this.currentCharacterPosition = 0;
    this.currentSymbol = '';
    this.labelLinesToRemove = [];
  }
  
  parse(lines) {
    this.lines = lines;
    this.addLabelsToSymbolTable();
    console.log('Symbol Table:');
    console.log(this.symbolTable);
    
    for (let i = 0; i < this.labelLinesToRemove.length; i++) {
      let lineNumber = this.labelLinesToRemove[i];
      
      this.lines = this.lines.splice(lineNumber, 1);
    }

    return { symbolTable: this.symbolTable, lines: this.lines };
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
      this.labelLinesToRemove.push(this.currentLineNumber);
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
    if (this.isWhitespace(char)) {
    }
    else if (this.    
  }

  processNonLabelCharacterWithLabelNotComplete(char) {
    if (char === '(') {
      this.inLabel = true;
    }
  }
}