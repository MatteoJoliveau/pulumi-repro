import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getFirewall(args?: GetFirewallArgs, opts?: pulumi.InvokeOptions): Promise<GetFirewallResult>;
/**
 * A collection of arguments for invoking getFirewall.
 */
export interface GetFirewallArgs {
    ___skip_?: string;
    addressLists?: inputs.GetFirewallAddressList[];
    id?: string;
    mangles?: inputs.GetFirewallMangle[];
    nats?: inputs.GetFirewallNat[];
    rules?: inputs.GetFirewallRule[];
}
/**
 * A collection of values returned by getFirewall.
 */
export interface GetFirewallResult {
    readonly ___skip_?: string;
    readonly addressLists?: outputs.GetFirewallAddressList[];
    readonly id: string;
    readonly mangles?: outputs.GetFirewallMangle[];
    readonly nats?: outputs.GetFirewallNat[];
    readonly rules?: outputs.GetFirewallRule[];
}
export declare function getFirewallOutput(args?: GetFirewallOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetFirewallResult>;
/**
 * A collection of arguments for invoking getFirewall.
 */
export interface GetFirewallOutputArgs {
    ___skip_?: pulumi.Input<string>;
    addressLists?: pulumi.Input<pulumi.Input<inputs.GetFirewallAddressListArgs>[]>;
    id?: pulumi.Input<string>;
    mangles?: pulumi.Input<pulumi.Input<inputs.GetFirewallMangleArgs>[]>;
    nats?: pulumi.Input<pulumi.Input<inputs.GetFirewallNatArgs>[]>;
    rules?: pulumi.Input<pulumi.Input<inputs.GetFirewallRuleArgs>[]>;
}
