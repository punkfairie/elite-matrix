type matrix = [number, number, number];
type rgbColor = [number, number, number];

export class EliteMatrix {
    red: matrix;
    green: matrix;
    blue: matrix;

    constructor(matrixRed: matrix, matrixGreen: matrix, matrixBlue: matrix) {
        this.red = matrixRed;
        this.green = matrixGreen;
        this.blue = matrixBlue;
    }

    /* ------------------------------------------------------------------------- filterColor ---- */

    filterColor(color: rgbColor|string): rgbColor|string {
        let rgb: rgbColor;

        // Convert hex to RGB.
        if (typeof color === 'string') {
            const red: number = parseInt(color.slice(1, 3), 16) / 255;
            const green: number = parseInt(color.slice(3, 5), 16) / 255;
            const blue: number = parseInt(color.slice(5, 7), 16) / 255;

            rgb = [red, green, blue];

            // Round to 2 decimal places.
            rgb = (rgb.map((n) => this.#round(n)) as rgbColor);

        } else {
            rgb = color;
        }

        // Apply matrix filter.
        let newColor: number[] = [];
        let i: number = 0;
        while (i < 3) {
            newColor.push(
                this.red[i] * rgb[0] +
                this.green[i] * rgb[1] +
                this.blue[i] * rgb[2]
            );
            i++;
        }

        // Make sure we don't have anything above 1 or below 0.
        newColor = newColor.map((n) => Math.max(Math.min(n, 1), 0));

        // Round again.
        newColor = newColor.map((n) => this.#round(n))

        // Return the same data type as user put in.
        if (Array.isArray(color)) {
            return (newColor as rgbColor);

        } else {
            let hex: string = '#';
            newColor.forEach((n) => {
                n *= 255;
                n = Math.round(n);
                hex += n.toString(16);
            });

            return hex;
        }
    }

    /* ------------------------------------------------------------------------------ #round ---- */

    #round(n: number): number {
        return Math.round((n + Number.EPSILON) * 100) / 100;
    }
}