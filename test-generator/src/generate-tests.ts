import {promisify} from 'util';
import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf'

const bannedWords = ["async", "await", "function*", "@", "enum", "module", "namespace", "yield", "declare"];

const from = "../typescript-reference/tests";
const to = "../typescript.test/generated";
(async () => {
    await rimraf.sync(to);
    await promisify(fs.mkdir)(to, { recursive: true});
    const files = await promisify(fs.readdir)(`${from}/cases/compiler`);
    for (const file of files) {
        const fromFile = `${from}/cases/compiler/${file}`;
        const contents = await promisify(fs.readFile)(`${fromFile}`, {encoding: 'utf8'});
        if (bannedWords.some(ban => contents.includes(ban))) continue;

        const noExtension = path.basename(fromFile.slice(0, fromFile.length - 3)).replace(/\W/g,'_');
        const fromErrorFile = `${from}/baselines/reference/${noExtension}.errors.txt`;
        let errorContents = null;
        try {
            errorContents = await promisify(fs.readFile)(fromErrorFile, {encoding: 'utf8'});
        } catch (e) {
        }

        const toFile = `${to}/${file}.spt`;
        if (errorContents) {
            await promisify(fs.writeFile)(toFile, `module generated_${noExtension}

language typescript
start symbol Program
test generated [[[[
${contents}
]]]] >= 1 errors
        `, {encoding: 'utf8'})

        } else {
            await promisify(fs.writeFile)(toFile, `module generated_${noExtension}

language typescript
start symbol Program
test generated [[[[
${contents}
]]]] parse succeeds  
        `, {encoding: 'utf8'})

        }
        console.log("Wrote", fromFile, "to", toFile);
        // break;
    }
    const total = (await promisify(fs.readdir)(to)).length;
    console.log(`Wrote ${total} spt files.`)
})();
