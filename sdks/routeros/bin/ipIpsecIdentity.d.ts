import * as pulumi from "@pulumi/pulumi";
export declare class IpIpsecIdentity extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecIdentity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpIpsecIdentityState, opts?: pulumi.CustomResourceOptions): IpIpsecIdentity;
    /**
     * Returns true if the given object is an instance of IpIpsecIdentity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IpIpsecIdentity;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Authentication method: `digital-signature` - authenticate using a pair of RSA certificates; `eap` - IKEv2 EAP
     * authentication for initiator (peer with a netmask of `/32`). Must be used together with eap-methods; `eap-radius` -
     * IKEv2 EAP RADIUS passthrough authentication for the responder (RFC 3579). A server certificate in this case is required.
     * If a server certificate is not specified then only clients supporting EAP-only (RFC 5998) will be able to connect. Note
     * that the EAP method should be compatible with EAP-only; `pre-shared-key` - authenticate by a password (pre-shared
     * secret) string shared between the peers (not recommended since an offline attack on the pre-shared key is possible);
     * `rsa-key` - authenticate using an RSA key imported in keys menu. Only supported in IKEv1; `pre-shared-key-xauth` -
     * authenticate by a password (pre-shared secret) string shared between the peers + XAuth username and password. Only
     * supported in IKEv1; `rsa-signature-hybrid` - responder certificate authentication with initiator XAuth. Only supported
     * in IKEv1.
     */
    readonly authMethod: pulumi.Output<string | undefined>;
    /**
     * Name of a certificate listed in System/Certificates (signing packets; the certificate must have the private key).
     * Applicable if digital signature authentication method (`auth-method=digital-signature`) or EAP (a`uth-method=eap`) is
     * used.
     */
    readonly certificate: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * All EAP methods requires whole certificate chain including intermediate and root CA certificates to be present in
     * System/Certificates menu. Also, the username and password (if required by the authentication server) must be specified.
     * Multiple EAP methods may be specified and will be used in a specified order. Currently supported EAP methods:
     * `eap-mschapv2`; `eap-peap` - also known as PEAPv0/EAP-MSCHAPv2; `eap-tls` - requires additional client certificate
     * specified under certificate parameter; `eap-ttls`.
     */
    readonly eapMethods: pulumi.Output<string | undefined>;
    /**
     * Allow this peer to establish SA for non-existing policies. Such policies are created dynamically for the lifetime of SA.
     * Automatic policies allows, for example, to create IPsec secured L2TP tunnels, or any other setup where remote peer's IP
     * address is not known at the configuration time. `no` - do not generate policies; `port-override` - generate policies and
     * force policy to use any port (old behavior); `port-strict` - use ports from peer's proposal, which should match peer's
     * policy.
     */
    readonly generatePolicy: pulumi.Output<string | undefined>;
    readonly ipIpsecIdentityId: pulumi.Output<string>;
    /**
     * Name of the private key from keys menu. Applicable if RSA key authentication method (`auth-method=rsa-key`) is used.
     */
    readonly key: pulumi.Output<string | undefined>;
    /**
     * Defines the logic used for peer's identity validation. `remote-id` - will verify the peer's ID according to remote-id
     * setting. `certificate` will verify the peer's certificate with what is specified under remote-certificate setting.
     */
    readonly matchBy: pulumi.Output<string | undefined>;
    /**
     * Name of the configuration parameters from mode-config menu. When parameter is set mode-config is enabled.
     */
    readonly modeConfig: pulumi.Output<string | undefined>;
    /**
     * On initiator, this controls what ID_i is sent to the responder. On responder, this controls what ID_r is sent to the
     * initiator. In IKEv2, responder also expects this ID in received ID_r from initiator. `auto` - tries to use correct ID
     * automatically: IP for pre-shared key, SAN (DN if not present) for certificate based connections; `address` - IP address
     * is used as ID;dn - the binary Distinguished Encoding Rules (DER) encoding of an ASN.1 X.500 Distinguished Name; `fqdn` -
     * fully qualified domain name; `key-id` - use the specified key ID for the identity; `user-fqdn` - specifies a
     * fully-qualified username string, for example, `user@domain.com`.
     */
    readonly myId: pulumi.Output<string | undefined>;
    /**
     * Adds IP/Firewall/Raw rules matching IPsec policy to a specified chain. Use together with generate-policy.
     */
    readonly notrackChain: pulumi.Output<string | undefined>;
    /**
     * XAuth or EAP password. Applicable if pre-shared key with XAuth authentication method
     * (`auth-method=pre-shared-key-xauth`) or EAP (`auth-method=eap`) is used.
     */
    readonly password: pulumi.Output<string | undefined>;
    /**
     * Name of the peer on which the identity applies.
     */
    readonly peer: pulumi.Output<string>;
    /**
     * If generate-policy is enabled, traffic selectors are checked against templates from the same group. If none of the
     * templates match, Phase 2 SA will not be established.
     */
    readonly policyTemplateGroup: pulumi.Output<string | undefined>;
    /**
     * Name of a certificate (listed in `System/Certificates`) for authenticating the remote side (validating packets; no
     * private key required). If a remote-certificate is not specified then the received certificate from a remote peer is used
     * and checked against CA in the certificate menu. Proper CA must be imported in a certificate store. If remote-certificate
     * and match-by=certificate is specified, only the specific client certificate will be matched. Applicable if digital
     * signature authentication method (`auth-method=digital-signature`) is used.
     */
    readonly remoteCertificate: pulumi.Output<string | undefined>;
    /**
     * This parameter controls what ID value to expect from the remote peer. Note that all types except for ignoring will
     * verify remote peer's ID with a received certificate. In case when the peer sends the certificate name as its ID, it is
     * checked against the certificate, else the ID is checked against Subject Alt. Name. `auto` - accept all ID's;address - IP
     * address is used as ID;dn - the binary Distinguished Encoding Rules (DER) encoding of an ASN.1 X.500 Distinguished Name;
     * `fqdn` - fully qualified domain name. Only supported in IKEv2; `user-fqdn` - a fully-qualified username string, for
     * example, `user@domain.com`. Only supported in IKEv2; `key-id` - specific key ID for the identity. Only supported in
     * IKEv2; `ignore` - do not verify received ID with certificate (dangerous). * Wildcard key ID matching **is not
     * supported**, for example `remote-id=`key-id:CN=*.domain.com`.
     */
    readonly remoteId: pulumi.Output<string | undefined>;
    /**
     * Name of the public key from keys menu. Applicable if RSA key authentication method (`auth-method=rsa-key`) is used.
     */
    readonly remoteKey: pulumi.Output<string | undefined>;
    /**
     * Secret string. If it starts with '0x', it is parsed as a hexadecimal value. Applicable if pre-shared key authentication
     * method (`auth-method=pre-shared-key` and `auth-method=pre-shared-key-xauth`) is used.
     */
    readonly secret: pulumi.Output<string | undefined>;
    /**
     * XAuth or EAP username. Applicable if pre-shared key with XAuth authentication method
     * (`auth-method=pre-shared-key-xauth`) or EAP (`auth-method=eap`) is used.
     */
    readonly username: pulumi.Output<string | undefined>;
    /**
     * Create a IpIpsecIdentity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpIpsecIdentityArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IpIpsecIdentity resources.
 */
export interface IpIpsecIdentityState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Authentication method: `digital-signature` - authenticate using a pair of RSA certificates; `eap` - IKEv2 EAP
     * authentication for initiator (peer with a netmask of `/32`). Must be used together with eap-methods; `eap-radius` -
     * IKEv2 EAP RADIUS passthrough authentication for the responder (RFC 3579). A server certificate in this case is required.
     * If a server certificate is not specified then only clients supporting EAP-only (RFC 5998) will be able to connect. Note
     * that the EAP method should be compatible with EAP-only; `pre-shared-key` - authenticate by a password (pre-shared
     * secret) string shared between the peers (not recommended since an offline attack on the pre-shared key is possible);
     * `rsa-key` - authenticate using an RSA key imported in keys menu. Only supported in IKEv1; `pre-shared-key-xauth` -
     * authenticate by a password (pre-shared secret) string shared between the peers + XAuth username and password. Only
     * supported in IKEv1; `rsa-signature-hybrid` - responder certificate authentication with initiator XAuth. Only supported
     * in IKEv1.
     */
    authMethod?: pulumi.Input<string>;
    /**
     * Name of a certificate listed in System/Certificates (signing packets; the certificate must have the private key).
     * Applicable if digital signature authentication method (`auth-method=digital-signature`) or EAP (a`uth-method=eap`) is
     * used.
     */
    certificate?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * All EAP methods requires whole certificate chain including intermediate and root CA certificates to be present in
     * System/Certificates menu. Also, the username and password (if required by the authentication server) must be specified.
     * Multiple EAP methods may be specified and will be used in a specified order. Currently supported EAP methods:
     * `eap-mschapv2`; `eap-peap` - also known as PEAPv0/EAP-MSCHAPv2; `eap-tls` - requires additional client certificate
     * specified under certificate parameter; `eap-ttls`.
     */
    eapMethods?: pulumi.Input<string>;
    /**
     * Allow this peer to establish SA for non-existing policies. Such policies are created dynamically for the lifetime of SA.
     * Automatic policies allows, for example, to create IPsec secured L2TP tunnels, or any other setup where remote peer's IP
     * address is not known at the configuration time. `no` - do not generate policies; `port-override` - generate policies and
     * force policy to use any port (old behavior); `port-strict` - use ports from peer's proposal, which should match peer's
     * policy.
     */
    generatePolicy?: pulumi.Input<string>;
    ipIpsecIdentityId?: pulumi.Input<string>;
    /**
     * Name of the private key from keys menu. Applicable if RSA key authentication method (`auth-method=rsa-key`) is used.
     */
    key?: pulumi.Input<string>;
    /**
     * Defines the logic used for peer's identity validation. `remote-id` - will verify the peer's ID according to remote-id
     * setting. `certificate` will verify the peer's certificate with what is specified under remote-certificate setting.
     */
    matchBy?: pulumi.Input<string>;
    /**
     * Name of the configuration parameters from mode-config menu. When parameter is set mode-config is enabled.
     */
    modeConfig?: pulumi.Input<string>;
    /**
     * On initiator, this controls what ID_i is sent to the responder. On responder, this controls what ID_r is sent to the
     * initiator. In IKEv2, responder also expects this ID in received ID_r from initiator. `auto` - tries to use correct ID
     * automatically: IP for pre-shared key, SAN (DN if not present) for certificate based connections; `address` - IP address
     * is used as ID;dn - the binary Distinguished Encoding Rules (DER) encoding of an ASN.1 X.500 Distinguished Name; `fqdn` -
     * fully qualified domain name; `key-id` - use the specified key ID for the identity; `user-fqdn` - specifies a
     * fully-qualified username string, for example, `user@domain.com`.
     */
    myId?: pulumi.Input<string>;
    /**
     * Adds IP/Firewall/Raw rules matching IPsec policy to a specified chain. Use together with generate-policy.
     */
    notrackChain?: pulumi.Input<string>;
    /**
     * XAuth or EAP password. Applicable if pre-shared key with XAuth authentication method
     * (`auth-method=pre-shared-key-xauth`) or EAP (`auth-method=eap`) is used.
     */
    password?: pulumi.Input<string>;
    /**
     * Name of the peer on which the identity applies.
     */
    peer?: pulumi.Input<string>;
    /**
     * If generate-policy is enabled, traffic selectors are checked against templates from the same group. If none of the
     * templates match, Phase 2 SA will not be established.
     */
    policyTemplateGroup?: pulumi.Input<string>;
    /**
     * Name of a certificate (listed in `System/Certificates`) for authenticating the remote side (validating packets; no
     * private key required). If a remote-certificate is not specified then the received certificate from a remote peer is used
     * and checked against CA in the certificate menu. Proper CA must be imported in a certificate store. If remote-certificate
     * and match-by=certificate is specified, only the specific client certificate will be matched. Applicable if digital
     * signature authentication method (`auth-method=digital-signature`) is used.
     */
    remoteCertificate?: pulumi.Input<string>;
    /**
     * This parameter controls what ID value to expect from the remote peer. Note that all types except for ignoring will
     * verify remote peer's ID with a received certificate. In case when the peer sends the certificate name as its ID, it is
     * checked against the certificate, else the ID is checked against Subject Alt. Name. `auto` - accept all ID's;address - IP
     * address is used as ID;dn - the binary Distinguished Encoding Rules (DER) encoding of an ASN.1 X.500 Distinguished Name;
     * `fqdn` - fully qualified domain name. Only supported in IKEv2; `user-fqdn` - a fully-qualified username string, for
     * example, `user@domain.com`. Only supported in IKEv2; `key-id` - specific key ID for the identity. Only supported in
     * IKEv2; `ignore` - do not verify received ID with certificate (dangerous). * Wildcard key ID matching **is not
     * supported**, for example `remote-id=`key-id:CN=*.domain.com`.
     */
    remoteId?: pulumi.Input<string>;
    /**
     * Name of the public key from keys menu. Applicable if RSA key authentication method (`auth-method=rsa-key`) is used.
     */
    remoteKey?: pulumi.Input<string>;
    /**
     * Secret string. If it starts with '0x', it is parsed as a hexadecimal value. Applicable if pre-shared key authentication
     * method (`auth-method=pre-shared-key` and `auth-method=pre-shared-key-xauth`) is used.
     */
    secret?: pulumi.Input<string>;
    /**
     * XAuth or EAP username. Applicable if pre-shared key with XAuth authentication method
     * (`auth-method=pre-shared-key-xauth`) or EAP (`auth-method=eap`) is used.
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a IpIpsecIdentity resource.
 */
export interface IpIpsecIdentityArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Authentication method: `digital-signature` - authenticate using a pair of RSA certificates; `eap` - IKEv2 EAP
     * authentication for initiator (peer with a netmask of `/32`). Must be used together with eap-methods; `eap-radius` -
     * IKEv2 EAP RADIUS passthrough authentication for the responder (RFC 3579). A server certificate in this case is required.
     * If a server certificate is not specified then only clients supporting EAP-only (RFC 5998) will be able to connect. Note
     * that the EAP method should be compatible with EAP-only; `pre-shared-key` - authenticate by a password (pre-shared
     * secret) string shared between the peers (not recommended since an offline attack on the pre-shared key is possible);
     * `rsa-key` - authenticate using an RSA key imported in keys menu. Only supported in IKEv1; `pre-shared-key-xauth` -
     * authenticate by a password (pre-shared secret) string shared between the peers + XAuth username and password. Only
     * supported in IKEv1; `rsa-signature-hybrid` - responder certificate authentication with initiator XAuth. Only supported
     * in IKEv1.
     */
    authMethod?: pulumi.Input<string>;
    /**
     * Name of a certificate listed in System/Certificates (signing packets; the certificate must have the private key).
     * Applicable if digital signature authentication method (`auth-method=digital-signature`) or EAP (a`uth-method=eap`) is
     * used.
     */
    certificate?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * All EAP methods requires whole certificate chain including intermediate and root CA certificates to be present in
     * System/Certificates menu. Also, the username and password (if required by the authentication server) must be specified.
     * Multiple EAP methods may be specified and will be used in a specified order. Currently supported EAP methods:
     * `eap-mschapv2`; `eap-peap` - also known as PEAPv0/EAP-MSCHAPv2; `eap-tls` - requires additional client certificate
     * specified under certificate parameter; `eap-ttls`.
     */
    eapMethods?: pulumi.Input<string>;
    /**
     * Allow this peer to establish SA for non-existing policies. Such policies are created dynamically for the lifetime of SA.
     * Automatic policies allows, for example, to create IPsec secured L2TP tunnels, or any other setup where remote peer's IP
     * address is not known at the configuration time. `no` - do not generate policies; `port-override` - generate policies and
     * force policy to use any port (old behavior); `port-strict` - use ports from peer's proposal, which should match peer's
     * policy.
     */
    generatePolicy?: pulumi.Input<string>;
    ipIpsecIdentityId?: pulumi.Input<string>;
    /**
     * Name of the private key from keys menu. Applicable if RSA key authentication method (`auth-method=rsa-key`) is used.
     */
    key?: pulumi.Input<string>;
    /**
     * Defines the logic used for peer's identity validation. `remote-id` - will verify the peer's ID according to remote-id
     * setting. `certificate` will verify the peer's certificate with what is specified under remote-certificate setting.
     */
    matchBy?: pulumi.Input<string>;
    /**
     * Name of the configuration parameters from mode-config menu. When parameter is set mode-config is enabled.
     */
    modeConfig?: pulumi.Input<string>;
    /**
     * On initiator, this controls what ID_i is sent to the responder. On responder, this controls what ID_r is sent to the
     * initiator. In IKEv2, responder also expects this ID in received ID_r from initiator. `auto` - tries to use correct ID
     * automatically: IP for pre-shared key, SAN (DN if not present) for certificate based connections; `address` - IP address
     * is used as ID;dn - the binary Distinguished Encoding Rules (DER) encoding of an ASN.1 X.500 Distinguished Name; `fqdn` -
     * fully qualified domain name; `key-id` - use the specified key ID for the identity; `user-fqdn` - specifies a
     * fully-qualified username string, for example, `user@domain.com`.
     */
    myId?: pulumi.Input<string>;
    /**
     * Adds IP/Firewall/Raw rules matching IPsec policy to a specified chain. Use together with generate-policy.
     */
    notrackChain?: pulumi.Input<string>;
    /**
     * XAuth or EAP password. Applicable if pre-shared key with XAuth authentication method
     * (`auth-method=pre-shared-key-xauth`) or EAP (`auth-method=eap`) is used.
     */
    password?: pulumi.Input<string>;
    /**
     * Name of the peer on which the identity applies.
     */
    peer: pulumi.Input<string>;
    /**
     * If generate-policy is enabled, traffic selectors are checked against templates from the same group. If none of the
     * templates match, Phase 2 SA will not be established.
     */
    policyTemplateGroup?: pulumi.Input<string>;
    /**
     * Name of a certificate (listed in `System/Certificates`) for authenticating the remote side (validating packets; no
     * private key required). If a remote-certificate is not specified then the received certificate from a remote peer is used
     * and checked against CA in the certificate menu. Proper CA must be imported in a certificate store. If remote-certificate
     * and match-by=certificate is specified, only the specific client certificate will be matched. Applicable if digital
     * signature authentication method (`auth-method=digital-signature`) is used.
     */
    remoteCertificate?: pulumi.Input<string>;
    /**
     * This parameter controls what ID value to expect from the remote peer. Note that all types except for ignoring will
     * verify remote peer's ID with a received certificate. In case when the peer sends the certificate name as its ID, it is
     * checked against the certificate, else the ID is checked against Subject Alt. Name. `auto` - accept all ID's;address - IP
     * address is used as ID;dn - the binary Distinguished Encoding Rules (DER) encoding of an ASN.1 X.500 Distinguished Name;
     * `fqdn` - fully qualified domain name. Only supported in IKEv2; `user-fqdn` - a fully-qualified username string, for
     * example, `user@domain.com`. Only supported in IKEv2; `key-id` - specific key ID for the identity. Only supported in
     * IKEv2; `ignore` - do not verify received ID with certificate (dangerous). * Wildcard key ID matching **is not
     * supported**, for example `remote-id=`key-id:CN=*.domain.com`.
     */
    remoteId?: pulumi.Input<string>;
    /**
     * Name of the public key from keys menu. Applicable if RSA key authentication method (`auth-method=rsa-key`) is used.
     */
    remoteKey?: pulumi.Input<string>;
    /**
     * Secret string. If it starts with '0x', it is parsed as a hexadecimal value. Applicable if pre-shared key authentication
     * method (`auth-method=pre-shared-key` and `auth-method=pre-shared-key-xauth`) is used.
     */
    secret?: pulumi.Input<string>;
    /**
     * XAuth or EAP username. Applicable if pre-shared key with XAuth authentication method
     * (`auth-method=pre-shared-key-xauth`) or EAP (`auth-method=eap`) is used.
     */
    username?: pulumi.Input<string>;
}
