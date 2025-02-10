import { type SetID } from "../data/set-data";

export type ScannedCode = {
    code: string;
    set: string;
}

export type TableData = {
    rows: ScannedCode[],
    currentSet: SetID;
}

export const tableData: TableData = $state({
    rows: [],
    currentSet: 'sv8pt5'
})

