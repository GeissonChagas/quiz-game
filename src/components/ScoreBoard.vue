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
        border-bottom: 1px solid #333;
        padding: 24px;
        font-size: 18px;
    }
        span{
            padding: 8px;
            font-weight: 700;
            border: 1px solid #222;
        }
</style>
