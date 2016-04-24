"use strict";
const UI = require('../../ui').UI;
const CLIOptions = require('../../cli').CLIOptions;
const Optional = require('aurelia-dependency-injection').Optional;
const Project = require('../../project').Project;

module.exports = class {
  static inject() { return [CLIOptions, UI, Optional.of(Project)]; };

  constructor(options, ui, project) {
    this.options = options;
    this.ui = ui;
    this.project = project;
  }

  execute(args) {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}