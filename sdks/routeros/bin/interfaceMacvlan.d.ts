import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceMacvlan extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceMacvlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceMacvlanState, opts?: pulumi.CustomResourceOptions): InterfaceMacvlan;
    /**
     * Returns true if the given object is an instance of InterfaceMacvlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceMacvlan;
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
    readonly interfaceMacvlanId: pulumi.Output<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    readonly l2mtu: pulumi.Output<number>;
    readonly loopProtect: pulumi.Output<string | undefined>;
    readonly loopProtectDisableTime: pulumi.Output<string | undefined>;
    readonly loopProtectSendInterval: pulumi.Output<string | undefined>;
    /**
     * Static MAC address of the interface. A randomly generated MAC address will be assigned when not specified.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * Sets MACVLAN interface mode: private - does not allow communication between MACVLAN instances on the same parent
     * interface. bridge - allows communication between MACVLAN instances on the same parent interface.
     */
    readonly mode: pulumi.Output<string | undefined>;
    readonly name: pulumi.Output<string>;
    /**
     * Create a InterfaceMacvlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceMacvlanArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceMacvlan resources.
 */
export interface InterfaceMacvlanState {
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
    interfaceMacvlanId?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    l2mtu?: pulumi.Input<number>;
    loopProtect?: pulumi.Input<string>;
    loopProtectDisableTime?: pulumi.Input<string>;
    loopProtectSendInterval?: pulumi.Input<string>;
    /**
     * Static MAC address of the interface. A randomly generated MAC address will be assigned when not specified.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Sets MACVLAN interface mode: private - does not allow communication between MACVLAN instances on the same parent
     * interface. bridge - allows communication between MACVLAN instances on the same parent interface.
     */
    mode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceMacvlan resource.
 */
export interface InterfaceMacvlanArgs {
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
    interfaceMacvlanId?: pulumi.Input<string>;
    loopProtect?: pulumi.Input<string>;
    loopProtectDisableTime?: pulumi.Input<string>;
    loopProtectSendInterval?: pulumi.Input<string>;
    /**
     * Static MAC address of the interface. A randomly generated MAC address will be assigned when not specified.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Sets MACVLAN interface mode: private - does not allow communication between MACVLAN instances on the same parent
     * interface. bridge - allows communication between MACVLAN instances on the same parent interface.
     */
    mode?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
