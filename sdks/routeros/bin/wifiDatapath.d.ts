import * as pulumi from "@pulumi/pulumi";
export declare class WifiDatapath extends pulumi.CustomResource {
    /**
     * Get an existing WifiDatapath resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiDatapathState, opts?: pulumi.CustomResourceOptions): WifiDatapath;
    /**
     * Returns true if the given object is an instance of WifiDatapath.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WifiDatapath;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Bridge interface to add the interface as a bridge port.
     */
    readonly bridge: pulumi.Output<string | undefined>;
    /**
     * Spanning tree protocol cost of the bridge port.
     */
    readonly bridgeCost: pulumi.Output<string | undefined>;
    /**
     * Bridge horizon to use when adding as a bridge port.
     */
    readonly bridgeHorizon: pulumi.Output<string | undefined>;
    /**
     * An option to toggle communication between clients connected to the same AP.
     */
    readonly clientIsolation: pulumi.Output<boolean | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * List to which add the interface as a member.
     */
    readonly interfaceList: pulumi.Output<string | undefined>;
    /**
     * Name of the datapath.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Default VLAN ID to assign to client devices connecting to this interface.
     */
    readonly vlanId: pulumi.Output<string | undefined>;
    readonly wifiDatapathId: pulumi.Output<string>;
    /**
     * Create a WifiDatapath resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiDatapathArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WifiDatapath resources.
 */
export interface WifiDatapathState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Bridge interface to add the interface as a bridge port.
     */
    bridge?: pulumi.Input<string>;
    /**
     * Spanning tree protocol cost of the bridge port.
     */
    bridgeCost?: pulumi.Input<string>;
    /**
     * Bridge horizon to use when adding as a bridge port.
     */
    bridgeHorizon?: pulumi.Input<string>;
    /**
     * An option to toggle communication between clients connected to the same AP.
     */
    clientIsolation?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * List to which add the interface as a member.
     */
    interfaceList?: pulumi.Input<string>;
    /**
     * Name of the datapath.
     */
    name?: pulumi.Input<string>;
    /**
     * Default VLAN ID to assign to client devices connecting to this interface.
     */
    vlanId?: pulumi.Input<string>;
    wifiDatapathId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WifiDatapath resource.
 */
export interface WifiDatapathArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Bridge interface to add the interface as a bridge port.
     */
    bridge?: pulumi.Input<string>;
    /**
     * Spanning tree protocol cost of the bridge port.
     */
    bridgeCost?: pulumi.Input<string>;
    /**
     * Bridge horizon to use when adding as a bridge port.
     */
    bridgeHorizon?: pulumi.Input<string>;
    /**
     * An option to toggle communication between clients connected to the same AP.
     */
    clientIsolation?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * List to which add the interface as a member.
     */
    interfaceList?: pulumi.Input<string>;
    /**
     * Name of the datapath.
     */
    name?: pulumi.Input<string>;
    /**
     * Default VLAN ID to assign to client devices connecting to this interface.
     */
    vlanId?: pulumi.Input<string>;
    wifiDatapathId?: pulumi.Input<string>;
}
