import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceVxlanVteps extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceVxlanVteps resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceVxlanVtepsState, opts?: pulumi.CustomResourceOptions): InterfaceVxlanVteps;
    /**
     * Returns true if the given object is an instance of InterfaceVxlanVteps.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceVxlanVteps;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    readonly interfaceVxlanVtepsId: pulumi.Output<string>;
    /**
     * Used UDP port number.
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * The IPv4 or IPv6 destination address of remote VTEP.
     */
    readonly remoteIp: pulumi.Output<string | undefined>;
    /**
     * Create a InterfaceVxlanVteps resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceVxlanVtepsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceVxlanVteps resources.
 */
export interface InterfaceVxlanVtepsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    interfaceVxlanVtepsId?: pulumi.Input<string>;
    /**
     * Used UDP port number.
     */
    port?: pulumi.Input<number>;
    /**
     * The IPv4 or IPv6 destination address of remote VTEP.
     */
    remoteIp?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceVxlanVteps resource.
 */
export interface InterfaceVxlanVtepsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    interfaceVxlanVtepsId?: pulumi.Input<string>;
    /**
     * Used UDP port number.
     */
    port?: pulumi.Input<number>;
    /**
     * The IPv4 or IPv6 destination address of remote VTEP.
     */
    remoteIp?: pulumi.Input<string>;
}
