import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getInterfaces(args?: GetInterfacesArgs, opts?: pulumi.InvokeOptions): Promise<GetInterfacesResult>;
/**
 * A collection of arguments for invoking getInterfaces.
 */
export interface GetInterfacesArgs {
    ___id_?: number;
    ___path_?: string;
    ___skip_?: string;
    filter?: {
        [key: string]: string;
    };
    id?: string;
}
/**
 * A collection of values returned by getInterfaces.
 */
export interface GetInterfacesResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly ___skip_?: string;
    readonly filter?: {
        [key: string]: string;
    };
    readonly id: string;
    readonly interfaces: outputs.GetInterfacesInterface[];
}
export declare function getInterfacesOutput(args?: GetInterfacesOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetInterfacesResult>;
/**
 * A collection of arguments for invoking getInterfaces.
 */
export interface GetInterfacesOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    ___skip_?: pulumi.Input<string>;
    filter?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    id?: pulumi.Input<string>;
}
