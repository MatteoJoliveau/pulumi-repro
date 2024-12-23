"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapsmanManagerInterface = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class CapsmanManagerInterface extends pulumi.CustomResource {
    /**
     * Get an existing CapsmanManagerInterface resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new CapsmanManagerInterface(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of CapsmanManagerInterface.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CapsmanManagerInterface.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["capsmanManagerInterfaceId"] = state ? state.capsmanManagerInterfaceId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["forbid"] = state ? state.forbid : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["capsmanManagerInterfaceId"] = args ? args.capsmanManagerInterfaceId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["forbid"] = args ? args.forbid : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["default"] = undefined /*out*/;
            resourceInputs["dynamic"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CapsmanManagerInterface.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.CapsmanManagerInterface = CapsmanManagerInterface;
/** @internal */
CapsmanManagerInterface.__pulumiType = 'routeros:index/capsmanManagerInterface:CapsmanManagerInterface';
//# sourceMappingURL=capsmanManagerInterface.js.map