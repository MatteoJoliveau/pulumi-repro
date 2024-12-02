// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getFiles(args?: GetFilesArgs, opts?: pulumi.InvokeOptions): Promise<GetFilesResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("routeros:index/getFiles:getFiles", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFiles.
 */
export interface GetFilesArgs {
    ___id_?: number;
    ___path_?: string;
    filter?: {[key: string]: string};
    id?: string;
}

/**
 * A collection of values returned by getFiles.
 */
export interface GetFilesResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly files: outputs.GetFilesFile[];
    readonly filter?: {[key: string]: string};
    readonly id: string;
}
export function getFilesOutput(args?: GetFilesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFilesResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("routeros:index/getFiles:getFiles", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "filter": args.filter,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getFiles.
 */
export interface GetFilesOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    filter?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    id?: pulumi.Input<string>;
}
