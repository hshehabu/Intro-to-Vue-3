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
                    {id : 2234 , color : "green" , image : './assets/images/socks_green.jpg'},
                    {id : 3434 , color : "blue" , image : './assets/images/socks_blue.jpg'}
                ],
                cart : 0
            }
        },
        methods : {
            addToCart(){
                this.cart+=1
            },
            changeImage(image){
                this.image = image
            },
            removeFromCart(){
                if (this.cart > 0) {
                    this.cart-=1
                }
            }
        }
    }
)