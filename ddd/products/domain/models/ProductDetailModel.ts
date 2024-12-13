export class ProductDetailModel {
    constructor(
        public readonly image: string,
        public readonly title: string,
        public readonly description: string,
        public readonly price: number,
    ) { }
}