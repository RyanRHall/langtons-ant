(function(){

if (typeof LangAnt === "undefined"){
  window.LangAnt = {};
}

LangAnt.InfoWindow = InfoWindow;

function InfoWindow($container){
  this.$container = $container;
  this.$info = $("#info");
  this.addListeners();
  this.open = false;
}

InfoWindow.prototype.open = function(event) {
  event.stopPropagation();
  this.$info.fadeIn(100);
  this.open = true;
};

InfoWindow.prototype.close = function() {
  this.$info.fadeOut(100);
  this.open = false;
};

InfoWindow.prototype.addListeners = function() {
  $("body").click(this.close.bind(this));
  $("#info-icon").click(this.open.bind(this));
  this.$info.click(function(e){ e.stopPropagation(); });
};



})();
