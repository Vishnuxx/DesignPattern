
class HistoryManager {

  constructor(editor) {
    this.editor = editor;
    this.history = [];
    this.pointer = -1;
    this.isUndoEnabled = false;
    this.isRedoEnabled = false;
  }
  
  execute(command) {
    command.execute();
    if (this.pointer === (this.history.length - 1)) {
      this.history.push(command);
    } else {
      this._removeRedos();
      this.history.push(command);
    }
    this.isUndoEnabled = true;
    this.isRedoEnabled = false;
    this.pointer++;
  }

  undo() {
    if (this.isUndoEnabled) {
      this.history[this.pointer].undo();
      this.pointer--;
      this.isRedoEnabled = true;
      this.isUndoEnabled = (this.pointer > -1) ? true : false;
    }
  }
  
  redo() {
    if (this.isRedoEnabled) {
      this.pointer++;
      this.history[this.pointer].redo();
      this.isRedoEnabled = (this.pointer !== (this.history.length - 1)) ? true : false;
      this.isUndoEnabled = true;
    }
  }

  _removeRedos() {
    while (this.pointer !== (this.history.length - 1)) {
      this.history.pop();
    }
    this.isRedoEnabled = false;
  }
}


export default HistoryManager;
