import { ControlOption } from "@/components/DemoControls";

// Animation demo state (currently used for all demos)
export interface AnimationDemoState {
  duration: number;
  delay: number;
  easing: string;
  isPlaying: boolean;
  loop: boolean;
  intensity: number;
}

export const defaultAnimationState: AnimationDemoState = {
  duration: 1000,
  delay: 0,
  easing: "ease-in-out",
  isPlaying: false,
  loop: false,
  intensity: 50,
};

// NumPy demo state
export interface NumPyDemoState {
  arraySize: number;
  operation: string;
  showPerformance: boolean;
  isPlaying: boolean;
}

export const defaultNumPyState: NumPyDemoState = {
  arraySize: 5,
  operation: "addition",
  showPerformance: true,
  isPlaying: false,
};

// Pandas demo state
export interface PandasDemoState {
  datasetSize: number;
  filterColumn: string;
  showCharts: boolean;
  isPlaying: boolean;
}

export const defaultPandasState: PandasDemoState = {
  datasetSize: 5,
  filterColumn: "value",
  showCharts: true,
  isPlaying: false,
};

// Matplotlib demo state
export interface MatplotlibDemoState {
  chartType: string;
  dataPoints: number;
  showGrid: boolean;
  showLegend: boolean;
  isPlaying: boolean;
}

export const defaultMatplotlibState: MatplotlibDemoState = {
  chartType: "line",
  dataPoints: 10,
  showGrid: true,
  showLegend: true,
  isPlaying: false,
};

// Django demo state
export interface DjangoDemoState {
  viewType: string;
  numRecords: number;
  showAdmin: boolean;
  isPlaying: boolean;
}

export const defaultDjangoState: DjangoDemoState = {
  viewType: "list",
  numRecords: 5,
  showAdmin: false,
  isPlaying: false,
};

// TensorFlow demo state
export interface TensorFlowDemoState {
  modelComplexity: number;
  epochs: number;
  showLoss: boolean;
  isPlaying: boolean;
}

export const defaultTensorFlowState: TensorFlowDemoState = {
  modelComplexity: 2,
  epochs: 10,
  showLoss: true,
  isPlaying: false,
};

// Control generators for each demo
export const getAnimationControls = (
  state: AnimationDemoState
): ControlOption[] => [
  {
    id: "duration",
    label: "Duration (ms)",
    type: "slider",
    value: state.duration,
    min: 100,
    max: 5000,
    step: 100,
  },
  {
    id: "delay",
    label: "Delay (ms)",
    type: "slider",
    value: state.delay,
    min: 0,
    max: 2000,
    step: 100,
  },
  {
    id: "intensity",
    label: "Intensity",
    type: "slider",
    value: state.intensity,
    min: 0,
    max: 100,
    step: 1,
  },
  {
    id: "loop",
    label: "Loop Animation",
    type: "toggle",
    active: state.loop,
  },
  {
    id: "isPlaying",
    label: "Play Animation",
    type: "toggle",
    active: state.isPlaying,
  },
];

export const getNumPyControls = (state: NumPyDemoState): ControlOption[] => [
  {
    id: "arraySize",
    label: "Розмір масиву",
    type: "slider",
    value: state.arraySize,
    min: 2,
    max: 10,
    step: 1,
  },
  {
    id: "operation",
    label: "Операція з масивом",
    type: "toggle",
    active: state.operation === "multiplication",
  },
  {
    id: "showPerformance",
    label: "Показати метрики продуктивності",
    type: "toggle",
    active: state.showPerformance,
  },
  {
    id: "isPlaying",
    label: "Запустити обчислення",
    type: "toggle",
    active: state.isPlaying,
  },
];

export const getPandasControls = (state: PandasDemoState): ControlOption[] => [
  {
    id: "datasetSize",
    label: "Розмір набору даних",
    type: "slider",
    value: state.datasetSize,
    min: 3,
    max: 10,
    step: 1,
  },
  {
    id: "filterColumn",
    label: "Фільтрувати за стовпцем B",
    type: "toggle",
    active: state.filterColumn === "column_b",
  },
  {
    id: "showCharts",
    label: "Показати діаграми",
    type: "toggle",
    active: state.showCharts,
  },
  {
    id: "isPlaying",
    label: "Обробити дані",
    type: "toggle",
    active: state.isPlaying,
  },
];

export const getMatplotlibControls = (
  state: MatplotlibDemoState
): ControlOption[] => [
  {
    id: "chartType",
    label: "Стовпчикова діаграма",
    type: "toggle",
    active: state.chartType === "bar",
  },
  {
    id: "dataPoints",
    label: "Кількість точок даних",
    type: "slider",
    value: state.dataPoints,
    min: 5,
    max: 20,
    step: 1,
  },
  {
    id: "showGrid",
    label: "Показати сітку",
    type: "toggle",
    active: state.showGrid,
  },
  {
    id: "showLegend",
    label: "Показати легенду",
    type: "toggle",
    active: state.showLegend,
  },
  {
    id: "isPlaying",
    label: "Відобразити діаграму",
    type: "toggle",
    active: state.isPlaying,
  },
];

export const getDjangoControls = (state: DjangoDemoState): ControlOption[] => [
  {
    id: "viewType",
    label: "Детальний перегляд",
    type: "toggle",
    active: state.viewType === "detail",
  },
  {
    id: "numRecords",
    label: "Кількість записів",
    type: "slider",
    value: state.numRecords,
    min: 1,
    max: 10,
    step: 1,
  },
  {
    id: "showAdmin",
    label: "Показати панель адміністратора",
    type: "toggle",
    active: state.showAdmin,
  },
  {
    id: "isPlaying",
    label: "Відобразити сторінку",
    type: "toggle",
    active: state.isPlaying,
  },
];

export const getTensorFlowControls = (
  state: TensorFlowDemoState
): ControlOption[] => [
  {
    id: "modelComplexity",
    label: "Складність моделі",
    type: "slider",
    value: state.modelComplexity,
    min: 1,
    max: 5,
    step: 1,
  },
  {
    id: "epochs",
    label: "Епохи тренування",
    type: "slider",
    value: state.epochs,
    min: 5,
    max: 50,
    step: 5,
  },
  {
    id: "showLoss",
    label: "Показати графік втрат",
    type: "toggle",
    active: state.showLoss,
  },
  {
    id: "isPlaying",
    label: "Тренувати модель",
    type: "toggle",
    active: state.isPlaying,
  },
];

// State updater functions
export const updateAnimationState = (
  state: AnimationDemoState,
  controls: ControlOption[]
): AnimationDemoState => {
  const newState = { ...state };

  controls.forEach((control) => {
    if (control.id === "duration" && control.value !== undefined) {
      newState.duration = control.value;
    }
    if (control.id === "delay" && control.value !== undefined) {
      newState.delay = control.value;
    }
    if (control.id === "intensity" && control.value !== undefined) {
      newState.intensity = control.value;
    }
    if (control.id === "loop" && control.active !== undefined) {
      newState.loop = control.active;
    }
    if (control.id === "isPlaying" && control.active !== undefined) {
      newState.isPlaying = control.active;
    }
  });

  return newState;
};

export const updateNumPyState = (
  state: NumPyDemoState,
  controls: ControlOption[]
): NumPyDemoState => {
  const newState = { ...state };

  controls.forEach((control) => {
    if (control.id === "arraySize" && control.value !== undefined) {
      newState.arraySize = control.value;
    }
    if (control.id === "operation" && control.active !== undefined) {
      newState.operation = control.active ? "multiplication" : "addition";
    }
    if (control.id === "showPerformance" && control.active !== undefined) {
      newState.showPerformance = control.active;
    }
    if (control.id === "isPlaying" && control.active !== undefined) {
      newState.isPlaying = control.active;
    }
  });

  return newState;
};

export const updatePandasState = (
  state: PandasDemoState,
  controls: ControlOption[]
): PandasDemoState => {
  const newState = { ...state };

  controls.forEach((control) => {
    if (control.id === "datasetSize" && control.value !== undefined) {
      newState.datasetSize = control.value;
    }
    if (control.id === "filterColumn" && control.active !== undefined) {
      newState.filterColumn = control.active ? "column_b" : "value";
    }
    if (control.id === "showCharts" && control.active !== undefined) {
      newState.showCharts = control.active;
    }
    if (control.id === "isPlaying" && control.active !== undefined) {
      newState.isPlaying = control.active;
    }
  });

  return newState;
};

export const updateMatplotlibState = (
  state: MatplotlibDemoState,
  controls: ControlOption[]
): MatplotlibDemoState => {
  const newState = { ...state };

  controls.forEach((control) => {
    if (control.id === "chartType" && control.active !== undefined) {
      newState.chartType = control.active ? "bar" : "line";
    }
    if (control.id === "dataPoints" && control.value !== undefined) {
      newState.dataPoints = control.value;
    }
    if (control.id === "showGrid" && control.active !== undefined) {
      newState.showGrid = control.active;
    }
    if (control.id === "showLegend" && control.active !== undefined) {
      newState.showLegend = control.active;
    }
    if (control.id === "isPlaying" && control.active !== undefined) {
      newState.isPlaying = control.active;
    }
  });

  return newState;
};

export const updateDjangoState = (
  state: DjangoDemoState,
  controls: ControlOption[]
): DjangoDemoState => {
  const newState = { ...state };

  controls.forEach((control) => {
    if (control.id === "viewType" && control.active !== undefined) {
      newState.viewType = control.active ? "detail" : "list";
    }
    if (control.id === "numRecords" && control.value !== undefined) {
      newState.numRecords = control.value;
    }
    if (control.id === "showAdmin" && control.active !== undefined) {
      newState.showAdmin = control.active;
    }
    if (control.id === "isPlaying" && control.active !== undefined) {
      newState.isPlaying = control.active;
    }
  });

  return newState;
};

export const updateTensorFlowState = (
  state: TensorFlowDemoState,
  controls: ControlOption[]
): TensorFlowDemoState => {
  const newState = { ...state };

  controls.forEach((control) => {
    if (control.id === "modelComplexity" && control.value !== undefined) {
      newState.modelComplexity = control.value;
    }
    if (control.id === "epochs" && control.value !== undefined) {
      newState.epochs = control.value;
    }
    if (control.id === "showLoss" && control.active !== undefined) {
      newState.showLoss = control.active;
    }
    if (control.id === "isPlaying" && control.active !== undefined) {
      newState.isPlaying = control.active;
    }
  });

  return newState;
};

// Code snippets for animation demo
export const animationCodeSnippets = [
  {
    name: "Basic Usage",
    code: `import { animate } from 'motion-library';

// Create a simple animation
animate('#box', { 
  x: 100,
  opacity: 1,
  scale: 1.2
}, {
  duration: 1000,
  easing: 'ease-in-out',
  delay: 0
});`,
    language: "typescript",
  },
  {
    name: "Advanced Configuration",
    code: `import { createAnimation, easings } from 'motion-library';

// Create a configurable animation instance
const slideIn = createAnimation({
  from: { x: -100, opacity: 0 },
  to: { x: 0, opacity: 1 },
  config: {
    duration: ${defaultAnimationState.duration},
    easing: '${defaultAnimationState.easing}',
    delay: ${defaultAnimationState.delay},
    loop: ${defaultAnimationState.loop}
  }
});

// Apply the animation to elements
slideIn.apply('.card');
slideIn.apply('#hero-section', {
  // Override default config
  duration: 1500,
  easing: easings.spring
});`,
    language: "typescript",
  },
];
