export interface SassOptions {
  file?: string;
  data?: string;
  importer?: (url: string, prev: string, done: (file?: string, contents?: string) => any) => any;
  functions?: Array<any>;
  includePaths?: Array<string>;
  indentedSyntax?: boolean;
  indentType?: string;
  indentWidth?: number;
  linefeed?: string;
  omitSourceMapUrl?: boolean;
  outFile?: string;
  outputStyle?: string;
  precision?: number;
  sourceComments?: boolean;
  sourceMap?: boolean;
  sourceMapContents?: boolean;
  sourceMapEmbed?: boolean;
  sourceMapRoot?: string;
}
