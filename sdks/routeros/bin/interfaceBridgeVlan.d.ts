import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceBridgeVlan extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceBridgeVlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceBridgeVlanState, opts?: pulumi.CustomResourceOptions): InterfaceBridgeVlan;
    /**
     * Returns true if the given object is an instance of InterfaceBridgeVlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceBridgeVlan;
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
     * The bridge interface which the respective VLAN entry is intended for.
     */
    readonly bridge: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly currentTaggeds: pulumi.Output<string[]>;
    readonly currentUntaggeds: pulumi.Output<string[]>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    readonly interfaceBridgeVlanId: pulumi.Output<string>;
    /**
     * Ports that ignore all MRP messages and remains Not Registered (MT), as well as disables applicant from declaring
     * specific VLAN ID (available since RouterOS 7.15).
     */
    readonly mvrpForbiddens: pulumi.Output<string[] | undefined>;
    /**
     * Interface list with a VLAN tag adding action in egress. This setting accepts comma separated values. E.g.
     * tagged=ether1,ether2.
     */
    readonly taggeds: pulumi.Output<string[] | undefined>;
    /**
     * Interface list with a VLAN tag removing action in egress. This setting accepts comma separated values. E.g.
     * untagged=ether3,ether4
     */
    readonly untaggeds: pulumi.Output<string[] | undefined>;
    /**
     * The list of VLAN IDs for certain port configuration. This setting accepts VLAN ID range as well as comma separated
     * values. E.g. `vlan-ids=["100-115","120","122","128-130"]`.
     */
    readonly vlanIds: pulumi.Output<string[]>;
    /**
     * Create a InterfaceBridgeVlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceBridgeVlanArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceBridgeVlan resources.
 */
export interface InterfaceBridgeVlanState {
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
     * The bridge interface which the respective VLAN entry is intended for.
     */
    bridge?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    currentTaggeds?: pulumi.Input<pulumi.Input<string>[]>;
    currentUntaggeds?: pulumi.Input<pulumi.Input<string>[]>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    interfaceBridgeVlanId?: pulumi.Input<string>;
    /**
     * Ports that ignore all MRP messages and remains Not Registered (MT), as well as disables applicant from declaring
     * specific VLAN ID (available since RouterOS 7.15).
     */
    mvrpForbiddens?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Interface list with a VLAN tag adding action in egress. This setting accepts comma separated values. E.g.
     * tagged=ether1,ether2.
     */
    taggeds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Interface list with a VLAN tag removing action in egress. This setting accepts comma separated values. E.g.
     * untagged=ether3,ether4
     */
    untaggeds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of VLAN IDs for certain port configuration. This setting accepts VLAN ID range as well as comma separated
     * values. E.g. `vlan-ids=["100-115","120","122","128-130"]`.
     */
    vlanIds?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a InterfaceBridgeVlan resource.
 */
export interface InterfaceBridgeVlanArgs {
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
     * The bridge interface which the respective VLAN entry is intended for.
     */
    bridge: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    interfaceBridgeVlanId?: pulumi.Input<string>;
    /**
     * Ports that ignore all MRP messages and remains Not Registered (MT), as well as disables applicant from declaring
     * specific VLAN ID (available since RouterOS 7.15).
     */
    mvrpForbiddens?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Interface list with a VLAN tag adding action in egress. This setting accepts comma separated values. E.g.
     * tagged=ether1,ether2.
     */
    taggeds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Interface list with a VLAN tag removing action in egress. This setting accepts comma separated values. E.g.
     * untagged=ether3,ether4
     */
    untaggeds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of VLAN IDs for certain port configuration. This setting accepts VLAN ID range as well as comma separated
     * values. E.g. `vlan-ids=["100-115","120","122","128-130"]`.
     */
    vlanIds: pulumi.Input<pulumi.Input<string>[]>;
}
