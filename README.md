# Elite Matrix
A (very) small library for working with the Elite Dangerous color matrix in javascript. Types
included!

Adapted from [EDScout's color adjuster][ed-scout].

# Usage
`npm i elite-matrix`

The input matrix is stored in an EliteMatrix object, and must be passed in as three arrays, one for
each line in the matrix, each containing three numbers.

A GraphicsConfiguration.xml that looks like this:
```xml
<MatrixRed>		1, 0, 0 </MatrixRed>
<MatrixGreen>	0, 1, 0 </MatrixGreen>
<MatrixBlue>	0, 0, 1 </MatrixBlue>
```

Would need to be translated into this and passed to EliteMatrix:
```javascript
import { EliteMatrix } from 'elite-matrix';

const matrixRed = [1, 0, 0];
const matrixGreen = [0, 1, 0];
const matrixBlue = [0, 0, 1];
const matrix = new EliteMatrix(matrixRed, matrixGreen, matrixBlue);
```

From there you can use the `EliteMatrix` object to apply color filters. `filterColor` accepts either
a string hex color, or an RGB array. It will return in a matching format.

[ed-scout]: https://github.com/joncage/ed-scout/blob/master/EDScoutWebUI/HudColourAdjuster.py#L37