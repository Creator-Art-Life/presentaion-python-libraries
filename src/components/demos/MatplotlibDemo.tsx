import React, { useState, useEffect } from "react";
import { MatplotlibDemoState } from "@/utils/demoStates";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface MatplotlibDemoProps {
  demoState: MatplotlibDemoState;
}

const MatplotlibDemo: React.FC<MatplotlibDemoProps> = ({ demoState }) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [code, setCode] = useState<string>("");

  useEffect(() => {
    if (demoState.isPlaying) {
      // Generate data based on the number of data points
      const data = Array.from({ length: demoState.dataPoints }, (_, i) => {
        return {
          x: i,
          sin: Math.sin(i * 0.5) * 5,
          cos: Math.cos(i * 0.5) * 5,
        };
      });
      setChartData(data);

      // Generate equivalent Python code
      const pythonCode = `import matplotlib.pyplot as plt
import numpy as np

# Generate data
x = np.linspace(0, ${demoState.dataPoints - 1}, ${demoState.dataPoints})
sin_y = np.sin(x * 0.5) * 5
cos_y = np.cos(x * 0.5) * 5

# Create figure and axis
fig, ax = plt.subplots(figsize=(10, 6))

# Plot data
${
  demoState.chartType === "line"
    ? `ax.plot(x, sin_y, 'b-', label='sin(x)')
ax.plot(x, cos_y, 'r-', label='cos(x)')`
    : `ax.bar(x - 0.2, sin_y, width=0.4, color='blue', label='sin(x)')
ax.bar(x + 0.2, cos_y, width=0.4, color='red', label='cos(x)')`
}

# Customize chart
ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_title('Trigonometric Functions')
${demoState.showGrid ? "ax.grid(True)" : "# Grid disabled"}
${demoState.showLegend ? "ax.legend()" : "# Legend disabled"}

plt.tight_layout()
plt.show()`;

      setCode(pythonCode);
    } else {
      setChartData([]);
      setCode("");
    }
  }, [
    demoState.isPlaying,
    demoState.chartType,
    demoState.dataPoints,
    demoState.showGrid,
    demoState.showLegend,
  ]);

  return (
    <div className="flex flex-col h-full">
      {demoState.isPlaying ? (
        <div className="grid grid-cols-1 gap-4 h-full">
          <div className="bg-muted/20 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2">
              Matplotlib Visualization
            </h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                {demoState.chartType === "line" ? (
                  <LineChart data={chartData}>
                    {demoState.showGrid && (
                      <CartesianGrid strokeDasharray="3 3" />
                    )}
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                    {demoState.showLegend && <Legend />}
                    <Line
                      type="monotone"
                      dataKey="sin"
                      stroke="#8884d8"
                      name="sin(x)"
                    />
                    <Line
                      type="monotone"
                      dataKey="cos"
                      stroke="#82ca9d"
                      name="cos(x)"
                    />
                  </LineChart>
                ) : (
                  <BarChart data={chartData}>
                    {demoState.showGrid && (
                      <CartesianGrid strokeDasharray="3 3" />
                    )}
                    <XAxis dataKey="x" />
                    <YAxis />
                    <Tooltip />
                    {demoState.showLegend && <Legend />}
                    <Bar dataKey="sin" fill="#8884d8" name="sin(x)" />
                    <Bar dataKey="cos" fill="#82ca9d" name="cos(x)" />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-muted/20 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2">
              Equivalent Python Code
            </h3>
            <pre className="text-xs overflow-auto p-2 bg-background/60 rounded">
              {code}
            </pre>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground text-center">
            Налаштуйте властивості діаграми та натисніть «Відобразити діаграму»
          </p>
        </div>
      )}
    </div>
  );
};

export default MatplotlibDemo;
