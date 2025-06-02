import { defineConfig } from "vite";
import { resolve } from "path";


export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                blog: resolve(__dirname, "blog.html"),
                contact: resolve(__dirname, "contact.html"),
                shop: resolve(__dirname, "shop.html"),
                thankyou: resolve(__dirname, "thank-you.html"),
                cart: resolve(__dirname, "cart.html"),
                productDetails: resolve(__dirname, "product-details.html")

            }
        }
    }
});