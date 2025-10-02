import { Course } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, Clock, User } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden border-border bg-card shadow-card transition-smooth hover:scale-[1.02] hover:shadow-lg cursor-pointer">
      <div
        onClick={() => navigate(`/course/${course.id}`)}
        className="p-6 space-y-4"
      >
        {/* Icon and Title */}
        <div className="flex items-start gap-4">
          <div className="text-5xl">{course.icon}</div>
          <div className="flex-1 space-y-1">
            <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-smooth">
              {course.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>{course.instructor}</span>
            </div>
          </div>
          {course.completed && (
            <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2">
          {course.description}
        </p>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <Button
            size="sm"
            className="group-hover:gradient-primary"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/course/${course.id}`);
            }}
          >
            {course.progress > 0 ? "Continue" : "Start Course"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
