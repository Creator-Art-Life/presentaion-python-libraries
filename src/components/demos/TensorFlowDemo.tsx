import React, { useState, useEffect } from "react";
import { TensorFlowDemoState } from "@/utils/demoStates";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TensorFlowDemoProps {
  demoState: TensorFlowDemoState;
}

const TensorFlowDemo: React.FC<TensorFlowDemoProps> = ({ demoState }) => {
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [lossData, setLossData] = useState<any[]>([]);
  const [modelSummary, setModelSummary] = useState<string[]>([]);
  const [isTraining, setIsTraining] = useState(false);

  useEffect(() => {
    if (demoState.isPlaying && !isTraining) {
      // Start training simulation
      setIsTraining(true);
      setCurrentEpoch(0);
      setAccuracy(0);
      setLossData([]);

      // Generate model architecture based on complexity
      const layers = [];
      layers.push("Input Layer (784 neurons)");

      for (let i = 0; i < demoState.modelComplexity; i++) {
        const neurons = 128 / Math.pow(2, i);
        layers.push(`Dense Layer (${neurons} neurons, ReLU activation)`);

        if (i < demoState.modelComplexity - 1) {
          layers.push("Dropout Layer (20%)");
        }
      }

      layers.push("Output Layer (10 neurons, Softmax activation)");
      setModelSummary(layers);

      // Simulate training progress
      const trainingInterval = setInterval(() => {
        setCurrentEpoch((epoch) => {
          const newEpoch = epoch + 1;

          if (newEpoch > demoState.epochs) {
            clearInterval(trainingInterval);
            setIsTraining(false);
            return demoState.epochs;
          }

          // Update accuracy - starts low and gradually improves
          const baseAccuracy = 0.5; // 50% base accuracy
          const maxImprovement = 0.45; // Up to 95% final accuracy
          const improvementRate = Math.pow(newEpoch / demoState.epochs, 1.5); // Non-linear improvement

          const newAccuracy = baseAccuracy + maxImprovement * improvementRate;
          setAccuracy(newAccuracy);

          // Add new loss data point - starts high and decreases over time
          const newLoss = 2.5 * Math.exp(-3 * (newEpoch / demoState.epochs));
          setLossData((prevData) => [
            ...prevData,
            { epoch: newEpoch, loss: newLoss },
          ]);

          return newEpoch;
        });
      }, 500);

      return () => clearInterval(trainingInterval);
    }

    if (!demoState.isPlaying) {
      setIsTraining(false);
      setCurrentEpoch(0);
      setAccuracy(0);
      setLossData([]);
      setModelSummary([]);
    }
  }, [demoState.isPlaying, demoState.epochs, demoState.modelComplexity]);

  return (
    <div className="flex flex-col h-full">
      {demoState.isPlaying ? (
        <div className="grid grid-cols-1 gap-4 h-full">
          <div className="bg-muted/20 rounded-lg p-4">
            <h3 className="text-sm font-semibold mb-2">
              TensorFlow Model Training
            </h3>

            <div className="flex justify-between items-center mb-3">
              <div>
                <span className="text-xs text-muted-foreground">
                  Epoch: {currentEpoch}/{demoState.epochs}
                </span>
              </div>
              <div>
                <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                  Accuracy: {(accuracy * 100).toFixed(2)}%
                </span>
              </div>
            </div>

            {demoState.showLoss && lossData.length > 0 && (
              <div className="h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lossData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="loss"
                      stroke="#ff6b6b"
                      name="Loss"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          <div className="bg-muted/20 rounded-lg p-4 overflow-auto">
            <h3 className="text-sm font-semibold mb-2">Model Architecture</h3>
            <div className="font-mono text-xs">
              {modelSummary.map((layer, index) => (
                <div
                  key={index}
                  className="py-1 border-b border-muted-foreground/10 last:border-0"
                >
                  {layer}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground text-center">
            Налаштуйте модель і натисніть «Навчити модель»
          </p>
        </div>
      )}
    </div>
  );
};

export default TensorFlowDemo;
