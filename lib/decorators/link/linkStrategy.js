'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

var createLinkStrategy = function createLinkStrategy() {
  var findLinkEntities = function findLinkEntities(contentBlock, callback) {
    contentBlock.findEntityRanges(function (character) {
      try {
        var entityKey = character.getEntity();
        return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'LINK';
      } catch (e) {}
    }, callback);
  };
  return findLinkEntities;
};

exports.default = createLinkStrategy;