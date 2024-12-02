import * as pulumi from "@pulumi/pulumi";
export declare class IpNeighborDiscoverySettings extends pulumi.CustomResource {
    /**
     * Get an existing IpNeighborDiscoverySettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpNeighborDiscoverySettingsState, opts?: pulumi.CustomResourceOptions): IpNeighborDiscoverySettings;
    /**
     * Returns true if the given object is an instance of IpNeighborDiscoverySettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpNeighborDiscoverySettings;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Interface list on which members the discovery protocol will run on.
     */
    readonly discoverInterfaceList: pulumi.Output<string | undefined>;
    /**
     * An option to adjust the frequency at which neighbor discovery packets are transmitted. The setting is available since
     * RouterOS version 7.16.
     */
    readonly discoverInterval: pulumi.Output<string | undefined>;
    readonly ipNeighborDiscoverySettingsId: pulumi.Output<string>;
    /**
     * Whether to send MAC/PHY Configuration/Status TLV in LLDP, which indicates the interface capabilities, current setting of
     * the duplex status, bit rate, and auto-negotiation. Only applies to the Ethernet interfaces. While TLV is optional in
     * LLDP, it is mandatory when sending LLDP-MED, meaning this TLV will be included when necessary even though the property
     * is configured as disabled.
     */
    readonly lldpMacPhyConfig: pulumi.Output<boolean | undefined>;
    /**
     * Whether to send Maximum Frame Size TLV in LLDP, which indicates the maximum frame size capability of the interface in
     * bytes (`l2mtu + 18`). Only applies to the Ethernet interfaces.
     */
    readonly lldpMaxFrameSize: pulumi.Output<boolean | undefined>;
    /**
     * Advertised VLAN ID for LLDP-MED Network Policy TLV. This allows assigning a VLAN ID for LLDP-MED capable devices, such
     * as VoIP phones. The TLV will only be added to interfaces where LLDP-MED capable devices are discovered. Other TLV values
     * are predefined and cannot be changed: - Application Type - Voice - VLAN Type - Tagged - L2 Priority - 0 - DSCP Priority
     * - 0 When used together with the bridge interface, the (R/M)STP protocol should be enabled with protocol-mode setting.
     * Additionally, other neighbor discovery protocols (e.g. CDP) should be excluded using protocol setting to avoid LLDP-MED
     * misconfiguration.
     */
    readonly lldpMedNetPolicyVlan: pulumi.Output<string | undefined>;
    /**
     * Two specific TLVs facilitate Power over Ethernet (PoE) management between Power Sourcing Equipment (PSE) and Powered
     * Devices (PD).
     */
    readonly lldpPoePower: pulumi.Output<boolean | undefined>;
    /**
     * An option whether to send IEEE 802.1 Organizationally Specific TLVs in LLDP related to VLANs. The setting is available
     * since RouterOS version 7.16.
     */
    readonly lldpVlanInfo: pulumi.Output<boolean | undefined>;
    /**
     * Selects the neighbor discovery packet sending and receiving mode. The setting is available since RouterOS version 7.7.
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * List of used discovery protocols.
     */
    readonly protocols: pulumi.Output<string[] | undefined>;
    /**
     * Create a IpNeighborDiscoverySettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IpNeighborDiscoverySettingsArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpNeighborDiscoverySettings resources.
 */
export interface IpNeighborDiscoverySettingsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Interface list on which members the discovery protocol will run on.
     */
    discoverInterfaceList?: pulumi.Input<string>;
    /**
     * An option to adjust the frequency at which neighbor discovery packets are transmitted. The setting is available since
     * RouterOS version 7.16.
     */
    discoverInterval?: pulumi.Input<string>;
    ipNeighborDiscoverySettingsId?: pulumi.Input<string>;
    /**
     * Whether to send MAC/PHY Configuration/Status TLV in LLDP, which indicates the interface capabilities, current setting of
     * the duplex status, bit rate, and auto-negotiation. Only applies to the Ethernet interfaces. While TLV is optional in
     * LLDP, it is mandatory when sending LLDP-MED, meaning this TLV will be included when necessary even though the property
     * is configured as disabled.
     */
    lldpMacPhyConfig?: pulumi.Input<boolean>;
    /**
     * Whether to send Maximum Frame Size TLV in LLDP, which indicates the maximum frame size capability of the interface in
     * bytes (`l2mtu + 18`). Only applies to the Ethernet interfaces.
     */
    lldpMaxFrameSize?: pulumi.Input<boolean>;
    /**
     * Advertised VLAN ID for LLDP-MED Network Policy TLV. This allows assigning a VLAN ID for LLDP-MED capable devices, such
     * as VoIP phones. The TLV will only be added to interfaces where LLDP-MED capable devices are discovered. Other TLV values
     * are predefined and cannot be changed: - Application Type - Voice - VLAN Type - Tagged - L2 Priority - 0 - DSCP Priority
     * - 0 When used together with the bridge interface, the (R/M)STP protocol should be enabled with protocol-mode setting.
     * Additionally, other neighbor discovery protocols (e.g. CDP) should be excluded using protocol setting to avoid LLDP-MED
     * misconfiguration.
     */
    lldpMedNetPolicyVlan?: pulumi.Input<string>;
    /**
     * Two specific TLVs facilitate Power over Ethernet (PoE) management between Power Sourcing Equipment (PSE) and Powered
     * Devices (PD).
     */
    lldpPoePower?: pulumi.Input<boolean>;
    /**
     * An option whether to send IEEE 802.1 Organizationally Specific TLVs in LLDP related to VLANs. The setting is available
     * since RouterOS version 7.16.
     */
    lldpVlanInfo?: pulumi.Input<boolean>;
    /**
     * Selects the neighbor discovery packet sending and receiving mode. The setting is available since RouterOS version 7.7.
     */
    mode?: pulumi.Input<string>;
    /**
     * List of used discovery protocols.
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a IpNeighborDiscoverySettings resource.
 */
export interface IpNeighborDiscoverySettingsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Interface list on which members the discovery protocol will run on.
     */
    discoverInterfaceList?: pulumi.Input<string>;
    /**
     * An option to adjust the frequency at which neighbor discovery packets are transmitted. The setting is available since
     * RouterOS version 7.16.
     */
    discoverInterval?: pulumi.Input<string>;
    ipNeighborDiscoverySettingsId?: pulumi.Input<string>;
    /**
     * Whether to send MAC/PHY Configuration/Status TLV in LLDP, which indicates the interface capabilities, current setting of
     * the duplex status, bit rate, and auto-negotiation. Only applies to the Ethernet interfaces. While TLV is optional in
     * LLDP, it is mandatory when sending LLDP-MED, meaning this TLV will be included when necessary even though the property
     * is configured as disabled.
     */
    lldpMacPhyConfig?: pulumi.Input<boolean>;
    /**
     * Whether to send Maximum Frame Size TLV in LLDP, which indicates the maximum frame size capability of the interface in
     * bytes (`l2mtu + 18`). Only applies to the Ethernet interfaces.
     */
    lldpMaxFrameSize?: pulumi.Input<boolean>;
    /**
     * Advertised VLAN ID for LLDP-MED Network Policy TLV. This allows assigning a VLAN ID for LLDP-MED capable devices, such
     * as VoIP phones. The TLV will only be added to interfaces where LLDP-MED capable devices are discovered. Other TLV values
     * are predefined and cannot be changed: - Application Type - Voice - VLAN Type - Tagged - L2 Priority - 0 - DSCP Priority
     * - 0 When used together with the bridge interface, the (R/M)STP protocol should be enabled with protocol-mode setting.
     * Additionally, other neighbor discovery protocols (e.g. CDP) should be excluded using protocol setting to avoid LLDP-MED
     * misconfiguration.
     */
    lldpMedNetPolicyVlan?: pulumi.Input<string>;
    /**
     * Two specific TLVs facilitate Power over Ethernet (PoE) management between Power Sourcing Equipment (PSE) and Powered
     * Devices (PD).
     */
    lldpPoePower?: pulumi.Input<boolean>;
    /**
     * An option whether to send IEEE 802.1 Organizationally Specific TLVs in LLDP related to VLANs. The setting is available
     * since RouterOS version 7.16.
     */
    lldpVlanInfo?: pulumi.Input<boolean>;
    /**
     * Selects the neighbor discovery packet sending and receiving mode. The setting is available since RouterOS version 7.7.
     */
    mode?: pulumi.Input<string>;
    /**
     * List of used discovery protocols.
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
}
