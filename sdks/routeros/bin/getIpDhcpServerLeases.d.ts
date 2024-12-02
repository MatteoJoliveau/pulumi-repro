import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getIpDhcpServerLeases(args?: GetIpDhcpServerLeasesArgs, opts?: pulumi.InvokeOptions): Promise<GetIpDhcpServerLeasesResult>;
/**
 * A collection of arguments for invoking getIpDhcpServerLeases.
 */
export interface GetIpDhcpServerLeasesArgs {
    ___id_?: number;
    ___path_?: string;
    filter?: {
        [key: string]: string;
    };
    id?: string;
}
/**
 * A collection of values returned by getIpDhcpServerLeases.
 */
export interface GetIpDhcpServerLeasesResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly datas: outputs.GetIpDhcpServerLeasesData[];
    readonly filter?: {
        [key: string]: string;
    };
    readonly id: string;
}
export declare function getIpDhcpServerLeasesOutput(args?: GetIpDhcpServerLeasesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpDhcpServerLeasesResult>;
/**
 * A collection of arguments for invoking getIpDhcpServerLeases.
 */
export interface GetIpDhcpServerLeasesOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    id?: pulumi.Input<string>;
}
