;(async function(){
const package = document.currentScript.package;
const mainWindow = package.createWindow(atob(await package.resource("main.html")), { minimizable: true, resizable: true, titleBar: "Default", title: "Template", startingDimensions: [400, 400] });
})().then(console.log).catch(console.warn);