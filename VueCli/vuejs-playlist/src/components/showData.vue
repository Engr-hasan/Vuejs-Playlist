<template>
    <div>
        <div v-theme:column="'narrow'" id="show-data">
            <h1>Blog All Data</h1>
            <div v-for="sData in allData" class="single-blog">
                <h3 v-rainbow="">{{sData.title}}</h3>
                <p>{{sData.body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components:{

        },
        data(){
            return{
                allData:[]
            }
        },
        methods:{

        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (data) {
                    this.allData = data.body.slice(0,10);
                })
        }
    }
</script>

<style>
#show-data{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: lightslategray;
}
</style>