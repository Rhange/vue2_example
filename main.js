let app = new Vue({
  el: '#app',
  data: {
    brand: 'Rhange',
    product: 'Socks',
    description: 'This socks is very popular.',
    selectedVariant: 0,
    link: 'https://www.softwear.com.ng/product/white-socks',
    inventory: 100,
    onSale: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "white",
        variantImage: './assets/white-socks.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "black",
        variantImage: './assets/black-socks.jpg',
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updateProduct(index) {
      this.selectedVariant = index
      console.log(index)
    },
    removeFromCart: function () {
      if (this.cart > 0 ) {
        this.cart -= 1
      }
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    }
  }
})