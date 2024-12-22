# CS 405 Project 3: Scene Graph + Illumination  
---

## **Overview**
This project focuses on simulating a solar system using a scene graph implementation in WebGL. It covers hierarchical transformations, realistic lighting effects using shaders, and the integration of a new planet (Mars) with specified transformations and textures.

---

## **Features**

### **1. Hierarchical Transformations**
- **Functionality**: Implements a recursive `draw` method for `SceneNode` to enable parent-child hierarchical relationships.  
- **Implementation**: The transformation matrices (`mvp`, `modelView`, `normalMatrix`, `modelMatrix`) propagate transformations such as scaling, translation, and rotation from parent nodes (e.g., `sunNode`) to child nodes (e.g., `earthNode`, `moonNode`).

### **2. Lighting Effects**
- **Diffuse Lighting**:
  - **Functionality**: Simulates angle-dependent light intensity based on surface orientation.  
  - **Implementation**: Calculated using the dot product of the surface normal (`normal`) and the light direction (`lightdir`).
- **Specular Lighting (Phong Reflection Model)**:
  - **Functionality**: Adds realistic highlights based on material shininess and viewer angle.  
  - **Implementation**: Uses the `reflect` function and calculates sharpness through the power of `phongExp`.

### **3. Mars Integration**
- **Functionality**: Adds Mars as a new `SceneNode` to the solar system.  
- **Implementation**:
  - **Transformations**: Translated by -6 units on the X-axis, scaled uniformly to 0.35, and rotates at 1.5 times the Sun’s rotation.  
  - **Texture Mapping**: Applied using the `setTextureImg` function with a predefined texture URL.  
  - **Hierarchy**: Added as a child of `sunNode`, inheriting transformations while maintaining unique properties.

### **4. Dynamic Rotation**
- **Functionality**: Mars’s rotation dynamically updates relative to the Sun’s rotation.  
- **Implementation**: Achieved through the `renderLoop` function, synchronizing Mars’s movement with its parent node (`sunNode`).

---

## **Usage**

### **1. Open the Application**  
Open `project3.html` in a WebGL-supported browser (e.g., Chrome, Firefox).  

### **2. Observe the Solar System**  
- View hierarchical relationships: The Earth orbits the Sun, the Moon orbits the Earth, and Mars rotates dynamically around the Sun.

### **3. Analyze Lighting Effects**  
- Observe realistic diffuse and specular lighting on all celestial objects.

### **4. Examine Mars**  
- Mars’s transformation and rotation demonstrate its integration into the solar system.  

---

## **Unexpected Behavior of Mars**  
Mars exhibits a texture irregularity at a specific point during its rotation. This behavior is due to the time offset and rotational speed logic, where the modulus operation causes abrupt angle resets. This effect is specific to Mars and aligns with the provided implementation logic.

---

**Author**: Filiz İpek Oktay  
**Course**: CS 405 - Computer Graphics  
**Date**: December 2024  
