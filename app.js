Vue.createApp({
    data(){
        return{
            counter: 0,
            result: ""
            // timer: null
        };
    },
    watch: {
        counter(value){
            const that = this;
            // if (value === "0"){
            //     clearTimeout(this.timer);
            // }
            // else{
            this.timer = setTimeout(function(){
                that.counter = 0;
                that.result = "0";
            }, 5000);
            
            
        }

    },
    methods:{
        add(val){
            this.counter += val;
            this.result = this.counter;
            if(this.counter < 37){
                this.result += " " + "Not There Yet";
            }
            else if(this.counter > 37){
                this.result += " " + "Too Much";
            }
        }
    }
}).mount('#assignment');