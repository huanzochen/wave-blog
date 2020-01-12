# React-momoblog
一個基於React,nodejs 所寫的部落格
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
為了避免CORS問題
需要在兩個資料夾內設定相對應的Hook
以通過瀏覽器安全性檢查功能(CORS)
momoblog/util/config
momobackend/util/config

