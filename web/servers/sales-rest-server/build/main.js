"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const channels_1 = require("./channels");
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8005;
server.use(middlewares);
server.get('/lowfreq', function (req, res) {
    channels_1.lowfreqChannel.addClient(req, res);
});
server.get('/highfreq', function (req, res) {
    channels_1.highfreqChannel.addClient(req, res);
});
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(PORT, () => {
    console.log('JSON Server listening on http://localhost:%s/', PORT);
});
//# sourceMappingURL=main.js.map