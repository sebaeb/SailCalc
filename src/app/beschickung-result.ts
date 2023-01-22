import { coordinate } from "./coordinate";

export type BeschickungResult = {
    stromPunkt: coordinate | undefined;
    fuG: number;
    kdW: number;
    bs: number;
    schnittPunkt: coordinate | undefined;

}
