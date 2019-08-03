export class Box<A> {
    private readonly value: A;

    constructor(a: A) {
        this.value = a;
    }

    map<B>(f: (a: A) => B): Box<B> {
        return new Box(f(this.value));
    }

    flatMap<B>(f: (a: A) => Box<B>): Box<B> {
        return f(this.value);
    }
}
