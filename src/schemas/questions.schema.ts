import * as mongoose from 'mongoose';

export const QuestionsSchema = new mongoose.Schema({
    skill_id: String,
    question: String,
    option1:  String,
    option2:  String,
    option3:  String,
    option4:  String,
    answer:   String
})

