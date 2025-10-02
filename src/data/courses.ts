export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  lessons: Lesson[];
  progress: number;
  completed: boolean;
  icon: string;
}

export const coursesData: Course[] = [
  {
    id: "autocad",
    title: "AutoCAD Fundamentals",
    description: "Master the essentials of AutoCAD for 2D and 3D design. Learn to create precise technical drawings and models used in architecture, engineering, and construction.",
    instructor: "Sarah Mitchell",
    duration: "8 hours",
    progress: 0,
    completed: false,
    icon: "📐",
    lessons: [
      {
        id: "autocad-1",
        title: "Introduction to AutoCAD Interface",
        duration: "45 min",
        completed: false,
      },
      {
        id: "autocad-2",
        title: "Basic Drawing Tools and Commands",
        duration: "60 min",
        completed: false,
      },
      {
        id: "autocad-3",
        title: "Layer Management and Organization",
        duration: "50 min",
        completed: false,
      },
      {
        id: "autocad-4",
        title: "Working with Blocks and Attributes",
        duration: "55 min",
        completed: false,
      },
      {
        id: "autocad-5",
        title: "Dimensioning and Annotations",
        duration: "50 min",
        completed: false,
      },
      {
        id: "autocad-6",
        title: "3D Modeling Basics",
        duration: "70 min",
        completed: false,
      },
      {
        id: "autocad-7",
        title: "Plotting and Publishing Drawings",
        duration: "40 min",
        completed: false,
      },
      {
        id: "autocad-8",
        title: "Final Project: Complete Technical Drawing",
        duration: "90 min",
        completed: false,
      },
    ],
  },
  {
    id: "civil3d",
    title: "Civil 3D for Infrastructure Design",
    description: "Learn Civil 3D for civil engineering and infrastructure projects. Master tools for roads, grading, pipelines, and site design with dynamic modeling capabilities.",
    instructor: "Michael Chen",
    duration: "10 hours",
    progress: 0,
    completed: false,
    icon: "🏗️",
    lessons: [
      {
        id: "civil3d-1",
        title: "Civil 3D Overview and Workspace",
        duration: "40 min",
        completed: false,
      },
      {
        id: "civil3d-2",
        title: "Working with Surfaces and Terrain",
        duration: "65 min",
        completed: false,
      },
      {
        id: "civil3d-3",
        title: "Alignments and Profile Design",
        duration: "70 min",
        completed: false,
      },
      {
        id: "civil3d-4",
        title: "Corridor Modeling for Roads",
        duration: "75 min",
        completed: false,
      },
      {
        id: "civil3d-5",
        title: "Grading and Site Design",
        duration: "60 min",
        completed: false,
      },
      {
        id: "civil3d-6",
        title: "Pipe Networks and Utilities",
        duration: "65 min",
        completed: false,
      },
      {
        id: "civil3d-7",
        title: "Quantity Takeoffs and Analysis",
        duration: "50 min",
        completed: false,
      },
      {
        id: "civil3d-8",
        title: "Plan Production and Sheets",
        duration: "55 min",
        completed: false,
      },
      {
        id: "civil3d-9",
        title: "Final Project: Infrastructure Design",
        duration: "100 min",
        completed: false,
      },
    ],
  },
  {
    id: "archicad",
    title: "ArchiCAD for Architecture",
    description: "Discover ArchiCAD's powerful BIM tools for architectural design. Create detailed building models, documentation, and renderings with this comprehensive course.",
    instructor: "Emma Rodriguez",
    duration: "9 hours",
    progress: 0,
    completed: false,
    icon: "🏛️",
    lessons: [
      {
        id: "archicad-1",
        title: "Introduction to ArchiCAD BIM",
        duration: "45 min",
        completed: false,
      },
      {
        id: "archicad-2",
        title: "Building Elements: Walls, Doors, Windows",
        duration: "60 min",
        completed: false,
      },
      {
        id: "archicad-3",
        title: "Slabs, Roofs, and Structural Elements",
        duration: "65 min",
        completed: false,
      },
      {
        id: "archicad-4",
        title: "Stairs, Railings, and Complex Forms",
        duration: "70 min",
        completed: false,
      },
      {
        id: "archicad-5",
        title: "Sections, Elevations, and Views",
        duration: "55 min",
        completed: false,
      },
      {
        id: "archicad-6",
        title: "Materials, Textures, and Rendering",
        duration: "60 min",
        completed: false,
      },
      {
        id: "archicad-7",
        title: "Schedules and Bill of Quantities",
        duration: "50 min",
        completed: false,
      },
      {
        id: "archicad-8",
        title: "Layouts and Documentation",
        duration: "55 min",
        completed: false,
      },
      {
        id: "archicad-9",
        title: "Final Project: Complete Building Design",
        duration: "90 min",
        completed: false,
      },
    ],
  },
];
