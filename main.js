"use strict"

import HistoryManager from "/js/HistoryManager.js"
import AddViewCommand from "/js/Commands/AddViewCommand.js"
import ChangeColorCommand from "/js/Commands/ChangeColorCommand.js"

let editor = {
  viewport: get("editor"),
  undoBtn: get("undo"),
  redoBtn: get("redo"),
  html : "" ,
  add: get("add") , 
  apply : get("set"),
  input : get("input") ,
  count: -1,
  currentView: null,
}

let hist = new HistoryManager(editor);

editor.apply.addEventListener("click" ,()=>{
  editor.html = editor.input.value;
  hist.execute(new ChangeColorCommand(editor , "green"))
});

editor.add.addEventListener("click", () => {
  editor.count++;
  hist.execute(new AddViewCommand(editor , editor.currentView));
});

editor.undoBtn.addEventListener("click", () => {
  if (hist.isUndoEnabled) {
  //  editor.undoBtn.disabled = false;
    hist.undo();
  }else{
    //editor.undoBtn.disabled = true;
  }
})

editor.redoBtn.addEventListener("click", () => {
  if (hist.isRedoEnabled) {
  //  editor.undoBtn.disabled = false;
    hist.redo();
  }else{
   // editor.undoBtn.disabled = true;
  }
})

function get(elem) {
  return document.getElementById(elem);
}
