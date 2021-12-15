export interface IToken {
    typ: string,
    sub: string,
    admin: boolean,
    exp: number
}