"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpDnsRecord = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class IpDnsRecord extends pulumi.CustomResource {
    /**
     * Get an existing IpDnsRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new IpDnsRecord(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of IpDnsRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpDnsRecord.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
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
        }
        else {
            const args = argsOrState;
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
exports.IpDnsRecord = IpDnsRecord;
/** @internal */
IpDnsRecord.__pulumiType = 'routeros:index/ipDnsRecord:IpDnsRecord';
//# sourceMappingURL=ipDnsRecord.js.map