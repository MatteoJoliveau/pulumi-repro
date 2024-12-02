import * as pulumi from "@pulumi/pulumi";
export declare function getWifiEasyConnect(args: GetWifiEasyConnectArgs, opts?: pulumi.InvokeOptions): Promise<GetWifiEasyConnectResult>;
/**
 * A collection of arguments for invoking getWifiEasyConnect.
 */
export interface GetWifiEasyConnectArgs {
    eapAnonymous?: boolean;
    eapIdentity?: string;
    eapMethod?: string;
    eapPhase2?: string;
    hidden?: boolean;
    id?: string;
    password: string;
    ssid: string;
    type?: string;
}
/**
 * A collection of values returned by getWifiEasyConnect.
 */
export interface GetWifiEasyConnectResult {
    readonly eapAnonymous?: boolean;
    readonly eapIdentity?: string;
    readonly eapMethod?: string;
    readonly eapPhase2?: string;
    readonly hidden?: boolean;
    readonly id: string;
    readonly password: string;
    readonly qrCode: string;
    readonly ssid: string;
    readonly type?: string;
}
export declare function getWifiEasyConnectOutput(args: GetWifiEasyConnectOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetWifiEasyConnectResult>;
/**
 * A collection of arguments for invoking getWifiEasyConnect.
 */
export interface GetWifiEasyConnectOutputArgs {
    eapAnonymous?: pulumi.Input<boolean>;
    eapIdentity?: pulumi.Input<string>;
    eapMethod?: pulumi.Input<string>;
    eapPhase2?: pulumi.Input<string>;
    hidden?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    password: pulumi.Input<string>;
    ssid: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
