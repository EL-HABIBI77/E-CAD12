import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { coursesData, Course } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import LessonItem from "@/components/LessonItem";
import { ArrowLeft, CheckCircle2, Clock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CoursePage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    // Load course data from localStorage or use default
    const savedCourses = localStorage.getItem("courses");
    const courses = savedCourses ? JSON.parse(savedCourses) : coursesData;
    const foundCourse = courses.find((c: Course) => c.id === courseId);
    
    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      navigate("/");
    }
  }, [courseId, navigate]);

  const saveCourse = (updatedCourse: Course) => {
    const savedCourses = localStorage.getItem("courses");
    const courses = savedCourses ? JSON.parse(savedCourses) : coursesData;
    const updatedCourses = courses.map((c: Course) =>
      c.id === updatedCourse.id ? updatedCourse : c
    );
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
    setCourse(updatedCourse);
  };

  const toggleLesson = (lessonId: string) => {
    if (!course) return;

    const updatedLessons = course.lessons.map((lesson) =>
      lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson
    );

    const completedCount = updatedLessons.filter((l) => l.completed).length;
    const progress = Math.round((completedCount / updatedLessons.length) * 100);

    const updatedCourse = {
      ...course,
      lessons: updatedLessons,
      progress,
      completed: progress === 100,
    };

    saveCourse(updatedCourse);

    if (progress === 100) {
      toast({
        title: "Congratulations! 🎉",
        description: "You've completed all lessons in this course!",
      });
    }
  };

  const markCourseComplete = () => {
    if (!course) return;

    const updatedLessons = course.lessons.map((lesson) => ({
      ...lesson,
      completed: true,
    }));

    const updatedCourse = {
      ...course,
      lessons: updatedLessons,
      progress: 100,
      completed: true,
    };

    saveCourse(updatedCourse);

    toast({
      title: "Course Completed! 🎓",
      description: `Congratulations on completing ${course.title}!`,
    });
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading course...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-primary text-white">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>

          <div className="flex items-start gap-6">
            <div className="text-7xl">{course.icon}</div>
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold">{course.title}</h1>
                {course.completed && (
                  <CheckCircle2 className="w-8 h-8 text-success" />
                )}
              </div>
              <p className="text-white/90 text-lg max-w-3xl">
                {course.description}
              </p>
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Progress Section */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Your Progress</h2>
              <p className="text-muted-foreground">
                {course.lessons.filter((l) => l.completed).length} of{" "}
                {course.lessons.length} lessons completed
              </p>
            </div>
            {!course.completed && course.progress > 0 && (
              <Button
                onClick={markCourseComplete}
                className="gradient-primary"
              >
                Mark Course as Complete
              </Button>
            )}
          </div>
          <Progress value={course.progress} className="h-3" />
          <p className="text-right mt-2 font-semibold text-primary">
            {course.progress}%
          </p>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Course Lessons</h2>
          {course.lessons.map((lesson) => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              onToggle={toggleLesson}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
