import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceEthernetSwitchPortIsolation extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEthernetSwitchPortIsolation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceEthernetSwitchPortIsolationState, opts?: pulumi.CustomResourceOptions): InterfaceEthernetSwitchPortIsolation;
    /**
     * Returns true if the given object is an instance of InterfaceEthernetSwitchPortIsolation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceEthernetSwitchPortIsolation;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___skip_: pulumi.Output<string | undefined>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    readonly ___unset_: pulumi.Output<string | undefined>;
    /**
     * Forces ingress traffic to be forwarded to a specific interface. Multiple interfaces can be specified by separating them
     * with a comma.
     */
    readonly forwardingOverride: pulumi.Output<string | undefined>;
    readonly interfaceEthernetSwitchPortIsolationId: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Port name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name of the switch.
     */
    readonly switch: pulumi.Output<string>;
    /**
     * Create a InterfaceEthernetSwitchPortIsolation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceEthernetSwitchPortIsolationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceEthernetSwitchPortIsolation resources.
 */
export interface InterfaceEthernetSwitchPortIsolationState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___skip_?: pulumi.Input<string>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * Forces ingress traffic to be forwarded to a specific interface. Multiple interfaces can be specified by separating them
     * with a comma.
     */
    forwardingOverride?: pulumi.Input<string>;
    interfaceEthernetSwitchPortIsolationId?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Port name.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the switch.
     */
    switch?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceEthernetSwitchPortIsolation resource.
 */
export interface InterfaceEthernetSwitchPortIsolationArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    ___skip_?: pulumi.Input<string>;
    /**
     * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not
     * required.</em>
     */
    ___unset_?: pulumi.Input<string>;
    /**
     * Forces ingress traffic to be forwarded to a specific interface. Multiple interfaces can be specified by separating them
     * with a comma.
     */
    forwardingOverride?: pulumi.Input<string>;
    interfaceEthernetSwitchPortIsolationId?: pulumi.Input<string>;
    /**
     * Port name.
     */
    name?: pulumi.Input<string>;
}
