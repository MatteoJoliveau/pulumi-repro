import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceEthernetSwitchRule extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEthernetSwitchRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceEthernetSwitchRuleState, opts?: pulumi.CustomResourceOptions): InterfaceEthernetSwitchRule;
    /**
     * Returns true if the given object is an instance of InterfaceEthernetSwitchRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceEthernetSwitchRule;
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
     * Whether to send a frame copy to switch CPU port from a frame with matching MAC destination address (matching destination
     * or source address for CRS3xx series switches).
     */
    readonly copyToCpu: pulumi.Output<boolean | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Matching DSCP field of the packet.
     */
    readonly dscp: pulumi.Output<number | undefined>;
    /**
     * Matching destination IP address and mask.
     */
    readonly dstAddress: pulumi.Output<string | undefined>;
    /**
     * Matching destination IPv6 address and mask.
     */
    readonly dstAddress6: pulumi.Output<string | undefined>;
    /**
     * Matching destination MAC address and mask.
     */
    readonly dstMacAddress: pulumi.Output<string | undefined>;
    /**
     * Matching destination protocol port number or range.
     */
    readonly dstPort: pulumi.Output<number | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * Matching IPv6 flow label.
     */
    readonly flowLabel: pulumi.Output<number | undefined>;
    readonly interfaceEthernetSwitchRuleId: pulumi.Output<string>;
    readonly invalid: pulumi.Output<boolean>;
    /**
     * Matching particular MAC protocol specified by protocol name or number (skips VLAN tags if any).
     */
    readonly macProtocol: pulumi.Output<string | undefined>;
    /**
     * Whether to send a frame copy to mirror-target port from a frame with matching MAC destination address (matching
     * destination or source address for CRS3xx series switches).
     */
    readonly mirror: pulumi.Output<boolean | undefined>;
    /**
     * Selects multiple mirroring target ports, only available on 88E6393X switch chip. Matched packets in the ACL rule will be
     * copied and sent to selected ports.
     */
    readonly mirrorPorts: pulumi.Output<string[] | undefined>;
    /**
     * Changes the destination port as specified, multiple ports allowed, including a switch CPU port. An empty setting will
     * drop the packet. When the parameter is not used, the packet will be accepted.
     */
    readonly newDstPorts: pulumi.Output<string[] | undefined>;
    /**
     * Changes the VLAN ID to the specified value or adds a new VLAN tag if one was not already present (the property only
     * applies to the Atheros8316, and 88E6393X switch chips).
     */
    readonly newVlanId: pulumi.Output<number | undefined>;
    /**
     * Changes the VLAN priority field (priority code point, the property only applies to Atheros8327, QCA8337 and Atheros8316
     * switch chips).
     */
    readonly newVlanPriority: pulumi.Output<number | undefined>;
    /**
     * Name of the interface on which the rule will apply on the received traffic, multiple ports are allowed.
     */
    readonly ports: pulumi.Output<string[]>;
    /**
     * Matching particular IP protocol specified by protocol name or number.
     */
    readonly protocol: pulumi.Output<string | undefined>;
    /**
     * Sets ingress traffic limitation (bits per second) for matched traffic, can only be applied to the first 32 rule slots
     * (the property only applies to Atheros8327/QCA8337 switch chips).
     */
    readonly rate: pulumi.Output<number | undefined>;
    /**
     * Changes the destination port of a matching packet to the switch CPU.
     */
    readonly redirectToCpu: pulumi.Output<boolean | undefined>;
    /**
     * Matching source IP address and mask.
     */
    readonly srcAddress: pulumi.Output<string | undefined>;
    /**
     * Matching source IPv6 address and mask.
     */
    readonly srcAddress6: pulumi.Output<string | undefined>;
    /**
     * Matching source MAC address and mask.
     */
    readonly srcMacAddress: pulumi.Output<string | undefined>;
    /**
     * Matching source protocol port number or range.
     */
    readonly srcPort: pulumi.Output<number | undefined>;
    /**
     * Matching switch group on which will the rule apply.
     */
    readonly switch: pulumi.Output<string>;
    /**
     * Matching IPv6 traffic class.
     */
    readonly trafficClass: pulumi.Output<number | undefined>;
    /**
     * Matching VLAN header, whether the VLAN header is present or not (the property only applies to the Atheros8316,
     * Atheros8327, QCA8337, 88E6393X switch chips).
     */
    readonly vlanHeader: pulumi.Output<string | undefined>;
    /**
     * Matching VLAN ID (the property only applies to the Atheros8316, Atheros8327, QCA8337, 88E6393X switch chips).
     */
    readonly vlanId: pulumi.Output<number | undefined>;
    /**
     * Matching VLAN priority (priority code point).
     */
    readonly vlanPriority: pulumi.Output<number | undefined>;
    /**
     * Create a InterfaceEthernetSwitchRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceEthernetSwitchRuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceEthernetSwitchRule resources.
 */
export interface InterfaceEthernetSwitchRuleState {
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
     * Whether to send a frame copy to switch CPU port from a frame with matching MAC destination address (matching destination
     * or source address for CRS3xx series switches).
     */
    copyToCpu?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Matching DSCP field of the packet.
     */
    dscp?: pulumi.Input<number>;
    /**
     * Matching destination IP address and mask.
     */
    dstAddress?: pulumi.Input<string>;
    /**
     * Matching destination IPv6 address and mask.
     */
    dstAddress6?: pulumi.Input<string>;
    /**
     * Matching destination MAC address and mask.
     */
    dstMacAddress?: pulumi.Input<string>;
    /**
     * Matching destination protocol port number or range.
     */
    dstPort?: pulumi.Input<number>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * Matching IPv6 flow label.
     */
    flowLabel?: pulumi.Input<number>;
    interfaceEthernetSwitchRuleId?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    /**
     * Matching particular MAC protocol specified by protocol name or number (skips VLAN tags if any).
     */
    macProtocol?: pulumi.Input<string>;
    /**
     * Whether to send a frame copy to mirror-target port from a frame with matching MAC destination address (matching
     * destination or source address for CRS3xx series switches).
     */
    mirror?: pulumi.Input<boolean>;
    /**
     * Selects multiple mirroring target ports, only available on 88E6393X switch chip. Matched packets in the ACL rule will be
     * copied and sent to selected ports.
     */
    mirrorPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Changes the destination port as specified, multiple ports allowed, including a switch CPU port. An empty setting will
     * drop the packet. When the parameter is not used, the packet will be accepted.
     */
    newDstPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Changes the VLAN ID to the specified value or adds a new VLAN tag if one was not already present (the property only
     * applies to the Atheros8316, and 88E6393X switch chips).
     */
    newVlanId?: pulumi.Input<number>;
    /**
     * Changes the VLAN priority field (priority code point, the property only applies to Atheros8327, QCA8337 and Atheros8316
     * switch chips).
     */
    newVlanPriority?: pulumi.Input<number>;
    /**
     * Name of the interface on which the rule will apply on the received traffic, multiple ports are allowed.
     */
    ports?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Matching particular IP protocol specified by protocol name or number.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Sets ingress traffic limitation (bits per second) for matched traffic, can only be applied to the first 32 rule slots
     * (the property only applies to Atheros8327/QCA8337 switch chips).
     */
    rate?: pulumi.Input<number>;
    /**
     * Changes the destination port of a matching packet to the switch CPU.
     */
    redirectToCpu?: pulumi.Input<boolean>;
    /**
     * Matching source IP address and mask.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Matching source IPv6 address and mask.
     */
    srcAddress6?: pulumi.Input<string>;
    /**
     * Matching source MAC address and mask.
     */
    srcMacAddress?: pulumi.Input<string>;
    /**
     * Matching source protocol port number or range.
     */
    srcPort?: pulumi.Input<number>;
    /**
     * Matching switch group on which will the rule apply.
     */
    switch?: pulumi.Input<string>;
    /**
     * Matching IPv6 traffic class.
     */
    trafficClass?: pulumi.Input<number>;
    /**
     * Matching VLAN header, whether the VLAN header is present or not (the property only applies to the Atheros8316,
     * Atheros8327, QCA8337, 88E6393X switch chips).
     */
    vlanHeader?: pulumi.Input<string>;
    /**
     * Matching VLAN ID (the property only applies to the Atheros8316, Atheros8327, QCA8337, 88E6393X switch chips).
     */
    vlanId?: pulumi.Input<number>;
    /**
     * Matching VLAN priority (priority code point).
     */
    vlanPriority?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a InterfaceEthernetSwitchRule resource.
 */
export interface InterfaceEthernetSwitchRuleArgs {
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
     * Whether to send a frame copy to switch CPU port from a frame with matching MAC destination address (matching destination
     * or source address for CRS3xx series switches).
     */
    copyToCpu?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Matching DSCP field of the packet.
     */
    dscp?: pulumi.Input<number>;
    /**
     * Matching destination IP address and mask.
     */
    dstAddress?: pulumi.Input<string>;
    /**
     * Matching destination IPv6 address and mask.
     */
    dstAddress6?: pulumi.Input<string>;
    /**
     * Matching destination MAC address and mask.
     */
    dstMacAddress?: pulumi.Input<string>;
    /**
     * Matching destination protocol port number or range.
     */
    dstPort?: pulumi.Input<number>;
    /**
     * Matching IPv6 flow label.
     */
    flowLabel?: pulumi.Input<number>;
    interfaceEthernetSwitchRuleId?: pulumi.Input<string>;
    /**
     * Matching particular MAC protocol specified by protocol name or number (skips VLAN tags if any).
     */
    macProtocol?: pulumi.Input<string>;
    /**
     * Whether to send a frame copy to mirror-target port from a frame with matching MAC destination address (matching
     * destination or source address for CRS3xx series switches).
     */
    mirror?: pulumi.Input<boolean>;
    /**
     * Selects multiple mirroring target ports, only available on 88E6393X switch chip. Matched packets in the ACL rule will be
     * copied and sent to selected ports.
     */
    mirrorPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Changes the destination port as specified, multiple ports allowed, including a switch CPU port. An empty setting will
     * drop the packet. When the parameter is not used, the packet will be accepted.
     */
    newDstPorts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Changes the VLAN ID to the specified value or adds a new VLAN tag if one was not already present (the property only
     * applies to the Atheros8316, and 88E6393X switch chips).
     */
    newVlanId?: pulumi.Input<number>;
    /**
     * Changes the VLAN priority field (priority code point, the property only applies to Atheros8327, QCA8337 and Atheros8316
     * switch chips).
     */
    newVlanPriority?: pulumi.Input<number>;
    /**
     * Name of the interface on which the rule will apply on the received traffic, multiple ports are allowed.
     */
    ports: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Matching particular IP protocol specified by protocol name or number.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Sets ingress traffic limitation (bits per second) for matched traffic, can only be applied to the first 32 rule slots
     * (the property only applies to Atheros8327/QCA8337 switch chips).
     */
    rate?: pulumi.Input<number>;
    /**
     * Changes the destination port of a matching packet to the switch CPU.
     */
    redirectToCpu?: pulumi.Input<boolean>;
    /**
     * Matching source IP address and mask.
     */
    srcAddress?: pulumi.Input<string>;
    /**
     * Matching source IPv6 address and mask.
     */
    srcAddress6?: pulumi.Input<string>;
    /**
     * Matching source MAC address and mask.
     */
    srcMacAddress?: pulumi.Input<string>;
    /**
     * Matching source protocol port number or range.
     */
    srcPort?: pulumi.Input<number>;
    /**
     * Matching switch group on which will the rule apply.
     */
    switch: pulumi.Input<string>;
    /**
     * Matching IPv6 traffic class.
     */
    trafficClass?: pulumi.Input<number>;
    /**
     * Matching VLAN header, whether the VLAN header is present or not (the property only applies to the Atheros8316,
     * Atheros8327, QCA8337, 88E6393X switch chips).
     */
    vlanHeader?: pulumi.Input<string>;
    /**
     * Matching VLAN ID (the property only applies to the Atheros8316, Atheros8327, QCA8337, 88E6393X switch chips).
     */
    vlanId?: pulumi.Input<number>;
    /**
     * Matching VLAN priority (priority code point).
     */
    vlanPriority?: pulumi.Input<number>;
}
