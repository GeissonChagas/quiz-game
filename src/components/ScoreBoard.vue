<template>
    <section class="score">
        Computer<span>{{this.winCount}}</span> x <span>{{ this.loseCount }}</span> You
    </section>
</template>

<script>
    export default {
        props: ['winCount', 'loseCount']
    }
</script>

<style lang="scss">
    section.score{
        color: #333;
        padding: 24px;
        font-size: 18px;
        
    }

    span{
        padding: 8px;
        font-weight: 700;
        border: 1px solid #ccc;
        background-color: white;
        transition: all 0.2s;
        margin: 0 1rem;
    }

</style>
