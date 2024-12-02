import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceWirelessCap extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceWirelessCap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceWirelessCapState, opts?: pulumi.CustomResourceOptions): InterfaceWirelessCap;
    /**
     * Returns true if the given object is an instance of InterfaceWirelessCap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceWirelessCap;
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
    readonly ___skip_: pulumi.Output<string | undefined>;
    /**
     * Bridge interface to add the interface as a bridge port.
     */
    readonly bridge: pulumi.Output<string | undefined>;
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
     * List of interfaces over which CAP should attempt to discover CAPs Manager.
     */
    readonly discoveryInterfaces: pulumi.Output<string[] | undefined>;
    /**
     * Disable or enable the CAP functionality.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    readonly interfaceWirelessCapId: pulumi.Output<string>;
    /**
     * List of interfaces managed by CAPs Manager.
     */
    readonly interfaces: pulumi.Output<string[] | undefined>;
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
     * An option that creates static virtual interfaces.
     */
    readonly staticVirtual: pulumi.Output<boolean | undefined>;
    /**
     * Create a InterfaceWirelessCap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceWirelessCapArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceWirelessCap resources.
 */
export interface InterfaceWirelessCapState {
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
    ___skip_?: pulumi.Input<string>;
    /**
     * Bridge interface to add the interface as a bridge port.
     */
    bridge?: pulumi.Input<string>;
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
    interfaceWirelessCapId?: pulumi.Input<string>;
    /**
     * List of interfaces managed by CAPs Manager.
     */
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
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
     * An option that creates static virtual interfaces.
     */
    staticVirtual?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a InterfaceWirelessCap resource.
 */
export interface InterfaceWirelessCapArgs {
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
    ___skip_?: pulumi.Input<string>;
    /**
     * Bridge interface to add the interface as a bridge port.
     */
    bridge?: pulumi.Input<string>;
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
    interfaceWirelessCapId?: pulumi.Input<string>;
    /**
     * List of interfaces managed by CAPs Manager.
     */
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Lock CAP to the first CAPsMAN it connects to.
     */
    lockToCapsMan?: pulumi.Input<boolean>;
    /**
     * An option that creates static virtual interfaces.
     */
    staticVirtual?: pulumi.Input<boolean>;
}
