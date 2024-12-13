export class ProductsModel {
    constructor(
        public readonly id: number,
        public readonly title: string,
        public readonly price: number,
        public readonly description: string,
        public readonly category: string,
        public readonly image: string,
        public readonly rating: {
            rate: number;
            count: number;
        }
    ) { }
}