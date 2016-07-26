// Type definitions for D3JS d3-dsv module 1.0.0
// Project: https://github.com/d3/d3-dsv/
// Definitions by: Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// ------------------------------------------------------------------------------------------
// Shared Types and Interfaces
// ------------------------------------------------------------------------------------------

export interface DSVRowString {
    [key: string]: string;
}

export interface DSVRowAny {
    [key: string]: any;
}

export interface DSVParsedArray<T> extends Array<T> {
    columns: Array<string>;
}

// ------------------------------------------------------------------------------------------
// CSV Parsers and Formatters
// ------------------------------------------------------------------------------------------

// csvParse(...) ============================================================================

export function csvParse(csvString: string): DSVParsedArray<DSVRowString>;
export function csvParse<ParsedRow extends DSVRowAny>(csvString: string, row: (rawRow: DSVRowString, index: number, columns: Array<string>) => ParsedRow): DSVParsedArray<ParsedRow>;

// csvParseRows(...) ========================================================================

export function csvParseRows(csvString: string): Array<Array<string>>;
export function csvParseRows<ParsedRow extends DSVRowAny>(csvString: string, row: (rawRow: Array<string>, index: number) => ParsedRow): Array<ParsedRow>;

// csvFormat(...) ============================================================================

export function csvFormat(rows: Array<DSVRowAny>): string;
export function csvFormat(rows: Array<DSVRowAny>, columns: Array<string>): string;

// csvFormatRows(...) ========================================================================

export function csvFormatRows(rows: Array<Array<string>>): string;

// ------------------------------------------------------------------------------------------
// TSV Parsers and Formatters
// ------------------------------------------------------------------------------------------

// tsvParse(...) ============================================================================

export function tsvParse(tsvString: string): DSVParsedArray<DSVRowString>;
export function tsvParse<ParsedRow extends DSVRowAny>(tsvString: string, row: (rawRow: DSVRowString, index: number, columns: Array<string>) => ParsedRow): DSVParsedArray<ParsedRow>;

// tsvParseRows(...) ========================================================================

export function tsvParseRows(tsvString: string): Array<Array<string>>;
export function tsvParseRows<ParsedRow extends DSVRowAny>(tsvString: string, row: (rawRow: Array<string>, index: number) => ParsedRow): Array<ParsedRow>;

// tsvFormat(...) ============================================================================

export function tsvFormat(rows: Array<DSVRowAny>): string;
export function tsvFormat(rows: Array<DSVRowAny>, columns: Array<string>): string;

// tsvFormatRows(...) ========================================================================

export function tsvFormatRows(rows: Array<Array<string>>): string;
