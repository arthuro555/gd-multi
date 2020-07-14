const gdexporter = require("gdexporter");
const args = require("minimist")(process.argv.slice(2));
const os = require("os");
const fs = require("fs-extra");
const path = require("path");

let outputDir = args["o"]|| args["output"];
let inputProject = args["p"] || args["project"];

if(inputProject == undefined || outputDir == undefined) {
    console.error("Input or output dir is missing!");
    return;
}
let exportdir = os.tmpdir() + "/GD-MultiTemp";

// Cleanup directory
fs.removeSync(exportdir);
fs.mkdirSync(exportdir);

gdexporter.exporter(inputProject, exportdir).then(() => {
    return gdexporter.loadProject(inputProject);
})
.then(project => {
    fs.copyFileSync(path.join(__dirname, "templates", "index.js"), path.join(exportdir, "index.js"));
    fs.copyFileSync(path.join(__dirname, "templates", "canvasToAscii.js"), path.join(exportdir, "canvasToAscii.js"));
    fs.writeFileSync(path.join(exportdir, "package.json"),
        fs.readFileSync(path.join(__dirname, "templates", "package.json"))
            .toString()
            .replace("gamename", project.getName().toLowerCase().replace(" ", ""))
            .replace("gameversion", project.getVersion())
            .replace("gameauthor", project.getAuthor())
    );
    fs.copySync(exportdir, outputDir);
    console.log("Done!");
});
