import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getIpAddresses(args?: GetIpAddressesArgs, opts?: pulumi.InvokeOptions): Promise<GetIpAddressesResult>;
/**
 * A collection of arguments for invoking getIpAddresses.
 */
export interface GetIpAddressesArgs {
    ___id_?: number;
    ___path_?: string;
    filter?: {
        [key: string]: string;
    };
    id?: string;
}
/**
 * A collection of values returned by getIpAddresses.
 */
export interface GetIpAddressesResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly addresses: outputs.GetIpAddressesAddress[];
    readonly filter?: {
        [key: string]: string;
    };
    readonly id: string;
}
export declare function getIpAddressesOutput(args?: GetIpAddressesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpAddressesResult>;
/**
 * A collection of arguments for invoking getIpAddresses.
 */
export interface GetIpAddressesOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    id?: pulumi.Input<string>;
}
