import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceEthernetSwitchHost extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEthernetSwitchHost resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceEthernetSwitchHostState, opts?: pulumi.CustomResourceOptions): InterfaceEthernetSwitchHost;
    /**
     * Returns true if the given object is an instance of InterfaceEthernetSwitchHost.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceEthernetSwitchHost;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to send a frame copy to switch CPU port from a frame with matching MAC destination address (matching destination
     * or source address for CRS3xx series switches).
     */
    readonly copyToCpu: pulumi.Output<boolean | undefined>;
    /**
     * Whether to drop a frame with matching MAC source address received on a certain port (matching destination or source
     * address for CRS3xx series switches).
     */
    readonly drop: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    readonly interfaceEthernetSwitchHostId: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Host's MAC address.
     */
    readonly macAddress: pulumi.Output<string>;
    /**
     * Whether to send a frame copy to mirror-target port from a frame with matching MAC destination address (matching
     * destination or source address for CRS3xx series switches).
     */
    readonly mirror: pulumi.Output<boolean | undefined>;
    /**
     * Name of the interface, static MAC address can be mapped to more that one port, including switch CPU port.
     */
    readonly ports: pulumi.Output<string[]>;
    /**
     * Whether to redirect a frame to switch CPU port from a frame with matching MAC destination address (matching destination
     * or source address for CRS3xx series switches).
     */
    readonly redirectToCpu: pulumi.Output<boolean | undefined>;
    /**
     * Whether the static host MAC address lookup is used with shared-VLAN-learning (SVL) or independent-VLAN-learning (IVL).
     * The SVL mode is used for those VLAN entries that do not support IVL or IVL is disabled (independent-learning=no).
     */
    readonly shareVlanLearned: pulumi.Output<boolean | undefined>;
    /**
     * Name of the switch to which the MAC address is going to be assigned to.
     */
    readonly switch: pulumi.Output<string>;
    /**
     * VLAN ID for the statically added MAC address entry.
     */
    readonly vlanId: pulumi.Output<string | undefined>;
    /**
     * Create a InterfaceEthernetSwitchHost resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceEthernetSwitchHostArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceEthernetSwitchHost resources.
 */
export interface InterfaceEthernetSwitchHostState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to send a frame copy to switch CPU port from a frame with matching MAC destination address (matching destination
     * or source address for CRS3xx series switches).
     */
    copyToCpu?: pulumi.Input<boolean>;
    /**
     * Whether to drop a frame with matching MAC source address received on a certain port (matching destination or source
     * address for CRS3xx series switches).
     */
    drop?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    interfaceEthernetSwitchHostId?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Host's MAC address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Whether to send a frame copy to mirror-target port from a frame with matching MAC destination address (matching
     * destination or source address for CRS3xx series switches).
     */
    mirror?: pulumi.Input<boolean>;
    /**
     * Name of the interface, static MAC address can be mapped to more that one port, including switch CPU port.
     */
    ports?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to redirect a frame to switch CPU port from a frame with matching MAC destination address (matching destination
     * or source address for CRS3xx series switches).
     */
    redirectToCpu?: pulumi.Input<boolean>;
    /**
     * Whether the static host MAC address lookup is used with shared-VLAN-learning (SVL) or independent-VLAN-learning (IVL).
     * The SVL mode is used for those VLAN entries that do not support IVL or IVL is disabled (independent-learning=no).
     */
    shareVlanLearned?: pulumi.Input<boolean>;
    /**
     * Name of the switch to which the MAC address is going to be assigned to.
     */
    switch?: pulumi.Input<string>;
    /**
     * VLAN ID for the statically added MAC address entry.
     */
    vlanId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceEthernetSwitchHost resource.
 */
export interface InterfaceEthernetSwitchHostArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to send a frame copy to switch CPU port from a frame with matching MAC destination address (matching destination
     * or source address for CRS3xx series switches).
     */
    copyToCpu?: pulumi.Input<boolean>;
    /**
     * Whether to drop a frame with matching MAC source address received on a certain port (matching destination or source
     * address for CRS3xx series switches).
     */
    drop?: pulumi.Input<boolean>;
    interfaceEthernetSwitchHostId?: pulumi.Input<string>;
    /**
     * Host's MAC address.
     */
    macAddress: pulumi.Input<string>;
    /**
     * Whether to send a frame copy to mirror-target port from a frame with matching MAC destination address (matching
     * destination or source address for CRS3xx series switches).
     */
    mirror?: pulumi.Input<boolean>;
    /**
     * Name of the interface, static MAC address can be mapped to more that one port, including switch CPU port.
     */
    ports: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether to redirect a frame to switch CPU port from a frame with matching MAC destination address (matching destination
     * or source address for CRS3xx series switches).
     */
    redirectToCpu?: pulumi.Input<boolean>;
    /**
     * Whether the static host MAC address lookup is used with shared-VLAN-learning (SVL) or independent-VLAN-learning (IVL).
     * The SVL mode is used for those VLAN entries that do not support IVL or IVL is disabled (independent-learning=no).
     */
    shareVlanLearned?: pulumi.Input<boolean>;
    /**
     * Name of the switch to which the MAC address is going to be assigned to.
     */
    switch: pulumi.Input<string>;
    /**
     * VLAN ID for the statically added MAC address entry.
     */
    vlanId?: pulumi.Input<string>;
}
