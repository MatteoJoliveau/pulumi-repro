import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getIpServices(args?: GetIpServicesArgs, opts?: pulumi.InvokeOptions): Promise<GetIpServicesResult>;
/**
 * A collection of arguments for invoking getIpServices.
 */
export interface GetIpServicesArgs {
    ___id_?: number;
    ___path_?: string;
    filter?: {
        [key: string]: string;
    };
    id?: string;
}
/**
 * A collection of values returned by getIpServices.
 */
export interface GetIpServicesResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly filter?: {
        [key: string]: string;
    };
    readonly id: string;
    readonly services: outputs.GetIpServicesService[];
}
export declare function getIpServicesOutput(args?: GetIpServicesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpServicesResult>;
/**
 * A collection of arguments for invoking getIpServices.
 */
export interface GetIpServicesOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    id?: pulumi.Input<string>;
}
