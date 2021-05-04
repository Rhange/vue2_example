let app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'This socks is very popular.',
    image: './assets/white-socks.jpg',
    link: 'https://www.softwear.com.ng/product/white-socks',
    inStock: true,
    inventory: 100,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "white",
        variantImage: './assets/white-socks.jpg'
      },
      {
        variantId: 2235,
        variantColor: "black",
        variantImage: './assets/black-socks.jpg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    },
    removeFromCart: function () {
      if (this.cart > 0 ) {
        this.cart -= 1
      }
    }
  }
})