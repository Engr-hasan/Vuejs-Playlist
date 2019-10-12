<template>
    <div name="BindInput">
<!--        input data binding-->
        Name: <input type="text" v-model="name" placeholder="Enter name"><br>
        Preview: My name is {{name}}
<br><br>

<!--        Object input binding-->
        Blog-name: <input type="text" v-model.lazy="blog.blogname" placeholder="Enter blog name"><br>
        Blog-size: <input type="number" v-model.lazy="blog.blogsize" placeholder="Enter blog size"><br>
        <br>
        Preview:
        <pre>
                My blog name is {{blog.blogname}}
                My blog size is {{blog.blogsize}}
            </pre>
    </div>
</template>

<script>

    export default {
        components:{

        },
        data(){
            return{
                name: '',
                blog:{
                    blogname: '',
                    blogsize: ''
                }
            }
        },
        methods:{

        }
    }
</script>

<style>

</style>