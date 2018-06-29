'use strict';

function Task(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function() {
  this.completed = true;
}

module.exports = Task;
