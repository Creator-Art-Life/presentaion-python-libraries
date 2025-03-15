import React, { useState, useEffect } from "react";
import { PandasDemoState } from "@/utils/demoStates";
import { Bar } from "recharts";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

interface PandasDemoProps {
  demoState: PandasDemoState;
}

interface DataRow {
  id: number;
  column_a: number;
  column_b: string;
  column_c: boolean;
}

const PandasDemo: React.FC<PandasDemoProps> = ({ demoState }) => {
  const [rawData, setRawData] = useState<DataRow[]>([]);
  const [filteredData, setFilteredData] = useState<DataRow[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);

  // Generate random dataset
  useEffect(() => {
    if (demoState.isPlaying) {
      const size = demoState.datasetSize;
      const categories = ["A", "B", "C", "D", "E"];

      // Generate random data
      const data = Array.from({ length: size }, (_, i) => ({
        id: i + 1,
        column_a: Math.floor(Math.random() * 100),
        column_b: categories[Math.floor(Math.random() * categories.length)],
        column_c: Math.random() > 0.5,
      }));

      setRawData(data);

      // Apply filtering based on column selection
      const filtered =
        demoState.filterColumn === "column_b"
          ? data.filter(
              (item) => item.column_b === "A" || item.column_b === "B"
            )
          : data;

      setFilteredData(filtered);

      // Prepare chart data
      if (demoState.showCharts) {
        const chartData = categories.map((category) => {
          const count = filtered.filter(
            (item) => item.column_b === category
          ).length;
          return { name: category, count };
        });
        setChartData(chartData);
      }
    } else {
      setRawData([]);
      setFilteredData([]);
      setChartData([]);
    }
  }, [demoState.isPlaying, demoState.datasetSize, demoState.filterColumn]);

  return (
    <div className="flex flex-col h-full">
      {demoState.isPlaying ? (
        <div className="grid grid-cols-1 gap-4 h-full">
          <div className="bg-muted/20 rounded-lg p-4 overflow-auto">
            <h3 className="text-sm font-semibold mb-2">Pandas DataFrame</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="p-2">ID</th>
                  <th className="p-2">Column A</th>
                  <th className="p-2">Column B</th>
                  <th className="p-2">Column C</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => (
                  <tr key={row.id} className="border-b border-muted">
                    <td className="p-2">{row.id}</td>
                    <td className="p-2">{row.column_a}</td>
                    <td className="p-2">{row.column_b}</td>
                    <td className="p-2">{row.column_c ? "True" : "False"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {demoState.showCharts && (
            <div className="bg-muted/20 rounded-lg p-4">
              <h3 className="text-sm font-semibold mb-2">Data Visualization</h3>
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground text-center">
            Налаштуйте операції Pandas і натисніть «Обробити дані»
          </p>
        </div>
      )}
    </div>
  );
};

export default PandasDemo;
