"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceDot1xClient = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class InterfaceDot1xClient extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceDot1xClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new InterfaceDot1xClient(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of InterfaceDot1xClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceDot1xClient.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["anonIdentity"] = state ? state.anonIdentity : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["eapMethods"] = state ? state.eapMethods : undefined;
            resourceInputs["identity"] = state ? state.identity : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceDot1xClientId"] = state ? state.interfaceDot1xClientId : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.eapMethods === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eapMethods'");
            }
            if ((!args || args.identity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identity'");
            }
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["anonIdentity"] = args ? args.anonIdentity : undefined;
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["eapMethods"] = args ? args.eapMethods : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceDot1xClientId"] = args ? args.interfaceDot1xClientId : undefined;
            resourceInputs["password"] = (args === null || args === void 0 ? void 0 : args.password) ? pulumi.secret(args.password) : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(InterfaceDot1xClient.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.InterfaceDot1xClient = InterfaceDot1xClient;
/** @internal */
InterfaceDot1xClient.__pulumiType = 'routeros:index/interfaceDot1xClient:InterfaceDot1xClient';
//# sourceMappingURL=interfaceDot1xClient.js.map