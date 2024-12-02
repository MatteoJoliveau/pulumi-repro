// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WifiProvisioning extends pulumi.CustomResource {
    /**
     * Get an existing WifiProvisioning resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiProvisioningState, opts?: pulumi.CustomResourceOptions): WifiProvisioning {
        return new WifiProvisioning(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/wifiProvisioning:WifiProvisioning';

    /**
     * Returns true if the given object is an instance of WifiProvisioning.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WifiProvisioning {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WifiProvisioning.__pulumiType;
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
    /**
     * Match CAPs by IPs within configured address ranges.
     */
    public readonly addressRanges!: pulumi.Output<string[] | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Regular expression to match radios by common name.
     */
    public readonly commonNameRegexp!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Regular expression to match radios by router identity.
     */
    public readonly identityRegexp!: pulumi.Output<string | undefined>;
    /**
     * If action specifies to create interfaces, then a new master interface with its configuration set to this configuration
     * profile will be created.
     */
    public readonly masterConfiguration!: pulumi.Output<string | undefined>;
    /**
     * Specify the format of the CAP interface name creation.
     */
    public readonly nameFormat!: pulumi.Output<string | undefined>;
    /**
     * MAC address of radio to be matched, empty MAC means match all MAC addresses. `00:00:00:00:00:00` is not considered empty
     * MAC-address.
     */
    public readonly radioMac!: pulumi.Output<string | undefined>;
    /**
     * If action specifies to create interfaces, then a new slave interface for each configuration profile in this list is
     * created.
     */
    public readonly slaveConfigurations!: pulumi.Output<string[] | undefined>;
    /**
     * The name format of the slave CAP interfaces. This option is available in RouterOS starting from version 7.16.
     */
    public readonly slaveNameFormat!: pulumi.Output<string | undefined>;
    /**
     * Match CAPs by supported modes.
     */
    public readonly supportedBands!: pulumi.Output<string[] | undefined>;
    public readonly wifiProvisioningId!: pulumi.Output<string>;

    /**
     * Create a WifiProvisioning resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiProvisioningArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WifiProvisioningArgs | WifiProvisioningState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WifiProvisioningState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["addressRanges"] = state ? state.addressRanges : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["commonNameRegexp"] = state ? state.commonNameRegexp : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["identityRegexp"] = state ? state.identityRegexp : undefined;
            resourceInputs["masterConfiguration"] = state ? state.masterConfiguration : undefined;
            resourceInputs["nameFormat"] = state ? state.nameFormat : undefined;
            resourceInputs["radioMac"] = state ? state.radioMac : undefined;
            resourceInputs["slaveConfigurations"] = state ? state.slaveConfigurations : undefined;
            resourceInputs["slaveNameFormat"] = state ? state.slaveNameFormat : undefined;
            resourceInputs["supportedBands"] = state ? state.supportedBands : undefined;
            resourceInputs["wifiProvisioningId"] = state ? state.wifiProvisioningId : undefined;
        } else {
            const args = argsOrState as WifiProvisioningArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["addressRanges"] = args ? args.addressRanges : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["commonNameRegexp"] = args ? args.commonNameRegexp : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["identityRegexp"] = args ? args.identityRegexp : undefined;
            resourceInputs["masterConfiguration"] = args ? args.masterConfiguration : undefined;
            resourceInputs["nameFormat"] = args ? args.nameFormat : undefined;
            resourceInputs["radioMac"] = args ? args.radioMac : undefined;
            resourceInputs["slaveConfigurations"] = args ? args.slaveConfigurations : undefined;
            resourceInputs["slaveNameFormat"] = args ? args.slaveNameFormat : undefined;
            resourceInputs["supportedBands"] = args ? args.supportedBands : undefined;
            resourceInputs["wifiProvisioningId"] = args ? args.wifiProvisioningId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WifiProvisioning.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
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