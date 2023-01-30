import { createSlice } from '@reduxjs/toolkit';

export const initialState = [
    {
        question: "What's your skin type?",
        options: [
            {
                option: "Normal",
                image: "one.png"
            },
            {
                option: "Combination",
                image: "two.png"
            },
            {
                option: "Dry",
                image: "three.png"
            },
            {
                option: "Sensitive",
                image: "four.png"
            },
            {
                option: "Oily",
                image: "one.png"
            },
        ]
    },
    {
        question: "What is your top concern?",
        options: [
            {
                option: "Dark Circles",
                image: "one.png"
            },
            {
                option: "Acne",
                image: "two.png"
            },
            {
                option: "Dryness",
                image: "three.png"
            },
            {
                option: "Hyperpigmentation",
                image: "four.png"
            },
            {
                option: "Loss Of Elasticity",
                image: "one.png"
            },
            {
                option: "Loss of Firmness",
                image: "two.png"
            },
            {
                option: "Pigmentation",
                image: "three.png"
            },
            {
                option: "Aging",
                image: "four.png"
            }
        ]
    },
    {
        question: "What's your current skincare goal?",
        options: [
            {
                option: "Even Skin Tone",
                image: "one.png"
            },
            {
                option: "Hydrated",
                image: "two.png"
            },
            {
                option: "Radiant",
                image: "three.png"
            }
        ]
    },
    {
        question: "Which of these is the biggest plus for you?",
        options: [
            {
                option: "Vegan",
                image: "one.png"
            },
            {
                option: "Fragrance Free",
                image: "two.png"
            }
        ]
    }
]

export const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        totalQuestions: 4,
        questions: initialState[0],
        selectedIndex: 0,
        answers: [],
        stagedAnswers: []
    },
    reducers: {
        currentQuestion: (state, action) => {
            state.questions = initialState[action.payload]
            state.selectedIndex = action.payload
        },
        selectedAnswers: (state, action) => {
            state.answers = [...state.answers, ...action.payload];
            state.stagedAnswers = []
        },
        selectedStagedAnswers: (state, action) => {
            let stagedAnswer = {
                option: action.payload.option,
                image: action.payload.image
            }
            state.stagedAnswers.push(stagedAnswer);
        },
        removeAnswers: (state, action) => {
            state.answers.splice(action.payload, 1);
        }
    },
});

export const { currentQuestion, selectedAnswers, selectedStagedAnswers, removeAnswers } = questionSlice.actions;

export default questionSlice.reducer;