<template>
    <div>
        <h1>Please fill out our Form...</h1>
        <div id="form-helper">
<!--            <slot name="form-helper"></slot>-->
            <h3>Form One to Contact Us</h3>
            <p>Fill in this form to contact us</p>
        </div>
        <div id="form-fields">
<!--            <slot name="form-fields"></slot>-->
            Name: <input type="text" placeholder="Name" required>
            Your Message: <textarea rows="1" cols="20" placeholder="Message" required></textarea>
        </div>
        <div id="form-controls">
<!--            <slot name="form-controls"></slot>-->
            <button @click="handleSend">Send</button>
        </div>

<!--        <div slot="form-helper">-->
<!--            <h3>Form One to Contact Us</h3>-->
<!--            <p>Fill in this form to contact us</p>-->
<!--        </div>-->
<!--        <div slot="form-fields">-->
<!--            Name: <input type="text" placeholder="Name" required>-->
<!--            Your Message: <textarea rows="1" cols="20" placeholder="Message" required></textarea>-->
<!--        </div>-->
<!--        <div slot="form-controls">-->
<!--            <button @click="handleSend">Send</button>-->
<!--        </div>-->
        <div id="useful-links">
            <ul>
                <li>
                    <a href="#">link 1</a>
                </li>
                <li>
                    <a href="#">link 2</a>
                </li>
                <li>
                    <a href="#">link 3</a>
                </li>
                <li>
                    <a href="#">link 4</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        components:{

        },
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>

<style>
    h1{
        text-align: center;
    }
    form{
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
    }
    #useful-links ul{
        padding: 0px;
    }
    #useful-links li{
        display: inline-block;
        margin-right: 10px;
        background-color: lightgreen;
        text-decoration: none;
        padding: 5px;
    }
    form > div{
        padding: 20px;
        background: #eee;
        margin: 20px 0px;
    }
    #form-helper{
        background: #ddd;
        border: 1px solid #bbb;
        text-align: center;
    }
    #form-fields{
        background: #ddd;
        border: 1px solid #bbb;
        text-align: center;
    }
    #form-controls{
        background: #ddd;
        border: 1px solid #bbb;
        text-align: center;
    }
    #useful-links{
        background: #ddd;
        border: 1px solid #bbb;
        text-align: center;
    }
</style>