import * as pulumi from "@pulumi/pulumi";
export declare class WifiCapsman extends pulumi.CustomResource {
    /**
     * Get an existing WifiCapsman resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiCapsmanState, opts?: pulumi.CustomResourceOptions): WifiCapsman;
    /**
     * Returns true if the given object is an instance of WifiCapsman.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WifiCapsman;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Device CA certificate.
     */
    readonly caCertificate: pulumi.Output<string | undefined>;
    /**
     * Device certificate.
     */
    readonly certificate: pulumi.Output<string | undefined>;
    /**
     * Disable or enable CAPsMAN functionality.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Generated CA certificate.
     */
    readonly generatedCaCertificate: pulumi.Output<string>;
    /**
     * Generated CAPsMAN certificate.
     */
    readonly generatedCertificate: pulumi.Output<string>;
    /**
     * List of interfaces on which CAPsMAN will listen for CAP connections.
     */
    readonly interfaces: pulumi.Output<string[] | undefined>;
    /**
     * Folder location for the RouterOS packages. For example, use '/upgrade' to specify the upgrade folder from the files
     * section. If empty string is set, CAPsMAN can use built-in RouterOS packages, note that in this case only CAPs with the
     * same architecture as CAPsMAN will be upgraded.
     */
    readonly packagePath: pulumi.Output<string | undefined>;
    /**
     * Require all connecting CAPs to have a valid certificate.
     */
    readonly requirePeerCertificate: pulumi.Output<boolean | undefined>;
    /**
     * Upgrade policy options.
     */
    readonly upgradePolicy: pulumi.Output<string | undefined>;
    readonly wifiCapsmanId: pulumi.Output<string>;
    /**
     * Create a WifiCapsman resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiCapsmanArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WifiCapsman resources.
 */
export interface WifiCapsmanState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Device CA certificate.
     */
    caCertificate?: pulumi.Input<string>;
    /**
     * Device certificate.
     */
    certificate?: pulumi.Input<string>;
    /**
     * Disable or enable CAPsMAN functionality.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Generated CA certificate.
     */
    generatedCaCertificate?: pulumi.Input<string>;
    /**
     * Generated CAPsMAN certificate.
     */
    generatedCertificate?: pulumi.Input<string>;
    /**
     * List of interfaces on which CAPsMAN will listen for CAP connections.
     */
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Folder location for the RouterOS packages. For example, use '/upgrade' to specify the upgrade folder from the files
     * section. If empty string is set, CAPsMAN can use built-in RouterOS packages, note that in this case only CAPs with the
     * same architecture as CAPsMAN will be upgraded.
     */
    packagePath?: pulumi.Input<string>;
    /**
     * Require all connecting CAPs to have a valid certificate.
     */
    requirePeerCertificate?: pulumi.Input<boolean>;
    /**
     * Upgrade policy options.
     */
    upgradePolicy?: pulumi.Input<string>;
    wifiCapsmanId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WifiCapsman resource.
 */
export interface WifiCapsmanArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Device CA certificate.
     */
    caCertificate?: pulumi.Input<string>;
    /**
     * Device certificate.
     */
    certificate?: pulumi.Input<string>;
    /**
     * Disable or enable CAPsMAN functionality.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * List of interfaces on which CAPsMAN will listen for CAP connections.
     */
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Folder location for the RouterOS packages. For example, use '/upgrade' to specify the upgrade folder from the files
     * section. If empty string is set, CAPsMAN can use built-in RouterOS packages, note that in this case only CAPs with the
     * same architecture as CAPsMAN will be upgraded.
     */
    packagePath?: pulumi.Input<string>;
    /**
     * Require all connecting CAPs to have a valid certificate.
     */
    requirePeerCertificate?: pulumi.Input<boolean>;
    /**
     * Upgrade policy options.
     */
    upgradePolicy?: pulumi.Input<string>;
    wifiCapsmanId?: pulumi.Input<string>;
}
