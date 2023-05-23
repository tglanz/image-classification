"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/api/status", function (req, res) {
    res.status(200).send({ message: "ok" });
});
exports.default = router;
//# sourceMappingURL=status.js.map