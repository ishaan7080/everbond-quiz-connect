import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface QuizQuestionProps {
  question: {
    id: string;
    text: string;
    options: string[];
  };
  currentAnswer: string;
  onAnswerChange: (value: string) => void;
  onPrevious: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  questionNumber: number;
  totalQuestions: number;
  illustration: string;
}

const QuizQuestion = ({
  question,
  currentAnswer,
  onAnswerChange,
  onPrevious,
  onNext,
  isFirst,
  isLast,
  questionNumber,
  totalQuestions,
  illustration,
}: QuizQuestionProps) => {
  return (
    <div className="max-w-md mx-auto bg-card rounded-2xl p-6 shadow-sm">
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {questionNumber}</span>
          <span>{questionNumber} of {totalQuestions}</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Illustration */}
      <div className="mb-6 flex justify-center">
        <img 
          src={illustration} 
          alt="Question illustration" 
          className="w-64 h-40 object-cover rounded-xl"
        />
      </div>

      {/* Question */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          {questionNumber}. {question.text}
        </h2>

        {/* Options */}
        <RadioGroup value={currentAnswer} onValueChange={onAnswerChange}>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-3">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label 
                  htmlFor={`option-${index}`} 
                  className="flex-1 p-3 rounded-lg border border-input cursor-pointer hover:bg-accent transition-colors"
                >
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={isFirst}
          className="flex-1"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        
        <Button
          onClick={onNext}
          disabled={!currentAnswer}
          className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
        >
          {isLast ? 'Submit' : 'Continue'}
          {!isLast && <ChevronRight className="w-4 h-4 ml-2" />}
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestion;