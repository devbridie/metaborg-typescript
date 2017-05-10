/// <reference path="../node_modules/@types/node/index.d.ts" />

import {readFileSync} from 'fs';
import * as ts from 'typescript';

const fileNames = process.argv.slice(2);
fileNames.forEach(fileName => {
    // Parse a file
    let sourceFile = ts.createSourceFile(fileName, readFileSync(fileName).toString(), ts.ScriptTarget.ES2016, /*setParentNodes */ true);

    sourceFile.statements.forEach(statement => {
      console.log(statement);
    })
});
