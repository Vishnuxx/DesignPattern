//Add view command
class AddViewCommand {
  constructor(editor) {
    this.editor = editor;
    this.view = document.createElement("button");
    this.view.innerHTML = "Vishnu Vs" + editor.count;
    editor.currentView = this.view;
  }

  execute() {
    this.editor.viewport.appendChild(this.view);
  }

  undo() {
    this.editor.viewport.removeChild(this.view);
  }

  redo() {
    this.editor.viewport.appendChild(this.view);
  }
}
export default AddViewCommand;
