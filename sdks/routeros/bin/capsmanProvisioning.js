"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapsmanProvisioning = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class CapsmanProvisioning extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanProvisioning resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new CapsmanProvisioning(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of CapsmanProvisioning.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapsmanProvisioning.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["capsmanProvisioningId"] = state ? state.capsmanProvisioningId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["commonNameRegexp"] = state ? state.commonNameRegexp : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["hwSupportedModes"] = state ? state.hwSupportedModes : undefined;
            resourceInputs["identityRegexp"] = state ? state.identityRegexp : undefined;
            resourceInputs["ipAddressRanges"] = state ? state.ipAddressRanges : undefined;
            resourceInputs["masterConfiguration"] = state ? state.masterConfiguration : undefined;
            resourceInputs["nameFormat"] = state ? state.nameFormat : undefined;
            resourceInputs["namePrefix"] = state ? state.namePrefix : undefined;
            resourceInputs["radioMac"] = state ? state.radioMac : undefined;
            resourceInputs["slaveConfigurations"] = state ? state.slaveConfigurations : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.masterConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'masterConfiguration'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["capsmanProvisioningId"] = args ? args.capsmanProvisioningId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["commonNameRegexp"] = args ? args.commonNameRegexp : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["hwSupportedModes"] = args ? args.hwSupportedModes : undefined;
            resourceInputs["identityRegexp"] = args ? args.identityRegexp : undefined;
            resourceInputs["ipAddressRanges"] = args ? args.ipAddressRanges : undefined;
            resourceInputs["masterConfiguration"] = args ? args.masterConfiguration : undefined;
            resourceInputs["nameFormat"] = args ? args.nameFormat : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["radioMac"] = args ? args.radioMac : undefined;
            resourceInputs["slaveConfigurations"] = args ? args.slaveConfigurations : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CapsmanProvisioning.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.CapsmanProvisioning = CapsmanProvisioning;
/** @internal */
CapsmanProvisioning.__pulumiType = 'routeros:index/capsmanProvisioning:CapsmanProvisioning';
//# sourceMappingURL=capsmanProvisioning.js.map