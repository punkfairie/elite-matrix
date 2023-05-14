type matrix = [number, number, number];
type rgbColor = [number, number, number];
export declare class EliteMatrix {
    #private;
    red: matrix;
    green: matrix;
    blue: matrix;
    constructor(matrixRed: matrix, matrixGreen: matrix, matrixBlue: matrix);
    filterColor(color: rgbColor | string): rgbColor | string;
}
export {};
//# sourceMappingURL=index.d.ts.map