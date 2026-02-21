const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        title: "Quản Lý Mục Tiêu Mua Sắm Tết 2026",
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        },
        // Icon sẽ được tự động nhận diện từ cấu hình build
    });

    // Load file HTML của bạn
    win.loadFile('index.html');

    // Ẩn thanh Menu mặc định cho giống App thật
    Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});