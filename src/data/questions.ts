export interface Question {
  id: string;
  text: string;
  options: string[];
  category: 'men' | 'women';
}

export const questions: Question[] = [
  // Men's Questions (1-20)
  {
    id: "d1",
    text: "How important is financial stability in a relationship?",
    options: ["Extremely important", "Very important", "Somewhat important", "Not important"],
    category: "men"
  },
  {
    id: "d2", 
    text: "What's your ideal way to spend a weekend with your partner?",
    options: ["Outdoor adventures", "Home relaxation", "Social gatherings", "Cultural activities"],
    category: "men"
  },
  {
    id: "d3",
    text: "How do you handle disagreements in relationships?",
    options: ["Direct discussion", "Take time to cool off", "Seek compromise", "Avoid conflict"],
    category: "men"
  },
  {
    id: "d4",
    text: "What role should career ambition play in a partnership?",
    options: ["Top priority", "Important but balanced", "Secondary to family", "Personal choice"],
    category: "men"
  },
  {
    id: "d5",
    text: "How important is physical attraction initially?",
    options: ["Very important", "Somewhat important", "Nice to have", "Not crucial"],
    category: "men"
  },
  {
    id: "d6",
    text: "What's your communication style when stressed?",
    options: ["Need space first", "Want to talk immediately", "Prefer written communication", "Seek distraction"],
    category: "men"
  },
  {
    id: "d7",
    text: "How do you view traditional gender roles?",
    options: ["Important to maintain", "Somewhat flexible", "Mostly outdated", "Completely irrelevant"],
    category: "men"
  },
  {
    id: "d8",
    text: "What's your ideal family size?",
    options: ["No children", "1-2 children", "3-4 children", "Haven't decided"],
    category: "men"
  },
  {
    id: "d9",
    text: "How do you handle jealousy in relationships?",
    options: ["Discuss openly", "Work through internally", "Need reassurance", "It's rarely an issue"],
    category: "men"
  },
  {
    id: "d10",
    text: "What's most important in a long-term partner?",
    options: ["Emotional intelligence", "Shared values", "Physical chemistry", "Common interests"],
    category: "men"
  },
  {
    id: "d11",
    text: "How important is religious/spiritual compatibility?",
    options: ["Essential", "Preferred", "Nice to have", "Not important"],
    category: "men"
  },
  {
    id: "d12",
    text: "What's your approach to major life decisions?",
    options: ["Research extensively", "Trust instincts", "Seek advice", "Decide together"],
    category: "men"
  },
  {
    id: "d13",
    text: "How do you show love and affection?",
    options: ["Words of affirmation", "Physical touch", "Acts of service", "Quality time"],
    category: "men"
  },
  {
    id: "d14",
    text: "What's your stance on personal independence in relationships?",
    options: ["Very important", "Somewhat important", "Balance is key", "Prefer togetherness"],
    category: "men"
  },
  {
    id: "d15",
    text: "How do you handle financial decisions as a couple?",
    options: ["Joint decisions", "Separate responsibilities", "One person leads", "Case by case"],
    category: "men"
  },
  {
    id: "d16",
    text: "What's your ideal living situation?",
    options: ["Urban apartment", "Suburban house", "Rural property", "Flexible/travel"],
    category: "men"
  },
  {
    id: "d17",
    text: "How important are shared hobbies and interests?",
    options: ["Very important", "Somewhat important", "Some overlap is good", "Differences are healthy"],
    category: "men"
  },
  {
    id: "d18",
    text: "What's your approach to social media in relationships?",
    options: ["Keep private", "Share some moments", "Very open", "Don't use much"],
    category: "men"
  },
  {
    id: "d19",
    text: "How do you envision retirement together?",
    options: ["Travel and adventure", "Quiet and peaceful", "Stay active locally", "Haven't thought about it"],
    category: "men"
  },
  {
    id: "d20",
    text: "What's most important for relationship longevity?",
    options: ["Communication", "Trust", "Shared goals", "Maintaining romance"],
    category: "men"
  },

  // Women's Questions (21-40)
  {
    id: "d21",
    text: "How important is emotional support in a relationship?",
    options: ["Absolutely essential", "Very important", "Important", "Nice to have"],
    category: "women"
  },
  {
    id: "d22",
    text: "What's your ideal date night?",
    options: ["Romantic dinner", "Fun activity", "Cozy night in", "Cultural event"],
    category: "women"
  },
  {
    id: "d23",
    text: "How do you prefer to resolve conflicts?",
    options: ["Talk it through immediately", "Take time to process", "Find middle ground", "Agree to disagree"],
    category: "women"
  },
  {
    id: "d24",
    text: "What's your view on work-life balance?",
    options: ["Work to live", "Career focused", "Flexible balance", "Family first"],
    category: "women"
  },
  {
    id: "d25",
    text: "How important is intellectual compatibility?",
    options: ["Very important", "Somewhat important", "Nice bonus", "Not crucial"],
    category: "women"
  },
  {
    id: "d26",
    text: "What's your communication preference when upset?",
    options: ["Need to talk immediately", "Prefer some space first", "Write it out", "Work through it alone"],
    category: "women"
  },
  {
    id: "d27",
    text: "How do you view partnership roles?",
    options: ["Equal in everything", "Complementary strengths", "Flexible based on situation", "Traditional works for us"],
    category: "women"
  },
  {
    id: "d28",
    text: "What's your ideal approach to starting a family?",
    options: ["Plan carefully", "Let it happen naturally", "Focus on career first", "Not interested"],
    category: "women"
  },
  {
    id: "d29",
    text: "How do you handle trust issues?",
    options: ["Address directly", "Need time to rebuild", "Seek professional help", "Move on"],
    category: "women"
  },
  {
    id: "d30",
    text: "What attracts you most in a partner?",
    options: ["Sense of humor", "Kindness", "Ambition", "Stability"],
    category: "women"
  },
  {
    id: "d31",
    text: "How important is spiritual connection?",
    options: ["Very important", "Somewhat important", "Open to exploring", "Not important"],
    category: "women"
  },
  {
    id: "d32",
    text: "What's your decision-making style?",
    options: ["Analytical", "Intuitive", "Collaborative", "Quick and decisive"],
    category: "women"
  },
  {
    id: "d33",
    text: "How do you prefer to receive love?",
    options: ["Quality time", "Words of affirmation", "Physical touch", "Thoughtful gestures"],
    category: "women"
  },
  {
    id: "d34",
    text: "What's your view on personal space in relationships?",
    options: ["Need regular alone time", "Some space is healthy", "Prefer closeness", "Flexible based on mood"],
    category: "women"
  },
  {
    id: "d35",
    text: "How should couples handle money?",
    options: ["Everything shared", "Mostly shared", "Some separate", "Largely separate"],
    category: "women"
  },
  {
    id: "d36",
    text: "What's your ideal home environment?",
    options: ["Cozy and comfortable", "Modern and organized", "Creative and eclectic", "Minimal and clean"],
    category: "women"
  },
  {
    id: "d37",
    text: "How important is having common friends?",
    options: ["Very important", "Some overlap is good", "Separate circles are fine", "Mixed is ideal"],
    category: "women"
  },
  {
    id: "d38",
    text: "What's your approach to sharing your relationship online?",
    options: ["Keep it private", "Share special moments", "Regular updates", "Very open"],
    category: "women"
  },
  {
    id: "d39",
    text: "How do you envision growing old together?",
    options: ["Adventures and new experiences", "Deepening our bond", "Supporting each other", "Creating family legacy"],
    category: "women"
  },
  {
    id: "d40",
    text: "What's the foundation of a lasting relationship?",
    options: ["Deep friendship", "Mutual respect", "Shared vision", "Unconditional love"],
    category: "women"
  }
];