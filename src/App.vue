
<template> 
  <div>
    <ScoreBoard />
    <template v-if="this.question">

      <h1 v-html="this.question">
      </h1>

    <template v-for="(answer, index) in this.answers" :key="index">
      <input 
        :disabled="this.answerSubimitted"
        type="radio"
        name="options"
        :value="answer"
        v-model="this.chosenAnswer">

      <label v-html="answer"></label><br>
    </template>

      <button v-if="!this.answerSubimitted" @click="this.submitAnswer()" class="send" type="button">Send</button>

    <section class="result" v-if="this.answerSubimitted ">
      <h4 v-if="this.chosenAnswer == this.correctAnswer" class="incorrect-answer"> I'm sorry, you picked the wrong answer!</h4>
      <h4 v-else class="correct-answer"> You got it right!</h4>
      <button class="send" type="button" @click="nextQuestion()">Next question</button>  
    </section>
    

    </template>
  </div>

</template>
<script>

import ScoreBoard from './components/ScoreBoard.vue';

export default {

  name: 'App',
  compnents: {
    ScoreBoard
  },
  data () {
    return{
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      chosenAnswer: undefined,
      answerSubimitted: false
    }
  },
  computed:{
    answers() {
    var answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
    answers.splice( Math.round(Math.random()* answers.length), 0, this.correctAnswer);
    return answers;
    }
  },
  methods: {
    submitAnswer(){
      if(!this.chosenAnswer){
        alert('Pick one of the options!');
      } else {
        this.answerSubimitted = true
        if(this.chosenAnswer == this.correctAnswer){
          console.log('You got it right!')
        } else {
          console.log('You got it wrong!')
        }
        }
    },
    nextQuestion () {

      this.answerSubimitted = false;
      this.chosenAnswer = undefined;
      this.question = undefined;

      this.axios
      .get("https://opentdb.com/api.php?amount=1&category=18&type=boolean")
      .then((response) => {
        this.question = response.data.results[0].question;
        this.incorrectAnswers = response.data.results[0].incorrect_answers;
        this.correctAnswer = response.data.results[0].correct_answer;
    })
  }
  },
  created () {
    this.axios
    .get("https://opentdb.com/api.php?amount=1&category=18&type=boolean")
    .then((response) => {
      this.question = response.data.results[0].question;
      this.incorrectAnswers = response.data.results[0].incorrect_answers;
      this.correctAnswer = response.data.results[0].correct_answer;
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;

  input[type=radio] {
    margin: 12px 4px;
  }

  button.send{
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fff;
    background-color: #1867c0;
    border: solid 1px #1867c0;
    cursor: pointer;
  }

  .correct-answer{
    color: #008000;
  }

  .incorrect-answer{
    color: #ff0000;
  }

}
</style>
