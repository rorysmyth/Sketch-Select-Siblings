function onRun(context){
  var doc = context.document;
  selection = context.selection;

  var selected, parent;

  if (selection.count() == 1){
    selection = selection[0];
    parent = selection.parentGroup()
    selectLayers(parent.layers())
  }
};

function selectLayers(layers){
  for (var i=0; i < layers.count(); i++){
   layer = layers[i];
   [layer select:true byExpandingSelection:true]
  }
};