import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getIpArp(args?: GetIpArpArgs, opts?: pulumi.InvokeOptions): Promise<GetIpArpResult>;
/**
 * A collection of arguments for invoking getIpArp.
 */
export interface GetIpArpArgs {
    ___id_?: number;
    ___path_?: string;
    filter?: {
        [key: string]: string;
    };
    id?: string;
}
/**
 * A collection of values returned by getIpArp.
 */
export interface GetIpArpResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly datas: outputs.GetIpArpData[];
    readonly filter?: {
        [key: string]: string;
    };
    readonly id: string;
}
export declare function getIpArpOutput(args?: GetIpArpOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpArpResult>;
/**
 * A collection of arguments for invoking getIpArp.
 */
export interface GetIpArpOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    id?: pulumi.Input<string>;
}
