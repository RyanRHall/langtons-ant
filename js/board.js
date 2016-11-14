
(function(){

if (typeof LangAnt === "undefined"){
  window.LangAnt = {};
}

LangAnt.Board = Board;

function Board() {
  this.grid = [];
  this.ants = [];
}

Board.prototype.setup = function($container) {
  for (var row = 0; row < 90; row++) {
    var $row = $('<div class="row">');
    this.grid.push([]);

    for (var col = 0; col < 180; col++) {
      var $div = $("<div>");
      $div.attr("class", "black");
      $div.data("pos", [row, col]);
      $row.append($div);
      this.grid[this.grid.length - 1].push($div);
    }

    $container.append($row);
  }
};

Board.prototype.getNode = function(pos){
  return this.grid[pos[0]][pos[1]];
};

Board.prototype.getClass = function(pos, ant){
  return this.getNode(pos).hasClass("white") ? "white" : "black";
};

Board.prototype.flip = function(pos) {
  var newClass = this.getClass(pos) == "white" ? "black" : "white";
  this.getNode(pos).attr("class", newClass);
};

Board.prototype.moveAnts = function(){
  for (var idx = 0; idx < this.ants.length; idx++) {
    this.moveAnt(this.ants[idx]);
  }
  this.filterAnts();
};

Board.prototype.moveAnt = function(ant) {
  if (ant.inactive){ return; }
  if (this.getClass(ant.pos, ant) == "white") {
    ant.turnRight();
  } else {
    ant.turnLeft();
  }
  this.flip(ant.pos);
  ant.move();
};

Board.prototype.filterAnts = function(){
  this.ants = this.ants.filter(function(ant){
    return !this.outOfBounds(ant.pos);
  }.bind(this));
};

Board.prototype.outOfBounds = function(pos) {
  if (pos[0] < 0 || pos[0] >= this.grid.length) {
    return true;
  } else if (pos[1] < 0 || pos[1] >= this.grid[0].length) {
    return true;
  }

  return false;
};

Board.prototype.addAnt = function(pos) {
  this.ants.push(new LangAnt.Ant(pos));
};

Board.prototype.drawAnts = function(){
  for (var idx = 0; idx < this.ants.length; idx++) {
    var pos = this.ants[idx].pos;
    var node = this.getNode(pos);
    node.addClass("ant");
  }
};

})();
