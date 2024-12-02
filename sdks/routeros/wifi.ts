// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Wifi extends pulumi.CustomResource {
    /**
     * Get an existing Wifi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiState, opts?: pulumi.CustomResourceOptions): Wifi {
        return new Wifi(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/wifi:Wifi';

    /**
     * Returns true if the given object is an instance of Wifi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Wifi {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Wifi.__pulumiType;
    }

    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___id_!: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___path_!: pulumi.Output<string | undefined>;
    /**
     * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___ts_!: pulumi.Output<string | undefined>;
    /**
     * AAA inline settings.
     */
    public readonly aaa!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Address Resolution Protocol mode: * disabled - the interface will not use ARP * enabled - the interface will use ARP *
     * local-proxy-arp - the router performs proxy ARP on the interface and sends replies to the same interface * proxy-arp -
     * the router performs proxy ARP on the interface and sends replies to other interfaces * reply-only - the interface will
     * only reply to requests originated from matching IP address/MAC address combinations which are entered as static entries
     * in the ARP table. No dynamic entries will be automatically stored in the ARP table. Therefore for communications to be
     * successful, a valid static entry must already exist.
     */
    public readonly arp!: pulumi.Output<string | undefined>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    public readonly arpTimeout!: pulumi.Output<string | undefined>;
    /**
     * A flag whether the interface is currently available for the WiFi manager.
     */
    public /*out*/ readonly bound!: pulumi.Output<boolean>;
    /**
     * Channel inline settings.
     */
    public readonly channel!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Configuration inline settings.
     */
    public readonly configuration!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Datapath inline settings.
     */
    public readonly datapath!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The interface's default name.
     */
    public /*out*/ readonly defaultName!: pulumi.Output<string>;
    /**
     * An option to set the running property to true if it is not disabled.
     */
    public readonly disableRunningCheck!: pulumi.Output<boolean | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * A flag whether the interface is currently inactive.
     */
    public /*out*/ readonly inactive!: pulumi.Output<boolean>;
    /**
     * Interworking inline settings.
     */
    public readonly interworking!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    public readonly l2mtu!: pulumi.Output<number | undefined>;
    /**
     * MAC address (BSSID) to use for the interface.
     */
    public readonly macAddress!: pulumi.Output<string | undefined>;
    /**
     * A flag whether the interface is not a virtual one.
     */
    public /*out*/ readonly master!: pulumi.Output<boolean>;
    /**
     * The corresponding master interface of the virtual one.
     */
    public readonly masterInterface!: pulumi.Output<string | undefined>;
    /**
     * Layer3 maximum transmission unit
     */
    public readonly mtu!: pulumi.Output<number | undefined>;
    /**
     * Name of the interface.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The MAC address of the associated radio.
     */
    public /*out*/ readonly radioMac!: pulumi.Output<string>;
    /**
     * A flag whether the interface has established a link to another device.
     */
    public /*out*/ readonly running!: pulumi.Output<boolean>;
    /**
     * Security inline settings.
     */
    public readonly security!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Steering inline settings.
     */
    public readonly steering!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly wifiId!: pulumi.Output<string>;

    /**
     * Create a Wifi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WifiArgs | WifiState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WifiState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___ts_"] = state ? state.___ts_ : undefined;
            resourceInputs["aaa"] = state ? state.aaa : undefined;
            resourceInputs["arp"] = state ? state.arp : undefined;
            resourceInputs["arpTimeout"] = state ? state.arpTimeout : undefined;
            resourceInputs["bound"] = state ? state.bound : undefined;
            resourceInputs["channel"] = state ? state.channel : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["configuration"] = state ? state.configuration : undefined;
            resourceInputs["datapath"] = state ? state.datapath : undefined;
            resourceInputs["defaultName"] = state ? state.defaultName : undefined;
            resourceInputs["disableRunningCheck"] = state ? state.disableRunningCheck : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["inactive"] = state ? state.inactive : undefined;
            resourceInputs["interworking"] = state ? state.interworking : undefined;
            resourceInputs["l2mtu"] = state ? state.l2mtu : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["master"] = state ? state.master : undefined;
            resourceInputs["masterInterface"] = state ? state.masterInterface : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["radioMac"] = state ? state.radioMac : undefined;
            resourceInputs["running"] = state ? state.running : undefined;
            resourceInputs["security"] = state ? state.security : undefined;
            resourceInputs["steering"] = state ? state.steering : undefined;
            resourceInputs["wifiId"] = state ? state.wifiId : undefined;
        } else {
            const args = argsOrState as WifiArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___ts_"] = args ? args.___ts_ : undefined;
            resourceInputs["aaa"] = args ? args.aaa : undefined;
            resourceInputs["arp"] = args ? args.arp : undefined;
            resourceInputs["arpTimeout"] = args ? args.arpTimeout : undefined;
            resourceInputs["channel"] = args ? args.channel : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["configuration"] = args ? args.configuration : undefined;
            resourceInputs["datapath"] = args ? args.datapath : undefined;
            resourceInputs["disableRunningCheck"] = args ? args.disableRunningCheck : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interworking"] = args ? args.interworking : undefined;
            resourceInputs["l2mtu"] = args ? args.l2mtu : undefined;
            resourceInputs["macAddress"] = args ? args.macAddress : undefined;
            resourceInputs["masterInterface"] = args ? args.masterInterface : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["security"] = args ? args.security : undefined;
            resourceInputs["steering"] = args ? args.steering : undefined;
            resourceInputs["wifiId"] = args ? args.wifiId : undefined;
            resourceInputs["bound"] = undefined /*out*/;
            resourceInputs["defaultName"] = undefined /*out*/;
            resourceInputs["inactive"] = undefined /*out*/;
            resourceInputs["master"] = undefined /*out*/;
            resourceInputs["radioMac"] = undefined /*out*/;
            resourceInputs["running"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Wifi.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
    aaa?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
    channel?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    comment?: pulumi.Input<string>;
    /**
     * Configuration inline settings.
     */
    configuration?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Datapath inline settings.
     */
    datapath?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
    interworking?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
    security?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Steering inline settings.
     */
    steering?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
    aaa?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
    channel?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    comment?: pulumi.Input<string>;
    /**
     * Configuration inline settings.
     */
    configuration?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Datapath inline settings.
     */
    datapath?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * An option to set the running property to true if it is not disabled.
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interworking inline settings.
     */
    interworking?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
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
    security?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Steering inline settings.
     */
    steering?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    wifiId?: pulumi.Input<string>;
}
