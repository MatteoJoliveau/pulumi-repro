// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WifiCap extends pulumi.CustomResource {
    /**
     * Get an existing WifiCap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiCapState, opts?: pulumi.CustomResourceOptions): WifiCap {
        return new WifiCap(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/wifiCap:WifiCap';

    /**
     * Returns true if the given object is an instance of WifiCap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WifiCap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WifiCap.__pulumiType;
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
     * List of Manager IP addresses that CAP will attempt to contact during discovery.
     */
    public readonly capsManAddresses!: pulumi.Output<string[] | undefined>;
    /**
     * List of manager certificate common names that CAP will connect to.
     */
    public readonly capsManCertificateCommonNames!: pulumi.Output<string[] | undefined>;
    /**
     * An ordered list of CAPs Manager names that the CAP will connect to.
     */
    public readonly capsManNames!: pulumi.Output<string[] | undefined>;
    /**
     * Certificate to use for authentication.
     */
    public readonly certificate!: pulumi.Output<string | undefined>;
    /**
     * Currently used CAPsMAN address.
     */
    public /*out*/ readonly currentCapsManAddress!: pulumi.Output<string>;
    /**
     * Currently used CAPsMAN identity.
     */
    public /*out*/ readonly currentCapsManIdentity!: pulumi.Output<string>;
    /**
     * List of interfaces over which CAP should attempt to discover CAPs Manager.
     */
    public readonly discoveryInterfaces!: pulumi.Output<string[] | undefined>;
    /**
     * Disable or enable the CAP functionality.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Lock CAP to the first CAPsMAN it connects to.
     */
    public readonly lockToCapsMan!: pulumi.Output<boolean | undefined>;
    /**
     * Common name of the CAPsMAN that the CAP is locked to.
     */
    public /*out*/ readonly lockedCapsManCommonName!: pulumi.Output<string>;
    /**
     * Requested certificate.
     */
    public /*out*/ readonly requestedCertificate!: pulumi.Output<string>;
    /**
     * Name of the bridge interface the CAP will be added to.
     */
    public readonly slavesDatapath!: pulumi.Output<string | undefined>;
    /**
     * An option that creates static virtual interfaces.
     */
    public readonly slavesStatic!: pulumi.Output<boolean | undefined>;
    public readonly wifiCapId!: pulumi.Output<string>;

    /**
     * Create a WifiCap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiCapArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WifiCapArgs | WifiCapState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WifiCapState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["capsManAddresses"] = state ? state.capsManAddresses : undefined;
            resourceInputs["capsManCertificateCommonNames"] = state ? state.capsManCertificateCommonNames : undefined;
            resourceInputs["capsManNames"] = state ? state.capsManNames : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["currentCapsManAddress"] = state ? state.currentCapsManAddress : undefined;
            resourceInputs["currentCapsManIdentity"] = state ? state.currentCapsManIdentity : undefined;
            resourceInputs["discoveryInterfaces"] = state ? state.discoveryInterfaces : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["lockToCapsMan"] = state ? state.lockToCapsMan : undefined;
            resourceInputs["lockedCapsManCommonName"] = state ? state.lockedCapsManCommonName : undefined;
            resourceInputs["requestedCertificate"] = state ? state.requestedCertificate : undefined;
            resourceInputs["slavesDatapath"] = state ? state.slavesDatapath : undefined;
            resourceInputs["slavesStatic"] = state ? state.slavesStatic : undefined;
            resourceInputs["wifiCapId"] = state ? state.wifiCapId : undefined;
        } else {
            const args = argsOrState as WifiCapArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["capsManAddresses"] = args ? args.capsManAddresses : undefined;
            resourceInputs["capsManCertificateCommonNames"] = args ? args.capsManCertificateCommonNames : undefined;
            resourceInputs["capsManNames"] = args ? args.capsManNames : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["discoveryInterfaces"] = args ? args.discoveryInterfaces : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["lockToCapsMan"] = args ? args.lockToCapsMan : undefined;
            resourceInputs["slavesDatapath"] = args ? args.slavesDatapath : undefined;
            resourceInputs["slavesStatic"] = args ? args.slavesStatic : undefined;
            resourceInputs["wifiCapId"] = args ? args.wifiCapId : undefined;
            resourceInputs["currentCapsManAddress"] = undefined /*out*/;
            resourceInputs["currentCapsManIdentity"] = undefined /*out*/;
            resourceInputs["lockedCapsManCommonName"] = undefined /*out*/;
            resourceInputs["requestedCertificate"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WifiCap.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WifiCap resources.
 */
export interface WifiCapState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of Manager IP addresses that CAP will attempt to contact during discovery.
     */
    capsManAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of manager certificate common names that CAP will connect to.
     */
    capsManCertificateCommonNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An ordered list of CAPs Manager names that the CAP will connect to.
     */
    capsManNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Certificate to use for authentication.
     */
    certificate?: pulumi.Input<string>;
    /**
     * Currently used CAPsMAN address.
     */
    currentCapsManAddress?: pulumi.Input<string>;
    /**
     * Currently used CAPsMAN identity.
     */
    currentCapsManIdentity?: pulumi.Input<string>;
    /**
     * List of interfaces over which CAP should attempt to discover CAPs Manager.
     */
    discoveryInterfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Disable or enable the CAP functionality.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Lock CAP to the first CAPsMAN it connects to.
     */
    lockToCapsMan?: pulumi.Input<boolean>;
    /**
     * Common name of the CAPsMAN that the CAP is locked to.
     */
    lockedCapsManCommonName?: pulumi.Input<string>;
    /**
     * Requested certificate.
     */
    requestedCertificate?: pulumi.Input<string>;
    /**
     * Name of the bridge interface the CAP will be added to.
     */
    slavesDatapath?: pulumi.Input<string>;
    /**
     * An option that creates static virtual interfaces.
     */
    slavesStatic?: pulumi.Input<boolean>;
    wifiCapId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WifiCap resource.
 */
export interface WifiCapArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * List of Manager IP addresses that CAP will attempt to contact during discovery.
     */
    capsManAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of manager certificate common names that CAP will connect to.
     */
    capsManCertificateCommonNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An ordered list of CAPs Manager names that the CAP will connect to.
     */
    capsManNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Certificate to use for authentication.
     */
    certificate?: pulumi.Input<string>;
    /**
     * List of interfaces over which CAP should attempt to discover CAPs Manager.
     */
    discoveryInterfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Disable or enable the CAP functionality.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Lock CAP to the first CAPsMAN it connects to.
     */
    lockToCapsMan?: pulumi.Input<boolean>;
    /**
     * Name of the bridge interface the CAP will be added to.
     */
    slavesDatapath?: pulumi.Input<string>;
    /**
     * An option that creates static virtual interfaces.
     */
    slavesStatic?: pulumi.Input<boolean>;
    wifiCapId?: pulumi.Input<string>;
}