"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchClass = exports.putImage = void 0;
const client_1 = require("@prisma/client");
// TODO: now the database increments the id.
// We want to allocate it ahead of time in order to provide better use experience.
function putImage(image) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        const result = yield prisma.images.create({
            data: image,
        });
        return result.id;
    });
}
exports.putImage = putImage;
function fetchClass(classification, excludeIds, limit) {
    return __awaiter(this, void 0, void 0, function* () {
        const prisma = new client_1.PrismaClient();
        const result = yield prisma.images.findMany({
            where: {
                classification: classification,
                NOT: {
                    id: {
                        in: excludeIds
                    }
                }
            },
            take: limit,
        });
        return result;
    });
}
exports.fetchClass = fetchClass;
//# sourceMappingURL=image-repository.js.map