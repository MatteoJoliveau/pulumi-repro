// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Vlan extends pulumi.CustomResource {
    /**
     * Get an existing Vlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VlanState, opts?: pulumi.CustomResourceOptions): Vlan {
        return new Vlan(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/vlan:Vlan';

    /**
     * Returns true if the given object is an instance of Vlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vlan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vlan.__pulumiType;
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
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Name of the interface.
     */
    public readonly interface!: pulumi.Output<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    public /*out*/ readonly l2mtu!: pulumi.Output<number>;
    public readonly loopProtect!: pulumi.Output<string | undefined>;
    public readonly loopProtectDisableTime!: pulumi.Output<string | undefined>;
    public readonly loopProtectSendInterval!: pulumi.Output<string | undefined>;
    public /*out*/ readonly loopProtectStatus!: pulumi.Output<string>;
    /**
     * Current mac address.
     */
    public /*out*/ readonly macAddress!: pulumi.Output<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    public readonly mtu!: pulumi.Output<string>;
    /**
     * Specifies whether this VLAN should declare its attributes through Multiple VLAN Registration Protocol (MVRP) as an
     * applicant (available since RouterOS 7.15). It can be used to register the VLAN with connected bridges that support MVRP.
     * This property only has an effect when use-service-tag is disabled.
     */
    public readonly mvrp!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly routerosVlanId!: pulumi.Output<string>;
    public /*out*/ readonly running!: pulumi.Output<boolean>;
    public readonly useServiceTag!: pulumi.Output<boolean | undefined>;
    public readonly vlanId!: pulumi.Output<number>;

    /**
     * Create a Vlan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VlanArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VlanArgs | VlanState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VlanState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["arp"] = state ? state.arp : undefined;
            resourceInputs["arpTimeout"] = state ? state.arpTimeout : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["l2mtu"] = state ? state.l2mtu : undefined;
            resourceInputs["loopProtect"] = state ? state.loopProtect : undefined;
            resourceInputs["loopProtectDisableTime"] = state ? state.loopProtectDisableTime : undefined;
            resourceInputs["loopProtectSendInterval"] = state ? state.loopProtectSendInterval : undefined;
            resourceInputs["loopProtectStatus"] = state ? state.loopProtectStatus : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["mvrp"] = state ? state.mvrp : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["routerosVlanId"] = state ? state.routerosVlanId : undefined;
            resourceInputs["running"] = state ? state.running : undefined;
            resourceInputs["useServiceTag"] = state ? state.useServiceTag : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
        } else {
            const args = argsOrState as VlanArgs | undefined;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            if ((!args || args.vlanId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vlanId'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["arp"] = args ? args.arp : undefined;
            resourceInputs["arpTimeout"] = args ? args.arpTimeout : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["loopProtect"] = args ? args.loopProtect : undefined;
            resourceInputs["loopProtectDisableTime"] = args ? args.loopProtectDisableTime : undefined;
            resourceInputs["loopProtectSendInterval"] = args ? args.loopProtectSendInterval : undefined;
            resourceInputs["mtu"] = args ? args.mtu : undefined;
            resourceInputs["mvrp"] = args ? args.mvrp : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["routerosVlanId"] = args ? args.routerosVlanId : undefined;
            resourceInputs["useServiceTag"] = args ? args.useServiceTag : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["l2mtu"] = undefined /*out*/;
            resourceInputs["loopProtectStatus"] = undefined /*out*/;
            resourceInputs["macAddress"] = undefined /*out*/;
            resourceInputs["running"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Vlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
