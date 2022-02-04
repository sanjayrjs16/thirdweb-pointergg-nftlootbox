export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "What was the LinkinPark's debut album?  ?",
    image:
      "https://images.unsplash.com/photo-1605340406960-f5b496c38b3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    answers: [
      "Minutes to Midnight",
      "Meteora",
      "Hybrid Theory",
      "A Thousand Suns",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Who was the original lead guitarist for Pink Floyd?",
    image:
      "https://images.unsplash.com/photo-1535746411167-1b951ce61a5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    answers: [
      "Syd Barrett",
      "Bill Bailey",
      "Mickey Lee Soule",
      "David Gilmour",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "Nickelback is based out of?",
    image:
      "https://images.unsplash.com/photo-1579186147129-424f8beba2b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    answers: ["Australia", "USA", "Canada", "New Zealand"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "There was a certain man, in ____ long ago, he was bing and strong, he had eyes of flaming glow",
    image:
      "https://images.unsplash.com/photo-1522863602463-afebb8886ab2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    answers: ["UK", "Egypt", "Russia", "Asia"],
    correctAnswerIndex: 2,
  },
  // {
  //   questionText: "What color were all Ferraris originally?",
  //   answers: ["Yellow", "White", "Blue", "Red"],
  //   correctAnswerIndex: 3,
  // },
];

export default quizQuestions;
