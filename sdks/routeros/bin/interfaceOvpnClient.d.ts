import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceOvpnClient extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceOvpnClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceOvpnClientState, opts?: pulumi.CustomResourceOptions): InterfaceOvpnClient;
    /**
     * Returns true if the given object is an instance of InterfaceOvpnClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceOvpnClient;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Whether to add OVPN remote address as a default route.
     */
    readonly addDefaultRoute: pulumi.Output<boolean | undefined>;
    /**
     * Authentication methods that the server will accept.
     */
    readonly auth: pulumi.Output<string | undefined>;
    /**
     * Name of the client certificate.
     */
    readonly certificate: pulumi.Output<string | undefined>;
    /**
     * Allowed ciphers.
     */
    readonly cipher: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * Remote address of the OVPN server.
     */
    readonly connectTo: pulumi.Output<string>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    readonly hwCrypto: pulumi.Output<boolean>;
    readonly interfaceOvpnClientId: pulumi.Output<string>;
    /**
     * Mac address of OVPN interface. Will be automatically generated if not specified.
     */
    readonly macAddress: pulumi.Output<string | undefined>;
    /**
     * Maximum Transmission Unit. Max packet size that the OVPN interface will be able to send without packet fragmentation.
     */
    readonly maxMtu: pulumi.Output<number | undefined>;
    /**
     * Layer3 or layer2 tunnel mode (alternatively tun, tap)
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * Descriptive name of the interface.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Password used for authentication.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * Port to connect to.
     */
    readonly port: pulumi.Output<number | undefined>;
    /**
     * Specifies which PPP profile configuration will be used when establishing the tunnel.
     */
    readonly profile: pulumi.Output<string | undefined>;
    /**
     * Indicates the protocol to use when connecting with the remote endpoint.
     */
    readonly protocol: pulumi.Output<string | undefined>;
    /**
     * Specifies whether to allow the OVPN server to add routes to the OVPN client instance routing table.
     */
    readonly routeNopull: pulumi.Output<boolean | undefined>;
    readonly running: pulumi.Output<boolean>;
    /**
     * Specifies which TLS versions to allow.
     */
    readonly tlsVersion: pulumi.Output<string | undefined>;
    /**
     * Whether to add DNS servers provided by the OVPN server to IP/DNS configuration.
     */
    readonly usePeerDns: pulumi.Output<boolean | undefined>;
    /**
     * User name used for authentication.
     */
    readonly user: pulumi.Output<string>;
    /**
     * Checks the certificates CN or SAN against the "connect-to" parameter. The IP or hostname must be present in the server's
     * certificate.
     */
    readonly verifyServerCertificate: pulumi.Output<boolean | undefined>;
    /**
     * Create a InterfaceOvpnClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceOvpnClientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceOvpnClient resources.
 */
export interface InterfaceOvpnClientState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add OVPN remote address as a default route.
     */
    addDefaultRoute?: pulumi.Input<boolean>;
    /**
     * Authentication methods that the server will accept.
     */
    auth?: pulumi.Input<string>;
    /**
     * Name of the client certificate.
     */
    certificate?: pulumi.Input<string>;
    /**
     * Allowed ciphers.
     */
    cipher?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Remote address of the OVPN server.
     */
    connectTo?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    hwCrypto?: pulumi.Input<boolean>;
    interfaceOvpnClientId?: pulumi.Input<string>;
    /**
     * Mac address of OVPN interface. Will be automatically generated if not specified.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Maximum Transmission Unit. Max packet size that the OVPN interface will be able to send without packet fragmentation.
     */
    maxMtu?: pulumi.Input<number>;
    /**
     * Layer3 or layer2 tunnel mode (alternatively tun, tap)
     */
    mode?: pulumi.Input<string>;
    /**
     * Descriptive name of the interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Password used for authentication.
     */
    password?: pulumi.Input<string>;
    /**
     * Port to connect to.
     */
    port?: pulumi.Input<number>;
    /**
     * Specifies which PPP profile configuration will be used when establishing the tunnel.
     */
    profile?: pulumi.Input<string>;
    /**
     * Indicates the protocol to use when connecting with the remote endpoint.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Specifies whether to allow the OVPN server to add routes to the OVPN client instance routing table.
     */
    routeNopull?: pulumi.Input<boolean>;
    running?: pulumi.Input<boolean>;
    /**
     * Specifies which TLS versions to allow.
     */
    tlsVersion?: pulumi.Input<string>;
    /**
     * Whether to add DNS servers provided by the OVPN server to IP/DNS configuration.
     */
    usePeerDns?: pulumi.Input<boolean>;
    /**
     * User name used for authentication.
     */
    user?: pulumi.Input<string>;
    /**
     * Checks the certificates CN or SAN against the "connect-to" parameter. The IP or hostname must be present in the server's
     * certificate.
     */
    verifyServerCertificate?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a InterfaceOvpnClient resource.
 */
export interface InterfaceOvpnClientArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Whether to add OVPN remote address as a default route.
     */
    addDefaultRoute?: pulumi.Input<boolean>;
    /**
     * Authentication methods that the server will accept.
     */
    auth?: pulumi.Input<string>;
    /**
     * Name of the client certificate.
     */
    certificate?: pulumi.Input<string>;
    /**
     * Allowed ciphers.
     */
    cipher?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * Remote address of the OVPN server.
     */
    connectTo: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    interfaceOvpnClientId?: pulumi.Input<string>;
    /**
     * Mac address of OVPN interface. Will be automatically generated if not specified.
     */
    macAddress?: pulumi.Input<string>;
    /**
     * Maximum Transmission Unit. Max packet size that the OVPN interface will be able to send without packet fragmentation.
     */
    maxMtu?: pulumi.Input<number>;
    /**
     * Layer3 or layer2 tunnel mode (alternatively tun, tap)
     */
    mode?: pulumi.Input<string>;
    /**
     * Descriptive name of the interface.
     */
    name?: pulumi.Input<string>;
    /**
     * Password used for authentication.
     */
    password?: pulumi.Input<string>;
    /**
     * Port to connect to.
     */
    port?: pulumi.Input<number>;
    /**
     * Specifies which PPP profile configuration will be used when establishing the tunnel.
     */
    profile?: pulumi.Input<string>;
    /**
     * Indicates the protocol to use when connecting with the remote endpoint.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Specifies whether to allow the OVPN server to add routes to the OVPN client instance routing table.
     */
    routeNopull?: pulumi.Input<boolean>;
    /**
     * Specifies which TLS versions to allow.
     */
    tlsVersion?: pulumi.Input<string>;
    /**
     * Whether to add DNS servers provided by the OVPN server to IP/DNS configuration.
     */
    usePeerDns?: pulumi.Input<boolean>;
    /**
     * User name used for authentication.
     */
    user: pulumi.Input<string>;
    /**
     * Checks the certificates CN or SAN against the "connect-to" parameter. The IP or hostname must be present in the server's
     * certificate.
     */
    verifyServerCertificate?: pulumi.Input<boolean>;
}
