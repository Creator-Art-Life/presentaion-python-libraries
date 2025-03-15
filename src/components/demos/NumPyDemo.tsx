import React, { useState, useEffect } from "react";
import { NumPyDemoState } from "@/utils/demoStates";

interface NumPyDemoProps {
  demoState: NumPyDemoState;
}

const NumPyDemo: React.FC<NumPyDemoProps> = ({ demoState }) => {
  const [result, setResult] = useState<number[][]>([]);
  const [pythonArray, setPythonArray] = useState<number[][]>([]);
  const [numpyArray, setNumpyArray] = useState<number[][]>([]);
  const [pythonTime, setPythonTime] = useState<number>(0);
  const [numpyTime, setNumpyTime] = useState<number>(0);

  useEffect(() => {
    if (demoState.isPlaying) {
      // Generate random arrays based on size
      const size = demoState.arraySize;
      const arr1 = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => Math.floor(Math.random() * 10))
      );
      const arr2 = Array.from({ length: size }, () =>
        Array.from({ length: size }, () => Math.floor(Math.random() * 10))
      );

      // Simulate Python calculation time (slower)
      const pythonStartTime = performance.now();
      const pythonResult = arr1.map((row, i) =>
        row.map((val, j) => {
          if (demoState.operation === "addition") {
            return val + arr2[i][j];
          } else {
            return val * arr2[i][j];
          }
        })
      );

      // Add artificial delay to simulate Python being slower
      const pythonProcessingDelay = 500 + size * 50;
      setTimeout(() => {
        const pythonEndTime = performance.now();
        setPythonTime(pythonEndTime - pythonStartTime);
        setPythonArray(pythonResult);
      }, pythonProcessingDelay);

      // Simulate NumPy calculation time (faster)
      const numpyStartTime = performance.now();
      const numpyResult = arr1.map((row, i) =>
        row.map((val, j) => {
          if (demoState.operation === "addition") {
            return val + arr2[i][j];
          } else {
            return val * arr2[i][j];
          }
        })
      );
      const numpyEndTime = performance.now();
      setNumpyTime(numpyEndTime - numpyStartTime);
      setNumpyArray(numpyResult);

      // Set the result
      setResult(numpyResult);
    } else {
      // Reset calculations when not playing
      setResult([]);
      setPythonArray([]);
      setNumpyArray([]);
      setPythonTime(0);
      setNumpyTime(0);
    }
  }, [demoState.isPlaying, demoState.arraySize, demoState.operation]);

  const formatArray = (arr: number[][]) => {
    if (arr.length === 0) return "";
    const maxWidth = Math.max(...arr.flat().map((n) => n.toString().length));
    return arr
      .map(
        (row) =>
          `[${row.map((n) => n.toString().padStart(maxWidth, " ")).join(", ")}]`
      )
      .join("\n");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 h-full w-full">
      <div className="w-full max-w-md bg-muted/20 rounded-lg p-4 font-mono text-sm">
        {demoState.isPlaying ? (
          <>
            <div className="mb-4">
              <div className="font-semibold mb-1">
                Operation: {demoState.operation}
              </div>
              <div className="bg-background/60 p-2 rounded max-h-48 overflow-auto">
                <pre className="whitespace-pre-wrap">{formatArray(result)}</pre>
              </div>
            </div>

            {demoState.showPerformance && (
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-100 p-2 rounded">
                  <div className="font-semibold mb-1 text-primary">Python</div>
                  <div className="text-red-600">{pythonTime.toFixed(2)} ms</div>
                </div>
                <div className="bg-green-100 p-2 rounded">
                  <div className="font-semibold mb-1 text-primary">NumPy</div>
                  <div className="text-green-600">
                    {numpyTime.toFixed(2)} ms
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center p-4 text-center">
            <p>
              Налаштуйте операції NumPy за допомогою елементів керування та
              натисніть «Запустити обчислення"
            </p>
          </div>
        )}
      </div>
    </div>
  );
  function adaptiveRound(num: number): number {
    const absNum = Math.abs(num);
    let decimalPlaces = 0;

    if (absNum >= 1) {
      decimalPlaces = 2;
    } else if (absNum >= 0.01) {
      decimalPlaces = 4;
    } else {
      decimalPlaces = 6;
    }

    return parseFloat(num.toFixed(decimalPlaces));
  }
};

export default NumPyDemo;
