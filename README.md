# gd-multi
Exports a GDevelop game to a console app.


The goal of this project is to make a program making a server software out of a gdevelop project.

## Installation:
`npm install gd-multi`

## Usage:
`gdmulti -o OutputDirectory -p path/to/game.json`

## Usage of the exported game:
The exported game can be executed by using:
```bash
yarn #or npm install
node .
```
After the game finishes loading, you willb get an REPL. This REPL has runtimeScene and runtimeGame exposed as global.

### API in the REPL:
The REPL has some APIs exposed. Right now the only one is `renderFrameToAscii`. 
It renders the last drawn frame of the game as ascii. It accepts as argument a filename that you can use to save the ascii to a text file. 
It always returns the full string.
