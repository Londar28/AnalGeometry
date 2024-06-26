const { app, BrowserWindow } = require('electron')
const path = require('path')
const createWindow = () => {
    const win = new BrowserWindow({
      minWidth: 800,
      minHeight: 600,
      autoHideMenuBar: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    
    win.loadFile('index.html')
  }
app.whenReady().then(() => {
    createWindow()
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
