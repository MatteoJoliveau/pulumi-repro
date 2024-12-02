"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpIpsecPeer = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class IpIpsecPeer extends pulumi.CustomResource {
    /**
     * Get an existing IpIpsecPeer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new IpIpsecPeer(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of IpIpsecPeer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IpIpsecPeer.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["exchangeMode"] = state ? state.exchangeMode : undefined;
            resourceInputs["ipIpsecPeerId"] = state ? state.ipIpsecPeerId : undefined;
            resourceInputs["localAddress"] = state ? state.localAddress : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["passive"] = state ? state.passive : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["responder"] = state ? state.responder : undefined;
            resourceInputs["sendInitialContact"] = state ? state.sendInitialContact : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["exchangeMode"] = args ? args.exchangeMode : undefined;
            resourceInputs["ipIpsecPeerId"] = args ? args.ipIpsecPeerId : undefined;
            resourceInputs["localAddress"] = args ? args.localAddress : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passive"] = args ? args.passive : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["sendInitialContact"] = args ? args.sendInitialContact : undefined;
            resourceInputs["dynamic"] = undefined /*out*/;
            resourceInputs["responder"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IpIpsecPeer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.IpIpsecPeer = IpIpsecPeer;
/** @internal */
IpIpsecPeer.__pulumiType = 'routeros:index/ipIpsecPeer:IpIpsecPeer';
//# sourceMappingURL=ipIpsecPeer.js.map