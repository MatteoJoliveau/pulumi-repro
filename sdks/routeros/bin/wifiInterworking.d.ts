import * as pulumi from "@pulumi/pulumi";
export declare class WifiInterworking extends pulumi.CustomResource {
    /**
     * Get an existing WifiInterworking resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiInterworkingState, opts?: pulumi.CustomResourceOptions): WifiInterworking;
    /**
     * Returns true if the given object is an instance of WifiInterworking.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WifiInterworking;
    /**
     * Cellular network advertisement information - country and network codes.
     */
    readonly '3gppInfos': pulumi.Output<string[] | undefined>;
    /**
     * Cellular network advertisement information - country and network codes.
     */
    readonly '3gppRaw': pulumi.Output<string | undefined>;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option to enable Additional Steps Required for Access.
     */
    readonly asra: pulumi.Output<boolean | undefined>;
    /**
     * A list of authentication types that is only effective when `asra` is set to yes.
     */
    readonly authenticationTypes: pulumi.Output<string[] | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * A list to provide information about the allowed IP protocols and ports.
     */
    readonly connectionCapabilities: pulumi.Output<string[] | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * A list of fully qualified domain names (FQDN) that indicate the entity operating the Hotspot.
     */
    readonly domainNames: pulumi.Output<string[] | undefined>;
    /**
     * An option to enable Emergency Services Reachability.
     */
    readonly esr: pulumi.Output<boolean | undefined>;
    /**
     * Homogenous extended service set identifier (HESSID).
     */
    readonly hessid: pulumi.Output<string | undefined>;
    /**
     * An option to indicate Hotspot 2.0 capability of the Access Point.
     */
    readonly hotspot20: pulumi.Output<boolean | undefined>;
    /**
     * An option to indicate Downstream Group-Addressed Forwarding (DGAF) capability.
     */
    readonly hotspot20Dgaf: pulumi.Output<boolean | undefined>;
    /**
     * An option to indicate Internet availability.
     */
    readonly internet: pulumi.Output<boolean | undefined>;
    /**
     * An option to indicate IPv4 availability.
     */
    readonly ipv4Availability: pulumi.Output<string | undefined>;
    /**
     * An option to indicate IPv6 availability.
     */
    readonly ipv6Availability: pulumi.Output<string | undefined>;
    /**
     * Name of the interworking profile.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Information about network access type.
     */
    readonly networkType: pulumi.Output<string | undefined>;
    /**
     * A list with information about other available bands.
     */
    readonly operationalClasses: pulumi.Output<number[] | undefined>;
    /**
     * A list of colon-separated operator names and language codes.
     */
    readonly operatorNames: pulumi.Output<string[] | undefined>;
    /**
     * A list of colon-separated realm names and EAP methods.
     */
    readonly realms: pulumi.Output<string[] | undefined>;
    /**
     * A list of 'NAI Realm Tuple' excluding 'NAI Realm Data Field Length' field.
     */
    readonly realmsRaws: pulumi.Output<string[] | undefined>;
    /**
     * A list of Organization Identifiers (OI).
     */
    readonly roamingOis: pulumi.Output<string[] | undefined>;
    /**
     * An option to enable Unauthenticated Emergency Service Accessibility.
     */
    readonly uesa: pulumi.Output<boolean | undefined>;
    /**
     * Information about the venue in which the Access Point is located.
     */
    readonly venue: pulumi.Output<string | undefined>;
    /**
     * A list of colon-separated venue names and language codes.
     */
    readonly venueNames: pulumi.Output<string[] | undefined>;
    /**
     * An option to indicate that the Access Point or the network is at its max capacity.
     */
    readonly wanAtCapacity: pulumi.Output<boolean | undefined>;
    /**
     * The downlink speed of the WAN connection set in kbps.
     */
    readonly wanDownlink: pulumi.Output<number | undefined>;
    /**
     * The downlink load of the WAN connection measured over `wan_measurement_duration`.
     */
    readonly wanDownlinkLoad: pulumi.Output<number | undefined>;
    /**
     * The duration during which `wan_downlink_load` and `wan_uplink_load` are measured.
     */
    readonly wanMeasurementDuration: pulumi.Output<number | undefined>;
    /**
     * Information about the status of the Access Point's WAN connection.
     */
    readonly wanStatus: pulumi.Output<string | undefined>;
    /**
     * An option to indicate that the WAN link is symmetric (upload and download speeds are the same).
     */
    readonly wanSymmetric: pulumi.Output<boolean | undefined>;
    /**
     * The uplink speed of the WAN connection set in kbps.
     */
    readonly wanUplink: pulumi.Output<number | undefined>;
    /**
     * The uplink load of the WAN connection measured over `wan_measurement_duration`.
     */
    readonly wanUplinkLoad: pulumi.Output<number | undefined>;
    readonly wifiInterworkingId: pulumi.Output<string>;
    /**
     * Create a WifiInterworking resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiInterworkingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WifiInterworking resources.
 */
export interface WifiInterworkingState {
    /**
     * Cellular network advertisement information - country and network codes.
     */
    '3gppInfos'?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Cellular network advertisement information - country and network codes.
     */
    '3gppRaw'?: pulumi.Input<string>;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to enable Additional Steps Required for Access.
     */
    asra?: pulumi.Input<boolean>;
    /**
     * A list of authentication types that is only effective when `asra` is set to yes.
     */
    authenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * A list to provide information about the allowed IP protocols and ports.
     */
    connectionCapabilities?: pulumi.Input<pulumi.Input<string>[]>;
    disabled?: pulumi.Input<boolean>;
    /**
     * A list of fully qualified domain names (FQDN) that indicate the entity operating the Hotspot.
     */
    domainNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to enable Emergency Services Reachability.
     */
    esr?: pulumi.Input<boolean>;
    /**
     * Homogenous extended service set identifier (HESSID).
     */
    hessid?: pulumi.Input<string>;
    /**
     * An option to indicate Hotspot 2.0 capability of the Access Point.
     */
    hotspot20?: pulumi.Input<boolean>;
    /**
     * An option to indicate Downstream Group-Addressed Forwarding (DGAF) capability.
     */
    hotspot20Dgaf?: pulumi.Input<boolean>;
    /**
     * An option to indicate Internet availability.
     */
    internet?: pulumi.Input<boolean>;
    /**
     * An option to indicate IPv4 availability.
     */
    ipv4Availability?: pulumi.Input<string>;
    /**
     * An option to indicate IPv6 availability.
     */
    ipv6Availability?: pulumi.Input<string>;
    /**
     * Name of the interworking profile.
     */
    name?: pulumi.Input<string>;
    /**
     * Information about network access type.
     */
    networkType?: pulumi.Input<string>;
    /**
     * A list with information about other available bands.
     */
    operationalClasses?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * A list of colon-separated operator names and language codes.
     */
    operatorNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of colon-separated realm names and EAP methods.
     */
    realms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of 'NAI Realm Tuple' excluding 'NAI Realm Data Field Length' field.
     */
    realmsRaws?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of Organization Identifiers (OI).
     */
    roamingOis?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to enable Unauthenticated Emergency Service Accessibility.
     */
    uesa?: pulumi.Input<boolean>;
    /**
     * Information about the venue in which the Access Point is located.
     */
    venue?: pulumi.Input<string>;
    /**
     * A list of colon-separated venue names and language codes.
     */
    venueNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to indicate that the Access Point or the network is at its max capacity.
     */
    wanAtCapacity?: pulumi.Input<boolean>;
    /**
     * The downlink speed of the WAN connection set in kbps.
     */
    wanDownlink?: pulumi.Input<number>;
    /**
     * The downlink load of the WAN connection measured over `wan_measurement_duration`.
     */
    wanDownlinkLoad?: pulumi.Input<number>;
    /**
     * The duration during which `wan_downlink_load` and `wan_uplink_load` are measured.
     */
    wanMeasurementDuration?: pulumi.Input<number>;
    /**
     * Information about the status of the Access Point's WAN connection.
     */
    wanStatus?: pulumi.Input<string>;
    /**
     * An option to indicate that the WAN link is symmetric (upload and download speeds are the same).
     */
    wanSymmetric?: pulumi.Input<boolean>;
    /**
     * The uplink speed of the WAN connection set in kbps.
     */
    wanUplink?: pulumi.Input<number>;
    /**
     * The uplink load of the WAN connection measured over `wan_measurement_duration`.
     */
    wanUplinkLoad?: pulumi.Input<number>;
    wifiInterworkingId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WifiInterworking resource.
 */
export interface WifiInterworkingArgs {
    /**
     * Cellular network advertisement information - country and network codes.
     */
    '3gppInfos'?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Cellular network advertisement information - country and network codes.
     */
    '3gppRaw'?: pulumi.Input<string>;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to enable Additional Steps Required for Access.
     */
    asra?: pulumi.Input<boolean>;
    /**
     * A list of authentication types that is only effective when `asra` is set to yes.
     */
    authenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * A list to provide information about the allowed IP protocols and ports.
     */
    connectionCapabilities?: pulumi.Input<pulumi.Input<string>[]>;
    disabled?: pulumi.Input<boolean>;
    /**
     * A list of fully qualified domain names (FQDN) that indicate the entity operating the Hotspot.
     */
    domainNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to enable Emergency Services Reachability.
     */
    esr?: pulumi.Input<boolean>;
    /**
     * Homogenous extended service set identifier (HESSID).
     */
    hessid?: pulumi.Input<string>;
    /**
     * An option to indicate Hotspot 2.0 capability of the Access Point.
     */
    hotspot20?: pulumi.Input<boolean>;
    /**
     * An option to indicate Downstream Group-Addressed Forwarding (DGAF) capability.
     */
    hotspot20Dgaf?: pulumi.Input<boolean>;
    /**
     * An option to indicate Internet availability.
     */
    internet?: pulumi.Input<boolean>;
    /**
     * An option to indicate IPv4 availability.
     */
    ipv4Availability?: pulumi.Input<string>;
    /**
     * An option to indicate IPv6 availability.
     */
    ipv6Availability?: pulumi.Input<string>;
    /**
     * Name of the interworking profile.
     */
    name?: pulumi.Input<string>;
    /**
     * Information about network access type.
     */
    networkType?: pulumi.Input<string>;
    /**
     * A list with information about other available bands.
     */
    operationalClasses?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * A list of colon-separated operator names and language codes.
     */
    operatorNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of colon-separated realm names and EAP methods.
     */
    realms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of 'NAI Realm Tuple' excluding 'NAI Realm Data Field Length' field.
     */
    realmsRaws?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of Organization Identifiers (OI).
     */
    roamingOis?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to enable Unauthenticated Emergency Service Accessibility.
     */
    uesa?: pulumi.Input<boolean>;
    /**
     * Information about the venue in which the Access Point is located.
     */
    venue?: pulumi.Input<string>;
    /**
     * A list of colon-separated venue names and language codes.
     */
    venueNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to indicate that the Access Point or the network is at its max capacity.
     */
    wanAtCapacity?: pulumi.Input<boolean>;
    /**
     * The downlink speed of the WAN connection set in kbps.
     */
    wanDownlink?: pulumi.Input<number>;
    /**
     * The downlink load of the WAN connection measured over `wan_measurement_duration`.
     */
    wanDownlinkLoad?: pulumi.Input<number>;
    /**
     * The duration during which `wan_downlink_load` and `wan_uplink_load` are measured.
     */
    wanMeasurementDuration?: pulumi.Input<number>;
    /**
     * Information about the status of the Access Point's WAN connection.
     */
    wanStatus?: pulumi.Input<string>;
    /**
     * An option to indicate that the WAN link is symmetric (upload and download speeds are the same).
     */
    wanSymmetric?: pulumi.Input<boolean>;
    /**
     * The uplink speed of the WAN connection set in kbps.
     */
    wanUplink?: pulumi.Input<number>;
    /**
     * The uplink load of the WAN connection measured over `wan_measurement_duration`.
     */
    wanUplinkLoad?: pulumi.Input<number>;
    wifiInterworkingId?: pulumi.Input<string>;
}
