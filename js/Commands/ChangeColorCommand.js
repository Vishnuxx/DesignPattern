class ChangeColorCommand{
  constructor(editor , html){
    this.html = html;
    this.prevHtml = editor.currentView.innerHTML;
    this.elem = editor.currentView;
  }
  
  execute(){
    this.elem.innerHTML = this.html;
  }
  
  undo(){
    this.elem.innerHTML = this.prevHtml;
  }
  
  redo(){
    this.elem.innerHTML = this.html;
  }
}

export default ChangeColorCommand;
