import * as pulumi from "@pulumi/pulumi";
export declare class SnmpCommunity extends pulumi.CustomResource {
    /**
     * Get an existing SnmpCommunity resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnmpCommunityState, opts?: pulumi.CustomResourceOptions): SnmpCommunity;
    /**
     * Returns true if the given object is an instance of SnmpCommunity.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SnmpCommunity;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * Set of IP (v4 or v6) addresses or CIDR networks from which connections to SNMP server are allowed.
     */
    readonly addresses: pulumi.Output<string[] | undefined>;
    /**
     * Password used to authenticate the connection to the server (SNMPv3).
     */
    readonly authenticationPassword: pulumi.Output<string | undefined>;
    /**
     * The protocol used for authentication (SNMPv3).
     */
    readonly authenticationProtocol: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * It's the default item.
     */
    readonly default: pulumi.Output<boolean>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    /**
     * The password used for encryption (SNMPv3).
     */
    readonly encryptionPassword: pulumi.Output<string | undefined>;
    /**
     * encryption protocol to be used to encrypt the communication (SNMPv3). AES (see rfc3826) available since v6.16.
     */
    readonly encryptionProtocol: pulumi.Output<string | undefined>;
    /**
     * Community Name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Whether read access is enabled for this community.
     */
    readonly readAccess: pulumi.Output<boolean | undefined>;
    /**
     * Security features.
     */
    readonly security: pulumi.Output<string | undefined>;
    readonly snmpCommunityId: pulumi.Output<string>;
    /**
     * Whether write access is enabled for this community.
     */
    readonly writeAccess: pulumi.Output<boolean | undefined>;
    /**
     * Create a SnmpCommunity resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SnmpCommunityArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SnmpCommunity resources.
 */
export interface SnmpCommunityState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Set of IP (v4 or v6) addresses or CIDR networks from which connections to SNMP server are allowed.
     */
    addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Password used to authenticate the connection to the server (SNMPv3).
     */
    authenticationPassword?: pulumi.Input<string>;
    /**
     * The protocol used for authentication (SNMPv3).
     */
    authenticationProtocol?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    /**
     * It's the default item.
     */
    default?: pulumi.Input<boolean>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The password used for encryption (SNMPv3).
     */
    encryptionPassword?: pulumi.Input<string>;
    /**
     * encryption protocol to be used to encrypt the communication (SNMPv3). AES (see rfc3826) available since v6.16.
     */
    encryptionProtocol?: pulumi.Input<string>;
    /**
     * Community Name.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether read access is enabled for this community.
     */
    readAccess?: pulumi.Input<boolean>;
    /**
     * Security features.
     */
    security?: pulumi.Input<string>;
    snmpCommunityId?: pulumi.Input<string>;
    /**
     * Whether write access is enabled for this community.
     */
    writeAccess?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a SnmpCommunity resource.
 */
export interface SnmpCommunityArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * Set of IP (v4 or v6) addresses or CIDR networks from which connections to SNMP server are allowed.
     */
    addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Password used to authenticate the connection to the server (SNMPv3).
     */
    authenticationPassword?: pulumi.Input<string>;
    /**
     * The protocol used for authentication (SNMPv3).
     */
    authenticationProtocol?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    /**
     * The password used for encryption (SNMPv3).
     */
    encryptionPassword?: pulumi.Input<string>;
    /**
     * encryption protocol to be used to encrypt the communication (SNMPv3). AES (see rfc3826) available since v6.16.
     */
    encryptionProtocol?: pulumi.Input<string>;
    /**
     * Community Name.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether read access is enabled for this community.
     */
    readAccess?: pulumi.Input<boolean>;
    /**
     * Security features.
     */
    security?: pulumi.Input<string>;
    snmpCommunityId?: pulumi.Input<string>;
    /**
     * Whether write access is enabled for this community.
     */
    writeAccess?: pulumi.Input<boolean>;
}
