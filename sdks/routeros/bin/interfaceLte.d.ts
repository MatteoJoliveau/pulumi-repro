import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceLte extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceLte resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceLteState, opts?: pulumi.CustomResourceOptions): InterfaceLte;
    /**
     * Returns true if the given object is an instance of InterfaceLte.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceLte;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Enable data roaming for connecting to other countries data-providers. Not all LTE modems support this feature. Some
     * modems, that do not fully support this feature, will connect to the network but will not establish an IP data connection
     * with allow-roaming set to no.
     */
    readonly allowRoaming: pulumi.Output<boolean | undefined>;
    /**
     * Which APN profile to use for this interface.
     */
    readonly apnProfiles: pulumi.Output<string | undefined>;
    /**
     * LTE Frequency band used in communication [LTE Bands and
     * bandwidths](https://en.wikipedia.org/wiki/LTE_frequency_bands#Frequency_bands_and_channel_bandwidths).
     */
    readonly bands: pulumi.Output<number[] | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The default name for an interface.
     */
    readonly defaultName: pulumi.Output<string>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    readonly inactive: pulumi.Output<boolean>;
    readonly interfaceLteId: pulumi.Output<string>;
    /**
     * Modem init string (AT command that will be executed at modem startup).
     */
    readonly modemInit: pulumi.Output<string | undefined>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    readonly mtu: pulumi.Output<string>;
    /**
     * Descriptive name of the interface.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Select/force mode for LTE interface to operate with.
     */
    readonly networkModes: pulumi.Output<string[] | undefined>;
    /**
     * 5G NR Frequency band used in communication [5G NR Bands and
     * bandwidths](https://en.wikipedia.org/wiki/5G_NR_frequency_bands).
     */
    readonly nrBands: pulumi.Output<number[] | undefined>;
    /**
     * Used to lock the device to a specific operator full PLMN number is used for the lock consisting of MCC+MNC. [PLMN
     * codes](https://en.wikipedia.org/wiki/Public_land_mobile_network).
     */
    readonly operator: pulumi.Output<number | undefined>;
    /**
     * SIM Card's PIN code.
     */
    readonly pin: pulumi.Output<string | undefined>;
    readonly running: pulumi.Output<boolean>;
    /**
     * SMS functionality. `mbim`: uses MBIM driver. `at`: uses AT-Commands. `auto`: selects the appropriate option depending on
     * the modem.
     */
    readonly smsProtocol: pulumi.Output<string | undefined>;
    readonly smsRead: pulumi.Output<boolean | undefined>;
    /**
     * Create a InterfaceLte resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceLteArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceLte resources.
 */
export interface InterfaceLteState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Enable data roaming for connecting to other countries data-providers. Not all LTE modems support this feature. Some
     * modems, that do not fully support this feature, will connect to the network but will not establish an IP data connection
     * with allow-roaming set to no.
     */
    allowRoaming?: pulumi.Input<boolean>;
    /**
     * Which APN profile to use for this interface.
     */
    apnProfiles?: pulumi.Input<string>;
    /**
     * LTE Frequency band used in communication [LTE Bands and
     * bandwidths](https://en.wikipedia.org/wiki/LTE_frequency_bands#Frequency_bands_and_channel_bandwidths).
     */
    bands?: pulumi.Input<pulumi.Input<number>[]>;
    comment?: pulumi.Input<string>;
    /**
     * The default name for an interface.
     */
    defaultName?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    inactive?: pulumi.Input<boolean>;
    interfaceLteId?: pulumi.Input<string>;
    /**
     * Modem init string (AT command that will be executed at modem startup).
     */
    modemInit?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    /**
     * Descriptive name of the interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Select/force mode for LTE interface to operate with.
     */
    networkModes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * 5G NR Frequency band used in communication [5G NR Bands and
     * bandwidths](https://en.wikipedia.org/wiki/5G_NR_frequency_bands).
     */
    nrBands?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Used to lock the device to a specific operator full PLMN number is used for the lock consisting of MCC+MNC. [PLMN
     * codes](https://en.wikipedia.org/wiki/Public_land_mobile_network).
     */
    operator?: pulumi.Input<number>;
    /**
     * SIM Card's PIN code.
     */
    pin?: pulumi.Input<string>;
    running?: pulumi.Input<boolean>;
    /**
     * SMS functionality. `mbim`: uses MBIM driver. `at`: uses AT-Commands. `auto`: selects the appropriate option depending on
     * the modem.
     */
    smsProtocol?: pulumi.Input<string>;
    smsRead?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a InterfaceLte resource.
 */
export interface InterfaceLteArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Enable data roaming for connecting to other countries data-providers. Not all LTE modems support this feature. Some
     * modems, that do not fully support this feature, will connect to the network but will not establish an IP data connection
     * with allow-roaming set to no.
     */
    allowRoaming?: pulumi.Input<boolean>;
    /**
     * Which APN profile to use for this interface.
     */
    apnProfiles?: pulumi.Input<string>;
    /**
     * LTE Frequency band used in communication [LTE Bands and
     * bandwidths](https://en.wikipedia.org/wiki/LTE_frequency_bands#Frequency_bands_and_channel_bandwidths).
     */
    bands?: pulumi.Input<pulumi.Input<number>[]>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    interfaceLteId?: pulumi.Input<string>;
    /**
     * Modem init string (AT command that will be executed at modem startup).
     */
    modemInit?: pulumi.Input<string>;
    /**
     * Layer3 Maximum transmission unit ('auto', 0 .. 65535)
     */
    mtu?: pulumi.Input<string>;
    /**
     * Descriptive name of the interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Select/force mode for LTE interface to operate with.
     */
    networkModes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * 5G NR Frequency band used in communication [5G NR Bands and
     * bandwidths](https://en.wikipedia.org/wiki/5G_NR_frequency_bands).
     */
    nrBands?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * Used to lock the device to a specific operator full PLMN number is used for the lock consisting of MCC+MNC. [PLMN
     * codes](https://en.wikipedia.org/wiki/Public_land_mobile_network).
     */
    operator?: pulumi.Input<number>;
    /**
     * SIM Card's PIN code.
     */
    pin?: pulumi.Input<string>;
    /**
     * SMS functionality. `mbim`: uses MBIM driver. `at`: uses AT-Commands. `auto`: selects the appropriate option depending on
     * the modem.
     */
    smsProtocol?: pulumi.Input<string>;
    smsRead?: pulumi.Input<boolean>;
}
