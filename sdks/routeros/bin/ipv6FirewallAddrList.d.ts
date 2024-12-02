import * as pulumi from "@pulumi/pulumi";
export declare class Ipv6FirewallAddrList extends pulumi.CustomResource {
    /**
     * Get an existing Ipv6FirewallAddrList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Ipv6FirewallAddrListState, opts?: pulumi.CustomResourceOptions): Ipv6FirewallAddrList;
    /**
     * Returns true if the given object is an instance of Ipv6FirewallAddrList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Ipv6FirewallAddrList;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * A single IPv6 address or IPv6 CIDR subnet
     */
    readonly address: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Rule creation time
     */
    readonly creationTime: pulumi.Output<string>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    readonly ipv6FirewallAddrListId: pulumi.Output<string>;
    /**
     * Name for the address list of the added IPv6 address.
     */
    readonly list: pulumi.Output<string>;
    readonly timeout: pulumi.Output<string | undefined>;
    /**
     * Create a Ipv6FirewallAddrList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Ipv6FirewallAddrListArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Ipv6FirewallAddrList resources.
 */
export interface Ipv6FirewallAddrListState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * A single IPv6 address or IPv6 CIDR subnet
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Rule creation time
     */
    creationTime?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    ipv6FirewallAddrListId?: pulumi.Input<string>;
    /**
     * Name for the address list of the added IPv6 address.
     */
    list?: pulumi.Input<string>;
    timeout?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Ipv6FirewallAddrList resource.
 */
export interface Ipv6FirewallAddrListArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * A single IPv6 address or IPv6 CIDR subnet
     */
    address: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    ipv6FirewallAddrListId?: pulumi.Input<string>;
    /**
     * Name for the address list of the added IPv6 address.
     */
    list: pulumi.Input<string>;
    timeout?: pulumi.Input<string>;
}