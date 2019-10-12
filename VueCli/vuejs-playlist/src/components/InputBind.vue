<template>
    <div name="BindInput">
    <form v-if="!submitted">

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

        <br><br>

        <!--        checkbox binding-->
        <div id="checkboxes">
            <label>Categoryes: </label>
            <label for="">One</label>
            <input type="checkbox" value="one" v-model="blog.categories">
            <label for="">Two</label>
            <input type="checkbox" value="two" v-model="blog.categories">
            <label for="">Three</label>
            <input type="checkbox" value="three" v-model="blog.categories">
<br>
            <label>Preview:</label>
            <ol>
                <li v-for="category in blog.categories">{{category}}</li>
            </ol>

            <!--        selectbox binding-->
            <label>Author</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{author}}</option>
            </select>
            <br>
            Preview: Author name is {{blog.author}}
            <button @click.prevent="post">Add Blog</button>
        </div>
    </form>
        <div v-if="submitted">
            <h3>Thanks for add posts</h3>
        </div>
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
                    blogsize: '',
                    categories:[],
                    author:''
                },
                authors:['hasan','rohim','korim','johir '],
                submitted:false,
            }
        },
        methods:{
            post:function () {
                this.$http.post('https://jsonplaceholder.typicode.com/users/1/posts',{
                    title:this.blog.blogname,
                    body:this.blog.blogsize,
                    userId:1
                }).then(function (data) {
                   console.log(data);
                   this.submitted = true;
                });
            }
        }
    }
</script>

<style>
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
label{
    display: inline-block;
}
</style>