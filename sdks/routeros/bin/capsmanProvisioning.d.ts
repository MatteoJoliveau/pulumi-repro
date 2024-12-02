import * as pulumi from "@pulumi/pulumi";
export declare class CapsmanProvisioning extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanProvisioning resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanProvisioningState, opts?: pulumi.CustomResourceOptions): CapsmanProvisioning;
    /**
     * Returns true if the given object is an instance of CapsmanProvisioning.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is CapsmanProvisioning;
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
    readonly capsmanProvisioningId: pulumi.Output<string>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Regular expression to match radios by common name. Each CAP's common name identifier can be found under "/caps-man
     * radio" as value "REMOTE-CAP-NAME"
     */
    readonly commonNameRegexp: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Match radios by supported wireless modes.
     */
    readonly hwSupportedModes: pulumi.Output<string[] | undefined>;
    /**
     * Regular expression to match radios by router identity.
     */
    readonly identityRegexp: pulumi.Output<string | undefined>;
    /**
     * Match CAPs with IPs within configured address range.
     */
    readonly ipAddressRanges: pulumi.Output<string[] | undefined>;
    /**
     * If action specifies to create interfaces, then a new master interface with its configuration set to this configuration
     * profile will be created
     */
    readonly masterConfiguration: pulumi.Output<string>;
    /**
     * Specify the syntax of the CAP interface name creation.
     */
    readonly nameFormat: pulumi.Output<string | undefined>;
    /**
     * Name prefix which can be used in the name-format for creating the CAP interface names.
     */
    readonly namePrefix: pulumi.Output<string | undefined>;
    /**
     * MAC address of radio to be matched, empty MAC (00:00:00:00:00:00) means match all MAC addresses.
     */
    readonly radioMac: pulumi.Output<string | undefined>;
    /**
     * If action specifies to create interfaces, then a new slave interface for each configuration profile in this list is
     * created.
     */
    readonly slaveConfigurations: pulumi.Output<string[] | undefined>;
    /**
     * Create a CapsmanProvisioning resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapsmanProvisioningArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering CapsmanProvisioning resources.
 */
export interface CapsmanProvisioningState {
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
    capsmanProvisioningId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Regular expression to match radios by common name. Each CAP's common name identifier can be found under "/caps-man
     * radio" as value "REMOTE-CAP-NAME"
     */
    commonNameRegexp?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Match radios by supported wireless modes.
     */
    hwSupportedModes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Regular expression to match radios by router identity.
     */
    identityRegexp?: pulumi.Input<string>;
    /**
     * Match CAPs with IPs within configured address range.
     */
    ipAddressRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If action specifies to create interfaces, then a new master interface with its configuration set to this configuration
     * profile will be created
     */
    masterConfiguration?: pulumi.Input<string>;
    /**
     * Specify the syntax of the CAP interface name creation.
     */
    nameFormat?: pulumi.Input<string>;
    /**
     * Name prefix which can be used in the name-format for creating the CAP interface names.
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * MAC address of radio to be matched, empty MAC (00:00:00:00:00:00) means match all MAC addresses.
     */
    radioMac?: pulumi.Input<string>;
    /**
     * If action specifies to create interfaces, then a new slave interface for each configuration profile in this list is
     * created.
     */
    slaveConfigurations?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a CapsmanProvisioning resource.
 */
export interface CapsmanProvisioningArgs {
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
    capsmanProvisioningId?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Regular expression to match radios by common name. Each CAP's common name identifier can be found under "/caps-man
     * radio" as value "REMOTE-CAP-NAME"
     */
    commonNameRegexp?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Match radios by supported wireless modes.
     */
    hwSupportedModes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Regular expression to match radios by router identity.
     */
    identityRegexp?: pulumi.Input<string>;
    /**
     * Match CAPs with IPs within configured address range.
     */
    ipAddressRanges?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If action specifies to create interfaces, then a new master interface with its configuration set to this configuration
     * profile will be created
     */
    masterConfiguration: pulumi.Input<string>;
    /**
     * Specify the syntax of the CAP interface name creation.
     */
    nameFormat?: pulumi.Input<string>;
    /**
     * Name prefix which can be used in the name-format for creating the CAP interface names.
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * MAC address of radio to be matched, empty MAC (00:00:00:00:00:00) means match all MAC addresses.
     */
    radioMac?: pulumi.Input<string>;
    /**
     * If action specifies to create interfaces, then a new slave interface for each configuration profile in this list is
     * created.
     */
    slaveConfigurations?: pulumi.Input<pulumi.Input<string>[]>;
}
