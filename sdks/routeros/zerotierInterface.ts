// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ZerotierInterface extends pulumi.CustomResource {
    /**
     * Get an existing ZerotierInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZerotierInterfaceState, opts?: pulumi.CustomResourceOptions): ZerotierInterface {
        return new ZerotierInterface(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/zerotierInterface:ZerotierInterface';

    /**
     * Returns true if the given object is an instance of ZerotierInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ZerotierInterface {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ZerotierInterface.__pulumiType;
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
     * An option to override the default route.
     */
    public readonly allowDefault!: pulumi.Output<boolean | undefined>;
    /**
     * An option to allow overlapping public IP space by the ZeroTier routes. .
     */
    public readonly allowGlobal!: pulumi.Output<boolean | undefined>;
    /**
     * An option to allow assignment of managed IPs.
     */
    public readonly allowManaged!: pulumi.Output<boolean | undefined>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    public readonly arpTimeout!: pulumi.Output<string | undefined>;
    /**
     * A flag whether the ZeroTier interface is bridged.
     */
    public /*out*/ readonly bridge!: pulumi.Output<boolean>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * A flag whether the ZeroTier interface obtained an IP address.
     */
    public /*out*/ readonly dhcp!: pulumi.Output<boolean>;
    /**
     * An option to force the `running` property to true.
     */
    public readonly disableRunningCheck!: pulumi.Output<boolean | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * The ZeroTier instance name.
     */
    public readonly instance!: pulumi.Output<string>;
    /**
     * Current mac address.
     */
    public /*out*/ readonly macAddress!: pulumi.Output<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    public /*out*/ readonly mtu!: pulumi.Output<number>;
    /**
     * Name of the ZeroTier interface.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The ZeroTier network identifier.
     */
    public readonly network!: pulumi.Output<string>;
    /**
     * The ZeroTier network name.
     */
    public /*out*/ readonly networkName!: pulumi.Output<string>;
    public /*out*/ readonly running!: pulumi.Output<boolean>;
    /**
     * The status of the ZeroTier connection.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The ZeroTier network type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    public readonly zerotierInterfaceId!: pulumi.Output<string>;

    /**
     * Create a ZerotierInterface resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZerotierInterfaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZerotierInterfaceArgs | ZerotierInterfaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ZerotierInterfaceState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["allowDefault"] = state ? state.allowDefault : undefined;
            resourceInputs["allowGlobal"] = state ? state.allowGlobal : undefined;
            resourceInputs["allowManaged"] = state ? state.allowManaged : undefined;
            resourceInputs["arpTimeout"] = state ? state.arpTimeout : undefined;
            resourceInputs["bridge"] = state ? state.bridge : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["dhcp"] = state ? state.dhcp : undefined;
            resourceInputs["disableRunningCheck"] = state ? state.disableRunningCheck : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["instance"] = state ? state.instance : undefined;
            resourceInputs["macAddress"] = state ? state.macAddress : undefined;
            resourceInputs["mtu"] = state ? state.mtu : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["networkName"] = state ? state.networkName : undefined;
            resourceInputs["running"] = state ? state.running : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["zerotierInterfaceId"] = state ? state.zerotierInterfaceId : undefined;
        } else {
            const args = argsOrState as ZerotierInterfaceArgs | undefined;
            if ((!args || args.instance === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instance'");
            }
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["allowDefault"] = args ? args.allowDefault : undefined;
            resourceInputs["allowGlobal"] = args ? args.allowGlobal : undefined;
            resourceInputs["allowManaged"] = args ? args.allowManaged : undefined;
            resourceInputs["arpTimeout"] = args ? args.arpTimeout : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disableRunningCheck"] = args ? args.disableRunningCheck : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["instance"] = args ? args.instance : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["zerotierInterfaceId"] = args ? args.zerotierInterfaceId : undefined;
            resourceInputs["bridge"] = undefined /*out*/;
            resourceInputs["dhcp"] = undefined /*out*/;
            resourceInputs["macAddress"] = undefined /*out*/;
            resourceInputs["mtu"] = undefined /*out*/;
            resourceInputs["networkName"] = undefined /*out*/;
            resourceInputs["running"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ZerotierInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ZerotierInterface resources.
 */
export interface ZerotierInterfaceState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to override the default route.
     */
    allowDefault?: pulumi.Input<boolean>;
    /**
     * An option to allow overlapping public IP space by the ZeroTier routes. .
     */
    allowGlobal?: pulumi.Input<boolean>;
    /**
     * An option to allow assignment of managed IPs.
     */
    allowManaged?: pulumi.Input<boolean>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    /**
     * A flag whether the ZeroTier interface is bridged.
     */
    bridge?: pulumi.Input<boolean>;
    comment?: pulumi.Input<string>;
    /**
     * A flag whether the ZeroTier interface obtained an IP address.
     */
    dhcp?: pulumi.Input<boolean>;
    /**
     * An option to force the `running` property to true.
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The ZeroTier instance name.
     */
    instance?: pulumi.Input<string>;
    /**
     * Current mac address.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
     */
    mtu?: pulumi.Input<number>;
    /**
     * Name of the ZeroTier interface.
     */
    name?: pulumi.Input<string>;
    /**
     * The ZeroTier network identifier.
     */
    network?: pulumi.Input<string>;
    /**
     * The ZeroTier network name.
     */
    networkName?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
    /**
     * The status of the ZeroTier connection.
     */
    status?: pulumi.Input<string>;
    /**
     * The ZeroTier network type.
     */
    type?: pulumi.Input<string>;
    zerotierInterfaceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ZerotierInterface resource.
 */
export interface ZerotierInterfaceArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to override the default route.
     */
    allowDefault?: pulumi.Input<boolean>;
    /**
     * An option to allow overlapping public IP space by the ZeroTier routes. .
     */
    allowGlobal?: pulumi.Input<boolean>;
    /**
     * An option to allow assignment of managed IPs.
     */
    allowManaged?: pulumi.Input<boolean>;
    /**
     * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to
     * the value of arp-timeout in IP/Settings, default is 30s. Can use postfix ms, s, M, h, d for milliseconds, seconds,
     * minutes, hours or days. If no postfix is set then seconds (s) is used.
     */
    arpTimeout?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * An option to force the `running` property to true.
     */
    disableRunningCheck?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The ZeroTier instance name.
     */
    instance: pulumi.Input<string>;
    /**
     * Name of the ZeroTier interface.
     */
    name?: pulumi.Input<string>;
    /**
     * The ZeroTier network identifier.
     */
    network: pulumi.Input<string>;
    zerotierInterfaceId?: pulumi.Input<string>;
}
