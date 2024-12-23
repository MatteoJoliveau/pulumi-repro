"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerConfig = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class ContainerConfig extends pulumi.CustomResource {
    /**
     * Get an existing ContainerConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new ContainerConfig(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of ContainerConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContainerConfig.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["containerConfigId"] = state ? state.containerConfigId : undefined;
            resourceInputs["layerDir"] = state ? state.layerDir : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["ramHigh"] = state ? state.ramHigh : undefined;
            resourceInputs["registryUrl"] = state ? state.registryUrl : undefined;
            resourceInputs["tmpdir"] = state ? state.tmpdir : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["containerConfigId"] = args ? args.containerConfigId : undefined;
            resourceInputs["layerDir"] = args ? args.layerDir : undefined;
            resourceInputs["password"] = (args === null || args === void 0 ? void 0 : args.password) ? pulumi.secret(args.password) : undefined;
            resourceInputs["ramHigh"] = args ? args.ramHigh : undefined;
            resourceInputs["registryUrl"] = args ? args.registryUrl : undefined;
            resourceInputs["tmpdir"] = args ? args.tmpdir : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ContainerConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.ContainerConfig = ContainerConfig;
/** @internal */
ContainerConfig.__pulumiType = 'routeros:index/containerConfig:ContainerConfig';
//# sourceMappingURL=containerConfig.js.map