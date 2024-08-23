const app = Vue.createApp(
    {
        data(){
            return {
                product : 'socks',
                image : './assets/images/socks_green.jpg',
                url : 'https://yenesuq.com',
                inventory : 0,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants : [
                    {id : 2234 , color : "green"},
                    {id : 3434 , color : "blue"}
                ],
                cart : 0
            }
        },
        methods : {
            addToCart(){
                this.cart+=1
            }
        }
    }
)