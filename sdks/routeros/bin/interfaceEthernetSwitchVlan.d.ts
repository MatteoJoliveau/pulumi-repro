import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceEthernetSwitchVlan extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEthernetSwitchVlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceEthernetSwitchVlanState, opts?: pulumi.CustomResourceOptions): InterfaceEthernetSwitchVlan;
    /**
     * Returns true if the given object is an instance of InterfaceEthernetSwitchVlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceEthernetSwitchVlan;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Whether to use shared-VLAN-learning (SVL) or independent-VLAN-learning (IVL).
     */
    readonly independentLearning: pulumi.Output<boolean | undefined>;
    readonly interfaceEthernetSwitchVlanId: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Interface member list for the respective VLAN.
     */
    readonly ports: pulumi.Output<string[]>;
    /**
     * Name of the switch for which the respective VLAN entry is intended for.
     */
    readonly switch: pulumi.Output<string>;
    /**
     * The VLAN ID for certain switch port configurations.
     */
    readonly vlanId: pulumi.Output<number | undefined>;
    /**
     * Create a InterfaceEthernetSwitchVlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceEthernetSwitchVlanArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceEthernetSwitchVlan resources.
 */
export interface InterfaceEthernetSwitchVlanState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Whether to use shared-VLAN-learning (SVL) or independent-VLAN-learning (IVL).
     */
    independentLearning?: pulumi.Input<boolean>;
    interfaceEthernetSwitchVlanId?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Interface member list for the respective VLAN.
     */
    ports?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the switch for which the respective VLAN entry is intended for.
     */
    switch?: pulumi.Input<string>;
    /**
     * The VLAN ID for certain switch port configurations.
     */
    vlanId?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a InterfaceEthernetSwitchVlan resource.
 */
export interface InterfaceEthernetSwitchVlanArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Whether to use shared-VLAN-learning (SVL) or independent-VLAN-learning (IVL).
     */
    independentLearning?: pulumi.Input<boolean>;
    interfaceEthernetSwitchVlanId?: pulumi.Input<string>;
    /**
     * Interface member list for the respective VLAN.
     */
    ports: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the switch for which the respective VLAN entry is intended for.
     */
    switch: pulumi.Input<string>;
    /**
     * The VLAN ID for certain switch port configurations.
     */
    vlanId?: pulumi.Input<number>;
}
