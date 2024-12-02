import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getIpv6Firewall(args?: GetIpv6FirewallArgs, opts?: pulumi.InvokeOptions): Promise<GetIpv6FirewallResult>;
/**
 * A collection of arguments for invoking getIpv6Firewall.
 */
export interface GetIpv6FirewallArgs {
    ___skip_?: string;
    id?: string;
    rules?: inputs.GetIpv6FirewallRule[];
}
/**
 * A collection of values returned by getIpv6Firewall.
 */
export interface GetIpv6FirewallResult {
    readonly ___skip_?: string;
    readonly id: string;
    readonly rules?: outputs.GetIpv6FirewallRule[];
}
export declare function getIpv6FirewallOutput(args?: GetIpv6FirewallOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpv6FirewallResult>;
/**
 * A collection of arguments for invoking getIpv6Firewall.
 */
export interface GetIpv6FirewallOutputArgs {
    ___skip_?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.GetIpv6FirewallRuleArgs>[]>;
}
