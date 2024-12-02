import * as pulumi from "@pulumi/pulumi";
export declare class WifiCap extends pulumi.CustomResource {
    /**
     * Get an existing WifiCap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiCapState, opts?: pulumi.CustomResourceOptions): WifiCap;
    /**
     * Returns true if the given object is an instance of WifiCap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WifiCap;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * List of Manager IP addresses that CAP will attempt to contact during discovery.
     */
    readonly capsManAddresses: pulumi.Output<string[] | undefined>;
    /**
     * List of manager certificate common names that CAP will connect to.
     */
    readonly capsManCertificateCommonNames: pulumi.Output<string[] | undefined>;
    /**
     * An ordered list of CAPs Manager names that the CAP will connect to.
     */
    readonly capsManNames: pulumi.Output<string[] | undefined>;
    /**
     * Certificate to use for authentication.
     */
    readonly certificate: pulumi.Output<string | undefined>;
    /**
     * Currently used CAPsMAN address.
     */
    readonly currentCapsManAddress: pulumi.Output<string>;
    /**
     * Currently used CAPsMAN identity.
     */
    readonly currentCapsManIdentity: pulumi.Output<string>;
    /**
     * List of interfaces over which CAP should attempt to discover CAPs Manager.
     */
    readonly discoveryInterfaces: pulumi.Output<string[] | undefined>;
    /**
     * Disable or enable the CAP functionality.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Lock CAP to the first CAPsMAN it connects to.
     */
    readonly lockToCapsMan: pulumi.Output<boolean | undefined>;
    /**
     * Common name of the CAPsMAN that the CAP is locked to.
     */
    readonly lockedCapsManCommonName: pulumi.Output<string>;
    /**
     * Requested certificate.
     */
    readonly requestedCertificate: pulumi.Output<string>;
    /**
     * Name of the bridge interface the CAP will be added to.
     */
    readonly slavesDatapath: pulumi.Output<string | undefined>;
    /**
     * An option that creates static virtual interfaces.
     */
    readonly slavesStatic: pulumi.Output<boolean | undefined>;
    readonly wifiCapId: pulumi.Output<string>;
    /**
     * Create a WifiCap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiCapArgs, opts?: pulumi.CustomResourceOptions);
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
