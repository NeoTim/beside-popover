'use strict';

var besidePopover = require('./beside-popover');

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof window === 'object') {
    window.besidePopover = factory();
  }
}(function() {

  return besidePopover;
}));
