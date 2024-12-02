import * as pulumi from "@pulumi/pulumi";
export declare class BridgeMlag extends pulumi.CustomResource {
    /**
     * Get an existing BridgeMlag resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BridgeMlagState, opts?: pulumi.CustomResourceOptions): BridgeMlag;
    /**
     * Returns true if the given object is an instance of BridgeMlag.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BridgeMlag;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * The bridge interface where MLAG is being created.
     */
    readonly bridge: pulumi.Output<string>;
    readonly bridgeMlagId: pulumi.Output<string>;
    /**
     * An interface that will be used as a peer port. Both peer devices are using inter-chassis communication over these peer
     * ports to establish MLAG and update the host table. Peer port should be isolated on a different untagged VLAN using a
     * pvid setting. Peer port can be configured as a bonding interface.
     */
    readonly peerPort: pulumi.Output<string>;
    /**
     * Create a BridgeMlag resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BridgeMlagArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BridgeMlag resources.
 */
export interface BridgeMlagState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The bridge interface where MLAG is being created.
     */
    bridge?: pulumi.Input<string>;
    bridgeMlagId?: pulumi.Input<string>;
    /**
     * An interface that will be used as a peer port. Both peer devices are using inter-chassis communication over these peer
     * ports to establish MLAG and update the host table. Peer port should be isolated on a different untagged VLAN using a
     * pvid setting. Peer port can be configured as a bonding interface.
     */
    peerPort?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a BridgeMlag resource.
 */
export interface BridgeMlagArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The bridge interface where MLAG is being created.
     */
    bridge: pulumi.Input<string>;
    bridgeMlagId?: pulumi.Input<string>;
    /**
     * An interface that will be used as a peer port. Both peer devices are using inter-chassis communication over these peer
     * ports to establish MLAG and update the host table. Peer port should be isolated on a different untagged VLAN using a
     * pvid setting. Peer port can be configured as a bonding interface.
     */
    peerPort: pulumi.Input<string>;
}
