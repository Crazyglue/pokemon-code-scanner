export type ScannedCode = {
    code: string;
    set: string;
}

export type TableData = {
    rows: ScannedCode[],
    currentSet: string;
}

export const tableData: TableData = $state({
    rows: [],
    currentSet: 'Prismatic Evolutions'
})

