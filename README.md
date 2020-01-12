# React-momoblog
一個基於 React, nodejs 所寫的部落格
web:
momoblog/
api:
momobackend/

## 開發測試
```bash
cd momoblog/
npm start
```
```bash
cd momobackend/
npm start
```

for momobackend/
```
npm run test // run test case
npm run dev // 開發模式測試
```

## About webhookURL
為了避免CORS問題, <br />
需要在兩個資料夾內設定相對應的Hook, <br />
以通過瀏覽器安全性檢查功能(CORS), <br />
momoblog/util/config <br />
momobackend/util/config <br />
```
exports = module.exports = {
    url: 你的URL,
}
```

