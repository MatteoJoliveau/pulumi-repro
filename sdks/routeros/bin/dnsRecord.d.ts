import * as pulumi from "@pulumi/pulumi";
export declare class DnsRecord extends pulumi.CustomResource {
    /**
     * Get an existing DnsRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnsRecordState, opts?: pulumi.CustomResourceOptions): DnsRecord;
    /**
     * Returns true if the given object is an instance of DnsRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DnsRecord;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * The A record to be returend from the DNS hostname.
     */
    readonly address: pulumi.Output<string | undefined>;
    /**
     * Name of the Firewall address list to which address must be dynamically added when some request matches the entry.
     */
    readonly addressList: pulumi.Output<string | undefined>;
    /**
     * Alias name for a domain name.
     */
    readonly cname: pulumi.Output<string | undefined>;
    readonly comment: pulumi.Output<string | undefined>;
    readonly disabled: pulumi.Output<boolean | undefined>;
    readonly dnsRecordId: pulumi.Output<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    readonly dynamic: pulumi.Output<boolean>;
    /**
     * The IP address of a domain name server to which a particular DNS request must be forwarded.
     */
    readonly forwardTo: pulumi.Output<string | undefined>;
    /**
     * Whether the record will match requests for subdomains.
     */
    readonly matchSubdomain: pulumi.Output<boolean | undefined>;
    /**
     * The domain name of the MX server.
     */
    readonly mxExchange: pulumi.Output<string | undefined>;
    /**
     * Preference of the particular MX record.
     */
    readonly mxPreference: pulumi.Output<number>;
    /**
     * The name of the DNS hostname to be created.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Name of the authoritative domain name server for the particular record.
     */
    readonly ns: pulumi.Output<string | undefined>;
    /**
     * DNS regexp. Regexp entries are case sensitive, but since DNS requests are not case sensitive, RouterOS converts DNS
     * names to lowercase, you should write regex only with lowercase letters.
     */
    readonly regexp: pulumi.Output<string | undefined>;
    /**
     * The TCP or UDP port on which the service is to be found.
     */
    readonly srvPort: pulumi.Output<number>;
    /**
     * Priority of the particular SRV record.
     */
    readonly srvPriority: pulumi.Output<number>;
    /**
     * The canonical hostname of the machine providing the service ends in a dot.
     */
    readonly srvTarget: pulumi.Output<string | undefined>;
    /**
     * Weight of the particular SRC record.
     */
    readonly srvWeight: pulumi.Output<string>;
    /**
     * Textual information about the domain name.
     */
    readonly text: pulumi.Output<string | undefined>;
    /**
     * The ttl of the DNS record.
     */
    readonly ttl: pulumi.Output<string | undefined>;
    /**
     * Type of the DNS record. Available values are: A, AAAA, CNAME, FWD, MX, NS, NXDOMAIN, SRV, TXT
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a DnsRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnsRecordArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DnsRecord resources.
 */
export interface DnsRecordState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The A record to be returend from the DNS hostname.
     */
    address?: pulumi.Input<string>;
    /**
     * Name of the Firewall address list to which address must be dynamically added when some request matches the entry.
     */
    addressList?: pulumi.Input<string>;
    /**
     * Alias name for a domain name.
     */
    cname?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dnsRecordId?: pulumi.Input<string>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * The IP address of a domain name server to which a particular DNS request must be forwarded.
     */
    forwardTo?: pulumi.Input<string>;
    /**
     * Whether the record will match requests for subdomains.
     */
    matchSubdomain?: pulumi.Input<boolean>;
    /**
     * The domain name of the MX server.
     */
    mxExchange?: pulumi.Input<string>;
    /**
     * Preference of the particular MX record.
     */
    mxPreference?: pulumi.Input<number>;
    /**
     * The name of the DNS hostname to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the authoritative domain name server for the particular record.
     */
    ns?: pulumi.Input<string>;
    /**
     * DNS regexp. Regexp entries are case sensitive, but since DNS requests are not case sensitive, RouterOS converts DNS
     * names to lowercase, you should write regex only with lowercase letters.
     */
    regexp?: pulumi.Input<string>;
    /**
     * The TCP or UDP port on which the service is to be found.
     */
    srvPort?: pulumi.Input<number>;
    /**
     * Priority of the particular SRV record.
     */
    srvPriority?: pulumi.Input<number>;
    /**
     * The canonical hostname of the machine providing the service ends in a dot.
     */
    srvTarget?: pulumi.Input<string>;
    /**
     * Weight of the particular SRC record.
     */
    srvWeight?: pulumi.Input<string>;
    /**
     * Textual information about the domain name.
     */
    text?: pulumi.Input<string>;
    /**
     * The ttl of the DNS record.
     */
    ttl?: pulumi.Input<string>;
    /**
     * Type of the DNS record. Available values are: A, AAAA, CNAME, FWD, MX, NS, NXDOMAIN, SRV, TXT
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DnsRecord resource.
 */
export interface DnsRecordArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * The A record to be returend from the DNS hostname.
     */
    address?: pulumi.Input<string>;
    /**
     * Name of the Firewall address list to which address must be dynamically added when some request matches the entry.
     */
    addressList?: pulumi.Input<string>;
    /**
     * Alias name for a domain name.
     */
    cname?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    disabled?: pulumi.Input<boolean>;
    dnsRecordId?: pulumi.Input<string>;
    /**
     * The IP address of a domain name server to which a particular DNS request must be forwarded.
     */
    forwardTo?: pulumi.Input<string>;
    /**
     * Whether the record will match requests for subdomains.
     */
    matchSubdomain?: pulumi.Input<boolean>;
    /**
     * The domain name of the MX server.
     */
    mxExchange?: pulumi.Input<string>;
    /**
     * Preference of the particular MX record.
     */
    mxPreference?: pulumi.Input<number>;
    /**
     * The name of the DNS hostname to be created.
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the authoritative domain name server for the particular record.
     */
    ns?: pulumi.Input<string>;
    /**
     * DNS regexp. Regexp entries are case sensitive, but since DNS requests are not case sensitive, RouterOS converts DNS
     * names to lowercase, you should write regex only with lowercase letters.
     */
    regexp?: pulumi.Input<string>;
    /**
     * The TCP or UDP port on which the service is to be found.
     */
    srvPort?: pulumi.Input<number>;
    /**
     * Priority of the particular SRV record.
     */
    srvPriority?: pulumi.Input<number>;
    /**
     * The canonical hostname of the machine providing the service ends in a dot.
     */
    srvTarget?: pulumi.Input<string>;
    /**
     * Weight of the particular SRC record.
     */
    srvWeight?: pulumi.Input<string>;
    /**
     * Textual information about the domain name.
     */
    text?: pulumi.Input<string>;
    /**
     * The ttl of the DNS record.
     */
    ttl?: pulumi.Input<string>;
    /**
     * Type of the DNS record. Available values are: A, AAAA, CNAME, FWD, MX, NS, NXDOMAIN, SRV, TXT
     */
    type: pulumi.Input<string>;
}
