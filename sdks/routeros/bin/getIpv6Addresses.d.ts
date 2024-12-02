import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getIpv6Addresses(args?: GetIpv6AddressesArgs, opts?: pulumi.InvokeOptions): Promise<GetIpv6AddressesResult>;
/**
 * A collection of arguments for invoking getIpv6Addresses.
 */
export interface GetIpv6AddressesArgs {
    ___id_?: number;
    ___path_?: string;
    filter?: {
        [key: string]: string;
    };
    id?: string;
}
/**
 * A collection of values returned by getIpv6Addresses.
 */
export interface GetIpv6AddressesResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly addresses: outputs.GetIpv6AddressesAddress[];
    readonly filter?: {
        [key: string]: string;
    };
    readonly id: string;
}
export declare function getIpv6AddressesOutput(args?: GetIpv6AddressesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpv6AddressesResult>;
/**
 * A collection of arguments for invoking getIpv6Addresses.
 */
export interface GetIpv6AddressesOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    id?: pulumi.Input<string>;
}
