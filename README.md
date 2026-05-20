# Spatial Computing Lab

An interactive web-based Augmented Reality (AR) platform designed for visualizing electronics and embedded systems experiments. By scanning QR codes placed around the lab, students can explore physical circuits through interactive 3D models with detailed, interactive component hotspots.

## Features

- **Interactive 3D Circuit Models:** View precise 3D recreations of breadboard layouts and hardware modules.
- **Augmented Reality Integration:** Seamlessly place circuits into the real-world environment using ArUco marker tracking and WebXR.
- **Interactive Component Hotspots:** Click on individual components within the 3D viewer to see their roles, wiring, and technical details.
- **Experiment Breakdowns:** Access wiring steps, component lists, safety notes, logic snippets, and quizzes for each circuit.
- **Responsive & Modern UI:** A fully responsive web interface featuring a sleek, dark-themed design built with Tailwind CSS.

## Tech Stack

- **Framework:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **3D / AR Rendering:** Google's `<model-viewer>` component
- **Routing:** React Router DOM

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   git clone <repository-url>
   cd circuit-lab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Usage

- **In the Lab:** Scan the QR codes placed at various workstation tables. This will direct you to a specific circuit's details page.
- **Remote / Browser:** Navigate through the home page to browse all available lab experiments, view their 3D models, and study the implementation guides.

## Adding New Circuits

To add a new experiment to the lab platform:

1. **Add the 3D Model:** 
   Place the `.glb` 3D model file into the `public/models/` directory.

2. **Add the Thumbnail:**
   Place a representative thumbnail image into the `public/images/circuits/` directory.

3. **Update Data file:**
   Open `src/data/circuits.ts` and append a new `Circuit` object to the `circuits` array. You must provide a unique `slug`, name, category, and all relevant wiring/component data.

4. **Define Hotspots:**
   Open `src/routes/CircuitDetail.tsx` and locate the `HOTSPOTS_MAP` constant. Add a new key matching the circuit's `slug` containing an array of hotspot definitions.
   
   Example:
   ```typescript
   "your-circuit-slug": [
     { 
       id: "component-1", 
       position: "-0.1m 0m 0.2m", 
       label: "Component 1: Purpose",
       normal: "0m 1m 0m" // Optional: defaults to "0m 1m 0m" if omitted
     }
   ]
   ```

## Development Team

This project is developed to enhance the learning experience in the Spatial Computing Lab. 

- **Tanmay Kumar** - 3D & AR Integration, UI/UX Design
- **Anshul Pagar** - ArUco Marker Visualization and Tracking
- **Kushagra Srivastava** - Backend, Content, and Experiment Structuring