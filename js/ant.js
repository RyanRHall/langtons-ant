(function(){

if (typeof LangAnt === "undefined"){
  window.LangAnt = {};
}

LangAnt.Ant = Ant;

function Ant(pos) {
  this.pos = pos;
  this.direction = 0.5; //in PI radians
}

Ant.prototype.turnRight = function() {
  this.direction = (this.direction - 0.5) % 2;
};

Ant.prototype.turnLeft = function() {
  this.direction = (this.direction + 0.5) % 2;
};

Ant.prototype.move = function() {
  this.pos[0] = Math.floor(this.pos[0] + Math.cos(Math.PI * this.direction));
  this.pos[1] = Math.floor(this.pos[1] + Math.sin(Math.PI * this.direction));
};

})();
