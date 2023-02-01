const express = require("express")
const {createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const apiProxyTarget = 'http://localhost:3000';
if (apiProxyTarget) {
    app.use('/graphql', createProxyMiddleware({ target: apiProxyTarget }));
}
app.use(express.static('public'));

app.listen(4500, function(){
    console.log("UI Server listening on Port # 4500");
})