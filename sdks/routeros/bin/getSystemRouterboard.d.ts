import * as pulumi from "@pulumi/pulumi";
export declare function getSystemRouterboard(args?: GetSystemRouterboardArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemRouterboardResult>;
/**
 * A collection of arguments for invoking getSystemRouterboard.
 */
export interface GetSystemRouterboardArgs {
    ___id_?: number;
    ___path_?: string;
    id?: string;
}
/**
 * A collection of values returned by getSystemRouterboard.
 */
export interface GetSystemRouterboardResult {
    readonly ___id_?: number;
    readonly ___path_?: string;
    readonly currentFirmware: string;
    readonly factoryFirmware: string;
    readonly firmwareType: string;
    readonly id: string;
    readonly model: string;
    readonly revision: string;
    readonly routerboard: boolean;
    readonly serialNumber: string;
    readonly upgradeFirmware: string;
}
export declare function getSystemRouterboardOutput(args?: GetSystemRouterboardOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemRouterboardResult>;
/**
 * A collection of arguments for invoking getSystemRouterboard.
 */
export interface GetSystemRouterboardOutputArgs {
    ___id_?: pulumi.Input<number>;
    ___path_?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
