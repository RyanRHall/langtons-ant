(function(){

if (typeof LangAnt === "undefined"){
  window.LangAnt = {};
}

function Game($container) {
  this.$container = $container;
  this.board = new LangAnt.Board();
  this.infoWindow = new LangAnt.InfoWindow($container);
  this.steps = 0;
  this.stepDiv = $("#steps");
  this.$button = $("#start-btn");

  this.board.setup(this.$container);
  this.addListeners();
}

Game.prototype.addListeners = function () {
  this.$container.click(function(el){
    if (this.infoWindow.open){ return; }

    var pos = $(el.target).data("pos");
    if (typeof pos === "undefined"){ return; }

    this.board.addAnt(pos.slice());
    this.board.drawAnts();
  }.bind(this));

  this.$button.click(this.handleButtonClick.bind(this));
};

Game.prototype.run = function () {
  return setInterval(function(){
    this.board.moveAnts();
    this.board.drawAnts();
    this.steps++;
    this.stepDiv.html(this.steps);
  }.bind(this), 10);
};

Game.prototype.handleButtonClick = function () {
  if (this.interval){
    clearInterval(this.interval);
    this.interval = null;
    this.$button.attr("class", "play");
  } else {
    this.interval = this.run();
    this.$button.attr("class", "pause");
  }
};


// Document ready
$(function(){
  $container = $("#container");
  new Game($container);
});

})();
