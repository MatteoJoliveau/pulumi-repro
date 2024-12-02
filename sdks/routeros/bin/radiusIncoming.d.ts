import * as pulumi from "@pulumi/pulumi";
export declare class RadiusIncoming extends pulumi.CustomResource {
    /**
     * Get an existing RadiusIncoming resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RadiusIncomingState, opts?: pulumi.CustomResourceOptions): RadiusIncoming;
    /**
     * Returns true if the given object is an instance of RadiusIncoming.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RadiusIncoming;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option whether to accept the unsolicited messages.
     */
    readonly accept: pulumi.Output<boolean | undefined>;
    /**
     * The port number to listen for the requests on.
     */
    readonly port: pulumi.Output<number | undefined>;
    readonly radiusIncomingId: pulumi.Output<string>;
    /**
     * VRF on which service is listening for incoming connections. This option is available in RouterOS starting from version
     * 7.4.
     */
    readonly vrf: pulumi.Output<string | undefined>;
    /**
     * Create a RadiusIncoming resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RadiusIncomingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RadiusIncoming resources.
 */
export interface RadiusIncomingState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option whether to accept the unsolicited messages.
     */
    accept?: pulumi.Input<boolean>;
    /**
     * The port number to listen for the requests on.
     */
    port?: pulumi.Input<number>;
    radiusIncomingId?: pulumi.Input<string>;
    /**
     * VRF on which service is listening for incoming connections. This option is available in RouterOS starting from version
     * 7.4.
     */
    vrf?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RadiusIncoming resource.
 */
export interface RadiusIncomingArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option whether to accept the unsolicited messages.
     */
    accept?: pulumi.Input<boolean>;
    /**
     * The port number to listen for the requests on.
     */
    port?: pulumi.Input<number>;
    radiusIncomingId?: pulumi.Input<string>;
    /**
     * VRF on which service is listening for incoming connections. This option is available in RouterOS starting from version
     * 7.4.
     */
    vrf?: pulumi.Input<string>;
}
