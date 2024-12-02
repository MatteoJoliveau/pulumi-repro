import * as pulumi from "@pulumi/pulumi";
export declare class WifiConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing WifiConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiConfigurationState, opts?: pulumi.CustomResourceOptions): WifiConfiguration;
    /**
     * Returns true if the given object is an instance of WifiConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WifiConfiguration;
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
     * An option overrides the default antenna gain.
     */
    readonly antennaGain: pulumi.Output<number | undefined>;
    /**
     * Time interval between beacon frames.
     */
    readonly beaconInterval: pulumi.Output<string | undefined>;
    /**
     * Radio chains to use for receiving signals.
     */
    readonly chains: pulumi.Output<number[] | undefined>;
    /**
     * Channel inline settings.
     */
    readonly channel: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * An option determines which regulatory domain restrictions are applied to an interface.
     */
    readonly country: pulumi.Output<string | undefined>;
    /**
     * Datapath inline settings.
     */
    readonly datapath: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * A period at which to transmit multicast traffic, when there are client devices in power save mode connected to the AP.
     */
    readonly dtimPeriod: pulumi.Output<number | undefined>;
    /**
     * This property has effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks
     * that are shown by some client software. Changing this setting does not improve the security of the wireless network,
     * because SSID is included in other frames sent by the AP.
     */
    readonly hideSsid: pulumi.Output<boolean | undefined>;
    /**
     * Interworking inline settings.
     */
    readonly interworking: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * An option to specify the remote CAP mode.
     */
    readonly manager: pulumi.Output<string | undefined>;
    /**
     * An option to specify the access point operational mode.
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * An option to enable converting every multicast-address IP or IPv6 packet into multiple unicast-addresses frames for each
     * connected station.
     */
    readonly multicastEnhance: pulumi.Output<string | undefined>;
    /**
     * Name of the configuration.
     */
    readonly name: pulumi.Output<string>;
    /**
     * An option to specify the QoS classifier.
     */
    readonly qosClassifier: pulumi.Output<string | undefined>;
    /**
     * Security inline settings.
     */
    readonly security: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * SSID (service set identifier) is a name broadcast in the beacons that identifies wireless network.
     */
    readonly ssid: pulumi.Output<string | undefined>;
    /**
     * Steering inline settings.
     */
    readonly steering: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Radio chains to use for transmitting signals.
     */
    readonly txChains: pulumi.Output<number[] | undefined>;
    /**
     * A limit on the transmit power (in dBm) of the interface.
     */
    readonly txPower: pulumi.Output<number | undefined>;
    readonly wifiConfigurationId: pulumi.Output<string>;
    /**
     * Create a WifiConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiConfigurationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WifiConfiguration resources.
 */
export interface WifiConfigurationState {
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
     * An option overrides the default antenna gain.
     */
    antennaGain?: pulumi.Input<number>;
    /**
     * Time interval between beacon frames.
     */
    beaconInterval?: pulumi.Input<string>;
    /**
     * Radio chains to use for receiving signals.
     */
    chains?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Channel inline settings.
     */
    channel?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    comment?: pulumi.Input<string>;
    /**
     * An option determines which regulatory domain restrictions are applied to an interface.
     */
    country?: pulumi.Input<string>;
    /**
     * Datapath inline settings.
     */
    datapath?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    disabled?: pulumi.Input<boolean>;
    /**
     * A period at which to transmit multicast traffic, when there are client devices in power save mode connected to the AP.
     */
    dtimPeriod?: pulumi.Input<number>;
    /**
     * This property has effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks
     * that are shown by some client software. Changing this setting does not improve the security of the wireless network,
     * because SSID is included in other frames sent by the AP.
     */
    hideSsid?: pulumi.Input<boolean>;
    /**
     * Interworking inline settings.
     */
    interworking?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * An option to specify the remote CAP mode.
     */
    manager?: pulumi.Input<string>;
    /**
     * An option to specify the access point operational mode.
     */
    mode?: pulumi.Input<string>;
    /**
     * An option to enable converting every multicast-address IP or IPv6 packet into multiple unicast-addresses frames for each
     * connected station.
     */
    multicastEnhance?: pulumi.Input<string>;
    /**
     * Name of the configuration.
     */
    name?: pulumi.Input<string>;
    /**
     * An option to specify the QoS classifier.
     */
    qosClassifier?: pulumi.Input<string>;
    /**
     * Security inline settings.
     */
    security?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * SSID (service set identifier) is a name broadcast in the beacons that identifies wireless network.
     */
    ssid?: pulumi.Input<string>;
    /**
     * Steering inline settings.
     */
    steering?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Radio chains to use for transmitting signals.
     */
    txChains?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * A limit on the transmit power (in dBm) of the interface.
     */
    txPower?: pulumi.Input<number>;
    wifiConfigurationId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WifiConfiguration resource.
 */
export interface WifiConfigurationArgs {
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
     * An option overrides the default antenna gain.
     */
    antennaGain?: pulumi.Input<number>;
    /**
     * Time interval between beacon frames.
     */
    beaconInterval?: pulumi.Input<string>;
    /**
     * Radio chains to use for receiving signals.
     */
    chains?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Channel inline settings.
     */
    channel?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    comment?: pulumi.Input<string>;
    /**
     * An option determines which regulatory domain restrictions are applied to an interface.
     */
    country?: pulumi.Input<string>;
    /**
     * Datapath inline settings.
     */
    datapath?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    disabled?: pulumi.Input<boolean>;
    /**
     * A period at which to transmit multicast traffic, when there are client devices in power save mode connected to the AP.
     */
    dtimPeriod?: pulumi.Input<number>;
    /**
     * This property has effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks
     * that are shown by some client software. Changing this setting does not improve the security of the wireless network,
     * because SSID is included in other frames sent by the AP.
     */
    hideSsid?: pulumi.Input<boolean>;
    /**
     * Interworking inline settings.
     */
    interworking?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * An option to specify the remote CAP mode.
     */
    manager?: pulumi.Input<string>;
    /**
     * An option to specify the access point operational mode.
     */
    mode?: pulumi.Input<string>;
    /**
     * An option to enable converting every multicast-address IP or IPv6 packet into multiple unicast-addresses frames for each
     * connected station.
     */
    multicastEnhance?: pulumi.Input<string>;
    /**
     * Name of the configuration.
     */
    name?: pulumi.Input<string>;
    /**
     * An option to specify the QoS classifier.
     */
    qosClassifier?: pulumi.Input<string>;
    /**
     * Security inline settings.
     */
    security?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * SSID (service set identifier) is a name broadcast in the beacons that identifies wireless network.
     */
    ssid?: pulumi.Input<string>;
    /**
     * Steering inline settings.
     */
    steering?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Radio chains to use for transmitting signals.
     */
    txChains?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * A limit on the transmit power (in dBm) of the interface.
     */
    txPower?: pulumi.Input<number>;
    wifiConfigurationId?: pulumi.Input<string>;
}
