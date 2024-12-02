import * as pulumi from "@pulumi/pulumi";
export declare class ToolBandwidthServer extends pulumi.CustomResource {
    /**
     * Get an existing ToolBandwidthServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ToolBandwidthServerState, opts?: pulumi.CustomResourceOptions): ToolBandwidthServer;
    /**
     * Returns true if the given object is an instance of ToolBandwidthServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ToolBandwidthServer;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Beginning of UDP port range.
     */
    readonly allocateUdpPortsFrom: pulumi.Output<number | undefined>;
    /**
     * Communicate only with authenticated clients.
     */
    readonly authenticate: pulumi.Output<boolean | undefined>;
    /**
     * Defines whether bandwidth server is enabled or not.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Maximal simultaneous test count.
     */
    readonly maxSessions: pulumi.Output<number | undefined>;
    readonly toolBandwidthServerId: pulumi.Output<string>;
    /**
     * Create a ToolBandwidthServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ToolBandwidthServerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ToolBandwidthServer resources.
 */
export interface ToolBandwidthServerState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Beginning of UDP port range.
     */
    allocateUdpPortsFrom?: pulumi.Input<number>;
    /**
     * Communicate only with authenticated clients.
     */
    authenticate?: pulumi.Input<boolean>;
    /**
     * Defines whether bandwidth server is enabled or not.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Maximal simultaneous test count.
     */
    maxSessions?: pulumi.Input<number>;
    toolBandwidthServerId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ToolBandwidthServer resource.
 */
export interface ToolBandwidthServerArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Beginning of UDP port range.
     */
    allocateUdpPortsFrom?: pulumi.Input<number>;
    /**
     * Communicate only with authenticated clients.
     */
    authenticate?: pulumi.Input<boolean>;
    /**
     * Defines whether bandwidth server is enabled or not.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Maximal simultaneous test count.
     */
    maxSessions?: pulumi.Input<number>;
    toolBandwidthServerId?: pulumi.Input<string>;
}
