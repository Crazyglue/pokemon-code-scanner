import { type SetID, rawData } from "../data/set-data";

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
    // The last (most recent) set is selected by default
    currentSet: rawData[rawData.length - 1].id
})

