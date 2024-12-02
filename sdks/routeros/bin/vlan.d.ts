import * as pulumi from "@pulumi/pulumi";
export declare class Vlan extends pulumi.CustomResource {
    /**
     * Get an existing Vlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VlanState, opts?: pulumi.CustomResourceOptions): Vlan;
    /**
     * Returns true if the given object is an instance of Vlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Vlan;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    readonly arp: pulumi.Output<string | undefined>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    readonly arpTimeout: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Name of the interface.
     */
    readonly interface: pulumi.Output<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    readonly l2mtu: pulumi.Output<number>;
    readonly loopProtect: pulumi.Output<string | undefined>;
    readonly loopProtectDisableTime: pulumi.Output<string | undefined>;
    readonly loopProtectSendInterval: pulumi.Output<string | undefined>;
    readonly loopProtectStatus: pulumi.Output<string>;
    /**
     * Current mac address.
     */
    readonly macAddress: pulumi.Output<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    readonly mtu: pulumi.Output<string>;
    /**
     * Specifies whether this VLAN should declare its attributes through Multiple VLAN Registration Protocol (MVRP) as an
     * applicant (available since RouterOS 7.15). It can be used to register the VLAN with connected bridges that support MVRP.
     * This property only has an effect when use-service-tag is disabled.
     */
    readonly mvrp: pulumi.Output<boolean | undefined>;
    readonly name: pulumi.Output<string>;
    readonly routerosVlanId: pulumi.Output<string>;
    readonly running: pulumi.Output<boolean>;
    readonly useServiceTag: pulumi.Output<boolean | undefined>;
    readonly vlanId: pulumi.Output<number>;
    /**
     * Create a Vlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VlanArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Vlan resources.
 */
export interface VlanState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    l2mtu?: pulumi.Input<number>;
    loopProtect?: pulumi.Input<string>;
    loopProtectDisableTime?: pulumi.Input<string>;
    loopProtectSendInterval?: pulumi.Input<string>;
    loopProtectStatus?: pulumi.Input<string>;
    /**
     * Current mac address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    /**
     * Specifies whether this VLAN should declare its attributes through Multiple VLAN Registration Protocol (MVRP) as an
     * applicant (available since RouterOS 7.15). It can be used to register the VLAN with connected bridges that support MVRP.
     * This property only has an effect when use-service-tag is disabled.
     */
    mvrp?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    routerosVlanId?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
    useServiceTag?: pulumi.Input<boolean>;
    vlanId?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Vlan resource.
 */
export interface VlanArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    arp?: pulumi.Input<string>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Name of the interface.
     */
    interface: pulumi.Input<string>;
    loopProtect?: pulumi.Input<string>;
    loopProtectDisableTime?: pulumi.Input<string>;
    loopProtectSendInterval?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    /**
     * Specifies whether this VLAN should declare its attributes through Multiple VLAN Registration Protocol (MVRP) as an
     * applicant (available since RouterOS 7.15). It can be used to register the VLAN with connected bridges that support MVRP.
     * This property only has an effect when use-service-tag is disabled.
     */
    mvrp?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    routerosVlanId?: pulumi.Input<string>;
    useServiceTag?: pulumi.Input<boolean>;
    vlanId: pulumi.Input<number>;
}
