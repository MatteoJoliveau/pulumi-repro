import * as pulumi from "@pulumi/pulumi";
export declare class WifiSecurity extends pulumi.CustomResource {
    /**
     * Get an existing WifiSecurity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WifiSecurityState, opts?: pulumi.CustomResourceOptions): WifiSecurity;
    /**
     * Returns true if the given object is an instance of WifiSecurity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WifiSecurity;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Authentication types to enable on the interface.
     */
    readonly authenticationTypes: pulumi.Output<string[] | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * APs within the same connect group do not allow more than 1 client device with the same MAC address.
     */
    readonly connectGroup: pulumi.Output<string | undefined>;
    /**
     * An option to determine how a connection is handled if the MAC address of the client device is the same as that of
     * another active connection to another AP.
     */
    readonly connectPriority: pulumi.Output<string | undefined>;
    /**
     * Identifiers of elliptic curve cryptography groups to use in SAE (WPA3) authentication.
     */
    readonly dhGroups: pulumi.Output<number[] | undefined>;
    /**
     * An option to disable inclusion of a PMKID in EAPOL frames.
     */
    readonly disablePmkid: pulumi.Output<boolean | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * An option to send accounting information to RADIUS server for EAP-authenticated peers.
     */
    readonly eapAccounting: pulumi.Output<boolean | undefined>;
    /**
     * An option to specify anonymous identity for EAP outer authentication.
     */
    readonly eapAnonymousIdentity: pulumi.Output<string | undefined>;
    /**
     * A policy for handling the TLS certificate of the RADIUS server.
     */
    readonly eapCertificateMode: pulumi.Output<string | undefined>;
    /**
     * A set of EAP methods to consider for authentication.
     */
    readonly eapMethods: pulumi.Output<string[] | undefined>;
    /**
     * Password to use when the chosen EAP method requires one.
     */
    readonly eapPassword: pulumi.Output<string | undefined>;
    /**
     * Name or id of a certificate in the device's certificate store to use when the chosen EAP authentication method requires
     * one.
     */
    readonly eapTlsCertificate: pulumi.Output<string | undefined>;
    /**
     * Username to use when the chosen EAP method requires one.
     */
    readonly eapUsername: pulumi.Output<string | undefined>;
    /**
     * A list of ciphers to support for encrypting unicast traffic.
     */
    readonly encryptions: pulumi.Output<string[] | undefined>;
    /**
     * An option to enable 802.11r fast BSS transitions (roaming).
     */
    readonly ft: pulumi.Output<boolean | undefined>;
    /**
     * The fast BSS transition mobility domain ID.
     */
    readonly ftMobilityDomain: pulumi.Output<number | undefined>;
    /**
     * Fast BSS transition PMK-R0 key holder identifier.
     */
    readonly ftNasIdentifier: pulumi.Output<string | undefined>;
    /**
     * An option to enable fast BSS transitions over DS (distributed system).
     */
    readonly ftOverDs: pulumi.Output<boolean | undefined>;
    /**
     * An option to preserve VLAN ID when roaming.
     */
    readonly ftPreserveVlanid: pulumi.Output<boolean | undefined>;
    /**
     * The lifetime of the fast BSS transition PMK-R0 encryption key.
     */
    readonly ftR0KeyLifetime: pulumi.Output<string | undefined>;
    /**
     * Fast BSS transition reassociation deadline.
     */
    readonly ftReassociationDeadline: pulumi.Output<string | undefined>;
    /**
     * A cipher to use for encrypting multicast traffic.
     */
    readonly groupEncryption: pulumi.Output<string | undefined>;
    /**
     * The interval at which the group temporal key (key for encrypting broadcast traffic) is renewed.
     */
    readonly groupKeyUpdate: pulumi.Output<string | undefined>;
    /**
     * A cipher to use for encrypting protected management frames.
     */
    readonly managementEncryption: pulumi.Output<string | undefined>;
    /**
     * An option to enable 802.11w management frame protection.
     */
    readonly managementProtection: pulumi.Output<string | undefined>;
    /**
     * Name of the security profile.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name or internal ID of an interface which MAC address and SSID to advertise as the matching AP when running in OWE
     * transition mode.
     */
    readonly oweTransitionInterface: pulumi.Output<string | undefined>;
    /**
     * Passphrase to use for PSK authentication types.
     */
    readonly passphrase: pulumi.Output<string | undefined>;
    /**
     * A parameter to mitigate DoS attacks by specifying a threshold of in-progress SAE authentications.
     */
    readonly saeAntiCloggingThreshold: pulumi.Output<string | undefined>;
    /**
     * Rate of failed SAE (WPA3) associations per minute, at which the AP will stop processing new association requests.
     */
    readonly saeMaxFailureRate: pulumi.Output<string | undefined>;
    /**
     * Methods to support for deriving SAE password element.
     */
    readonly saePwe: pulumi.Output<string | undefined>;
    readonly wifiSecurityId: pulumi.Output<string>;
    /**
     * An option to enable WPS (Wi-Fi Protected Setup).
     */
    readonly wps: pulumi.Output<string | undefined>;
    /**
     * Create a WifiSecurity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: WifiSecurityArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WifiSecurity resources.
 */
export interface WifiSecurityState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Authentication types to enable on the interface.
     */
    authenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * APs within the same connect group do not allow more than 1 client device with the same MAC address.
     */
    connectGroup?: pulumi.Input<string>;
    /**
     * An option to determine how a connection is handled if the MAC address of the client device is the same as that of
     * another active connection to another AP.
     */
    connectPriority?: pulumi.Input<string>;
    /**
     * Identifiers of elliptic curve cryptography groups to use in SAE (WPA3) authentication.
     */
    dhGroups?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * An option to disable inclusion of a PMKID in EAPOL frames.
     */
    disablePmkid?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * An option to send accounting information to RADIUS server for EAP-authenticated peers.
     */
    eapAccounting?: pulumi.Input<boolean>;
    /**
     * An option to specify anonymous identity for EAP outer authentication.
     */
    eapAnonymousIdentity?: pulumi.Input<string>;
    /**
     * A policy for handling the TLS certificate of the RADIUS server.
     */
    eapCertificateMode?: pulumi.Input<string>;
    /**
     * A set of EAP methods to consider for authentication.
     */
    eapMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Password to use when the chosen EAP method requires one.
     */
    eapPassword?: pulumi.Input<string>;
    /**
     * Name or id of a certificate in the device's certificate store to use when the chosen EAP authentication method requires
     * one.
     */
    eapTlsCertificate?: pulumi.Input<string>;
    /**
     * Username to use when the chosen EAP method requires one.
     */
    eapUsername?: pulumi.Input<string>;
    /**
     * A list of ciphers to support for encrypting unicast traffic.
     */
    encryptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to enable 802.11r fast BSS transitions (roaming).
     */
    ft?: pulumi.Input<boolean>;
    /**
     * The fast BSS transition mobility domain ID.
     */
    ftMobilityDomain?: pulumi.Input<number>;
    /**
     * Fast BSS transition PMK-R0 key holder identifier.
     */
    ftNasIdentifier?: pulumi.Input<string>;
    /**
     * An option to enable fast BSS transitions over DS (distributed system).
     */
    ftOverDs?: pulumi.Input<boolean>;
    /**
     * An option to preserve VLAN ID when roaming.
     */
    ftPreserveVlanid?: pulumi.Input<boolean>;
    /**
     * The lifetime of the fast BSS transition PMK-R0 encryption key.
     */
    ftR0KeyLifetime?: pulumi.Input<string>;
    /**
     * Fast BSS transition reassociation deadline.
     */
    ftReassociationDeadline?: pulumi.Input<string>;
    /**
     * A cipher to use for encrypting multicast traffic.
     */
    groupEncryption?: pulumi.Input<string>;
    /**
     * The interval at which the group temporal key (key for encrypting broadcast traffic) is renewed.
     */
    groupKeyUpdate?: pulumi.Input<string>;
    /**
     * A cipher to use for encrypting protected management frames.
     */
    managementEncryption?: pulumi.Input<string>;
    /**
     * An option to enable 802.11w management frame protection.
     */
    managementProtection?: pulumi.Input<string>;
    /**
     * Name of the security profile.
     */
    name?: pulumi.Input<string>;
    /**
     * Name or internal ID of an interface which MAC address and SSID to advertise as the matching AP when running in OWE
     * transition mode.
     */
    oweTransitionInterface?: pulumi.Input<string>;
    /**
     * Passphrase to use for PSK authentication types.
     */
    passphrase?: pulumi.Input<string>;
    /**
     * A parameter to mitigate DoS attacks by specifying a threshold of in-progress SAE authentications.
     */
    saeAntiCloggingThreshold?: pulumi.Input<string>;
    /**
     * Rate of failed SAE (WPA3) associations per minute, at which the AP will stop processing new association requests.
     */
    saeMaxFailureRate?: pulumi.Input<string>;
    /**
     * Methods to support for deriving SAE password element.
     */
    saePwe?: pulumi.Input<string>;
    wifiSecurityId?: pulumi.Input<string>;
    /**
     * An option to enable WPS (Wi-Fi Protected Setup).
     */
    wps?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a WifiSecurity resource.
 */
export interface WifiSecurityArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Authentication types to enable on the interface.
     */
    authenticationTypes?: pulumi.Input<pulumi.Input<string>[]>;
    comment?: pulumi.Input<string>;
    /**
     * APs within the same connect group do not allow more than 1 client device with the same MAC address.
     */
    connectGroup?: pulumi.Input<string>;
    /**
     * An option to determine how a connection is handled if the MAC address of the client device is the same as that of
     * another active connection to another AP.
     */
    connectPriority?: pulumi.Input<string>;
    /**
     * Identifiers of elliptic curve cryptography groups to use in SAE (WPA3) authentication.
     */
    dhGroups?: pulumi.Input<pulumi.Input<number>[]>;
    /**
     * An option to disable inclusion of a PMKID in EAPOL frames.
     */
    disablePmkid?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * An option to send accounting information to RADIUS server for EAP-authenticated peers.
     */
    eapAccounting?: pulumi.Input<boolean>;
    /**
     * An option to specify anonymous identity for EAP outer authentication.
     */
    eapAnonymousIdentity?: pulumi.Input<string>;
    /**
     * A policy for handling the TLS certificate of the RADIUS server.
     */
    eapCertificateMode?: pulumi.Input<string>;
    /**
     * A set of EAP methods to consider for authentication.
     */
    eapMethods?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Password to use when the chosen EAP method requires one.
     */
    eapPassword?: pulumi.Input<string>;
    /**
     * Name or id of a certificate in the device's certificate store to use when the chosen EAP authentication method requires
     * one.
     */
    eapTlsCertificate?: pulumi.Input<string>;
    /**
     * Username to use when the chosen EAP method requires one.
     */
    eapUsername?: pulumi.Input<string>;
    /**
     * A list of ciphers to support for encrypting unicast traffic.
     */
    encryptions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An option to enable 802.11r fast BSS transitions (roaming).
     */
    ft?: pulumi.Input<boolean>;
    /**
     * The fast BSS transition mobility domain ID.
     */
    ftMobilityDomain?: pulumi.Input<number>;
    /**
     * Fast BSS transition PMK-R0 key holder identifier.
     */
    ftNasIdentifier?: pulumi.Input<string>;
    /**
     * An option to enable fast BSS transitions over DS (distributed system).
     */
    ftOverDs?: pulumi.Input<boolean>;
    /**
     * An option to preserve VLAN ID when roaming.
     */
    ftPreserveVlanid?: pulumi.Input<boolean>;
    /**
     * The lifetime of the fast BSS transition PMK-R0 encryption key.
     */
    ftR0KeyLifetime?: pulumi.Input<string>;
    /**
     * Fast BSS transition reassociation deadline.
     */
    ftReassociationDeadline?: pulumi.Input<string>;
    /**
     * A cipher to use for encrypting multicast traffic.
     */
    groupEncryption?: pulumi.Input<string>;
    /**
     * The interval at which the group temporal key (key for encrypting broadcast traffic) is renewed.
     */
    groupKeyUpdate?: pulumi.Input<string>;
    /**
     * A cipher to use for encrypting protected management frames.
     */
    managementEncryption?: pulumi.Input<string>;
    /**
     * An option to enable 802.11w management frame protection.
     */
    managementProtection?: pulumi.Input<string>;
    /**
     * Name of the security profile.
     */
    name?: pulumi.Input<string>;
    /**
     * Name or internal ID of an interface which MAC address and SSID to advertise as the matching AP when running in OWE
     * transition mode.
     */
    oweTransitionInterface?: pulumi.Input<string>;
    /**
     * Passphrase to use for PSK authentication types.
     */
    passphrase?: pulumi.Input<string>;
    /**
     * A parameter to mitigate DoS attacks by specifying a threshold of in-progress SAE authentications.
     */
    saeAntiCloggingThreshold?: pulumi.Input<string>;
    /**
     * Rate of failed SAE (WPA3) associations per minute, at which the AP will stop processing new association requests.
     */
    saeMaxFailureRate?: pulumi.Input<string>;
    /**
     * Methods to support for deriving SAE password element.
     */
    saePwe?: pulumi.Input<string>;
    wifiSecurityId?: pulumi.Input<string>;
    /**
     * An option to enable WPS (Wi-Fi Protected Setup).
     */
    wps?: pulumi.Input<string>;
}
