import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, PresentationIcon, CodeIcon } from "lucide-react";
import Aurora from "@/components/Aurora";
const Index = () => {
  const navigate = useNavigate();
  const handleStartPresentation = () => {
    navigate("/presentation");
    // Try to request fullscreen when navigating
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.log("Could not enter fullscreen mode automatically:", error);
    }
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-3xl px-6 py-12 text-center">
        <PresentationIcon className="h-20 w-20 mx-auto mb-8 text-primary" />

        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Огляд бібліотек Python
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Інтерактивна презентація, що висвітлює 5 потужних бібліотек Python,
          які революціонізують науку про дані, веб-розробку та машинне навчання.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handleStartPresentation}
            size="lg"
            className="gap-2 text-lg group"
          >
            Почати презентацію
            <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="glass-card p-6 mt-8 max-w-xl mx-auto rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <CodeIcon className="h-5 w-5 text-primary" />
            <h3 className="font-medium">Що ви дізнаєтесь</h3>
          </div>
          <ul className="space-y-2 text-left">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>NumPy: Потужні числові обчислення</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Pandas: Аналіз і маніпуляція даними</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Matplotlib: Візуалізація та побудова графіків</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Django: Веб-фреймворк для перфекціоністів</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>TensorFlow: Фреймворк для машинного навчання</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Index;

// import React, { useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRightIcon, PresentationIcon, CodeIcon } from "lucide-react";
// import * as THREE from "three";

// const Index = () => {
//   const navigate = useNavigate();
//   const canvasRef = useRef(null);
//   const modelRef = useRef(null);
//   const sceneRef = useRef(null);

//   const handleStartPresentation = () => {
//     navigate("/presentation");
//     // Try to request fullscreen when navigating
//     try {
//       if (document.documentElement.requestFullscreen) {
//         document.documentElement.requestFullscreen();
//       }
//     } catch (error) {
//       console.log("Could not enter fullscreen mode automatically:", error);
//     }
//   };

//   // Initialize and animate the 3D Python model
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Dynamically import GLTFLoader to avoid import issues
//     const loadModel = async () => {
//       // Dynamic import of GLTFLoader
//       const GLTFLoader = (await import("three/addons/loaders/GLTFLoader.js"))
//         .GLTFLoader;

//       // Setup Three.js scene
//       const scene = new THREE.Scene();
//       sceneRef.current = scene;

//       const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//       const renderer = new THREE.WebGLRenderer({
//         canvas: canvasRef.current,
//         alpha: true,
//         antialias: true,
//       });

//       renderer.setSize(240, 240);
//       camera.position.z = 5;

//       // Add lighting
//       const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//       scene.add(ambientLight);

//       const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//       directionalLight.position.set(5, 5, 5);
//       scene.add(directionalLight);

//       // Load the GLB model
//       const loader = new GLTFLoader();
//       // Adjust the path to match where your GLB file is located
//       loader.load(
//         "public/models/python-logo.glb",
//         (gltf) => {
//           // Scale model if needed
//           gltf.scene.scale.set(1, 1, 1);

//           // Center model if needed
//           const box = new THREE.Box3().setFromObject(gltf.scene);
//           const center = box.getCenter(new THREE.Vector3());
//           gltf.scene.position.x -= center.x;
//           gltf.scene.position.y -= center.y;
//           gltf.scene.position.z -= center.z;

//           // Add model to scene
//           scene.add(gltf.scene);
//           modelRef.current = gltf.scene;
//         },
//         // onProgress callback
//         (xhr) => {
//           console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//         },
//         // onError callback
//         (error) => {
//           console.error("An error happened loading the model:", error);
//         }
//       );

//       // Animation loop
//       const animate = () => {
//         requestAnimationFrame(animate);

//         if (modelRef.current) {
//           modelRef.current.rotation.y += 0.01;
//           modelRef.current.rotation.x += 0.005;
//         }

//         renderer.render(scene, camera);
//       };

//       animate();
//     };

//     loadModel();

//     // Cleanup
//     return () => {
//       if (modelRef.current && sceneRef.current) {
//         sceneRef.current.remove(modelRef.current);
//         // Dispose of geometries and materials
//         modelRef.current.traverse((object) => {
//           if (object instanceof THREE.Mesh) {
//             if (object.geometry) object.geometry.dispose();
//             if (object.material) {
//               if (Array.isArray(object.material)) {
//                 object.material.forEach((material) => material.dispose());
//               } else {
//                 object.material.dispose();
//               }
//             }
//           }
//         });
//       }

//       if (canvasRef.current) {
//         const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//         renderer.dispose();
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30">
//       <div className="max-w-3xl px-6 py-12 text-center animate-fade-in">
//         <div className="flex items-center justify-center gap-8 mb-8">
//           <PresentationIcon className="h-20 w-20 text-primary" />
//           <div className="h-60 w-60">
//             <canvas ref={canvasRef} className="w-full h-full" />
//           </div>
//         </div>

//         <h1 className="text-5xl font-bold tracking-tight mb-6">
//           Python Libraries Showcase
//         </h1>

//         <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
//           An interactive presentation highlighting 5 powerful Python libraries
//           that are revolutionizing data science, web development, and machine
//           learning.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//           <Button
//             onClick={handleStartPresentation}
//             size="lg"
//             className="gap-2 text-lg group"
//           >
//             Start Presentation
//             <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//           </Button>
//         </div>

//         <div className="glass-card p-6 mt-8 max-w-xl mx-auto">
//           <div className="flex items-center gap-3 mb-4">
//             <CodeIcon className="h-5 w-5 text-primary" />
//             <h3 className="font-medium">What You'll Explore</h3>
//           </div>
//           <ul className="space-y-2 text-left">
//             <li className="flex items-center gap-2">
//               <div className="h-2 w-2 rounded-full bg-primary"></div>
//               <span>NumPy: Powerful numerical computing</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <div className="h-2 w-2 rounded-full bg-primary"></div>
//               <span>Pandas: Data analysis and manipulation</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <div className="h-2 w-2 rounded-full bg-primary"></div>
//               <span>Matplotlib: Visualization and plotting</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <div className="h-2 w-2 rounded-full bg-primary"></div>
//               <span>Django: Web framework for perfectionists</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <div className="h-2 w-2 rounded-full bg-primary"></div>
//               <span>TensorFlow: Machine learning framework</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;
