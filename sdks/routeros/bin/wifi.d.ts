import * as pulumi from "@pulumi/pulumi";
export declare class Wifi extends pulumi.CustomResource {
    /**
     * Get an existing Wifi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiState, opts?: pulumi.CustomResourceOptions): Wifi;
    /**
     * Returns true if the given object is an instance of Wifi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Wifi;
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
    readonly ___ts_: pulumi.Output<string | undefined>;
    /**
     * AAA inline settings.
     */
    readonly aaa: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
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
    /**
     * A flag whether the interface is currently available for the WiFi manager.
     */
    readonly bound: pulumi.Output<boolean>;
    /**
     * Channel inline settings.
     */
    readonly channel: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Configuration inline settings.
     */
    readonly configuration: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Datapath inline settings.
     */
    readonly datapath: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The interface's default name.
     */
    readonly defaultName: pulumi.Output<string>;
    /**
     * An option to set the running property to true if it is not disabled.
     */
    readonly disableRunningCheck: pulumi.Output<boolean | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * A flag whether the interface is currently inactive.
     */
    readonly inactive: pulumi.Output<boolean>;
    /**
     * Interworking inline settings.
     */
    readonly interworking: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    readonly l2mtu: pulumi.Output<number | undefined>;
    /**
     * MAC address (BSSID) to use for the interface.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * A flag whether the interface is not a virtual one.
     */
    readonly master: pulumi.Output<boolean>;
    /**
     * The corresponding master interface of the virtual one.
     */
    readonly masterInterface: pulumi.Output<string | undefined>;
    /**
     * Layer3 maximum transmission unit
     */
    readonly mtu: pulumi.Output<number | undefined>;
    /**
     * Name of the interface.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The MAC address of the associated radio.
     */
    readonly radioMac: pulumi.Output<string>;
    /**
     * A flag whether the interface has established a link to another device.
     */
    readonly running: pulumi.Output<boolean>;
    /**
     * Security inline settings.
     */
    readonly security: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Steering inline settings.
     */
    readonly steering: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    readonly wifiId: pulumi.Output<string>;
    /**
     * Create a Wifi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Wifi resources.
 */
export interface WifiState {
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
    ___ts_?: pulumi.Input<string>;
    /**
     * AAA inline settings.
     */
    aaa?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
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
    /**
     * A flag whether the interface is currently available for the WiFi manager.
     */
    bound?: pulumi.Input<boolean>;
    /**
     * Channel inline settings.
     */
    channel?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    comment?: pulumi.Input<string>;
    /**
     * Configuration inline settings.
     */
    configuration?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Datapath inline settings.
     */
    datapath?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The interface's default name.
     */
    defaultName?: pulumi.Input<string>;
    /**
     * An option to set the running property to true if it is not disabled.
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * A flag whether the interface is currently inactive.
     */
    inactive?: pulumi.Input<boolean>;
    /**
     * Interworking inline settings.
     */
    interworking?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    l2mtu?: pulumi.Input<number>;
    /**
     * MAC address (BSSID) to use for the interface.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * A flag whether the interface is not a virtual one.
     */
    master?: pulumi.Input<boolean>;
    /**
     * The corresponding master interface of the virtual one.
     */
    masterInterface?: pulumi.Input<string>;
    /**
     * Layer3 maximum transmission unit
     */
    mtu?: pulumi.Input<number>;
    /**
     * Name of the interface.
     */
    name?: pulumi.Input<string>;
    /**
     * The MAC address of the associated radio.
     */
    radioMac?: pulumi.Input<string>;
    /**
     * A flag whether the interface has established a link to another device.
     */
    running?: pulumi.Input<boolean>;
    /**
     * Security inline settings.
     */
    security?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Steering inline settings.
     */
    steering?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    wifiId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Wifi resource.
 */
export interface WifiArgs {
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
    ___ts_?: pulumi.Input<string>;
    /**
     * AAA inline settings.
     */
    aaa?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
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
    /**
     * Channel inline settings.
     */
    channel?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    comment?: pulumi.Input<string>;
    /**
     * Configuration inline settings.
     */
    configuration?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Datapath inline settings.
     */
    datapath?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * An option to set the running property to true if it is not disabled.
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interworking inline settings.
     */
    interworking?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    l2mtu?: pulumi.Input<number>;
    /**
     * MAC address (BSSID) to use for the interface.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * The corresponding master interface of the virtual one.
     */
    masterInterface?: pulumi.Input<string>;
    /**
     * Layer3 maximum transmission unit
     */
    mtu?: pulumi.Input<number>;
    /**
     * Name of the interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Security inline settings.
     */
    security?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Steering inline settings.
     */
    steering?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    wifiId?: pulumi.Input<string>;
}
