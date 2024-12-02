import * as pulumi from "@pulumi/pulumi";
export declare class InterfaceWirelessSecurityProfiles extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceWirelessSecurityProfiles resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceWirelessSecurityProfilesState, opts?: pulumi.CustomResourceOptions): InterfaceWirelessSecurityProfiles;
    /**
     * Returns true if the given object is an instance of InterfaceWirelessSecurityProfiles.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is InterfaceWirelessSecurityProfiles;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Set of supported authentication types, multiple values can be selected. Access Point will advertise supported
     * authentication types, and client will connect to Access Point only if it supports any of the advertised authentication
     * types.
     */
    readonly authenticationTypes: pulumi.Output<string[] | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    /**
     * Whether to include `PMKID` into the `EAPOL` frame sent out by the Access Point. Disabling PMKID can cause compatibility
     * issues with devices that use the PMKID to connect to an Access Point. `yes` - removes PMKID from EAPOL frames (improves
     * security, reduces compatibility). `no` - includes PMKID into EAPOL frames (reduces security, improves
     * compatibility).This property only has effect on Access Points.
     */
    readonly disablePmkid: pulumi.Output<boolean | undefined>;
    /**
     * Allowed types of authentication methods, multiple values can be selected. This property only has effect on Access
     * Points. `eap-tls` - Use built-in EAP TLS authentication. Both client and server certificates are supported. See
     * description of tls-mode and tls-certificate properties. `eap-ttls-mschapv2` - Use EAP-TTLS with MS-CHAPv2
     * authentication. `passthrough` - Access Point will relay authentication process to the RADIUS server. `peap` - Use
     * Protected EAP authentication.
     */
    readonly eapMethods: pulumi.Output<string | undefined>;
    /**
     * Access Point advertises one of these ciphers, multiple values can be selected. Access Point uses it to encrypt all
     * broadcast and multicast frames. Client attempts connection only to Access Points that use one of the specified group
     * ciphers. `tkip` - Temporal Key Integrity Protocol - encryption protocol, compatible with legacy WEP equipment, but
     * enhanced to correct some of the WEP flaws. `aes-ccm` - more secure WPA encryption protocol, based on the reliable AES
     * (Advanced Encryption Standard). Networks free of WEP legacy should use only this cipher.
     */
    readonly groupCiphers: pulumi.Output<string | undefined>;
    /**
     * Controls how often Access Point updates the group key. This key is used to encrypt all broadcast and multicast frames.
     * property only has effect for Access Points.
     */
    readonly groupKeyUpdate: pulumi.Output<string | undefined>;
    readonly interfaceWirelessSecurityProfilesId: pulumi.Output<string>;
    /**
     * When RADIUS accounting is used, Access Point periodically sends accounting information updates to the RADIUS server.
     * This property specifies default update interval that can be overridden by the RADIUS server using Acct-Interim-Interval
     * attribute.
     */
    readonly interimUpdate: pulumi.Output<string | undefined>;
    /**
     * Management frame protection. Used for: Deauthentication attack prevention, MAC address cloning issue. Possible values
     * are: `disabled` - management protection is disabled (default), `allowed` - use management protection if supported by
     * remote party (for AP - allow both, non-management protection and management protection clients, for client - connect
     * both to APs with and without management protection), `required` - establish association only with remote devices that
     * support management protection (for AP - accept only clients that support management protection, for client - connect
     * only to APs that support management protection).
     */
    readonly managementProtection: pulumi.Output<string | undefined>;
    /**
     * Management protection shared secret. When interface is in AP mode, default management protection key (configured in
     * security-profile) can be overridden by key specified in access-list or RADIUS attribute.
     */
    readonly managementProtectionKey: pulumi.Output<string | undefined>;
    /**
     * Encryption mode for the security profile. `none` - Encryption is not used. Encrypted frames are not accepted.
     * `static-keys-required` - WEP mode. Do not accept and do not send unencrypted frames. Station in static-keys-required
     * mode will not connect to an Access Point in static-keys-optional mode. `static-keys-optional` - WEP mode. Support
     * encryption and decryption, but allow also to receive and send unencrypted frames. Device will send unencrypted frames if
     * encryption algorithm is specified as none. Station in static-keys-optional mode will not connect to an Access Point in
     * `static-keys-required` mode. See also: static-sta-private-algo, static-transmit-key. `dynamic-keys` - WPA mode.
     */
    readonly mode: pulumi.Output<string | undefined>;
    /**
     * Password to use for authentication when `eap-ttls-mschapv2` or `peap` authentication method is being used. This property
     * only has effect on Stations.
     */
    readonly mschapv2Password: pulumi.Output<string | undefined>;
    /**
     * Username to use for authentication when `eap-ttls-mschapv2` or `peap` authentication method is being used. This property
     * only has effect on Stations.
     */
    readonly mschapv2Username: pulumi.Output<string | undefined>;
    /**
     * Name of the security profile.
     */
    readonly name: pulumi.Output<string>;
    /**
     * mac | mac:ssid | ssid
     */
    readonly radiusCalledFormat: pulumi.Output<string | undefined>;
    readonly radiusEapAccounting: pulumi.Output<boolean | undefined>;
    readonly radiusMacAccounting: pulumi.Output<boolean | undefined>;
    /**
     * This property affects the way how Access Point processes clients that are not found in the Access List.no - allow or
     * reject client authentication based on the value of default-authentication property of the Wireless interface.yes - Query
     * RADIUS server using MAC address of client as user name. With this setting the value of default-authentication has no
     * effect.
     */
    readonly radiusMacAuthentication: pulumi.Output<boolean | undefined>;
    /**
     * If this value is set to time interval, the Access Point will cache RADIUS MAC authentication responses for specified
     * time, and will not contact RADIUS server if matching cache entry already exists. Value disabled will disable cache,
     * Access Point will always contact RADIUS server.
     */
    readonly radiusMacCaching: pulumi.Output<string | undefined>;
    /**
     * Controls how MAC address of the client is encoded by Access Point in the User-Name attribute of the MAC authentication
     * and MAC accounting RADIUS requests.
     */
    readonly radiusMacFormat: pulumi.Output<string | undefined>;
    /**
     * By default Access Point uses an empty password, when sending Access-Request during MAC authentication. When this
     * property is set to `as-username-and-password`, Access Point will use the same value for User-Password attribute as for
     * the User-Name attribute.
     */
    readonly radiusMacMode: pulumi.Output<string | undefined>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    readonly staticAlgo0: pulumi.Output<string | undefined>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    readonly staticAlgo1: pulumi.Output<string | undefined>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    readonly staticAlgo2: pulumi.Output<string | undefined>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    readonly staticAlgo3: pulumi.Output<string | undefined>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    readonly staticKey0: pulumi.Output<string | undefined>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    readonly staticKey1: pulumi.Output<string | undefined>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    readonly staticKey2: pulumi.Output<string | undefined>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    readonly staticKey3: pulumi.Output<string | undefined>;
    /**
     * Encryption algorithm to use with station private key. Value none disables use of the private key. This property is only
     * used on Stations. Access Point has to get corresponding value either from private-algo property, or from
     * Mikrotik-Wireless-Enc-Algo attribute. Station private key replaces key 0 for unicast frames. Station will not use
     * private key to decrypt broadcast frames.
     */
    readonly staticStaPrivateAlgo: pulumi.Output<string | undefined>;
    /**
     * Length of key must be appropriate for selected algorithm, see the Statically configured WEP keys section. This property
     * is used only on Stations. Access Point uses corresponding key either from private-key property, or from
     * Mikrotik-Wireless-Enc-Key attribute.
     */
    readonly staticStaPrivateKey: pulumi.Output<string | undefined>;
    /**
     * Access Point will use the specified key to encrypt frames for clients that do not use private key. Access Point will
     * also use this key to encrypt broadcast and multicast frames. Client will use the specified key to encrypt frames if
     * static-sta-private-algo is set to none. If corresponding static-algo-N property has value set to none, then frame will
     * be sent unencrypted (when mode is set to static-keys-optional) or will not be sent at all (when mode is set to
     * static-keys-required).
     */
    readonly staticTransmitKey: pulumi.Output<string | undefined>;
    /**
     * EAP identity that is sent by client at the beginning of EAP authentication. This value is used as a value for User-Name
     * attribute in RADIUS messages sent by RADIUS EAP accounting and RADIUS EAP pass-through authentication.
     */
    readonly supplicantIdentity: pulumi.Output<string | undefined>;
    /**
     * Access Point always needs a certificate when configured when tls-mode is set to verify-certificate, or is set to
     * dont-verify-certificate. Client needs a certificate only if Access Point is configured with tls-mode set to
     * verify-certificate. In this case client needs a valid certificate that is signed by a CA known to the Access Point. This
     * property only has effect when tls-mode is not set to no-certificates and eap-methods contains eap-tls.
     */
    readonly tlsCertificate: pulumi.Output<string | undefined>;
    /**
     * This property has effect only when eap-methods contains eap-tls. `verify-certificate` - Require remote device to have
     * valid certificate. Check that it is signed by known certificate authority. No additional identity verification is done.
     * Certificate may include information about time period during which it is valid. If router has incorrect time and date,
     * it may reject valid certificate because router's clock is outside that period. See also the Certificates configuration.
     * `dont-verify-certificate` - Do not check certificate of the remote device. Access Point will not require client to
     * provide certificate. `no-certificates` - Do not use certificates. TLS session is established using 2048 bit anonymous
     * Diffie-Hellman key exchange. `verify-certificate-with-crl` - Same as verify-certificate but also checks if the
     * certificate is valid by checking the Certificate Revocation List.
     */
    readonly tlsMode: pulumi.Output<string | undefined>;
    /**
     * Access Point advertises that it supports specified ciphers, multiple values can be selected. Client attempts connection
     * only to Access Points that supports at least one of the specified ciphers. One of the ciphers will be used to encrypt
     * unicast frames that are sent between Access Point and Station.
     */
    readonly unicastCiphers: pulumi.Output<string | undefined>;
    /**
     * `WPA2` pre-shared key mode requires all devices in a BSS to have common secret key. Value of this key can be an
     * arbitrary text. Commonly referred to as the network password for WPA2 mode. property only has effect when wpa2-psk is
     * added to authentication-types.
     */
    readonly wpa2PreSharedKey: pulumi.Output<string | undefined>;
    /**
     * `WPA` pre-shared key mode requires all devices in a BSS to have common secret key. Value of this key can be an arbitrary
     * text. Commonly referred to as the network password for WPA mode. property only has effect when wpa-psk is added to
     * authentication-types.
     */
    readonly wpaPreSharedKey: pulumi.Output<string | undefined>;
    /**
     * Create a InterfaceWirelessSecurityProfiles resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: InterfaceWirelessSecurityProfilesArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering InterfaceWirelessSecurityProfiles resources.
 */
export interface InterfaceWirelessSecurityProfilesState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Set of supported authentication types, multiple values can be selected. Access Point will advertise supported
     * authentication types, and client will connect to Access Point only if it supports any of the advertised authentication
     * types.
     */
    authenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    /**
     * Whether to include `PMKID` into the `EAPOL` frame sent out by the Access Point. Disabling PMKID can cause compatibility
     * issues with devices that use the PMKID to connect to an Access Point. `yes` - removes PMKID from EAPOL frames (improves
     * security, reduces compatibility). `no` - includes PMKID into EAPOL frames (reduces security, improves
     * compatibility).This property only has effect on Access Points.
     */
    disablePmkid?: pulumi.Input<boolean>;
    /**
     * Allowed types of authentication methods, multiple values can be selected. This property only has effect on Access
     * Points. `eap-tls` - Use built-in EAP TLS authentication. Both client and server certificates are supported. See
     * description of tls-mode and tls-certificate properties. `eap-ttls-mschapv2` - Use EAP-TTLS with MS-CHAPv2
     * authentication. `passthrough` - Access Point will relay authentication process to the RADIUS server. `peap` - Use
     * Protected EAP authentication.
     */
    eapMethods?: pulumi.Input<string>;
    /**
     * Access Point advertises one of these ciphers, multiple values can be selected. Access Point uses it to encrypt all
     * broadcast and multicast frames. Client attempts connection only to Access Points that use one of the specified group
     * ciphers. `tkip` - Temporal Key Integrity Protocol - encryption protocol, compatible with legacy WEP equipment, but
     * enhanced to correct some of the WEP flaws. `aes-ccm` - more secure WPA encryption protocol, based on the reliable AES
     * (Advanced Encryption Standard). Networks free of WEP legacy should use only this cipher.
     */
    groupCiphers?: pulumi.Input<string>;
    /**
     * Controls how often Access Point updates the group key. This key is used to encrypt all broadcast and multicast frames.
     * property only has effect for Access Points.
     */
    groupKeyUpdate?: pulumi.Input<string>;
    interfaceWirelessSecurityProfilesId?: pulumi.Input<string>;
    /**
     * When RADIUS accounting is used, Access Point periodically sends accounting information updates to the RADIUS server.
     * This property specifies default update interval that can be overridden by the RADIUS server using Acct-Interim-Interval
     * attribute.
     */
    interimUpdate?: pulumi.Input<string>;
    /**
     * Management frame protection. Used for: Deauthentication attack prevention, MAC address cloning issue. Possible values
     * are: `disabled` - management protection is disabled (default), `allowed` - use management protection if supported by
     * remote party (for AP - allow both, non-management protection and management protection clients, for client - connect
     * both to APs with and without management protection), `required` - establish association only with remote devices that
     * support management protection (for AP - accept only clients that support management protection, for client - connect
     * only to APs that support management protection).
     */
    managementProtection?: pulumi.Input<string>;
    /**
     * Management protection shared secret. When interface is in AP mode, default management protection key (configured in
     * security-profile) can be overridden by key specified in access-list or RADIUS attribute.
     */
    managementProtectionKey?: pulumi.Input<string>;
    /**
     * Encryption mode for the security profile. `none` - Encryption is not used. Encrypted frames are not accepted.
     * `static-keys-required` - WEP mode. Do not accept and do not send unencrypted frames. Station in static-keys-required
     * mode will not connect to an Access Point in static-keys-optional mode. `static-keys-optional` - WEP mode. Support
     * encryption and decryption, but allow also to receive and send unencrypted frames. Device will send unencrypted frames if
     * encryption algorithm is specified as none. Station in static-keys-optional mode will not connect to an Access Point in
     * `static-keys-required` mode. See also: static-sta-private-algo, static-transmit-key. `dynamic-keys` - WPA mode.
     */
    mode?: pulumi.Input<string>;
    /**
     * Password to use for authentication when `eap-ttls-mschapv2` or `peap` authentication method is being used. This property
     * only has effect on Stations.
     */
    mschapv2Password?: pulumi.Input<string>;
    /**
     * Username to use for authentication when `eap-ttls-mschapv2` or `peap` authentication method is being used. This property
     * only has effect on Stations.
     */
    mschapv2Username?: pulumi.Input<string>;
    /**
     * Name of the security profile.
     */
    name?: pulumi.Input<string>;
    /**
     * mac | mac:ssid | ssid
     */
    radiusCalledFormat?: pulumi.Input<string>;
    radiusEapAccounting?: pulumi.Input<boolean>;
    radiusMacAccounting?: pulumi.Input<boolean>;
    /**
     * This property affects the way how Access Point processes clients that are not found in the Access List.no - allow or
     * reject client authentication based on the value of default-authentication property of the Wireless interface.yes - Query
     * RADIUS server using MAC address of client as user name. With this setting the value of default-authentication has no
     * effect.
     */
    radiusMacAuthentication?: pulumi.Input<boolean>;
    /**
     * If this value is set to time interval, the Access Point will cache RADIUS MAC authentication responses for specified
     * time, and will not contact RADIUS server if matching cache entry already exists. Value disabled will disable cache,
     * Access Point will always contact RADIUS server.
     */
    radiusMacCaching?: pulumi.Input<string>;
    /**
     * Controls how MAC address of the client is encoded by Access Point in the User-Name attribute of the MAC authentication
     * and MAC accounting RADIUS requests.
     */
    radiusMacFormat?: pulumi.Input<string>;
    /**
     * By default Access Point uses an empty password, when sending Access-Request during MAC authentication. When this
     * property is set to `as-username-and-password`, Access Point will use the same value for User-Password attribute as for
     * the User-Name attribute.
     */
    radiusMacMode?: pulumi.Input<string>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    staticAlgo0?: pulumi.Input<string>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    staticAlgo1?: pulumi.Input<string>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    staticAlgo2?: pulumi.Input<string>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    staticAlgo3?: pulumi.Input<string>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    staticKey0?: pulumi.Input<string>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    staticKey1?: pulumi.Input<string>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    staticKey2?: pulumi.Input<string>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    staticKey3?: pulumi.Input<string>;
    /**
     * Encryption algorithm to use with station private key. Value none disables use of the private key. This property is only
     * used on Stations. Access Point has to get corresponding value either from private-algo property, or from
     * Mikrotik-Wireless-Enc-Algo attribute. Station private key replaces key 0 for unicast frames. Station will not use
     * private key to decrypt broadcast frames.
     */
    staticStaPrivateAlgo?: pulumi.Input<string>;
    /**
     * Length of key must be appropriate for selected algorithm, see the Statically configured WEP keys section. This property
     * is used only on Stations. Access Point uses corresponding key either from private-key property, or from
     * Mikrotik-Wireless-Enc-Key attribute.
     */
    staticStaPrivateKey?: pulumi.Input<string>;
    /**
     * Access Point will use the specified key to encrypt frames for clients that do not use private key. Access Point will
     * also use this key to encrypt broadcast and multicast frames. Client will use the specified key to encrypt frames if
     * static-sta-private-algo is set to none. If corresponding static-algo-N property has value set to none, then frame will
     * be sent unencrypted (when mode is set to static-keys-optional) or will not be sent at all (when mode is set to
     * static-keys-required).
     */
    staticTransmitKey?: pulumi.Input<string>;
    /**
     * EAP identity that is sent by client at the beginning of EAP authentication. This value is used as a value for User-Name
     * attribute in RADIUS messages sent by RADIUS EAP accounting and RADIUS EAP pass-through authentication.
     */
    supplicantIdentity?: pulumi.Input<string>;
    /**
     * Access Point always needs a certificate when configured when tls-mode is set to verify-certificate, or is set to
     * dont-verify-certificate. Client needs a certificate only if Access Point is configured with tls-mode set to
     * verify-certificate. In this case client needs a valid certificate that is signed by a CA known to the Access Point. This
     * property only has effect when tls-mode is not set to no-certificates and eap-methods contains eap-tls.
     */
    tlsCertificate?: pulumi.Input<string>;
    /**
     * This property has effect only when eap-methods contains eap-tls. `verify-certificate` - Require remote device to have
     * valid certificate. Check that it is signed by known certificate authority. No additional identity verification is done.
     * Certificate may include information about time period during which it is valid. If router has incorrect time and date,
     * it may reject valid certificate because router's clock is outside that period. See also the Certificates configuration.
     * `dont-verify-certificate` - Do not check certificate of the remote device. Access Point will not require client to
     * provide certificate. `no-certificates` - Do not use certificates. TLS session is established using 2048 bit anonymous
     * Diffie-Hellman key exchange. `verify-certificate-with-crl` - Same as verify-certificate but also checks if the
     * certificate is valid by checking the Certificate Revocation List.
     */
    tlsMode?: pulumi.Input<string>;
    /**
     * Access Point advertises that it supports specified ciphers, multiple values can be selected. Client attempts connection
     * only to Access Points that supports at least one of the specified ciphers. One of the ciphers will be used to encrypt
     * unicast frames that are sent between Access Point and Station.
     */
    unicastCiphers?: pulumi.Input<string>;
    /**
     * `WPA2` pre-shared key mode requires all devices in a BSS to have common secret key. Value of this key can be an
     * arbitrary text. Commonly referred to as the network password for WPA2 mode. property only has effect when wpa2-psk is
     * added to authentication-types.
     */
    wpa2PreSharedKey?: pulumi.Input<string>;
    /**
     * `WPA` pre-shared key mode requires all devices in a BSS to have common secret key. Value of this key can be an arbitrary
     * text. Commonly referred to as the network password for WPA mode. property only has effect when wpa-psk is added to
     * authentication-types.
     */
    wpaPreSharedKey?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a InterfaceWirelessSecurityProfiles resource.
 */
export interface InterfaceWirelessSecurityProfilesArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Set of supported authentication types, multiple values can be selected. Access Point will advertise supported
     * authentication types, and client will connect to Access Point only if it supports any of the advertised authentication
     * types.
     */
    authenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * Whether to include `PMKID` into the `EAPOL` frame sent out by the Access Point. Disabling PMKID can cause compatibility
     * issues with devices that use the PMKID to connect to an Access Point. `yes` - removes PMKID from EAPOL frames (improves
     * security, reduces compatibility). `no` - includes PMKID into EAPOL frames (reduces security, improves
     * compatibility).This property only has effect on Access Points.
     */
    disablePmkid?: pulumi.Input<boolean>;
    /**
     * Allowed types of authentication methods, multiple values can be selected. This property only has effect on Access
     * Points. `eap-tls` - Use built-in EAP TLS authentication. Both client and server certificates are supported. See
     * description of tls-mode and tls-certificate properties. `eap-ttls-mschapv2` - Use EAP-TTLS with MS-CHAPv2
     * authentication. `passthrough` - Access Point will relay authentication process to the RADIUS server. `peap` - Use
     * Protected EAP authentication.
     */
    eapMethods?: pulumi.Input<string>;
    /**
     * Access Point advertises one of these ciphers, multiple values can be selected. Access Point uses it to encrypt all
     * broadcast and multicast frames. Client attempts connection only to Access Points that use one of the specified group
     * ciphers. `tkip` - Temporal Key Integrity Protocol - encryption protocol, compatible with legacy WEP equipment, but
     * enhanced to correct some of the WEP flaws. `aes-ccm` - more secure WPA encryption protocol, based on the reliable AES
     * (Advanced Encryption Standard). Networks free of WEP legacy should use only this cipher.
     */
    groupCiphers?: pulumi.Input<string>;
    /**
     * Controls how often Access Point updates the group key. This key is used to encrypt all broadcast and multicast frames.
     * property only has effect for Access Points.
     */
    groupKeyUpdate?: pulumi.Input<string>;
    interfaceWirelessSecurityProfilesId?: pulumi.Input<string>;
    /**
     * When RADIUS accounting is used, Access Point periodically sends accounting information updates to the RADIUS server.
     * This property specifies default update interval that can be overridden by the RADIUS server using Acct-Interim-Interval
     * attribute.
     */
    interimUpdate?: pulumi.Input<string>;
    /**
     * Management frame protection. Used for: Deauthentication attack prevention, MAC address cloning issue. Possible values
     * are: `disabled` - management protection is disabled (default), `allowed` - use management protection if supported by
     * remote party (for AP - allow both, non-management protection and management protection clients, for client - connect
     * both to APs with and without management protection), `required` - establish association only with remote devices that
     * support management protection (for AP - accept only clients that support management protection, for client - connect
     * only to APs that support management protection).
     */
    managementProtection?: pulumi.Input<string>;
    /**
     * Management protection shared secret. When interface is in AP mode, default management protection key (configured in
     * security-profile) can be overridden by key specified in access-list or RADIUS attribute.
     */
    managementProtectionKey?: pulumi.Input<string>;
    /**
     * Encryption mode for the security profile. `none` - Encryption is not used. Encrypted frames are not accepted.
     * `static-keys-required` - WEP mode. Do not accept and do not send unencrypted frames. Station in static-keys-required
     * mode will not connect to an Access Point in static-keys-optional mode. `static-keys-optional` - WEP mode. Support
     * encryption and decryption, but allow also to receive and send unencrypted frames. Device will send unencrypted frames if
     * encryption algorithm is specified as none. Station in static-keys-optional mode will not connect to an Access Point in
     * `static-keys-required` mode. See also: static-sta-private-algo, static-transmit-key. `dynamic-keys` - WPA mode.
     */
    mode?: pulumi.Input<string>;
    /**
     * Password to use for authentication when `eap-ttls-mschapv2` or `peap` authentication method is being used. This property
     * only has effect on Stations.
     */
    mschapv2Password?: pulumi.Input<string>;
    /**
     * Username to use for authentication when `eap-ttls-mschapv2` or `peap` authentication method is being used. This property
     * only has effect on Stations.
     */
    mschapv2Username?: pulumi.Input<string>;
    /**
     * Name of the security profile.
     */
    name?: pulumi.Input<string>;
    /**
     * mac | mac:ssid | ssid
     */
    radiusCalledFormat?: pulumi.Input<string>;
    radiusEapAccounting?: pulumi.Input<boolean>;
    radiusMacAccounting?: pulumi.Input<boolean>;
    /**
     * This property affects the way how Access Point processes clients that are not found in the Access List.no - allow or
     * reject client authentication based on the value of default-authentication property of the Wireless interface.yes - Query
     * RADIUS server using MAC address of client as user name. With this setting the value of default-authentication has no
     * effect.
     */
    radiusMacAuthentication?: pulumi.Input<boolean>;
    /**
     * If this value is set to time interval, the Access Point will cache RADIUS MAC authentication responses for specified
     * time, and will not contact RADIUS server if matching cache entry already exists. Value disabled will disable cache,
     * Access Point will always contact RADIUS server.
     */
    radiusMacCaching?: pulumi.Input<string>;
    /**
     * Controls how MAC address of the client is encoded by Access Point in the User-Name attribute of the MAC authentication
     * and MAC accounting RADIUS requests.
     */
    radiusMacFormat?: pulumi.Input<string>;
    /**
     * By default Access Point uses an empty password, when sending Access-Request during MAC authentication. When this
     * property is set to `as-username-and-password`, Access Point will use the same value for User-Password attribute as for
     * the User-Name attribute.
     */
    radiusMacMode?: pulumi.Input<string>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    staticAlgo0?: pulumi.Input<string>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    staticAlgo1?: pulumi.Input<string>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    staticAlgo2?: pulumi.Input<string>;
    /**
     * Encryption algorithm to use with the corresponding key.
     */
    staticAlgo3?: pulumi.Input<string>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    staticKey0?: pulumi.Input<string>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    staticKey1?: pulumi.Input<string>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    staticKey2?: pulumi.Input<string>;
    /**
     * Hexadecimal representation of the key. Length of key must be appropriate for selected algorithm. See the Statically
     * configured WEP keys section.
     */
    staticKey3?: pulumi.Input<string>;
    /**
     * Encryption algorithm to use with station private key. Value none disables use of the private key. This property is only
     * used on Stations. Access Point has to get corresponding value either from private-algo property, or from
     * Mikrotik-Wireless-Enc-Algo attribute. Station private key replaces key 0 for unicast frames. Station will not use
     * private key to decrypt broadcast frames.
     */
    staticStaPrivateAlgo?: pulumi.Input<string>;
    /**
     * Length of key must be appropriate for selected algorithm, see the Statically configured WEP keys section. This property
     * is used only on Stations. Access Point uses corresponding key either from private-key property, or from
     * Mikrotik-Wireless-Enc-Key attribute.
     */
    staticStaPrivateKey?: pulumi.Input<string>;
    /**
     * Access Point will use the specified key to encrypt frames for clients that do not use private key. Access Point will
     * also use this key to encrypt broadcast and multicast frames. Client will use the specified key to encrypt frames if
     * static-sta-private-algo is set to none. If corresponding static-algo-N property has value set to none, then frame will
     * be sent unencrypted (when mode is set to static-keys-optional) or will not be sent at all (when mode is set to
     * static-keys-required).
     */
    staticTransmitKey?: pulumi.Input<string>;
    /**
     * EAP identity that is sent by client at the beginning of EAP authentication. This value is used as a value for User-Name
     * attribute in RADIUS messages sent by RADIUS EAP accounting and RADIUS EAP pass-through authentication.
     */
    supplicantIdentity?: pulumi.Input<string>;
    /**
     * Access Point always needs a certificate when configured when tls-mode is set to verify-certificate, or is set to
     * dont-verify-certificate. Client needs a certificate only if Access Point is configured with tls-mode set to
     * verify-certificate. In this case client needs a valid certificate that is signed by a CA known to the Access Point. This
     * property only has effect when tls-mode is not set to no-certificates and eap-methods contains eap-tls.
     */
    tlsCertificate?: pulumi.Input<string>;
    /**
     * This property has effect only when eap-methods contains eap-tls. `verify-certificate` - Require remote device to have
     * valid certificate. Check that it is signed by known certificate authority. No additional identity verification is done.
     * Certificate may include information about time period during which it is valid. If router has incorrect time and date,
     * it may reject valid certificate because router's clock is outside that period. See also the Certificates configuration.
     * `dont-verify-certificate` - Do not check certificate of the remote device. Access Point will not require client to
     * provide certificate. `no-certificates` - Do not use certificates. TLS session is established using 2048 bit anonymous
     * Diffie-Hellman key exchange. `verify-certificate-with-crl` - Same as verify-certificate but also checks if the
     * certificate is valid by checking the Certificate Revocation List.
     */
    tlsMode?: pulumi.Input<string>;
    /**
     * Access Point advertises that it supports specified ciphers, multiple values can be selected. Client attempts connection
     * only to Access Points that supports at least one of the specified ciphers. One of the ciphers will be used to encrypt
     * unicast frames that are sent between Access Point and Station.
     */
    unicastCiphers?: pulumi.Input<string>;
    /**
     * `WPA2` pre-shared key mode requires all devices in a BSS to have common secret key. Value of this key can be an
     * arbitrary text. Commonly referred to as the network password for WPA2 mode. property only has effect when wpa2-psk is
     * added to authentication-types.
     */
    wpa2PreSharedKey?: pulumi.Input<string>;
    /**
     * `WPA` pre-shared key mode requires all devices in a BSS to have common secret key. Value of this key can be an arbitrary
     * text. Commonly referred to as the network password for WPA mode. property only has effect when wpa-psk is added to
     * authentication-types.
     */
    wpaPreSharedKey?: pulumi.Input<string>;
}
