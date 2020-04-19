export class Parser {
  isLegalSymbolCharacter(char) {
    return /^[\w.$:]$/.test(char);
  }

  isWhitespace(char) {
    return /[\s]/.test(char);
  }
}