"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemNtpClient = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class SystemNtpClient extends pulumi.CustomResource {
    /**
     * Get an existing SystemNtpClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new SystemNtpClient(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of SystemNtpClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemNtpClient.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["freqDrift"] = state ? state.freqDrift : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["servers"] = state ? state.servers : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["syncedServer"] = state ? state.syncedServer : undefined;
            resourceInputs["syncedStratum"] = state ? state.syncedStratum : undefined;
            resourceInputs["systemNtpClientId"] = state ? state.systemNtpClientId : undefined;
            resourceInputs["systemOffset"] = state ? state.systemOffset : undefined;
            resourceInputs["vrf"] = state ? state.vrf : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["servers"] = args ? args.servers : undefined;
            resourceInputs["systemNtpClientId"] = args ? args.systemNtpClientId : undefined;
            resourceInputs["vrf"] = args ? args.vrf : undefined;
            resourceInputs["freqDrift"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["syncedServer"] = undefined /*out*/;
            resourceInputs["syncedStratum"] = undefined /*out*/;
            resourceInputs["systemOffset"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemNtpClient.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.SystemNtpClient = SystemNtpClient;
/** @internal */
SystemNtpClient.__pulumiType = 'routeros:index/systemNtpClient:SystemNtpClient';
//# sourceMappingURL=systemNtpClient.js.map