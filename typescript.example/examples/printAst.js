"use strict";
/// <reference path="../node_modules/@types/node/index.d.ts" />
exports.__esModule = true;
var fs_1 = require("fs");
var ts = require("typescript");
var fileNames = process.argv.slice(2);
fileNames.forEach(function (fileName) {
    // Parse a file
    var sourceFile = ts.createSourceFile(fileName, fs_1.readFileSync(fileName).toString(), ts.ScriptTarget.ES2016, /*setParentNodes */ true);
    sourceFile.statements.forEach(function (statement) {
        console.log(statement);
    });
});
