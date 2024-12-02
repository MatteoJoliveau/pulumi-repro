"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpCloud = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class IpCloud extends pulumi.CustomResource {
    /**
     * Get an existing IpCloud resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new IpCloud(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of IpCloud.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpCloud.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["backToHomeVpn"] = state ? state.backToHomeVpn : undefined;
            resourceInputs["ddnsEnabled"] = state ? state.ddnsEnabled : undefined;
            resourceInputs["ddnsUpdateInterval"] = state ? state.ddnsUpdateInterval : undefined;
            resourceInputs["dnsName"] = state ? state.dnsName : undefined;
            resourceInputs["ipCloudId"] = state ? state.ipCloudId : undefined;
            resourceInputs["publicAddress"] = state ? state.publicAddress : undefined;
            resourceInputs["publicAddressIpv6"] = state ? state.publicAddressIpv6 : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
            resourceInputs["warning"] = state ? state.warning : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["backToHomeVpn"] = args ? args.backToHomeVpn : undefined;
            resourceInputs["ddnsEnabled"] = args ? args.ddnsEnabled : undefined;
            resourceInputs["ddnsUpdateInterval"] = args ? args.ddnsUpdateInterval : undefined;
            resourceInputs["ipCloudId"] = args ? args.ipCloudId : undefined;
            resourceInputs["updateTime"] = args ? args.updateTime : undefined;
            resourceInputs["dnsName"] = undefined /*out*/;
            resourceInputs["publicAddress"] = undefined /*out*/;
            resourceInputs["publicAddressIpv6"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["warning"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpCloud.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.IpCloud = IpCloud;
/** @internal */
IpCloud.__pulumiType = 'routeros:index/ipCloud:IpCloud';
//# sourceMappingURL=ipCloud.js.map