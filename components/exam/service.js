const Assignment = require("../../models/Assignment");
const natural = require("natural");
const tokenizer = new natural.WordTokenizer();
const compromise = require('nlp_compromise');
const Lemmer = require("lemmer");
const pos = require("pos");
const synonyms = require("synonyms");


class ExamsService {

    constructor() { }

    async findAssignmentById(id) {
        const assignment = await Assignment.findById({ _id: id });
        return assignment;
    }
    async evaluateAnswer(studentAnswer, teacherAnswer) {
        // if (compromise.person(teacherAnswer).pronoun()) {
        //     // console.log("before compromise ", teacherAnswer);
        //     teacherAnswer += " " + compromise.person(teacherAnswer).pronoun();
        //     // console.log("after compromise ", teacherAnswer);
        // }
        var arrayTeacher = tokenizer.tokenize(teacherAnswer);
        var arrayStudent = tokenizer.tokenize(studentAnswer);
        return await processingAnswers(arrayStudent, arrayTeacher)
    }
}

async function processingAnswers(arrayStudent, arrayTeacher) {
    const teacherLemma = await Lemmer.lemmatize(arrayTeacher);
    const studentLemma = await Lemmer.lemmatize(arrayStudent);
    // console.log("Teacher answer after lemmatizing ", teacherLemma);
    // console.log("Teacher answer after lemmatizing ", studentLemma);
    // new 18/march/2022
    // var idealAnswer = new pos.Lexer().lex(teacherLemma.join(" "));
    // var studentAnswer = new pos.Lexer().lex(studentLemma.join(" "));
    var tagger = new pos.Tagger();
    var taggedWordsIdeal = tagger.tag(teacherLemma);
    var taggedWordsStudent = tagger.tag(studentLemma);
    // console.log("Teacher answer after tagging ", taggedWordsIdeal);
    // console.log("student answer after tagging ", taggedWordsStudent);
    var teacherAfterRemoving = removing(taggedWordsIdeal);
    var studentAfterRemoving = removing(taggedWordsStudent);
    // console.log("Teacher after removing tags", teacherAfterRemoving);
    // console.log("Student after removing tags", studentAfterRemoving);
    const synonymsWords = getSynonyms(teacherAfterRemoving);
    // console.log("synonymsWords", synonymsWords);
    const result = calculateResult(studentAfterRemoving, synonymsWords, teacherAfterRemoving.length);
    return result;
}

function calculateResult(studentAnswer, teacherSynonymWords, rightAnswerlength) {
    let counter = 0;
    // console.log("student ans", studentAnswer);
    // console.log("teacher syns", teacherSynonymWords);
    studentAnswer.forEach(element => {
        if (teacherSynonymWords.includes(element)) {
            counter++;
        }
    });
    console.log("cc", counter);
    const result = parseFloat((counter * 100) / rightAnswerlength).toFixed(2);
    return result;
}

function getSynonyms(sentence) {
    const allSynonyms = [];
    // console.log("xzz", sentence);
    sentence.forEach(element => {
        const syn = synonyms(element);
        allSynonyms.push(element);
        if (syn && syn.n) {
            allSynonyms.push(...syn.n)
        } else if (syn && syn.v) {
            allSynonyms.push(...syn.v)
        } else if (syn && syn.s) {
            allSynonyms.push(...syn.s)
        }
    });

    return allSynonyms;
}

function removing(taggedw) {
    var chopp = [];
    for (i in taggedw) {
        var taggedWord = taggedw[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
        if (!(tag == "DT" || tag == "CC" || tag == "EX" || tag == "IN" || tag == "SYM")) {
            chopp.push(word);
        }
    }
    return chopp;
}

module.exports = new ExamsService();