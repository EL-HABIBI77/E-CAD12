import { Lesson } from "@/data/courses";
import { CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface LessonItemProps {
  lesson: Lesson;
  onToggle: (lessonId: string) => void;
}

const LessonItem = ({ lesson, onToggle }: LessonItemProps) => {
  return (
    <div
      onClick={() => onToggle(lesson.id)}
      className={cn(
        "group flex items-center gap-4 p-4 rounded-lg border border-border bg-card cursor-pointer transition-smooth hover:shadow-md hover:border-primary/30",
        lesson.completed && "bg-muted/30"
      )}
    >
      <button
        className="flex-shrink-0 transition-smooth"
        onClick={(e) => {
          e.stopPropagation();
          onToggle(lesson.id);
        }}
      >
        {lesson.completed ? (
          <CheckCircle2 className="w-6 h-6 text-success" />
        ) : (
          <Circle className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-smooth" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <h4
          className={cn(
            "font-medium transition-smooth",
            lesson.completed
              ? "text-muted-foreground line-through"
              : "text-card-foreground group-hover:text-primary"
          )}
        >
          {lesson.title}
        </h4>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0">
        <Clock className="w-4 h-4" />
        <span>{lesson.duration}</span>
      </div>
    </div>
  );
};

export default LessonItem;
