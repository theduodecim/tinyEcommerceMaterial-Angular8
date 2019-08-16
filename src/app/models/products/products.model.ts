export class ProductsModel {
    constructor(
        public id: number,
        public name: string,
        public images: Array<any>,
        public oldPrice: number,
        public newPrice: number,
        public discount: number,
        public ratingsCount: number,
        public ratingsValue: number,
        public description: string,
        public availibilityCount: number,
        public color: Array<string>,
        public size: Array<string>,
        public weight: number,
        public categoryId: number,
        public category: number,
        public quantityReq: number,
        public quantityPrice: number
    ) { }
}
