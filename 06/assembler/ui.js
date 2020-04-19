export class UI
{
  constructor() {
    this.asm = document.getElementById('asm');
    this.hack = document.getElementById('hack');
    this.assemble = document.getElementsByTagName('button')[0];
    this.assemble.addEventListener('click', this.assembleClick.bind(this));
    this.onAssembleClick = null;
  }

  assembleClick() {
    this.onAssembleClick && this.onAssembleClick();
  }
}