type Size = "" | "S" | "M" | "XL";

class Product {
    constructor(
        public name: string = "",
        public price: number = 0,
        public size: Size = ""
    ) {}

    isProductReady(): boolean {
        for (const key in this) {
            console.log(key, typeof this[key]);
            switch (typeof this[key]) {
                case "string":
                    if ((<string>this[key]).length <= 0)
                        throw new Error(`${this[key]} is empty`);
                    break;
                case "number":
                    if (<number>this[key] <= 0)
                        throw new Error(`${this[key]} is zero`);
                    break;
                default:
                    throw new Error(`${typeof this[key]} is not supported`);
            }
        }
        return false;
    }

    toString() {
        //no DRY
        //PARA SOLUCIONARLO CREAMOS isProductReady()
        // if (this.name.length <= 0) throw new Error("Name is empty");
        // if (this.price <= 0) throw new Error("Price is empty");
        // if (this.size.length <= 0) throw new Error("Size is empty");

        if (!this.isProductReady()) return;
        return `${this.name} (${this.price}), ${this.size}`;
    }
}

(() => {
    const bluePants = new Product("Blue large pants", 10, "M");
    console.log(bluePants.toString());
})();
