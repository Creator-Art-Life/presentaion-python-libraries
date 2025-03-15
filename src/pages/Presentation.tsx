import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PresentationLayout from "@/components/PresentationLayout";
import SlideContent from "@/components/SlideContent";
import DemoPanel from "@/components/DemoPanel";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  defaultNumPyState,
  NumPyDemoState,
  getNumPyControls,
  updateNumPyState,
  defaultPandasState,
  PandasDemoState,
  getPandasControls,
  updatePandasState,
  defaultMatplotlibState,
  MatplotlibDemoState,
  getMatplotlibControls,
  updateMatplotlibState,
  defaultDjangoState,
  DjangoDemoState,
  getDjangoControls,
  updateDjangoState,
  defaultTensorFlowState,
  TensorFlowDemoState,
  getTensorFlowControls,
  updateTensorFlowState,
} from "@/utils/demoStates";
import { pythonLibrariesData } from "@/utils/pythonLibraries";

// Import all demo components
import NumPyDemo from "@/components/demos/NumPyDemo";
import PandasDemo from "@/components/demos/PandasDemo";
import MatplotlibDemo from "@/components/demos/MatplotlibDemo";
import DjangoDemo from "@/components/demos/DjangoDemo";
import TensorFlowDemo from "@/components/demos/TensorFlowDemo";

const Presentation = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Initialize all demo states
  const [numPyState, setNumPyState] =
    useState<NumPyDemoState>(defaultNumPyState);
  const [pandasState, setPandasState] =
    useState<PandasDemoState>(defaultPandasState);
  const [matplotlibState, setMatplotlibState] = useState<MatplotlibDemoState>(
    defaultMatplotlibState
  );
  const [djangoState, setDjangoState] =
    useState<DjangoDemoState>(defaultDjangoState);
  const [tensorFlowState, setTensorFlowState] = useState<TensorFlowDemoState>(
    defaultTensorFlowState
  );

  const totalSlides = pythonLibrariesData.length;

  // Event listener for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextSlide();
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  // Handle different types of state updates based on the current slide
  const handleControlsChange = useCallback(
    (controls: any[]) => {
      switch (currentSlide) {
        case 0: // NumPy
          setNumPyState((prevState) => updateNumPyState(prevState, controls));
          break;
        case 1: // Pandas
          setPandasState((prevState) => updatePandasState(prevState, controls));
          break;
        case 2: // Matplotlib
          setMatplotlibState((prevState) =>
            updateMatplotlibState(prevState, controls)
          );
          break;
        case 3: // Django
          setDjangoState((prevState) => updateDjangoState(prevState, controls));
          break;
        case 4: // TensorFlow
          setTensorFlowState((prevState) =>
            updateTensorFlowState(prevState, controls)
          );
          break;
        default:
          break;
      }
    },
    [currentSlide]
  );

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const currentLibrary = pythonLibrariesData[currentSlide];

  // Get the current controls based on the slide
  const getCurrentControls = useCallback(() => {
    switch (currentSlide) {
      case 0: // NumPy
        return getNumPyControls(numPyState);
      case 1: // Pandas
        return getPandasControls(pandasState);
      case 2: // Matplotlib
        return getMatplotlibControls(matplotlibState);
      case 3: // Django
        return getDjangoControls(djangoState);
      case 4: // TensorFlow
        return getTensorFlowControls(tensorFlowState);
      default:
        return [];
    }
  }, [
    currentSlide,
    numPyState,
    pandasState,
    matplotlibState,
    djangoState,
    tensorFlowState,
  ]);

  // Render the current demo component based on the slide
  const renderCurrentDemo = useCallback(() => {
    switch (currentSlide) {
      case 0: // NumPy
        return <NumPyDemo demoState={numPyState} />;
      case 1: // Pandas
        return <PandasDemo demoState={pandasState} />;
      case 2: // Matplotlib
        return <MatplotlibDemo demoState={matplotlibState} />;
      case 3: // Django
        return <DjangoDemo demoState={djangoState} />;
      case 4: // TensorFlow
        return <TensorFlowDemo demoState={tensorFlowState} />;
      default:
        return <div>No demo available</div>;
    }
  }, [
    currentSlide,
    numPyState,
    pandasState,
    matplotlibState,
    djangoState,
    tensorFlowState,
  ]);

  return (
    <div className="relative">
      <PresentationLayout
        slideContent={
          <div className="relative h-full">
            <SlideContent
              title={currentLibrary.title}
              subtitle={currentLibrary.subtitle}
              description={currentLibrary.description}
              points={currentLibrary.points}
              codeExample={currentLibrary.codeExample}
            />

            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-background">
              <div className="flex gap-2">
                <span className="text-sm text-muted-foreground px-2">
                  {currentSlide + 1} / {totalSlides}
                </span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPrevSlide}
                  disabled={currentSlide === 0}
                  className="flex items-center gap-1"
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  className="flex items-center gap-1"
                >
                  Next
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        }
        demoPanel={
          <DemoPanel
            key={`demo-${currentSlide}`}
            title={`${currentLibrary.title} Demo`}
            description={currentLibrary.demoDescription}
            demoComponent={renderCurrentDemo()}
            codeSnippets={currentLibrary.codeSnippets}
            initialControls={getCurrentControls()}
            onControlsChange={handleControlsChange}
          />
        }
      />
    </div>
  );
};

export default Presentation;
