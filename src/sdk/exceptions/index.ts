export class HautechException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'HautechException';
    }
}
