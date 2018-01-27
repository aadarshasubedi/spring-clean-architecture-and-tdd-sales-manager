"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// There are no typings for SseChannel yet, this is the way to use it in untyped
// manner from TypeScript.
const SseChannel = require('sse-channel');
const fx_1 = require("./fx");
exports.lowfreqChannel = new SseChannel({
    historySize: 100,
    cors: { origins: ['*'] },
    jsonEncode: true
});
exports.highfreqChannel = new SseChannel({
    historySize: 100,
    cors: { origins: ['*'] },
    jsonEncode: true
});
// The low-frequency general will generate updates at a pace we could watch in
// the console log without much difficulty.
fx_1.startFxGenerator(data => exports.lowfreqChannel.send({ data }), 500);
// The high-frequency channel will generate updates quite quickly, so that we can
// experiment with screen update performance.
fx_1.startFxGenerator(data => exports.highfreqChannel.send({ data }), 10);
//# sourceMappingURL=channels.js.map