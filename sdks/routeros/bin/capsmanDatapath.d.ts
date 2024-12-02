import * as pulumi from "@pulumi/pulumi";
export declare class CapsmanDatapath extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanDatapath resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanDatapathState, opts?: pulumi.CustomResourceOptions): CapsmanDatapath;
    /**
     * Returns true if the given object is an instance of CapsmanDatapath.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CapsmanDatapath;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * ARP mode. See [docs](https://wiki.mikrotik.com/wiki/Manual:IP/ARP#ARP_Modes) for info.
     */
    readonly arp: pulumi.Output<string | undefined>;
    /**
     * Bridge to which particular interface should be automatically added as port. Required only when local-forwarding is not
     * used.
     */
    readonly bridge: pulumi.Output<string | undefined>;
    /**
     * Bridge port cost to use when adding as bridge port.
     */
    readonly bridgeCost: pulumi.Output<number | undefined>;
    /**
     * Bridge horizon to use when adding as bridge port.
     */
    readonly bridgeHorizon: pulumi.Output<number | undefined>;
    readonly capsmanDatapathId: pulumi.Output<string>;
    /**
     * Controls if client-to-client forwarding between wireless clients connected to interface should be allowed, in local
     * forwarding mode this function is performed by CAP, otherwise it is performed by CAPsMAN.
     */
    readonly clientToClientForwarding: pulumi.Output<boolean | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Interface list name.
     */
    readonly interfaceList: pulumi.Output<string | undefined>;
    /**
     * Layer2 MTU size.
     */
    readonly l2mtu: pulumi.Output<number | undefined>;
    /**
     * Controls forwarding mode. If disabled, all L2 and L3 data will be forwarded to CAPsMAN, and further forwarding decisions
     * will be made only then. See [docs](https://wiki.mikrotik.com/wiki/Manual:CAPsMAN#Local_Forwarding_Mode) for info.
     */
    readonly localForwarding: pulumi.Output<boolean | undefined>;
    /**
     * MTU size.
     */
    readonly mtu: pulumi.Output<number | undefined>;
    readonly name: pulumi.Output<string>;
    /**
     * OpenFlow switch to add interface to, as port when enabled.
     */
    readonly openflowSwitch: pulumi.Output<string | undefined>;
    /**
     * VLAN ID to assign to interface if vlan-mode enables use of VLAN tagging.
     */
    readonly vlanId: pulumi.Output<number | undefined>;
    /**
     * VLAN tagging mode specifies if VLAN tag should be assigned to interface (causes all received data to get tagged with
     * VLAN tag and allows interface to only send out data tagged with given tag)
     */
    readonly vlanMode: pulumi.Output<string | undefined>;
    /**
     * Create a CapsmanDatapath resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CapsmanDatapathArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CapsmanDatapath resources.
 */
export interface CapsmanDatapathState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * ARP mode. See [docs](https://wiki.mikrotik.com/wiki/Manual:IP/ARP#ARP_Modes) for info.
     */
    arp?: pulumi.Input<string>;
    /**
     * Bridge to which particular interface should be automatically added as port. Required only when local-forwarding is not
     * used.
     */
    bridge?: pulumi.Input<string>;
    /**
     * Bridge port cost to use when adding as bridge port.
     */
    bridgeCost?: pulumi.Input<number>;
    /**
     * Bridge horizon to use when adding as bridge port.
     */
    bridgeHorizon?: pulumi.Input<number>;
    capsmanDatapathId?: pulumi.Input<string>;
    /**
     * Controls if client-to-client forwarding between wireless clients connected to interface should be allowed, in local
     * forwarding mode this function is performed by CAP, otherwise it is performed by CAPsMAN.
     */
    clientToClientForwarding?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    /**
     * Interface list name.
     */
    interfaceList?: pulumi.Input<string>;
    /**
     * Layer2 MTU size.
     */
    l2mtu?: pulumi.Input<number>;
    /**
     * Controls forwarding mode. If disabled, all L2 and L3 data will be forwarded to CAPsMAN, and further forwarding decisions
     * will be made only then. See [docs](https://wiki.mikrotik.com/wiki/Manual:CAPsMAN#Local_Forwarding_Mode) for info.
     */
    localForwarding?: pulumi.Input<boolean>;
    /**
     * MTU size.
     */
    mtu?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    /**
     * OpenFlow switch to add interface to, as port when enabled.
     */
    openflowSwitch?: pulumi.Input<string>;
    /**
     * VLAN ID to assign to interface if vlan-mode enables use of VLAN tagging.
     */
    vlanId?: pulumi.Input<number>;
    /**
     * VLAN tagging mode specifies if VLAN tag should be assigned to interface (causes all received data to get tagged with
     * VLAN tag and allows interface to only send out data tagged with given tag)
     */
    vlanMode?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a CapsmanDatapath resource.
 */
export interface CapsmanDatapathArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * ARP mode. See [docs](https://wiki.mikrotik.com/wiki/Manual:IP/ARP#ARP_Modes) for info.
     */
    arp?: pulumi.Input<string>;
    /**
     * Bridge to which particular interface should be automatically added as port. Required only when local-forwarding is not
     * used.
     */
    bridge?: pulumi.Input<string>;
    /**
     * Bridge port cost to use when adding as bridge port.
     */
    bridgeCost?: pulumi.Input<number>;
    /**
     * Bridge horizon to use when adding as bridge port.
     */
    bridgeHorizon?: pulumi.Input<number>;
    capsmanDatapathId?: pulumi.Input<string>;
    /**
     * Controls if client-to-client forwarding between wireless clients connected to interface should be allowed, in local
     * forwarding mode this function is performed by CAP, otherwise it is performed by CAPsMAN.
     */
    clientToClientForwarding?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    /**
     * Interface list name.
     */
    interfaceList?: pulumi.Input<string>;
    /**
     * Layer2 MTU size.
     */
    l2mtu?: pulumi.Input<number>;
    /**
     * Controls forwarding mode. If disabled, all L2 and L3 data will be forwarded to CAPsMAN, and further forwarding decisions
     * will be made only then. See [docs](https://wiki.mikrotik.com/wiki/Manual:CAPsMAN#Local_Forwarding_Mode) for info.
     */
    localForwarding?: pulumi.Input<boolean>;
    /**
     * MTU size.
     */
    mtu?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    /**
     * OpenFlow switch to add interface to, as port when enabled.
     */
    openflowSwitch?: pulumi.Input<string>;
    /**
     * VLAN ID to assign to interface if vlan-mode enables use of VLAN tagging.
     */
    vlanId?: pulumi.Input<number>;
    /**
     * VLAN tagging mode specifies if VLAN tag should be assigned to interface (causes all received data to get tagged with
     * VLAN tag and allows interface to only send out data tagged with given tag)
     */
    vlanMode?: pulumi.Input<string>;
}
