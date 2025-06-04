import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const SurveySection = (): JSX.Element => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [otherConcern, setOtherConcern] = useState("");
  const [shortAnswer1, setShortAnswer1] = useState("");
  const [shortAnswer2, setShortAnswer2] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [showInsuranceSurvey, setShowInsuranceSurvey] = useState(false);
  const [insuranceAnswers, setInsuranceAnswers] = useState({
    employer: "",
    age: "",
    isStudent: "",
    university: "",
    parentsEmployer: "",
    insuranceProvider: "",
    isDependant: ""
  });
  const [currentInsuranceAnswer, setCurrentInsuranceAnswer] = useState("");
  const [submissionId, setSubmissionId] = useState<string>("");

  useEffect(() => {
    const id = localStorage.getItem('initialSubmissionID');
    if (id) {
      setSubmissionId(id);
    }
  }, []);

  const therapistProfiles = [
    {
      image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg",
      name: "Dr. Sarah Mitchell",
      info: "Specializes in anxiety and depression"
    },
    {
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg",
      name: "Dr. Michael Chen",
      info: "Expert in trauma and PTSD"
    },
    {
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
      name: "Dr. Emily Rodriguez",
      info: "Focus on relationship issues"
    }
  ];

  const handleSubmitToNetlify = () => {
    const sessionId = Date.now().toString();
    localStorage.setItem('initialSubmissionID', sessionId);
    setSubmissionId(sessionId);

    const formData = new FormData();
    formData.append("form-name", "intake");
    formData.append("submissionId", sessionId);
    
    // Append all question answers
    questions.forEach((question, index) => {
      const answer = answers[index];
      if (question.type === "multi") {
        formData.append(question.id.toString(), selectedConcerns.join(", "));
        if (selectedConcerns.includes("Other")) {
          formData.append("otherConcern", otherConcern);
        }
      } else {
        formData.append(question.id.toString(), answer?.toString() || "");
      }
    });

    formData.append("email", email);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setShowResults(true);
      })
      .catch((error) => {
        console.error("Netlify submission failed:", error);
      });
  };

  const handleStartInsuranceSurvey = () => {
    const id = localStorage.getItem('initialSubmissionID');
    if (id) {
      setShowInsuranceSurvey(true);
    }
  };

  const handleBookConsultation = () => {
    const id = localStorage.getItem('initialSubmissionID');
    if (id) {
      window.open(`https://calendly.com/actualcare/30min?submissionID=${id}`, '_blank');
    }
  };

  const mentalHealthConcerns = [
    "Depression",
    "Anxiety",
    "ADHD & Neurodivergence",
    "Anger Management",
    "Relationship & Communication issues",
    "Trauma and PTSD",
    "Substance use and addiction",
    "Self-esteem & body image",
    "Self-exploration",
    "Disordered eating",
    "Cultural & Racial Issues",
    "Family Conflict",
    "LGBTQ+ & gender/sexuality",
    "Life transitions",
    "Narcissistic abuse",
    "OCD",
    "Work or school issues",
    "Emotional regulation",
    "Grief or loss",
    "Stress/burnout",
    "TBI (i.e., concussion, brain injury)",
    "Other"
  ];

  const questions = [
    {
      id: 1,
      type: "single",
      text: "Have you been to therapy before?",
      options: ["Yes", "No", "Maybe"],
    },
    {
      id: 2,
      type: "single",
      text: "Would you prefer to work with a female or male?",
      options: ["Female", "Male", "No preference"],
    },
    {
      id: 3,
      type: "multi",
      text: "Please select one or more of the following to help us understand your mental health concerns. This will enable us to connect you with a therapist who has the correct expertise.",
      options: mentalHealthConcerns,
    },
    {
      id: 4,
      type: "single",
      text: "When things go wrong in your life, do you typically feel that it's within your control to change them?",
      options: ["Yes", "No"],
    },
    {
      id: 5,
      type: "single",
      text: "Do you prefer a therapist who offers direct advice and solutions, or one who helps you explore your own thoughts and feelings?",
      options: ["Direct advice", "Explore"],
    },
    {
      id: 6,
      type: "single",
      text: "How much do you value autonomy (making decisions independently)?",
      options: ["Very much", "Not so much"],
    },
    {
      id: 7,
      type: "single",
      text: "Do you feel more comfortable when a therapist takes the lead, or when you have control over the direction of your sessions?",
      options: ["Therapist takes the lead", "I control the direction"],
    },
    {
      id: 8,
      type: "single",
      text: "Do you believe that therapy is a safe space for you to express your thoughts?",
      options: ["Yes", "No"],
    },
    {
      id: 9,
      type: "single",
      text: "When making decisions, do you rely more on logic and reason, or on your emotions and values?",
      options: ["Logic and reason", "Emotions and values"],
    },
    {
      id: 10,
      type: "text",
      text: "Is there a particular lived experience that you would prefer your therapist to understand or relate to?",
      example: "(e.g., immigrating to Canada, growing up in a household where mental health wasn't recognized, emotionally immature parents…)",
    },
    {
      id: 11,
      type: "text",
      text: "If there's anything you'd like us to know—such as what led you to therapy—please let us know.",
    },
    {
      id: 12,
      type: "email",
      text: "What is your email? (optional)",
    },
  ];

  const insuranceQuestions = [
    {
      id: "employer",
      type: "text",
      text: "Where are you employed? (if applicable)",
    },
    {
      id: "age",
      type: "number",
      text: "How old are you?",
    },
    {
      id: "isStudent",
      type: "single",
      text: "Are you a university student?",
      options: ["Yes", "No"],
    },
    {
      id: "university",
      type: "text",
      text: "What university do you attend?",
      condition: (answers: any) => answers.isStudent === "Yes",
    },
    {
      id: "parentsEmployer",
      type: "text",
      text: "If you are under 25, where are your parents employed?",
      condition: (answers: any) => parseInt(answers.age) < 25,
    },
    {
      id: "insuranceProvider",
      type: "text",
      text: "Do you know the name of the insurance provider your company or your parent's company uses?\n(Write N/A if not applicable)",
    },
    {
      id: "isDependant",
      type: "single",
      text: "Are you listed as a dependent on a parent's or partner's health insurance plan?",
      options: ["Yes", "No", "Not sure"],
    },
  ];

  const handleSingleChoice = (answer: string) => {
    setAnswers({ ...answers, [currentQuestionIndex]: answer });
    if (currentQuestionIndex === questions.length - 1) {
      handleSubmitToNetlify();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleConcernToggle = (concern: string) => {
    setSelectedConcerns(prev => 
      prev.includes(concern)
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  const handleMultiSubmit = () => {
    if (selectedConcerns.length > 0) {
      setAnswers({ 
        ...answers, 
        [currentQuestionIndex]: {
          concerns: selectedConcerns,
          other: selectedConcerns.includes("Other") ? otherConcern : ""
        }
      });
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleTextSubmit = (text: string) => {
    setAnswers({ ...answers, [currentQuestionIndex]: text });
    if (currentQuestionIndex === questions.length - 1) {
      handleSubmitToNetlify();
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleInsuranceAnswer = (questionId: string) => {
    if (!currentInsuranceAnswer && questionId !== "isDependant") return;
    
    setInsuranceAnswers(prev => ({
      ...prev,
      [questionId]: currentInsuranceAnswer
    }));
    setCurrentInsuranceAnswer("");
  };

  if (showInsuranceSurvey) {
    const currentInsuranceQuestion = insuranceQuestions.find(q => 
      !insuranceAnswers[q.id as keyof typeof insuranceAnswers] &&
      (!q.condition || q.condition(insuranceAnswers))
    );

    if (!currentInsuranceQuestion) {
      window.open('https://calendly.com/actualcare/match-results-initial-bookings-coverage-review', '_blank');
      setShowInsuranceSurvey(false);
      return null;
    }

    return (
      <div className="w-full max-w-[666px]">
        <Card className="flex flex-col w-full items-start gap-2.5 pt-8 pb-[51px] px-0 rounded-[30px] shadow-[10px_10px_4px_#2c355c] bg-white">
          <CardContent className="flex flex-col w-full items-center gap-10">
            <h2 className="text-[#2e3760] text-2xl font-semibold text-center">
              Insurance Coverage Survey
            </h2>
            <div className="w-full px-8">
              <p className="text-[#8ba1d8] text-xl mb-6">{currentInsuranceQuestion.text}</p>
              {currentInsuranceQuestion.type === "single" ? (
                <div className="flex flex-col gap-4">
                  {currentInsuranceQuestion.options?.map(option => (
                    <Button
                      key={option}
                      className={`w-full h-12 ${
                        currentInsuranceAnswer === option 
                          ? "bg-[#2d365c]" 
                          : "bg-[#8ba1d8]"
                      } hover:bg-[#7b91c8] rounded-[70px]`}
                      onClick={() => setCurrentInsuranceAnswer(option)}
                    >
                      {option}
                    </Button>
                  ))}
                  <Button
                    className="w-full h-12 bg-[#2d365c] hover:bg-[#1d2546] rounded-[70px] mt-4"
                    onClick={() => handleInsuranceAnswer(currentInsuranceQuestion.id)}
                    disabled={!currentInsuranceAnswer}
                  >
                    Continue
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <input
                    type={currentInsuranceQuestion.type}
                    className="w-full p-3 border rounded-lg"
                    value={currentInsuranceAnswer}
                    onChange={(e) => setCurrentInsuranceAnswer(e.target.value)}
                    placeholder="Type your answer here..."
                  />
                  <Button
                    className="w-full h-12 bg-[#2d365c] hover:bg-[#1d2546] rounded-[70px]"
                    onClick={() => handleInsuranceAnswer(currentInsuranceQuestion.id)}
                    disabled={!currentInsuranceAnswer}
                  >
                    Continue
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="w-full max-w-[666px]">
        <Card className="flex flex-col w-full items-start gap-2.5 pt-8 pb-[51px] px-0 rounded-[30px] shadow-[10px_10px_4px_#2c355c] bg-white">
          <CardContent className="flex flex-col w-full items-center gap-10">
            <div className="w-full px-8">
              <h2 className="text-[#2e3760] text-2xl font-semibold text-center mb-6">
                We've got your results. Please book your free intake call to review your matches and schedule your first appointment.
              </h2>
            </div>

            <div className="flex justify-center gap-8 px-8 w-full">
              {therapistProfiles.map((profile, index) => (
                <div key={index} className="flex flex-col items-center gap-3">
                  <div className="relative w-32 h-32 overflow-hidden rounded-full">
                    <img
                      src={profile.image}
                      alt={`Therapist ${index + 1}`}
                      className="w-full h-full object-cover filter blur-md"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-[#2e3760] font-medium filter blur-sm">
                      {profile.name}
                    </p>
                    <p className="text-[#8ba1d8] text-sm filter blur-sm">
                      {profile.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full px-8 mt-6">
              <div className="bg-[#f5f7ff] p-6 rounded-lg mb-8">
                <h3 className="text-[#2e3760] font-medium mb-2">Need help navigating your insurance coverage?</h3>
                <p className="text-[#2e3760] mb-2">👉 Click here to take a short survey before booking your intake call.</p>
                <p className="text-[#2e3760] text-sm">If not, you can proceed to book your consultation below.</p>
                <Button 
                  className="w-full mt-4 bg-[#8ba1d8] hover:bg-[#7b91c8] rounded-[70px]"
                  onClick={handleStartInsuranceSurvey}
                >
                  Take Insurance Survey
                </Button>
              </div>

              <Button 
                className="w-full h-14 px-6 bg-[#2d365c] hover:bg-[#1d2546] rounded-[70px] shadow-[0px_4px_4px_#000000] block whitespace-nowrap overflow-hidden text-ellipsis"
                onClick={handleBookConsultation}
              >
                <span className="font-['Overpass',Helvetica] font-normal text-white text-lg">
                  Book consultation call
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="w-full max-w-[666px]">
      <form name="intake" method="POST" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="intake" />
        <input type="hidden" name="submissionId" />
        {questions.map((question) => (
          <input key={question.id} type="text" name={question.id.toString()} />
        ))}
        <input type="text" name="otherConcern" />
        <input type="email" name="email" />
      </form>
      
      <Card className="flex flex-col w-full items-start gap-2.5 pt-8 pb-[51px] px-0 rounded-[30px] shadow-[10px_10px_4px_#2c355c] bg-white">
        <CardContent className="flex flex-col w-full items-center gap-10">
          <h2 className="w-full font-['Inter',Helvetica] font-normal text-[#2e3760] text-3xl text-center leading-[50px]">
            Find the mental health care for you
          </h2>

          <Separator
            className="w-full h-0.5"
            style={{ backgroundImage: "url('/line-6.svg')" }}
          />

          <div className="w-full flex flex-col items-center gap-5">
            <p className="w-full font-['Inter',Helvetica] font-normal text-[#8ba1d8] text-3xl text-center tracking-[0.20px] leading-[30px]">
              {currentQuestion.text}
              {currentQuestion.type === "text" && currentQuestion.example && (
                <span className="block text-base mt-2 text-[#8ba1d8] opacity-80">
                  {currentQuestion.example}
                </span>
              )}
            </p>

            <div className="w-full max-w-[342px] flex flex-col gap-5">
              {currentQuestion.type === "single" && (
                currentQuestion.options.map((option) => (
                  <Button
                    key={option}
                    className="w-[286px] h-12 bg-[#8ba1d8] hover:bg-[#7b91c8] rounded-[70px] mx-auto"
                    onClick={() => handleSingleChoice(option)}
                  >
                    <span className="font-['Overpass',Helvetica] font-normal text-white text-2xl leading-[50px]">
                      {option}
                    </span>
                  </Button>
                ))
              )}

              {currentQuestion.type === "multi" && (
                <>
                  <div className="flex flex-col gap-3">
                    {currentQuestion.options.map((option) => (
                      <div key={option} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={option}
                          checked={selectedConcerns.includes(option)}
                          onChange={() => handleConcernToggle(option)}
                          className="w-4 h-4"
                        />
                        <label htmlFor={option} className="text-[#8ba1d8]">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                  {selectedConcerns.includes("Other") && (
                    <input
                      type="text"
                      value={otherConcern}
                      onChange={(e) => setOtherConcern(e.target.value)}
                      placeholder="Please specify"
                      className="w-full p-2 border rounded"
                    />
                  )}
                  <Button
                    className="w-[286px] h-12 bg-[#8ba1d8] hover:bg-[#7b91c8] rounded-[70px] mx-auto mt-4"
                    onClick={handleMultiSubmit}
                  >
                    <span className="font-['Overpass',Helvetica] font-normal text-white text-2xl leading-[50px]">
                      Continue
                    </span>
                  </Button>
                </>
              )}

              {(currentQuestion.type === "text" || currentQuestion.type === "email") && (
                <>
                  <input
                    type={currentQuestion.type}
                    value={currentQuestion.type === "email" ? email : (currentQuestionIndex === questions.length - 2 ? shortAnswer1 : shortAnswer2)}
                    onChange={(e) => {
                      if (currentQuestion.type === "email") {
                        setEmail(e.target.value);
                      } else if (currentQuestionIndex === questions.length - 2) {
                        setShortAnswer1(e.target.value);
                      } else {
                        setShortAnswer2(e.target.value);
                      }
                    }}
                    placeholder={currentQuestion.type === "email" ? "Enter your email (optional)" : "Type your answer here..."}
                    className="w-full p-3 border rounded-lg"
                  />
                  <Button
                    className="w-[286px] h-12 bg-[#8ba1d8] hover:bg-[#7b91c8] rounded-[70px] mx-auto"
                    onClick={() => handleTextSubmit(
                      currentQuestion.type === "email" ? email : (currentQuestionIndex === questions.length - 2 ? shortAnswer1 : shortAnswer2)
                    )}
                  >
                    <span className="font-['Overpass',Helvetica] font-normal text-white text-2xl leading-[50px]">
                      Continue
                    </span>
                  </Button>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};