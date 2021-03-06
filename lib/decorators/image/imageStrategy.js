'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

var createImageStrategy = function createImageStrategy() {
  var findImageEntities = function findImageEntities(contentBlock, callback) {
    contentBlock.findEntityRanges(function (character) {
      try {
        var entityKey = character.getEntity();
        return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'IMG';
      } catch (e) {}
    }, callback);
  };
  return findImageEntities;
};

exports.default = createImageStrategy;