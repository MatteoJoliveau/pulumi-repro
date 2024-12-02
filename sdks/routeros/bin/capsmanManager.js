"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapsmanManager = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class CapsmanManager extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanManager resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new CapsmanManager(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of CapsmanManager.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapsmanManager.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["caCertificate"] = state ? state.caCertificate : undefined;
            resourceInputs["capsmanManagerId"] = state ? state.capsmanManagerId : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["generatedCaCertificate"] = state ? state.generatedCaCertificate : undefined;
            resourceInputs["generatedCertificate"] = state ? state.generatedCertificate : undefined;
            resourceInputs["packagePath"] = state ? state.packagePath : undefined;
            resourceInputs["requirePeerCertificate"] = state ? state.requirePeerCertificate : undefined;
            resourceInputs["upgradePolicy"] = state ? state.upgradePolicy : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["caCertificate"] = args ? args.caCertificate : undefined;
            resourceInputs["capsmanManagerId"] = args ? args.capsmanManagerId : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["packagePath"] = args ? args.packagePath : undefined;
            resourceInputs["requirePeerCertificate"] = args ? args.requirePeerCertificate : undefined;
            resourceInputs["upgradePolicy"] = args ? args.upgradePolicy : undefined;
            resourceInputs["generatedCaCertificate"] = undefined /*out*/;
            resourceInputs["generatedCertificate"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CapsmanManager.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.CapsmanManager = CapsmanManager;
/** @internal */
CapsmanManager.__pulumiType = 'routeros:index/capsmanManager:CapsmanManager';
//# sourceMappingURL=capsmanManager.js.map