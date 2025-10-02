import { useEffect, useState } from "react";
import { coursesData, Course } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import { GraduationCap } from "lucide-react";

const Index = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Load courses from localStorage or use default data
    const savedCourses = localStorage.getItem("courses");
    if (savedCourses) {
      setCourses(JSON.parse(savedCourses));
    } else {
      setCourses(coursesData);
      localStorage.setItem("courses", JSON.stringify(coursesData));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-primary text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="w-12 h-12" />
            <h1 className="text-5xl font-bold">CAD Learning Platform</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl">
            Master professional CAD software with our comprehensive courses. Learn AutoCAD, Civil 3D, and ArchiCAD from industry experts.
          </p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Available Courses</h2>
          <p className="text-muted-foreground">
            Choose a course to begin your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3</div>
            <p className="text-muted-foreground">Professional Courses</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">25+</div>
            <p className="text-muted-foreground">Hours of Content</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Self-Paced Learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
