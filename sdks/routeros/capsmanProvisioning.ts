// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CapsmanProvisioning extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanProvisioning resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CapsmanProvisioningState, opts?: pulumi.CustomResourceOptions): CapsmanProvisioning {
        return new CapsmanProvisioning(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/capsmanProvisioning:CapsmanProvisioning';

    /**
     * Returns true if the given object is an instance of CapsmanProvisioning.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CapsmanProvisioning {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapsmanProvisioning.__pulumiType;
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
     * Provisioning action.
     */
    public readonly action!: pulumi.Output<string | undefined>;
    public readonly capsmanProvisioningId!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Regular expression to match radios by common name. Each CAP's common name identifier can be found under "/caps-man
     * radio" as value "REMOTE-CAP-NAME"
     */
    public readonly commonNameRegexp!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Match radios by supported wireless modes.
     */
    public readonly hwSupportedModes!: pulumi.Output<string[] | undefined>;
    /**
     * Regular expression to match radios by router identity.
     */
    public readonly identityRegexp!: pulumi.Output<string | undefined>;
    /**
     * Match CAPs with IPs within configured address range.
     */
    public readonly ipAddressRanges!: pulumi.Output<string[] | undefined>;
    /**
     * If action specifies to create interfaces, then a new master interface with its configuration set to this configuration
     * profile will be created
     */
    public readonly masterConfiguration!: pulumi.Output<string>;
    /**
     * Specify the syntax of the CAP interface name creation.
     */
    public readonly nameFormat!: pulumi.Output<string | undefined>;
    /**
     * Name prefix which can be used in the name-format for creating the CAP interface names.
     */
    public readonly namePrefix!: pulumi.Output<string | undefined>;
    /**
     * MAC address of radio to be matched, empty MAC (00:00:00:00:00:00) means match all MAC addresses.
     */
    public readonly radioMac!: pulumi.Output<string | undefined>;
    /**
     * If action specifies to create interfaces, then a new slave interface for each configuration profile in this list is
     * created.
     */
    public readonly slaveConfigurations!: pulumi.Output<string[] | undefined>;

    /**
     * Create a CapsmanProvisioning resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CapsmanProvisioningArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CapsmanProvisioningArgs | CapsmanProvisioningState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CapsmanProvisioningState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["capsmanProvisioningId"] = state ? state.capsmanProvisioningId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["commonNameRegexp"] = state ? state.commonNameRegexp : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["hwSupportedModes"] = state ? state.hwSupportedModes : undefined;
            resourceInputs["identityRegexp"] = state ? state.identityRegexp : undefined;
            resourceInputs["ipAddressRanges"] = state ? state.ipAddressRanges : undefined;
            resourceInputs["masterConfiguration"] = state ? state.masterConfiguration : undefined;
            resourceInputs["nameFormat"] = state ? state.nameFormat : undefined;
            resourceInputs["namePrefix"] = state ? state.namePrefix : undefined;
            resourceInputs["radioMac"] = state ? state.radioMac : undefined;
            resourceInputs["slaveConfigurations"] = state ? state.slaveConfigurations : undefined;
        } else {
            const args = argsOrState as CapsmanProvisioningArgs | undefined;
            if ((!args || args.masterConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'masterConfiguration'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["capsmanProvisioningId"] = args ? args.capsmanProvisioningId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["commonNameRegexp"] = args ? args.commonNameRegexp : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["hwSupportedModes"] = args ? args.hwSupportedModes : undefined;
            resourceInputs["identityRegexp"] = args ? args.identityRegexp : undefined;
            resourceInputs["ipAddressRanges"] = args ? args.ipAddressRanges : undefined;
            resourceInputs["masterConfiguration"] = args ? args.masterConfiguration : undefined;
            resourceInputs["nameFormat"] = args ? args.nameFormat : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["radioMac"] = args ? args.radioMac : undefined;
            resourceInputs["slaveConfigurations"] = args ? args.slaveConfigurations : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CapsmanProvisioning.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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
