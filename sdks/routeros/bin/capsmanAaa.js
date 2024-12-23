"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapsmanAaa = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class CapsmanAaa extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanAaa resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new CapsmanAaa(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of CapsmanAaa.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapsmanAaa.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["calledFormat"] = state ? state.calledFormat : undefined;
            resourceInputs["capsmanAaaId"] = state ? state.capsmanAaaId : undefined;
            resourceInputs["interimUpdate"] = state ? state.interimUpdate : undefined;
            resourceInputs["macCaching"] = state ? state.macCaching : undefined;
            resourceInputs["macFormat"] = state ? state.macFormat : undefined;
            resourceInputs["macMode"] = state ? state.macMode : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["calledFormat"] = args ? args.calledFormat : undefined;
            resourceInputs["capsmanAaaId"] = args ? args.capsmanAaaId : undefined;
            resourceInputs["interimUpdate"] = args ? args.interimUpdate : undefined;
            resourceInputs["macCaching"] = args ? args.macCaching : undefined;
            resourceInputs["macFormat"] = args ? args.macFormat : undefined;
            resourceInputs["macMode"] = args ? args.macMode : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CapsmanAaa.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.CapsmanAaa = CapsmanAaa;
/** @internal */
CapsmanAaa.__pulumiType = 'routeros:index/capsmanAaa:CapsmanAaa';
//# sourceMappingURL=capsmanAaa.js.map