import * as pulumi from "@pulumi/pulumi";
export declare class FirewallAddrList extends pulumi.CustomResource {
    /**
     * Get an existing FirewallAddrList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallAddrListState, opts?: pulumi.CustomResourceOptions): FirewallAddrList;
    /**
     * Returns true if the given object is an instance of FirewallAddrList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FirewallAddrList;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * A single IP address or range of IPs to add to address list or DNS name. You can input for example,
     * '192.168.0.0-192.168.1.255' and it will auto modify the typed entry to 192.168.0.0/23 on saving.
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
    readonly firewallAddrListId: pulumi.Output<string>;
    /**
     * Name for the address list of the added IP address.
     */
    readonly list: pulumi.Output<string>;
    readonly timeout: pulumi.Output<string | undefined>;
    /**
     * Create a FirewallAddrList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirewallAddrListArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FirewallAddrList resources.
 */
export interface FirewallAddrListState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * A single IP address or range of IPs to add to address list or DNS name. You can input for example,
     * '192.168.0.0-192.168.1.255' and it will auto modify the typed entry to 192.168.0.0/23 on saving.
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
    firewallAddrListId?: pulumi.Input<string>;
    /**
     * Name for the address list of the added IP address.
     */
    list?: pulumi.Input<string>;
    timeout?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a FirewallAddrList resource.
 */
export interface FirewallAddrListArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * A single IP address or range of IPs to add to address list or DNS name. You can input for example,
     * '192.168.0.0-192.168.1.255' and it will auto modify the typed entry to 192.168.0.0/23 on saving.
     */
    address: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    firewallAddrListId?: pulumi.Input<string>;
    /**
     * Name for the address list of the added IP address.
     */
    list: pulumi.Input<string>;
    timeout?: pulumi.Input<string>;
}
