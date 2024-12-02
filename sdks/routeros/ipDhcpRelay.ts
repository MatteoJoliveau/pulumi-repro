// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpDhcpRelay extends pulumi.CustomResource {
    /**
     * Get an existing IpDhcpRelay resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpDhcpRelayState, opts?: pulumi.CustomResourceOptions): IpDhcpRelay {
        return new IpDhcpRelay(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipDhcpRelay:IpDhcpRelay';

    /**
     * Returns true if the given object is an instance of IpDhcpRelay.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpDhcpRelay {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpDhcpRelay.__pulumiType;
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
     * Adds DHCP relay agent information if enabled according to RFC 3046. Agent Circuit ID Sub-option contains mac address of
     * an interface, Agent Remote ID Sub-option contains MAC address of the client from which request was received.
     */
    public readonly addRelayInfo!: pulumi.Output<boolean | undefined>;
    /**
     * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored.
     */
    public readonly delayThreshold!: pulumi.Output<string | undefined>;
    /**
     * List of DHCP servers' IP addresses which should the DHCP requests be forwarded to.
     */
    public readonly dhcpServer!: pulumi.Output<string>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Interface name the DHCP relay will be working on.
     */
    public readonly interface!: pulumi.Output<string>;
    public /*out*/ readonly invalid!: pulumi.Output<boolean>;
    public readonly ipDhcpRelayId!: pulumi.Output<string>;
    /**
     * The unique IP address of this DHCP relay needed for DHCP server to distinguish relays. If set to 0.0.0.0 - the IP
     * address will be chosen automatically
     */
    public readonly localAddress!: pulumi.Output<string | undefined>;
    /**
     * Descriptive name for the relay.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specified string will be used to construct Option 82 instead of client's MAC address. Option 82 consist of: interface
     * from which packets was received + client mac address or relay-info-remote-id
     */
    public readonly relayInfoRemoteId!: pulumi.Output<string | undefined>;

    /**
     * Create a IpDhcpRelay resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpDhcpRelayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpDhcpRelayArgs | IpDhcpRelayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpDhcpRelayState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["addRelayInfo"] = state ? state.addRelayInfo : undefined;
            resourceInputs["delayThreshold"] = state ? state.delayThreshold : undefined;
            resourceInputs["dhcpServer"] = state ? state.dhcpServer : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["ipDhcpRelayId"] = state ? state.ipDhcpRelayId : undefined;
            resourceInputs["localAddress"] = state ? state.localAddress : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["relayInfoRemoteId"] = state ? state.relayInfoRemoteId : undefined;
        } else {
            const args = argsOrState as IpDhcpRelayArgs | undefined;
            if ((!args || args.dhcpServer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dhcpServer'");
            }
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["addRelayInfo"] = args ? args.addRelayInfo : undefined;
            resourceInputs["delayThreshold"] = args ? args.delayThreshold : undefined;
            resourceInputs["dhcpServer"] = args ? args.dhcpServer : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["ipDhcpRelayId"] = args ? args.ipDhcpRelayId : undefined;
            resourceInputs["localAddress"] = args ? args.localAddress : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["relayInfoRemoteId"] = args ? args.relayInfoRemoteId : undefined;
            resourceInputs["invalid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpDhcpRelay.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpDhcpRelay resources.
 */
export interface IpDhcpRelayState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Adds DHCP relay agent information if enabled according to RFC 3046. Agent Circuit ID Sub-option contains mac address of
     * an interface, Agent Remote ID Sub-option contains MAC address of the client from which request was received.
     */
    addRelayInfo?: pulumi.Input<boolean>;
    /**
     * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored.
     */
    delayThreshold?: pulumi.Input<string>;
    /**
     * List of DHCP servers' IP addresses which should the DHCP requests be forwarded to.
     */
    dhcpServer?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interface name the DHCP relay will be working on.
     */
    interface?: pulumi.Input<string>;
    invalid?: pulumi.Input<boolean>;
    ipDhcpRelayId?: pulumi.Input<string>;
    /**
     * The unique IP address of this DHCP relay needed for DHCP server to distinguish relays. If set to 0.0.0.0 - the IP
     * address will be chosen automatically
     */
    localAddress?: pulumi.Input<string>;
    /**
     * Descriptive name for the relay.
     */
    name?: pulumi.Input<string>;
    /**
     * Specified string will be used to construct Option 82 instead of client's MAC address. Option 82 consist of: interface
     * from which packets was received + client mac address or relay-info-remote-id
     */
    relayInfoRemoteId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IpDhcpRelay resource.
 */
export interface IpDhcpRelayArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Adds DHCP relay agent information if enabled according to RFC 3046. Agent Circuit ID Sub-option contains mac address of
     * an interface, Agent Remote ID Sub-option contains MAC address of the client from which request was received.
     */
    addRelayInfo?: pulumi.Input<boolean>;
    /**
     * If secs field in DHCP packet is smaller than delay-threshold, then this packet is ignored.
     */
    delayThreshold?: pulumi.Input<string>;
    /**
     * List of DHCP servers' IP addresses which should the DHCP requests be forwarded to.
     */
    dhcpServer: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Interface name the DHCP relay will be working on.
     */
    interface: pulumi.Input<string>;
    ipDhcpRelayId?: pulumi.Input<string>;
    /**
     * The unique IP address of this DHCP relay needed for DHCP server to distinguish relays. If set to 0.0.0.0 - the IP
     * address will be chosen automatically
     */
    localAddress?: pulumi.Input<string>;
    /**
     * Descriptive name for the relay.
     */
    name?: pulumi.Input<string>;
    /**
     * Specified string will be used to construct Option 82 instead of client's MAC address. Option 82 consist of: interface
     * from which packets was received + client mac address or relay-info-remote-id
     */
    relayInfoRemoteId?: pulumi.Input<string>;
}
