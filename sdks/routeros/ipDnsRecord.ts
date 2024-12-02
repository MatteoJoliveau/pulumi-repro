// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IpDnsRecord extends pulumi.CustomResource {
    /**
     * Get an existing IpDnsRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IpDnsRecordState, opts?: pulumi.CustomResourceOptions): IpDnsRecord {
        return new IpDnsRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/ipDnsRecord:IpDnsRecord';

    /**
     * Returns true if the given object is an instance of IpDnsRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IpDnsRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpDnsRecord.__pulumiType;
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
     * The A record to be returend from the DNS hostname.
     */
    public readonly address!: pulumi.Output<string | undefined>;
    /**
     * Name of the Firewall address list to which address must be dynamically added when some request matches the entry.
     */
    public readonly addressList!: pulumi.Output<string | undefined>;
    /**
     * Alias name for a domain name.
     */
    public readonly cname!: pulumi.Output<string | undefined>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    public /*out*/ readonly dynamic!: pulumi.Output<boolean>;
    /**
     * The IP address of a domain name server to which a particular DNS request must be forwarded.
     */
    public readonly forwardTo!: pulumi.Output<string | undefined>;
    public readonly ipDnsRecordId!: pulumi.Output<string>;
    /**
     * Whether the record will match requests for subdomains.
     */
    public readonly matchSubdomain!: pulumi.Output<boolean | undefined>;
    /**
     * The domain name of the MX server.
     */
    public readonly mxExchange!: pulumi.Output<string | undefined>;
    /**
     * Preference of the particular MX record.
     */
    public readonly mxPreference!: pulumi.Output<number>;
    /**
     * The name of the DNS hostname to be created.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Name of the authoritative domain name server for the particular record.
     */
    public readonly ns!: pulumi.Output<string | undefined>;
    /**
     * DNS regexp. Regexp entries are case sensitive, but since DNS requests are not case sensitive, RouterOS converts DNS
     * names to lowercase, you should write regex only with lowercase letters.
     */
    public readonly regexp!: pulumi.Output<string | undefined>;
    /**
     * The TCP or UDP port on which the service is to be found.
     */
    public readonly srvPort!: pulumi.Output<number>;
    /**
     * Priority of the particular SRV record.
     */
    public readonly srvPriority!: pulumi.Output<number>;
    /**
     * The canonical hostname of the machine providing the service ends in a dot.
     */
    public readonly srvTarget!: pulumi.Output<string | undefined>;
    /**
     * Weight of the particular SRC record.
     */
    public readonly srvWeight!: pulumi.Output<string>;
    /**
     * Textual information about the domain name.
     */
    public readonly text!: pulumi.Output<string | undefined>;
    /**
     * The ttl of the DNS record.
     */
    public readonly ttl!: pulumi.Output<string | undefined>;
    /**
     * Type of the DNS record. Available values are: A, AAAA, CNAME, FWD, MX, NS, NXDOMAIN, SRV, TXT
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a IpDnsRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IpDnsRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IpDnsRecordArgs | IpDnsRecordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IpDnsRecordState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["addressList"] = state ? state.addressList : undefined;
            resourceInputs["cname"] = state ? state.cname : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["forwardTo"] = state ? state.forwardTo : undefined;
            resourceInputs["ipDnsRecordId"] = state ? state.ipDnsRecordId : undefined;
            resourceInputs["matchSubdomain"] = state ? state.matchSubdomain : undefined;
            resourceInputs["mxExchange"] = state ? state.mxExchange : undefined;
            resourceInputs["mxPreference"] = state ? state.mxPreference : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["ns"] = state ? state.ns : undefined;
            resourceInputs["regexp"] = state ? state.regexp : undefined;
            resourceInputs["srvPort"] = state ? state.srvPort : undefined;
            resourceInputs["srvPriority"] = state ? state.srvPriority : undefined;
            resourceInputs["srvTarget"] = state ? state.srvTarget : undefined;
            resourceInputs["srvWeight"] = state ? state.srvWeight : undefined;
            resourceInputs["text"] = state ? state.text : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as IpDnsRecordArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["addressList"] = args ? args.addressList : undefined;
            resourceInputs["cname"] = args ? args.cname : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["forwardTo"] = args ? args.forwardTo : undefined;
            resourceInputs["ipDnsRecordId"] = args ? args.ipDnsRecordId : undefined;
            resourceInputs["matchSubdomain"] = args ? args.matchSubdomain : undefined;
            resourceInputs["mxExchange"] = args ? args.mxExchange : undefined;
            resourceInputs["mxPreference"] = args ? args.mxPreference : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["ns"] = args ? args.ns : undefined;
            resourceInputs["regexp"] = args ? args.regexp : undefined;
            resourceInputs["srvPort"] = args ? args.srvPort : undefined;
            resourceInputs["srvPriority"] = args ? args.srvPriority : undefined;
            resourceInputs["srvTarget"] = args ? args.srvTarget : undefined;
            resourceInputs["srvWeight"] = args ? args.srvWeight : undefined;
            resourceInputs["text"] = args ? args.text : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["dynamic"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpDnsRecord.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IpDnsRecord resources.
 */
export interface IpDnsRecordState {
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
    /**
     * Configuration item created by software, not by management interface. It is not exported, and cannot be directly
     * modified.
     */
    dynamic?: pulumi.Input<boolean>;
    /**
     * The IP address of a domain name server to which a particular DNS request must be forwarded.
     */
    forwardTo?: pulumi.Input<string>;
    ipDnsRecordId?: pulumi.Input<string>;
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
 * The set of arguments for constructing a IpDnsRecord resource.
 */
export interface IpDnsRecordArgs {
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
    /**
     * The IP address of a domain name server to which a particular DNS request must be forwarded.
     */
    forwardTo?: pulumi.Input<string>;
    ipDnsRecordId?: pulumi.Input<string>;
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
