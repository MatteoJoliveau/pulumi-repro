// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CapsmanConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanConfigurationState, opts?: pulumi.CustomResourceOptions): CapsmanConfiguration {
        return new CapsmanConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/capsmanConfiguration:CapsmanConfiguration';

    /**
     * Returns true if the given object is an instance of CapsmanConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapsmanConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapsmanConfiguration.__pulumiType;
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
    public readonly capsmanConfigurationId!: pulumi.Output<string>;
    /**
     * Channel inline settings.
     */
    public readonly channel!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Limits available bands, frequencies and maximum transmit power for each frequency. Also specifies default value of
     * scan-list. Value no_country_set is an FCC compliant set of channels.
     */
    public readonly country!: pulumi.Output<string | undefined>;
    /**
     * Datapath inline settings.
     */
    public readonly datapath!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * This interval is measured from third sending failure on the lowest data rate. At this point 3 * (hw-retries + 1) frame
     * transmits on the lowest data rate had failed. During disconnect-timeout packet transmission will be retried with
     * on-fail-retry-time interval. If no frame can be transmitted successfully during disconnect-timeout, the connection is
     * closed, and this event is logged as "extensive data loss". Successful frame transmission resets this timer.
     */
    public readonly disconnectTimeout!: pulumi.Output<string | undefined>;
    /**
     * How long to wait for confirmation of unicast frames (ACKs) before considering transmission unsuccessful, or in short
     * ACK-Timeout.
     */
    public readonly distance!: pulumi.Output<string | undefined>;
    /**
     * Discard frames that have been queued for sending longer than frame-lifetime. By default, when value of this property is
     * 0, frames are discarded only after connection is closed (format: 0.00 sec).
     */
    public readonly frameLifetime!: pulumi.Output<string | undefined>;
    /**
     * Whether to allow use of short guard interval (refer to 802.11n MCS specification to see how this may affect throughput).
     * "any" will use either short or long, depending on data rate, "long" will use long.
     */
    public readonly guardInterval!: pulumi.Output<string | undefined>;
    /**
     * This property has effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks
     * that are shown by some client software. Changing this setting does not improve the security of the wireless network,
     * because SSID is included in other frames sent by the AP.
     */
    public readonly hideSsid!: pulumi.Output<boolean>;
    /**
     * Frame protection support property. [See
     * docs](https://wiki.mikrotik.com/wiki/Manual:Interface/Wireless#Frame_protection_support_(RTS/CTS)).
     */
    public readonly hwProtectionMode!: pulumi.Output<string | undefined>;
    /**
     * Number of times sending frame is retried without considering it a transmission failure. [See
     * docs](https://wiki.mikrotik.com/wiki/Manual:Interface/Wireless)
     */
    public readonly hwRetries!: pulumi.Output<number | undefined>;
    /**
     * Adjusts scan-list to use indoor, outdoor or all frequencies for the country that is set.
     */
    public readonly installation!: pulumi.Output<string | undefined>;
    /**
     * If a client has not communicated for around 20 seconds, AP sends a "keepalive-frame".
     */
    public readonly keepaliveFrames!: pulumi.Output<string | undefined>;
    /**
     * Tags the interface to the load balancing group. For a client to connect to interface in this group, the interface should
     * have the same number of already connected clients as all other interfaces in the group or smaller. Useful in setups
     * where ranges of CAPs mostly overlap.
     */
    public readonly loadBalancingGroup!: pulumi.Output<string | undefined>;
    /**
     * Maximum number of associated clients.
     */
    public readonly maxStaCount!: pulumi.Output<number | undefined>;
    /**
     * Set operational mode. Only **ap** currently supported.
     */
    public readonly mode!: pulumi.Output<string | undefined>;
    /**
     * When set to full multicast packets will be sent with unicast destination MAC address, resolving multicast problem on a
     * wireless link. This option should be enabled only on the access point, clients should be configured in station-bridge
     * mode.
     */
    public readonly multicastHelper!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * Rates inline settings.
     */
    public readonly rates!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Which antennas to use for receive.
     */
    public readonly rxChains!: pulumi.Output<number[] | undefined>;
    /**
     * Security inline settings.
     */
    public readonly security!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * SSID (service set identifier) is a name broadcast in the beacons that identifies wireless network.
     */
    public readonly ssid!: pulumi.Output<string | undefined>;
    /**
     * Which antennas to use for transmit.
     */
    public readonly txChains!: pulumi.Output<number[] | undefined>;

    /**
     * Create a CapsmanConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CapsmanConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CapsmanConfigurationArgs | CapsmanConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CapsmanConfigurationState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___ts_"] = state ? state.___ts_ : undefined;
            resourceInputs["capsmanConfigurationId"] = state ? state.capsmanConfigurationId : undefined;
            resourceInputs["channel"] = state ? state.channel : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["country"] = state ? state.country : undefined;
            resourceInputs["datapath"] = state ? state.datapath : undefined;
            resourceInputs["disconnectTimeout"] = state ? state.disconnectTimeout : undefined;
            resourceInputs["distance"] = state ? state.distance : undefined;
            resourceInputs["frameLifetime"] = state ? state.frameLifetime : undefined;
            resourceInputs["guardInterval"] = state ? state.guardInterval : undefined;
            resourceInputs["hideSsid"] = state ? state.hideSsid : undefined;
            resourceInputs["hwProtectionMode"] = state ? state.hwProtectionMode : undefined;
            resourceInputs["hwRetries"] = state ? state.hwRetries : undefined;
            resourceInputs["installation"] = state ? state.installation : undefined;
            resourceInputs["keepaliveFrames"] = state ? state.keepaliveFrames : undefined;
            resourceInputs["loadBalancingGroup"] = state ? state.loadBalancingGroup : undefined;
            resourceInputs["maxStaCount"] = state ? state.maxStaCount : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["multicastHelper"] = state ? state.multicastHelper : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rates"] = state ? state.rates : undefined;
            resourceInputs["rxChains"] = state ? state.rxChains : undefined;
            resourceInputs["security"] = state ? state.security : undefined;
            resourceInputs["ssid"] = state ? state.ssid : undefined;
            resourceInputs["txChains"] = state ? state.txChains : undefined;
        } else {
            const args = argsOrState as CapsmanConfigurationArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___ts_"] = args ? args.___ts_ : undefined;
            resourceInputs["capsmanConfigurationId"] = args ? args.capsmanConfigurationId : undefined;
            resourceInputs["channel"] = args ? args.channel : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["country"] = args ? args.country : undefined;
            resourceInputs["datapath"] = args ? args.datapath : undefined;
            resourceInputs["disconnectTimeout"] = args ? args.disconnectTimeout : undefined;
            resourceInputs["distance"] = args ? args.distance : undefined;
            resourceInputs["frameLifetime"] = args ? args.frameLifetime : undefined;
            resourceInputs["guardInterval"] = args ? args.guardInterval : undefined;
            resourceInputs["hideSsid"] = args ? args.hideSsid : undefined;
            resourceInputs["hwProtectionMode"] = args ? args.hwProtectionMode : undefined;
            resourceInputs["hwRetries"] = args ? args.hwRetries : undefined;
            resourceInputs["installation"] = args ? args.installation : undefined;
            resourceInputs["keepaliveFrames"] = args ? args.keepaliveFrames : undefined;
            resourceInputs["loadBalancingGroup"] = args ? args.loadBalancingGroup : undefined;
            resourceInputs["maxStaCount"] = args ? args.maxStaCount : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["multicastHelper"] = args ? args.multicastHelper : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rates"] = args ? args.rates : undefined;
            resourceInputs["rxChains"] = args ? args.rxChains : undefined;
            resourceInputs["security"] = args ? args.security : undefined;
            resourceInputs["ssid"] = args ? args.ssid : undefined;
            resourceInputs["txChains"] = args ? args.txChains : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CapsmanConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CapsmanConfiguration resources.
 */
export interface CapsmanConfigurationState {
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
    capsmanConfigurationId?: pulumi.Input<string>;
    /**
     * Channel inline settings.
     */
    channel?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    comment?: pulumi.Input<string>;
    /**
     * Limits available bands, frequencies and maximum transmit power for each frequency. Also specifies default value of
     * scan-list. Value no_country_set is an FCC compliant set of channels.
     */
    country?: pulumi.Input<string>;
    /**
     * Datapath inline settings.
     */
    datapath?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * This interval is measured from third sending failure on the lowest data rate. At this point 3 * (hw-retries + 1) frame
     * transmits on the lowest data rate had failed. During disconnect-timeout packet transmission will be retried with
     * on-fail-retry-time interval. If no frame can be transmitted successfully during disconnect-timeout, the connection is
     * closed, and this event is logged as "extensive data loss". Successful frame transmission resets this timer.
     */
    disconnectTimeout?: pulumi.Input<string>;
    /**
     * How long to wait for confirmation of unicast frames (ACKs) before considering transmission unsuccessful, or in short
     * ACK-Timeout.
     */
    distance?: pulumi.Input<string>;
    /**
     * Discard frames that have been queued for sending longer than frame-lifetime. By default, when value of this property is
     * 0, frames are discarded only after connection is closed (format: 0.00 sec).
     */
    frameLifetime?: pulumi.Input<string>;
    /**
     * Whether to allow use of short guard interval (refer to 802.11n MCS specification to see how this may affect throughput).
     * "any" will use either short or long, depending on data rate, "long" will use long.
     */
    guardInterval?: pulumi.Input<string>;
    /**
     * This property has effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks
     * that are shown by some client software. Changing this setting does not improve the security of the wireless network,
     * because SSID is included in other frames sent by the AP.
     */
    hideSsid?: pulumi.Input<boolean>;
    /**
     * Frame protection support property. [See
     * docs](https://wiki.mikrotik.com/wiki/Manual:Interface/Wireless#Frame_protection_support_(RTS/CTS)).
     */
    hwProtectionMode?: pulumi.Input<string>;
    /**
     * Number of times sending frame is retried without considering it a transmission failure. [See
     * docs](https://wiki.mikrotik.com/wiki/Manual:Interface/Wireless)
     */
    hwRetries?: pulumi.Input<number>;
    /**
     * Adjusts scan-list to use indoor, outdoor or all frequencies for the country that is set.
     */
    installation?: pulumi.Input<string>;
    /**
     * If a client has not communicated for around 20 seconds, AP sends a "keepalive-frame".
     */
    keepaliveFrames?: pulumi.Input<string>;
    /**
     * Tags the interface to the load balancing group. For a client to connect to interface in this group, the interface should
     * have the same number of already connected clients as all other interfaces in the group or smaller. Useful in setups
     * where ranges of CAPs mostly overlap.
     */
    loadBalancingGroup?: pulumi.Input<string>;
    /**
     * Maximum number of associated clients.
     */
    maxStaCount?: pulumi.Input<number>;
    /**
     * Set operational mode. Only **ap** currently supported.
     */
    mode?: pulumi.Input<string>;
    /**
     * When set to full multicast packets will be sent with unicast destination MAC address, resolving multicast problem on a
     * wireless link. This option should be enabled only on the access point, clients should be configured in station-bridge
     * mode.
     */
    multicastHelper?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Rates inline settings.
     */
    rates?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Which antennas to use for receive.
     */
    rxChains?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Security inline settings.
     */
    security?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * SSID (service set identifier) is a name broadcast in the beacons that identifies wireless network.
     */
    ssid?: pulumi.Input<string>;
    /**
     * Which antennas to use for transmit.
     */
    txChains?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a CapsmanConfiguration resource.
 */
export interface CapsmanConfigurationArgs {
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
    capsmanConfigurationId?: pulumi.Input<string>;
    /**
     * Channel inline settings.
     */
    channel?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    comment?: pulumi.Input<string>;
    /**
     * Limits available bands, frequencies and maximum transmit power for each frequency. Also specifies default value of
     * scan-list. Value no_country_set is an FCC compliant set of channels.
     */
    country?: pulumi.Input<string>;
    /**
     * Datapath inline settings.
     */
    datapath?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * This interval is measured from third sending failure on the lowest data rate. At this point 3 * (hw-retries + 1) frame
     * transmits on the lowest data rate had failed. During disconnect-timeout packet transmission will be retried with
     * on-fail-retry-time interval. If no frame can be transmitted successfully during disconnect-timeout, the connection is
     * closed, and this event is logged as "extensive data loss". Successful frame transmission resets this timer.
     */
    disconnectTimeout?: pulumi.Input<string>;
    /**
     * How long to wait for confirmation of unicast frames (ACKs) before considering transmission unsuccessful, or in short
     * ACK-Timeout.
     */
    distance?: pulumi.Input<string>;
    /**
     * Discard frames that have been queued for sending longer than frame-lifetime. By default, when value of this property is
     * 0, frames are discarded only after connection is closed (format: 0.00 sec).
     */
    frameLifetime?: pulumi.Input<string>;
    /**
     * Whether to allow use of short guard interval (refer to 802.11n MCS specification to see how this may affect throughput).
     * "any" will use either short or long, depending on data rate, "long" will use long.
     */
    guardInterval?: pulumi.Input<string>;
    /**
     * This property has effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks
     * that are shown by some client software. Changing this setting does not improve the security of the wireless network,
     * because SSID is included in other frames sent by the AP.
     */
    hideSsid?: pulumi.Input<boolean>;
    /**
     * Frame protection support property. [See
     * docs](https://wiki.mikrotik.com/wiki/Manual:Interface/Wireless#Frame_protection_support_(RTS/CTS)).
     */
    hwProtectionMode?: pulumi.Input<string>;
    /**
     * Number of times sending frame is retried without considering it a transmission failure. [See
     * docs](https://wiki.mikrotik.com/wiki/Manual:Interface/Wireless)
     */
    hwRetries?: pulumi.Input<number>;
    /**
     * Adjusts scan-list to use indoor, outdoor or all frequencies for the country that is set.
     */
    installation?: pulumi.Input<string>;
    /**
     * If a client has not communicated for around 20 seconds, AP sends a "keepalive-frame".
     */
    keepaliveFrames?: pulumi.Input<string>;
    /**
     * Tags the interface to the load balancing group. For a client to connect to interface in this group, the interface should
     * have the same number of already connected clients as all other interfaces in the group or smaller. Useful in setups
     * where ranges of CAPs mostly overlap.
     */
    loadBalancingGroup?: pulumi.Input<string>;
    /**
     * Maximum number of associated clients.
     */
    maxStaCount?: pulumi.Input<number>;
    /**
     * Set operational mode. Only **ap** currently supported.
     */
    mode?: pulumi.Input<string>;
    /**
     * When set to full multicast packets will be sent with unicast destination MAC address, resolving multicast problem on a
     * wireless link. This option should be enabled only on the access point, clients should be configured in station-bridge
     * mode.
     */
    multicastHelper?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Rates inline settings.
     */
    rates?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Which antennas to use for receive.
     */
    rxChains?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Security inline settings.
     */
    security?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * SSID (service set identifier) is a name broadcast in the beacons that identifies wireless network.
     */
    ssid?: pulumi.Input<string>;
    /**
     * Which antennas to use for transmit.
     */
    txChains?: pulumi.Input<pulumi.Input<number>[]>;
}
