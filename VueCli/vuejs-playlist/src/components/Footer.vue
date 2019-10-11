<template>
    <footer>
        <p>&copy;{{copyright}}</p>
    </footer>
</template>

<script>
    export default {
        data () {
            return{
                copyright: 'All Right Reserved Ninjas 2019'
            }
        }
    }
</script>

<style scoped>
footer{
    background: #222;
    padding: 6px;
}
p{
    color: lightgreen;
    text-align: center;
}
</style>
