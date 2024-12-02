import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getIpFirewall(args?: GetIpFirewallArgs, opts?: pulumi.InvokeOptions): Promise<GetIpFirewallResult>;
/**
 * A collection of arguments for invoking getIpFirewall.
 */
export interface GetIpFirewallArgs {
    ___skip_?: string;
    addressLists?: inputs.GetIpFirewallAddressList[];
    id?: string;
    mangles?: inputs.GetIpFirewallMangle[];
    nats?: inputs.GetIpFirewallNat[];
    rules?: inputs.GetIpFirewallRule[];
}
/**
 * A collection of values returned by getIpFirewall.
 */
export interface GetIpFirewallResult {
    readonly ___skip_?: string;
    readonly addressLists?: outputs.GetIpFirewallAddressList[];
    readonly id: string;
    readonly mangles?: outputs.GetIpFirewallMangle[];
    readonly nats?: outputs.GetIpFirewallNat[];
    readonly rules?: outputs.GetIpFirewallRule[];
}
export declare function getIpFirewallOutput(args?: GetIpFirewallOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetIpFirewallResult>;
/**
 * A collection of arguments for invoking getIpFirewall.
 */
export interface GetIpFirewallOutputArgs {
    ___skip_?: pulumi.Input<string>;
    addressLists?: pulumi.Input<pulumi.Input<inputs.GetIpFirewallAddressListArgs>[]>;
    id?: pulumi.Input<string>;
    mangles?: pulumi.Input<pulumi.Input<inputs.GetIpFirewallMangleArgs>[]>;
    nats?: pulumi.Input<pulumi.Input<inputs.GetIpFirewallNatArgs>[]>;
    rules?: pulumi.Input<pulumi.Input<inputs.GetIpFirewallRuleArgs>[]>;
}
