import { useState } from "react";
import { questions } from "@/data/questions";
import { questionImages } from "@/data/questionImages";
import QuizQuestion from "./QuizQuestion";
import HeartLogo from "./HeartLogo";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Gender = 'men' | 'women' | null;

const EverBondQuiz = () => {
  const [currentGender, setCurrentGender] = useState<Gender>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const currentQuestions = currentGender 
    ? questions.filter(q => q.category === currentGender)
    : [];

  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleGenderSelect = (gender: Gender) => {
    setCurrentGender(gender);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleAnswerChange = (value: string) => {
    if (currentQuestion) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: value
      }));
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      // Prepare the data in the required format
      const submissionData: Record<string, string> = {};
      currentQuestions.forEach((question, index) => {
        const answerId = `d${index + 1}`;
        submissionData[answerId] = answers[question.id] || '';
      });

      // Mock API call - replace with actual endpoint
      const response = await fetch('/api/compatibility-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Assessment Complete!",
          description: "Your compatibility assessment has been submitted successfully.",
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your assessment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const restartQuiz = () => {
    setCurrentGender(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-sm text-center">
          <HeartLogo />
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-muted-foreground mb-6">
              Your compatibility assessment has been submitted successfully. 
              Our team will review your responses and get back to you soon.
            </p>
            <Button 
              onClick={restartQuiz}
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Take Another Assessment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentGender) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md mx-auto bg-card rounded-2xl p-8 shadow-sm">
          <div className="mb-8 text-center">
            <HeartLogo />
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Answer a few simple questions to begin your assessment
            </h2>
            <p className="text-muted-foreground">
              Please select which questionnaire you'd like to take:
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => handleGenderSelect('men')}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-6 text-lg"
              size="lg"
            >
              Men's Assessment
            </Button>
            <Button
              onClick={() => handleGenderSelect('women')}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground py-6 text-lg"
              size="lg"
            >
              Women's Assessment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full">
        <div className="mb-8 text-center">
          <HeartLogo />
        </div>
        
        <QuizQuestion
          question={currentQuestion}
          currentAnswer={answers[currentQuestion.id] || ''}
          onAnswerChange={handleAnswerChange}
          onPrevious={handlePrevious}
          onNext={handleNext}
          isFirst={currentQuestionIndex === 0}
          isLast={currentQuestionIndex === currentQuestions.length - 1}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={currentQuestions.length}
          illustration={questionImages[currentQuestion.id]}
        />
      </div>
    </div>
  );
};

export default EverBondQuiz;