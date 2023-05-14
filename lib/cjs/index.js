"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EliteMatrix_instances, _EliteMatrix_round;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliteMatrix = void 0;
class EliteMatrix {
    constructor(matrixRed, matrixGreen, matrixBlue) {
        _EliteMatrix_instances.add(this);
        this.red = matrixRed;
        this.green = matrixGreen;
        this.blue = matrixBlue;
    }
    /* ------------------------------------------------------------------------- filterColor ---- */
    filterColor(color) {
        let rgb;
        // Convert hex to RGB.
        if (typeof color === 'string') {
            const red = parseInt(color.slice(1, 3), 16) / 255;
            const green = parseInt(color.slice(3, 5), 16) / 255;
            const blue = parseInt(color.slice(5, 7), 16) / 255;
            rgb = [red, green, blue];
            // Round to 2 decimal places.
            rgb = rgb.map(n => __classPrivateFieldGet(this, _EliteMatrix_instances, "m", _EliteMatrix_round).call(this, n));
        }
        else {
            // Convert RGB decimal to RGB percent.
            rgb = color.map(n => __classPrivateFieldGet(this, _EliteMatrix_instances, "m", _EliteMatrix_round).call(this, n / 255));
        }
        // Apply matrix filter.
        let newColor = [];
        let i = 0;
        while (i < 3) {
            newColor.push(this.red[i] * rgb[0] +
                this.green[i] * rgb[1] +
                this.blue[i] * rgb[2]);
            i++;
        }
        // Make sure we don't have anything above 1 or below 0.
        newColor = newColor.map((n) => Math.max(Math.min(n, 1), 0));
        // Round again.
        newColor = newColor.map((n) => __classPrivateFieldGet(this, _EliteMatrix_instances, "m", _EliteMatrix_round).call(this, n));
        // Return the same data type as user put in.
        if (Array.isArray(color)) {
            return newColor.map(n => Math.round(n * 255));
        }
        else {
            let hex = '#';
            newColor.forEach((n) => {
                n *= 255;
                n = Math.round(n);
                hex += n.toString(16);
            });
            return hex;
        }
    }
}
exports.EliteMatrix = EliteMatrix;
_EliteMatrix_instances = new WeakSet(), _EliteMatrix_round = function _EliteMatrix_round(n) {
    return Math.round((n + Number.EPSILON) * 100) / 100;
};
