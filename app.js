new Vue({
    el: '#vue-app6',
    data: {
        favoriteFood: 'Apple'
    },
    methods:{
        redRefs: function () {
            console.log(this.$refs.text.innerText);
            this.favoriteFood = this.$refs.input.value;
        }
    }
});

var data={
    name:'hasib'
}
Vue.component('greeting',{
    template: '<p>Hey!, i am {{name}}.<button @click="changeName">Change name</button></p>',
    data: function () {
        // return{
        //     name:'hasan'     //way one
        // }
        return data
    },
    methods:{
        changeName: function () {
            this.name = "korim"
        }
    }
});
new Vue({
    el: '#vue-app-1',
    data: {

    }
});
new Vue({
    el: '#vue-app-2',
    data: {

    }
});

var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: 'vue-app-one'
    },
    methods:{

    },
    computed:{
        greet:function () {
            return "Vue app One computed property"
        }
    }
});
var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: 'vue-app-two'
    },
    methods:{
        changeTitle: function () {
            one.title = 'App one title is change'
        }
    },
    computed:{
        greet:function () {
            return "Vue app Two computed property"
        }
    }
});
two.tile = "App two title change outside"

new Vue({
    el: '#vue-app5',
    data: {
        health: 100,
        ended: false
    },
    methods:{
        punch: function () {
            this.health -= 10;
            if (this.health <= 0){
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            if (this.health == 100){
                this.ended = false;
            }
        }
    },
    computed:{

    }
});

new Vue({
    el: '#vue-app4',
    data: {
        success: false,
        error: false,
        characters:['int','float','double','string','bulean'],
        products:[
            {name: 'phone',size:34},
            {name: 'laptop',size: 18},
            {name: 'keyboard',size:12},
            {name: 'mouse',size:76},
            {name: 'spicker',size:54}
        ]
    }
});

new Vue({
    el: '#vue-app3',
    data: {
        required: true,
        available: false
    },
    methods: {

    },
    computed: {
        campClasses: function () {
            return {
                required: this.required,
                available: this.available
            }
        }
    }
});

new Vue({
    el: '#vue-app2',
    data: {
        name: '',
        position: '',
        age: 23,
        a:0,
        b:0
    },
    methods:{
        // addToA: function () {
        // console.log(addToA);
        //     return this.a + this.age;
        // },
        // addToB: function () {
        // console.log(addToB);
        //     return this.b + this.age;
        // }
    },
    computed:{
        addToA: function () {
            console.log('addToA');
            return this.a + this.age;
        },
        addToB: function () {
            console.log('addToB');
            return this.b + this.age;
        }
    }
});

new Vue({
    el: '#vue-app1',
    data: {
        age: 23,
        num: 100,
        run: 200,
        x: 0,
        y: 0,
        clickOncenuminc: 1
    },
    methods: {
        addNum: function () {
            this.num++
        },
        removeNum: function () {
            this.num--
        },
        AddRun: function (inc) {
            this.run += inc;
        },
        RemoveRun: function (dec) {
            this.run -= dec;
        },
        updateXY: function (event) {
            this.x = event.offsetX,
            this.y = event.offsetY
        },
        clickOnce: function () {
            this.clickOncenuminc++
        },
        preventDefaultAction: function () {
            alert("Prevent default action");
        },
        logName: function () {
            alert('You enter your LogName');
            console.log('You enter your LogName');
        },
        logAge: function () {
            alert('You enter your LogAge');
            console.log('You enter your LogAge');
        }
    }
});

new Vue({
    el: '#vue-app',
    data: {
        name: 'Hasan',
        position: 'Dev',
        web: 'https://www.youtube.com',
        webTag: '<a href="https://www.youtube.com">Youtube</a>',
        inputField: 'InputField: <input type="text"/>'
    },
    methods: {
        great: function (time) {
            return "Good " + time + ' ' + this.name + ' ' + this.position;
        }
    }
});