import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceVxlan extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceVxlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceVxlanState, opts?: pulumi.CustomResourceOptions): InterfaceVxlan;
    /**
     * Returns true if the given object is an instance of InterfaceVxlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceVxlan;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to allow Fast Path processing. Fragmented and flooded packets over VXLAN are redirected via a slow path. Fast
     * Path is disabled for VXLAN interface that uses IPv6 VTEP version or VRF. The setting is available since RouterOS version
     * 7.8.
     */
    readonly allowFastPath: pulumi.Output<boolean | undefined>;
    /**
     * Address Resolution Protocol setting disabled - the interface will not use ARP enabled - the interface will use ARP
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface proxy-arp - the
     * router performs proxy ARP on the interface and sends replies to other interfaces reply-only - the interface will only
     * reply to requests originating from matching IP address/MAC address combinations which are entered as static entries in
     * the IP/ARP table. No dynamic entries will be automatically stored in the IP/ARP table. Therefore for communications to
     * be successful, a valid static entry must already exist.
     */
    readonly arp: pulumi.Output<string | undefined>;
    /**
     * How long the ARP record is kept in the ARP table after no packets are received from IP. Value auto equals to the value
     * of arp-timeout in IP/Settings, default is the 30s.
     */
    readonly arpTimeout: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * The Don't Fragment (DF) flag controls whether a packet can be broken into smaller packets, called fragments, before
     * being sent over a network. When configuring VXLAN, this setting determines the presence of the DF flag on the outer IPv4
     * header and can control packet fragmentation if the encapsulated packet exceeds the outgoing interface MTU. This setting
     * has three options: disabled - the DF flag is not set on the outer IPv4 header, which means that packets can be
     * fragmented if they are too large to be sent over the outgoing interface. This also allows packet fragmentation when
     * VXLAN uses IPv6 underlay. enabled - the DF flag is always set on the outer IPv4 header, which means that packets will
     * not be fragmented and will be dropped if they exceed the outgoing interface's MTU. This also avoids packet fragmentation
     * when VXLAN uses IPv6 underlay. inherit - The DF flag on the outer IPv4 header is based on the inner IPv4 DF flag. If the
     * inner IPv4 header has the DF flag set, the outer IPv4 header will also have it set. If the packet exceeds the outgoing
     * interface's MTU and DF is set, it will be dropped. If the inner packet is non-IP, the outer IPv4 header will not have
     * the DF flag set and packets can be fragmented. If the inner packet is IPv6, the outer IPv4 header will always set the DF
     * flag and packets cannot be fragmented. Note that when VXLAN uses IPv6 underlay, this setting does not have any effect
     * and is treated the same as disabled. The setting is available since RouterOS version 7.8.
     */
    readonly dontFragment: pulumi.Output<string | undefined>;
    /**
     * When specified, a multicast group address can be used to forward broadcast, unknown-unicast, and multicast traffic
     * between VTEPs. This property requires specifying the interface setting. The interface will use IGMP or MLD to join the
     * specified multicast group, make sure to add the necessary PIM and IGMP/MDL configuration. When this property is set, the
     * vteps-ip-version automatically gets updated to the used multicast IP version.
     */
    readonly group: pulumi.Output<string | undefined>;
    /**
     * Interface name used for multicast forwarding. This property requires specifying the group setting.
     */
    readonly interface: pulumi.Output<string | undefined>;
    readonly interfaceVxlanId: pulumi.Output<string>;
    /**
     * Specifies the local source address for the VXLAN interface. If not set, one IP address of the egress interface will be
     * selected as a source address for VXLAN packets. When the property is set, the vteps-ip-version automatically gets
     * updated to the used local IP version. The setting is available since RouterOS version 7.7.
     */
    readonly localAddress: pulumi.Output<string | undefined>;
    /**
     * Static MAC address of the interface. A randomly generated MAC address will be assigned when not specified.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * Limits the maximum number of MAC addresses that VXLAN can store in the forwarding database (FDB).
     */
    readonly maxFdbSize: pulumi.Output<number | undefined>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    readonly mtu: pulumi.Output<string>;
    /**
     * Name of the interface.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Used UDP port number.
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * VXLAN Network Identifier (VNI).
     */
    readonly vni: pulumi.Output<number | undefined>;
    /**
     * The VRF table this resource operates on.
     */
    readonly vrf: pulumi.Output<string | undefined>;
    /**
     * Used IP protocol version for statically configured VTEPs. The RouterOS VXLAN interface does not support dual-stack, any
     * configured remote VTEPs with the opposite IP version will be ignored. When multicast group or local-address properties
     * are set, the vteps-ip-version automatically gets updated to the used IP version. The setting is available since RouterOS
     * version 7.6.
     */
    readonly vtepsIpVersion: pulumi.Output<string | undefined>;
    /**
     * Create a InterfaceVxlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceVxlanArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceVxlan resources.
 */
export interface InterfaceVxlanState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to allow Fast Path processing. Fragmented and flooded packets over VXLAN are redirected via a slow path. Fast
     * Path is disabled for VXLAN interface that uses IPv6 VTEP version or VRF. The setting is available since RouterOS version
     * 7.8.
     */
    allowFastPath?: pulumi.Input<boolean>;
    /**
     * Address Resolution Protocol setting disabled - the interface will not use ARP enabled - the interface will use ARP
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface proxy-arp - the
     * router performs proxy ARP on the interface and sends replies to other interfaces reply-only - the interface will only
     * reply to requests originating from matching IP address/MAC address combinations which are entered as static entries in
     * the IP/ARP table. No dynamic entries will be automatically stored in the IP/ARP table. Therefore for communications to
     * be successful, a valid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * How long the ARP record is kept in the ARP table after no packets are received from IP. Value auto equals to the value
     * of arp-timeout in IP/Settings, default is the 30s.
     */
    arpTimeout?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The Don't Fragment (DF) flag controls whether a packet can be broken into smaller packets, called fragments, before
     * being sent over a network. When configuring VXLAN, this setting determines the presence of the DF flag on the outer IPv4
     * header and can control packet fragmentation if the encapsulated packet exceeds the outgoing interface MTU. This setting
     * has three options: disabled - the DF flag is not set on the outer IPv4 header, which means that packets can be
     * fragmented if they are too large to be sent over the outgoing interface. This also allows packet fragmentation when
     * VXLAN uses IPv6 underlay. enabled - the DF flag is always set on the outer IPv4 header, which means that packets will
     * not be fragmented and will be dropped if they exceed the outgoing interface's MTU. This also avoids packet fragmentation
     * when VXLAN uses IPv6 underlay. inherit - The DF flag on the outer IPv4 header is based on the inner IPv4 DF flag. If the
     * inner IPv4 header has the DF flag set, the outer IPv4 header will also have it set. If the packet exceeds the outgoing
     * interface's MTU and DF is set, it will be dropped. If the inner packet is non-IP, the outer IPv4 header will not have
     * the DF flag set and packets can be fragmented. If the inner packet is IPv6, the outer IPv4 header will always set the DF
     * flag and packets cannot be fragmented. Note that when VXLAN uses IPv6 underlay, this setting does not have any effect
     * and is treated the same as disabled. The setting is available since RouterOS version 7.8.
     */
    dontFragment?: pulumi.Input<string>;
    /**
     * When specified, a multicast group address can be used to forward broadcast, unknown-unicast, and multicast traffic
     * between VTEPs. This property requires specifying the interface setting. The interface will use IGMP or MLD to join the
     * specified multicast group, make sure to add the necessary PIM and IGMP/MDL configuration. When this property is set, the
     * vteps-ip-version automatically gets updated to the used multicast IP version.
     */
    group?: pulumi.Input<string>;
    /**
     * Interface name used for multicast forwarding. This property requires specifying the group setting.
     */
    interface?: pulumi.Input<string>;
    interfaceVxlanId?: pulumi.Input<string>;
    /**
     * Specifies the local source address for the VXLAN interface. If not set, one IP address of the egress interface will be
     * selected as a source address for VXLAN packets. When the property is set, the vteps-ip-version automatically gets
     * updated to the used local IP version. The setting is available since RouterOS version 7.7.
     */
    localAddress?: pulumi.Input<string>;
    /**
     * Static MAC address of the interface. A randomly generated MAC address will be assigned when not specified.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Limits the maximum number of MAC addresses that VXLAN can store in the forwarding database (FDB).
     */
    maxFdbSize?: pulumi.Input<number>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Used UDP port number.
     */
    port?: pulumi.Input<number>;
    /**
     * VXLAN Network Identifier (VNI).
     */
    vni?: pulumi.Input<number>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
    /**
     * Used IP protocol version for statically configured VTEPs. The RouterOS VXLAN interface does not support dual-stack, any
     * configured remote VTEPs with the opposite IP version will be ignored. When multicast group or local-address properties
     * are set, the vteps-ip-version automatically gets updated to the used IP version. The setting is available since RouterOS
     * version 7.6.
     */
    vtepsIpVersion?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceVxlan resource.
 */
export interface InterfaceVxlanArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to allow Fast Path processing. Fragmented and flooded packets over VXLAN are redirected via a slow path. Fast
     * Path is disabled for VXLAN interface that uses IPv6 VTEP version or VRF. The setting is available since RouterOS version
     * 7.8.
     */
    allowFastPath?: pulumi.Input<boolean>;
    /**
     * Address Resolution Protocol setting disabled - the interface will not use ARP enabled - the interface will use ARP
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface proxy-arp - the
     * router performs proxy ARP on the interface and sends replies to other interfaces reply-only - the interface will only
     * reply to requests originating from matching IP address/MAC address combinations which are entered as static entries in
     * the IP/ARP table. No dynamic entries will be automatically stored in the IP/ARP table. Therefore for communications to
     * be successful, a valid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * How long the ARP record is kept in the ARP table after no packets are received from IP. Value auto equals to the value
     * of arp-timeout in IP/Settings, default is the 30s.
     */
    arpTimeout?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The Don't Fragment (DF) flag controls whether a packet can be broken into smaller packets, called fragments, before
     * being sent over a network. When configuring VXLAN, this setting determines the presence of the DF flag on the outer IPv4
     * header and can control packet fragmentation if the encapsulated packet exceeds the outgoing interface MTU. This setting
     * has three options: disabled - the DF flag is not set on the outer IPv4 header, which means that packets can be
     * fragmented if they are too large to be sent over the outgoing interface. This also allows packet fragmentation when
     * VXLAN uses IPv6 underlay. enabled - the DF flag is always set on the outer IPv4 header, which means that packets will
     * not be fragmented and will be dropped if they exceed the outgoing interface's MTU. This also avoids packet fragmentation
     * when VXLAN uses IPv6 underlay. inherit - The DF flag on the outer IPv4 header is based on the inner IPv4 DF flag. If the
     * inner IPv4 header has the DF flag set, the outer IPv4 header will also have it set. If the packet exceeds the outgoing
     * interface's MTU and DF is set, it will be dropped. If the inner packet is non-IP, the outer IPv4 header will not have
     * the DF flag set and packets can be fragmented. If the inner packet is IPv6, the outer IPv4 header will always set the DF
     * flag and packets cannot be fragmented. Note that when VXLAN uses IPv6 underlay, this setting does not have any effect
     * and is treated the same as disabled. The setting is available since RouterOS version 7.8.
     */
    dontFragment?: pulumi.Input<string>;
    /**
     * When specified, a multicast group address can be used to forward broadcast, unknown-unicast, and multicast traffic
     * between VTEPs. This property requires specifying the interface setting. The interface will use IGMP or MLD to join the
     * specified multicast group, make sure to add the necessary PIM and IGMP/MDL configuration. When this property is set, the
     * vteps-ip-version automatically gets updated to the used multicast IP version.
     */
    group?: pulumi.Input<string>;
    /**
     * Interface name used for multicast forwarding. This property requires specifying the group setting.
     */
    interface?: pulumi.Input<string>;
    interfaceVxlanId?: pulumi.Input<string>;
    /**
     * Specifies the local source address for the VXLAN interface. If not set, one IP address of the egress interface will be
     * selected as a source address for VXLAN packets. When the property is set, the vteps-ip-version automatically gets
     * updated to the used local IP version. The setting is available since RouterOS version 7.7.
     */
    localAddress?: pulumi.Input<string>;
    /**
     * Static MAC address of the interface. A randomly generated MAC address will be assigned when not specified.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Limits the maximum number of MAC addresses that VXLAN can store in the forwarding database (FDB).
     */
    maxFdbSize?: pulumi.Input<number>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    /**
     * Name of the interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Used UDP port number.
     */
    port?: pulumi.Input<number>;
    /**
     * VXLAN Network Identifier (VNI).
     */
    vni?: pulumi.Input<number>;
    /**
     * The VRF table this resource operates on.
     */
    vrf?: pulumi.Input<string>;
    /**
     * Used IP protocol version for statically configured VTEPs. The RouterOS VXLAN interface does not support dual-stack, any
     * configured remote VTEPs with the opposite IP version will be ignored. When multicast group or local-address properties
     * are set, the vteps-ip-version automatically gets updated to the used IP version. The setting is available since RouterOS
     * version 7.6.
     */
    vtepsIpVersion?: pulumi.Input<string>;
}
