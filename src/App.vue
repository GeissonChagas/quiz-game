
<template>
  <div>
    <BannerComponent  />
    <ScoreBoard :winCount="this.winCount" :loseCount="this.loseCount" />
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

      <button v-if="!this.answerSubimitted" @click="this.submitAnswer(); " class="send" type="button">Send</button>

    <section class="result" v-if="this.answerSubimitted ">
      <h4 v-if="this.chosenAnswer == this.correctAnswer" class="incorrect-answer"> I'm sorry, you picked the wrong answer!</h4>
      <h4 v-else class="correct-answer"> You got it right!</h4>
      <button class="send" type="button" @click="nextQuestion()">Next question</button>  
      <button class="send" type="button" @click="reset()">Reset</button>
    </section>
    

    </template>
    <FooterComponent />
  </div>

</template>
<script>

import BannerComponent from './components/BannerComponent.vue'
import ScoreBoard from './components/ScoreBoard.vue';
import FooterComponent from './components/FooterComponent.vue'

export default {

  name: 'App',
  components: {
    ScoreBoard,
    BannerComponent,
    FooterComponent
  },
  data () {
    return{
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      chosenAnswer: undefined,
      answerSubimitted: false,
      winCount: 0,
      loseCount: 0  
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
    reset () {
    localStorage.clear();
    this.winCount = 0;
    this.loseCount = 0;
  },
    submitAnswer(){
      //add no localStorage
      localStorage.winCount = JSON.stringify(this.winCount);
      localStorage.loseCount = JSON.stringify(this.loseCount);

      if(!this.chosenAnswer){
        alert('Pick one of the options!');
      } else {
        this.answerSubimitted = true
        if(this.chosenAnswer == this.correctAnswer){
          this.winCount++;
        } else {
          this.loseCount++;
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
    if (localStorage.winCount) {
    this.winCount = JSON.parse(localStorage.winCount);
    }
    if (localStorage.loseCount) {
      this.loseCount = JSON.parse(localStorage.loseCount);
    }

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

  button.send {
  display: inline-block;
  padding: 1em 2em;
  background-color: #008000;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin: 0 1rem;
  }

  button.send:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }

  button.send:active {
    transform: translateY(3px);
    box-shadow: 0 1px 10px rgba(0,0,0,0.23), 0 3px 3px rgba(0,0,0,0.16);
  }

  .correct-answer{
    color: #008000;
  }

  .incorrect-answer{
    color: #ff0000;
  }

}
</style>
