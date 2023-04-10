import * as RmlParser from '@comake/rmlmapper-js';
// import { mappingSpecification } from './mapping.ttl';
// import { inputData } from './mapping-file';
const mappingSpecification = require("./mapping.ttl");
const inputData = require("./input.json");

import fs from "fs";
import path from 'path';
const fsPromise = fs.promises;
const myFile = path.join(__dirname, "../src/output.txt");

const parsingOptions = {
  toRDF: true,
  replace: true
}

const createFile = async (data: unknown) => {
  await fsPromise.appendFile(myFile, JSON.stringify(data) + '\n');
}
const solve = async () => {
  const mappedFile = await RmlParser.parseTurtle(mappingSpecification, inputData, parsingOptions);
  createFile(mappedFile);
}
solve();