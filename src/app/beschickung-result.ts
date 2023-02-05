import { coordinate } from "./coordinate";

export type BeschickungResult = {
    stromPunkt: coordinate | undefined;
    fuG: number;
    kdW: number;
    bs: number;
    stR: number;
    stG: number;
    kuG: number;
    fdW: number;
    schnittPunkt: coordinate | undefined;

}
