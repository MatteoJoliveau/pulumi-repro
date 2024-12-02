// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getSystemResource(args?: GetSystemResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemResourceResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("routeros:index/getSystemResource:getSystemResource", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "___skip_": args.___skip_,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemResource.
 */
export interface GetSystemResourceArgs {
    ___id_?: number;
    ___path_?: string;
    ___skip_?: string;
    id?: string;
}

/**
 * A collection of values returned by getSystemResource.
 */
export interface GetSystemResourceResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly ___skip_?: string;
    readonly architectureName: string;
    readonly boardName: string;
    readonly buildTime: string;
    readonly cpu: string;
    readonly cpuCount: number;
    readonly factorySoftware: string;
    readonly id: string;
    readonly platform: string;
    readonly totalHddSpace: number;
    readonly totalMemory: number;
    readonly version: string;
}
export function getSystemResourceOutput(args?: GetSystemResourceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemResourceResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("routeros:index/getSystemResource:getSystemResource", {
        "___id_": args.___id_,
        "___path_": args.___path_,
        "___skip_": args.___skip_,
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemResource.
 */
export interface GetSystemResourceOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    ___skip_?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
