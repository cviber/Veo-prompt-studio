# Veo Prompt Studio

A user-friendly web application for building complex, structured JSON prompts for advanced AI video generation models like Google's Veo. This studio streamlines the creative process, turning complex ideas into machine-readable JSON ready for generation.

Visually construct detailed scenes, define cinematography, develop consistent characters, sequence actions, and manage audio cues using a comprehensive and customizable database.

<!-- ![App Screenshot](path/to/screenshot.png) -->

## Key Features

-   **Visual Prompt Building:** A user-friendly, form-based interface to build prompts instead of writing raw JSON by hand.
-   **Structured Scene Construction:** Define every element of your video, including cinematography, environment, characters, objects, audio, and action sequences.
-   **Character Consistency:** A detailed character creation module with dozens of attributes (physical, clothing, personality) to help maintain character consistency across multiple prompts.
-   **Action Sequencing:** Build a timeline of events, describing actions, dialogue, emotions, and involved characters for each step.
-   **Extensible Database:** Comes pre-populated with hundreds of options, but every category is fully editable. Add, edit, or remove items to create your own custom prompt library.
-   **Session Management:** Save your entire prompt-building session to a local file and load it later to continue your work.
-   **JSON Verification:** An integrated tool to cross-reference your builder selections with the final JSON output, ensuring accuracy.
-   **Export & Go:** Easily copy the final JSON to your clipboard or export it as a `.json` file, ready to be used with an AI video generation service.

## Getting Started

You can get the Veo Prompt Studio running on your local machine in two ways: using Docker (recommended for a clean, stable deployment) or by running the source code directly for development.

### Prerequisites

-   **Node.js:** (For local development only) Version 18.x or later.
-   **Docker:** (For Docker deployment only) [Install Docker Desktop](https://www.docker.com/products/docker-desktop/).

---

### Option 1: Running with Docker (Recommended)

This method builds a production-ready, static version of the application and serves it using a lightweight Nginx web server inside a Docker container.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/cviber/veo-prompt-studio.git
    cd veo-prompt-studio
    ```

2.  **Build the Docker image:**
    This command tells Docker to build an image from the `Dockerfile` in the current directory. We'll tag it as `veo-prompt-studio`.
    ```bash
    docker build -t veo-prompt-studio .
    ```

3.  **Run the Docker container:**
    This command starts a container from the image we just built. It maps port `8080` on your local machine to port `80` inside the container (where Nginx is listening).
    ```bash
    docker run -p 8080:80 veo-prompt-studio
    ```

4.  **Access the application:**
    Open your web browser and navigate to: **[http://localhost:8080](http://localhost:8080)**

---

### Option 2: Running for Local Development (Without Docker)

This method is ideal if you want to modify the source code. It uses Vite to run a local development server with hot-reloading, which automatically updates the app in your browser when you save a file.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/cviber/veo-prompt-studio.git
    cd veo-prompt-studio
    ```

2.  **Install dependencies:**
    This command reads the `package.json` file and installs all the necessary libraries (like React, Vite, and Tailwind CSS).
    ```bash
    npm install
    ```

3.  **Start the development server:**
    This command launches the Vite development server.
    ```bash
    npm run dev
    ```

4.  **Access the application:**
    Vite will output a local URL in your terminal, which is usually **[http://localhost:5173](http://localhost:5173)**. Open this URL in your web browser.

## How to Use

1.  **Storyboard Builder vs. Database:** The application is split into two main tabs.
    -   **Storyboard Builder:** This is your main workspace for creating a prompt. All the modules (Cinematography, Scene, Characters, etc.) are here.
    -   **Database:** This tab allows you to view and edit the source data for all the dropdowns in the builder. You can add new options to any category to customize the studio to your needs.

2.  **Building a Prompt:**
    -   Start from the top and work your way down, selecting options for Cinematography, Scene, Characters, and more.
    -   Click **"Add Character"** or **"Add Object"** to create new entities in your scene. Use the cascading dropdowns to select their type.
    -   For human characters, click **"Show Details"** to access a rich set of attributes for building consistent personas.
    -   Use the **"Action & Dialogue Sequence"** module to script out the events of your video.

3.  **Managing Your Work:**
    -   **Load Scene Preset:** Start with a pre-configured template to get going quickly.
    -   **Save Session:** Exports the current state of the entire builder into a `veo_session.json` file. This is your work-in-progress file.
    -   **Load Session:** Import a previously saved `veo_session.json` to continue where you left off.

4.  **Final Output:**
    -   The right-hand panel shows the generated JSON in real-time.
    -   **Verify:** Runs a series of checks to ensure the JSON accurately reflects your selections.
    -   **Export Prompt:** Downloads the final `veo_prompt.json` file. This is the file you would use with an AI.
    -   **Copy JSON:** Copies the final JSON to your clipboard.

## Project Structure

The project is a standard Vite + React application with a clear directory structure.

```
/
├── nginx/
│   └── default.conf      # Nginx configuration for the Docker container
├── public/               # Static assets (not currently used)
├── src/
│   ├── components/       # Reusable React components (e.g., icons)
│   ├── data/             # The core database files for all prompt options
│   ├── hooks/            # Custom React hooks (e.g., useLocalStorage)
│   ├── App.tsx           # Main application component and logic
│   ├── index.css         # Tailwind CSS entry point
│   ├── index.tsx         # Main React entry point
│   └── types.ts          # TypeScript type definitions
├── .dockerignore         # Files to exclude from the Docker build
├── Dockerfile            # Instructions for building the Docker image
├── index.html            # The main HTML file
├── package.json          # Project dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Contributing

Contributions are welcome! If you have ideas for new features, find a bug, or want to improve the database, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
