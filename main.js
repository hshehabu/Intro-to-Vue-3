const app = Vue.createApp(
    {
        data(){
            return {
                instock : true,
                product : 'socks',
                image : './assets/images/socks_green.jpg',
                url : 'https://yenesuq.com',
                inventory : 5,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants : [
                    {id : 2234 , color : "green" , image : './assets/images/socks_green.jpg', quantity : 30},
                    {id : 3434 , color : "blue" , image : './assets/images/socks_blue.jpg' , quantity : 0}
                ],
                cart : 0,
                brand : 'Vue Mastery',
            }
        },
        methods : {
            addToCart(){
                if(this.inventory > 0){

                    this.cart+=1
                    this.inventory-=1
                }
            },
            changeImage(image){
                this.image = image
            },
            removeFromCart(){
                if (this.cart > 0) {
                    this.cart-=1
                    this.inventory+=1
                }
            }
        } , 
        computed : {
            title (){
                return this.brand + ' ' + this.product
            }
        }
    }
)