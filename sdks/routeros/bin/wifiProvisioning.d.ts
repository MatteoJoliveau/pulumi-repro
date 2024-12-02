import * as pulumi from "@pulumi/pulumi";
export declare class WifiProvisioning extends pulumi.CustomResource {
    /**
     * Get an existing WifiProvisioning resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiProvisioningState, opts?: pulumi.CustomResourceOptions): WifiProvisioning;
    /**
     * Returns true if the given object is an instance of WifiProvisioning.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WifiProvisioning;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Provisioning action.
     */
    readonly action: pulumi.Output<string | undefined>;
    /**
     * Match CAPs by IPs within configured address ranges.
     */
    readonly addressRanges: pulumi.Output<string[] | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Regular expression to match radios by common name.
     */
    readonly commonNameRegexp: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Regular expression to match radios by router identity.
     */
    readonly identityRegexp: pulumi.Output<string | undefined>;
    /**
     * If action specifies to create interfaces, then a new master interface with its configuration set to this configuration
     * profile will be created.
     */
    readonly masterConfiguration: pulumi.Output<string | undefined>;
    /**
     * Specify the format of the CAP interface name creation.
     */
    readonly nameFormat: pulumi.Output<string | undefined>;
    /**
     * MAC address of radio to be matched, empty MAC means match all MAC addresses. `00:00:00:00:00:00` is not considered empty
     * MAC-address.
     */
    readonly radioMac: pulumi.Output<string | undefined>;
    /**
     * If action specifies to create interfaces, then a new slave interface for each configuration profile in this list is
     * created.
     */
    readonly slaveConfigurations: pulumi.Output<string[] | undefined>;
    /**
     * The name format of the slave CAP interfaces. This option is available in RouterOS starting from version 7.16.
     */
    readonly slaveNameFormat: pulumi.Output<string | undefined>;
    /**
     * Match CAPs by supported modes.
     */
    readonly supportedBands: pulumi.Output<string[] | undefined>;
    readonly wifiProvisioningId: pulumi.Output<string>;
    /**
     * Create a WifiProvisioning resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiProvisioningArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WifiProvisioning resources.
 */
export interface WifiProvisioningState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Provisioning action.
     */
    action?: pulumi.Input<string>;
    /**
     * Match CAPs by IPs within configured address ranges.
     */
    addressRanges?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * Regular expression to match radios by common name.
     */
    commonNameRegexp?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Regular expression to match radios by router identity.
     */
    identityRegexp?: pulumi.Input<string>;
    /**
     * If action specifies to create interfaces, then a new master interface with its configuration set to this configuration
     * profile will be created.
     */
    masterConfiguration?: pulumi.Input<string>;
    /**
     * Specify the format of the CAP interface name creation.
     */
    nameFormat?: pulumi.Input<string>;
    /**
     * MAC address of radio to be matched, empty MAC means match all MAC addresses. `00:00:00:00:00:00` is not considered empty
     * MAC-address.
     */
    radioMac?: pulumi.Input<string>;
    /**
     * If action specifies to create interfaces, then a new slave interface for each configuration profile in this list is
     * created.
     */
    slaveConfigurations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name format of the slave CAP interfaces. This option is available in RouterOS starting from version 7.16.
     */
    slaveNameFormat?: pulumi.Input<string>;
    /**
     * Match CAPs by supported modes.
     */
    supportedBands?: pulumi.Input<pulumi.Input<string>[]>;
    wifiProvisioningId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WifiProvisioning resource.
 */
export interface WifiProvisioningArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Provisioning action.
     */
    action?: pulumi.Input<string>;
    /**
     * Match CAPs by IPs within configured address ranges.
     */
    addressRanges?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * Regular expression to match radios by common name.
     */
    commonNameRegexp?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Regular expression to match radios by router identity.
     */
    identityRegexp?: pulumi.Input<string>;
    /**
     * If action specifies to create interfaces, then a new master interface with its configuration set to this configuration
     * profile will be created.
     */
    masterConfiguration?: pulumi.Input<string>;
    /**
     * Specify the format of the CAP interface name creation.
     */
    nameFormat?: pulumi.Input<string>;
    /**
     * MAC address of radio to be matched, empty MAC means match all MAC addresses. `00:00:00:00:00:00` is not considered empty
     * MAC-address.
     */
    radioMac?: pulumi.Input<string>;
    /**
     * If action specifies to create interfaces, then a new slave interface for each configuration profile in this list is
     * created.
     */
    slaveConfigurations?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name format of the slave CAP interfaces. This option is available in RouterOS starting from version 7.16.
     */
    slaveNameFormat?: pulumi.Input<string>;
    /**
     * Match CAPs by supported modes.
     */
    supportedBands?: pulumi.Input<pulumi.Input<string>[]>;
    wifiProvisioningId?: pulumi.Input<string>;
}
