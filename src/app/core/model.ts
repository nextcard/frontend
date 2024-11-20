export class Item {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: number,
        public condition: string,
        public dateAdded: string,
        public tags: Tag[]
    ) {}
}

export class Tag {
    constructor(
        public id: number,
        public name: string
    ) {}
}

export class Category {
    constructor(
        public id: number,
        public name: string,
        public description: string
    ) {}
}
