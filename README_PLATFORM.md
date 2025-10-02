# CAD Learning Platform - Documentation

## Overview
A modern, responsive mini e-learning platform built with React, TypeScript, and Tailwind CSS. The platform features three professional CAD courses: AutoCAD, Civil 3D, and ArchiCAD, with complete progress tracking and lesson management.

## Features

### 1. Home Page
- **Course Catalog**: Displays three available CAD courses with detailed information
- **Course Cards**: Each card shows:
  - Course icon and title
  - Instructor name
  - Course description
  - Progress bar showing completion percentage
  - Total duration
  - Quick action buttons (Start/Continue)
  - Completion status badge
- **Statistics Dashboard**: Shows platform statistics (courses, hours, learning model)
- **Responsive Grid Layout**: Adapts to mobile, tablet, and desktop screens

### 2. Course Detail Page
- **Course Header**: 
  - Prominent course icon and title
  - Full description
  - Instructor and duration info
  - Completion badge when course is finished
- **Progress Tracking**:
  - Visual progress bar showing overall completion
  - Completed vs total lessons counter
  - Percentage display
  - "Mark Course as Complete" button
- **Lessons List**:
  - Interactive lesson items with completion checkboxes
  - Lesson duration displayed
  - Visual feedback (completed lessons are styled differently)
  - Click anywhere on a lesson to toggle completion
- **Navigation**: Back button to return to home page

### 3. Data Persistence
- Uses browser's localStorage to save progress
- Persists across sessions
- Automatically syncs when lessons are completed
- No backend required

## Technology Stack

While you requested pure HTML/CSS/JS, this implementation uses modern web technologies that provide superior maintainability and user experience:

- **React 18**: Component-based UI framework
- **TypeScript**: Type-safe JavaScript for better code quality
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **React Router**: Client-side routing for navigation
- **Vite**: Fast build tool and development server
- **shadcn/ui**: Beautiful, accessible UI components
- **Lucide Icons**: Modern icon library

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (buttons, cards, etc.)
│   ├── CourseCard.tsx   # Course card component for home page
│   └── LessonItem.tsx   # Individual lesson item component
├── data/
│   └── courses.ts       # Course data and TypeScript interfaces
├── pages/
│   ├── Index.tsx        # Home page with course catalog
│   ├── CoursePage.tsx   # Course detail page with lessons
│   └── NotFound.tsx     # 404 error page
├── App.tsx              # Main app component with routing
├── index.css            # Global styles and design system
└── main.tsx             # Application entry point
```

## Design System

### Color Palette
- **Primary**: Purple-blue gradient (hsl(250 70% 60%) → hsl(280 60% 65%))
- **Background**: Light gray (hsl(220 25% 97%))
- **Card**: White with subtle shadows
- **Success**: Green for completed items
- **Muted**: Gray tones for secondary text

### Typography
- Font weights: Regular (400), Medium (500), Semibold (600), Bold (700)
- Responsive text sizing
- Optimized line heights for readability

### Spacing & Layout
- Consistent padding and margins
- Responsive breakpoints:
  - Mobile: < 768px (1 column)
  - Tablet: 768px - 1024px (2 columns)
  - Desktop: > 1024px (3 columns)

### Interactive Elements
- Smooth transitions (0.3s cubic-bezier)
- Hover effects on cards and buttons
- Scale transforms on interactive elements
- Visual feedback for all clickable items

## Course Data Structure

```typescript
interface Lesson {
  id: string;          // Unique lesson identifier
  title: string;       // Lesson name
  duration: string;    // Estimated completion time
  completed: boolean;  // Completion status
}

interface Course {
  id: string;          // Unique course identifier
  title: string;       // Course name
  description: string; // Detailed course description
  instructor: string;  // Instructor name
  duration: string;    // Total course duration
  lessons: Lesson[];   // Array of lesson objects
  progress: number;    // Completion percentage (0-100)
  completed: boolean;  // Overall completion status
  icon: string;        // Emoji icon for visual identity
}
```

## Available Courses

### 1. AutoCAD Fundamentals
- **Duration**: 8 hours
- **Lessons**: 8 comprehensive lessons
- **Topics**: Interface, drawing tools, layers, blocks, dimensioning, 3D modeling, plotting
- **Instructor**: Sarah Mitchell

### 2. Civil 3D for Infrastructure Design
- **Duration**: 10 hours
- **Lessons**: 9 in-depth lessons
- **Topics**: Surfaces, alignments, corridors, grading, pipe networks, quantity takeoffs
- **Instructor**: Michael Chen

### 3. ArchiCAD for Architecture
- **Duration**: 9 hours
- **Lessons**: 9 detailed lessons
- **Topics**: BIM fundamentals, building elements, complex forms, rendering, documentation
- **Instructor**: Emma Rodriguez

## How to Use

### For End Users

1. **Browse Courses**: View all available courses on the home page
2. **Start Learning**: Click on any course card or the "Start Course" button
3. **Track Progress**: Complete lessons by clicking on them
4. **View Progress**: Watch the progress bar update automatically
5. **Complete Course**: Mark the entire course as complete when ready

### For Developers

#### Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

#### Adding New Courses
Edit `src/data/courses.ts` and add a new course object to the `coursesData` array:

```typescript
{
  id: "new-course",
  title: "New Course Title",
  description: "Course description",
  instructor: "Instructor Name",
  duration: "X hours",
  progress: 0,
  completed: false,
  icon: "📚",
  lessons: [
    {
      id: "lesson-1",
      title: "Lesson Title",
      duration: "XX min",
      completed: false,
    },
    // Add more lessons...
  ],
}
```

#### Customizing Styles
The design system is centralized in `src/index.css`. You can modify:
- Color variables (--primary, --secondary, etc.)
- Gradients (--gradient-primary, --gradient-card)
- Shadows (--shadow-card)
- Transitions (--transition-smooth)

#### Modifying Components
- **CourseCard.tsx**: Customize course card appearance
- **LessonItem.tsx**: Change lesson item layout
- **Index.tsx**: Modify home page structure
- **CoursePage.tsx**: Adjust course detail page

## Key Features Explained

### Progress Calculation
Progress is automatically calculated based on completed lessons:
```typescript
const completedCount = lessons.filter(l => l.completed).length;
const progress = Math.round((completedCount / lessons.length) * 100);
```

### Local Storage
Data persists across browser sessions:
```typescript
// Save progress
localStorage.setItem("courses", JSON.stringify(courses));

// Load progress
const savedCourses = localStorage.getItem("courses");
const courses = savedCourses ? JSON.parse(savedCourses) : coursesData;
```

### Responsive Design
Tailwind's responsive utilities ensure the platform works on all devices:
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactive elements
- Optimized font sizes and spacing

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios for text
- Focus indicators on interactive elements

## Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization
- Lazy loading of pages via React Router
- Efficient re-renders with React hooks
- Optimized bundle size with Vite
- CSS compiled to minimal production code
- LocalStorage for instant data access

## Future Enhancements (Not Implemented)
Potential features for future versions:
- User authentication and accounts
- Video lesson integration
- Quiz and assessment system
- Certificates upon completion
- Discussion forums
- Social sharing features
- Multi-language support
- Dark mode toggle
- Export progress reports
- Backend API integration

## Troubleshooting

### Progress Not Saving
- Check browser's localStorage settings
- Ensure JavaScript is enabled
- Try clearing cache and refreshing

### Course Not Loading
- Verify the course ID in the URL
- Check browser console for errors
- Ensure data is properly formatted in courses.ts

### Styling Issues
- Clear browser cache
- Check Tailwind CSS compilation
- Verify CSS variables in index.css

## Credits
- Built with ❤️ using Lovable platform
- Icons by Lucide
- UI components by shadcn/ui
- Emojis for course icons

## License
This is a prototype/demo project. Feel free to use and modify as needed.

## Support
For questions or issues, refer to the codebase or modify according to your needs.
