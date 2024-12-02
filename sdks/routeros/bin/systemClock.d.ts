import * as pulumi from "@pulumi/pulumi";
export declare class SystemClock extends pulumi.CustomResource {
    /**
     * Get an existing SystemClock resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemClockState, opts?: pulumi.CustomResourceOptions): SystemClock;
    /**
     * Returns true if the given object is an instance of SystemClock.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemClock;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Date.
     */
    readonly date: pulumi.Output<string | undefined>;
    /**
     * This property has the value yes while daylight saving time of the current time zone is active.
     */
    readonly dstActive: pulumi.Output<boolean>;
    /**
     * This is the current value of GMT offset used by the system, after applying base time zone offset and active daylight
     * saving time offset.
     */
    readonly gmtOffset: pulumi.Output<string>;
    readonly systemClockId: pulumi.Output<string>;
    /**
     * Time.
     */
    readonly time: pulumi.Output<string | undefined>;
    /**
     * Feature available from v6.27. If enabled, the time zone will be set automatically.
     */
    readonly timeZoneAutodetect: pulumi.Output<boolean | undefined>;
    /**
     * Name of the time zone. As most of the text values in RouterOS, this value is case sensitive. Special value manual
     * applies [manually configured GMT
     * offset](https://wiki.mikrotik.com/wiki/Manual:System/Time#Manual_time_zone_configuration), which by default is 00:00
     * with no daylight saving time.
     */
    readonly timeZoneName: pulumi.Output<string | undefined>;
    /**
     * Create a SystemClock resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemClockArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SystemClock resources.
 */
export interface SystemClockState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Date.
     */
    date?: pulumi.Input<string>;
    /**
     * This property has the value yes while daylight saving time of the current time zone is active.
     */
    dstActive?: pulumi.Input<boolean>;
    /**
     * This is the current value of GMT offset used by the system, after applying base time zone offset and active daylight
     * saving time offset.
     */
    gmtOffset?: pulumi.Input<string>;
    systemClockId?: pulumi.Input<string>;
    /**
     * Time.
     */
    time?: pulumi.Input<string>;
    /**
     * Feature available from v6.27. If enabled, the time zone will be set automatically.
     */
    timeZoneAutodetect?: pulumi.Input<boolean>;
    /**
     * Name of the time zone. As most of the text values in RouterOS, this value is case sensitive. Special value manual
     * applies [manually configured GMT
     * offset](https://wiki.mikrotik.com/wiki/Manual:System/Time#Manual_time_zone_configuration), which by default is 00:00
     * with no daylight saving time.
     */
    timeZoneName?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SystemClock resource.
 */
export interface SystemClockArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Date.
     */
    date?: pulumi.Input<string>;
    systemClockId?: pulumi.Input<string>;
    /**
     * Time.
     */
    time?: pulumi.Input<string>;
    /**
     * Feature available from v6.27. If enabled, the time zone will be set automatically.
     */
    timeZoneAutodetect?: pulumi.Input<boolean>;
    /**
     * Name of the time zone. As most of the text values in RouterOS, this value is case sensitive. Special value manual
     * applies [manually configured GMT
     * offset](https://wiki.mikrotik.com/wiki/Manual:System/Time#Manual_time_zone_configuration), which by default is 00:00
     * with no daylight saving time.
     */
    timeZoneName?: pulumi.Input<string>;
}
