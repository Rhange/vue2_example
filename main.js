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
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ]
  }
})