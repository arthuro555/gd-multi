//global.PIXI = require('pixi-shim');
const fs = require("fs");
const path = require("path");
const repl = require('repl');
const JSDOM = require("jsdom").JSDOM;
const express = require("express");

// We need to host the resources on a webserver. So we host one:
const port = new express().use('/', express.static(__dirname)).listen(8000).address().port;

// Make a virtual dom as similar to the browser as possible
const jsdom = new JSDOM(undefined, {
    url: "http://localhost:" + port + "/",
    runScripts: "dangerously", 
    resources: "usable", 
    pretendToBeVisual: true,
});
global.window = jsdom.window;
global.document = window.document;
window.console = global.console;

// Polyfill localStorage
delete window.localStorage; // Delete default implementation
window.localStorage = new require('node-localstorage').LocalStorage(path.join(__dirname, "localStorage"));

require('jsdom').JSDOM.fromFile(path.join(__dirname, "index.html")).then((jsdom) => {
    return new Promise((resolver) => {
        const scripts = jsdom.window.document.head.getElementsByTagName("script");
        let scriptsLoaded = 0;
        let scriptsToLoad = 0;
        for(let script of scripts) {
            let s = document.createElement("script");
            s.src = script.src;
            s.onload = () => {
                scriptsLoaded++;
                document.body.removeChild(s);
            };
            scriptsToLoad++;
            document.body.appendChild(s);
        }
        waitUntilGDLoad = () => {
            if(scriptsLoaded == scriptsToLoad) { resolver() } 
            else{ setTimeout(waitUntilGDLoad, 200) }
        }
        waitUntilGDLoad();
    });
})
.catch((r) => console.error(`Error while loading the game files: ${r}`))
.then(() => {
    return new Promise((resolve) => {
        //Initialization
        var game = new window.gdjs.RuntimeGame(window.gdjs.projectData, {});

        //Create a renderer
        game.getRenderer().createStandardCanvas(document.body);

        //Bind keyboards/mouse/touch events
        game.getRenderer().bindStandardEvents(game.getInputManager(), window, document);

        //Load all assets and start the game
        game.loadAllAssets(function() {
            game.startGameLoop();
            resolve(game);
        }, function(percent) {
            window.console.log("GDevelop Loading Screen: Loading... " + percent + "% completed.");
        });
    });
})
.then(game => {
    global.game = game;
    repl.start('> ').context.global = global;
});
