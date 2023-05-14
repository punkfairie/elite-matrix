export class EliteMatrix {
    red;
    green;
    blue;
    constructor(matrixRed, matrixGreen, matrixBlue) {
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
        }
        else {
            rgb = color;
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
        newColor.forEach((n) => {
            Math.max(Math.min(n, 1), 0);
        });
        // Return the same data type as user put in.
        if (Array.isArray(color)) {
            return newColor;
        }
        else {
            let hex = '#';
            newColor.forEach((n) => {
                n *= 255;
                hex += n.toString(16);
            });
            return hex;
        }
    }
}
