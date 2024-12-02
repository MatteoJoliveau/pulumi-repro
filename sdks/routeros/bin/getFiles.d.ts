import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getFiles(args?: GetFilesArgs, opts?: pulumi.InvokeOptions): Promise<GetFilesResult>;
/**
 * A collection of arguments for invoking getFiles.
 */
export interface GetFilesArgs {
    ___id_?: number;
    ___path_?: string;
    filter?: {
        [key: string]: string;
    };
    id?: string;
}
/**
 * A collection of values returned by getFiles.
 */
export interface GetFilesResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly files: outputs.GetFilesFile[];
    readonly filter?: {
        [key: string]: string;
    };
    readonly id: string;
}
export declare function getFilesOutput(args?: GetFilesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFilesResult>;
/**
 * A collection of arguments for invoking getFiles.
 */
export interface GetFilesOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    id?: pulumi.Input<string>;
}
