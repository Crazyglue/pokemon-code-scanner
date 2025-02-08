type Obj = { [key: string]: string | number };

export function toCsv(data: Obj[]): string {
    if (data.length === 0) return '';

    const hSet = new Set<string>();
    data.forEach(d => Object.keys(d).forEach(k => hSet.add(k)))
    const headersArr = Array.from(hSet);

    const headerRow = headersArr.join(',');
    const dataRows = data.map(d => headersArr.map(h => d[h] ?? '')).join(',')

    return [headerRow, ...dataRows].join('\n');
}
