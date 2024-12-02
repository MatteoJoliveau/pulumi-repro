import * as pulumi from "@pulumi/pulumi";
export declare class IpHotspotIpBinding extends pulumi.CustomResource {
    /**
     * Get an existing IpHotspotIpBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpHotspotIpBindingState, opts?: pulumi.CustomResourceOptions): IpHotspotIpBinding;
    /**
     * Returns true if the given object is an instance of IpHotspotIpBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpHotspotIpBinding;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * The original IP address of the client.
     */
    readonly address: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    readonly ipHotspotIpBindingId: pulumi.Output<string>;
    /**
     * MAC address of the client.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * Name of the HotSpot server. `all` - will be applied to all hotspot servers.
     */
    readonly server: pulumi.Output<string | undefined>;
    /**
     * New IP address of the client, translation occurs on the router (client does not know anything about the translation).
     */
    readonly toAddress: pulumi.Output<string | undefined>;
    /**
     * Type of the IP-binding action `regular` - performs One-to-One NAT according to the rule, translates the address to
     * to-address; `bypassed` - performs the translation, but excludes client from login to the HotSpot; `blocked` -
     * translation is not performed and packets from a host are dropped.
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Create a IpHotspotIpBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpHotspotIpBindingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpHotspotIpBinding resources.
 */
export interface IpHotspotIpBindingState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The original IP address of the client.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    ipHotspotIpBindingId?: pulumi.Input<string>;
    /**
     * MAC address of the client.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Name of the HotSpot server. `all` - will be applied to all hotspot servers.
     */
    server?: pulumi.Input<string>;
    /**
     * New IP address of the client, translation occurs on the router (client does not know anything about the translation).
     */
    toAddress?: pulumi.Input<string>;
    /**
     * Type of the IP-binding action `regular` - performs One-to-One NAT according to the rule, translates the address to
     * to-address; `bypassed` - performs the translation, but excludes client from login to the HotSpot; `blocked` -
     * translation is not performed and packets from a host are dropped.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpHotspotIpBinding resource.
 */
export interface IpHotspotIpBindingArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The original IP address of the client.
     */
    address?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    ipHotspotIpBindingId?: pulumi.Input<string>;
    /**
     * MAC address of the client.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Name of the HotSpot server. `all` - will be applied to all hotspot servers.
     */
    server?: pulumi.Input<string>;
    /**
     * New IP address of the client, translation occurs on the router (client does not know anything about the translation).
     */
    toAddress?: pulumi.Input<string>;
    /**
     * Type of the IP-binding action `regular` - performs One-to-One NAT according to the rule, translates the address to
     * to-address; `bypassed` - performs the translation, but excludes client from login to the HotSpot; `blocked` -
     * translation is not performed and packets from a host are dropped.
     */
    type?: pulumi.Input<string>;
}
