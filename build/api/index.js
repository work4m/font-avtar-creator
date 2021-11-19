"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/:id', function (req, res, next) {
    return res.send(req.params);
});
router.get('/:id/:name', function (req, res, next) {
    res.send(req.params);
});
exports.default = router;
