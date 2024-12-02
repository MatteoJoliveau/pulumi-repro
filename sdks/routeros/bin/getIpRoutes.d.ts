import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getIpRoutes(args?: GetIpRoutesArgs, opts?: pulumi.InvokeOptions): Promise<GetIpRoutesResult>;
/**
 * A collection of arguments for invoking getIpRoutes.
 */
export interface GetIpRoutesArgs {
    ___id_?: number;
    ___path_?: string;
    filter?: {
        [key: string]: string;
    };
    id?: string;
}
/**
 * A collection of values returned by getIpRoutes.
 */
export interface GetIpRoutesResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly filter?: {
        [key: string]: string;
    };
    readonly id: string;
    readonly routes: outputs.GetIpRoutesRoute[];
}
export declare function getIpRoutesOutput(args?: GetIpRoutesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpRoutesResult>;
/**
 * A collection of arguments for invoking getIpRoutes.
 */
export interface GetIpRoutesOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    id?: pulumi.Input<string>;
}
