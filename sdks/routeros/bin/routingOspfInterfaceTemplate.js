"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingOspfInterfaceTemplate = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class RoutingOspfInterfaceTemplate extends pulumi.CustomResource {
    /**
     * Get an existing RoutingOspfInterfaceTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new RoutingOspfInterfaceTemplate(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of RoutingOspfInterfaceTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoutingOspfInterfaceTemplate.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___unset_"] = state ? state.___unset_ : undefined;
            resourceInputs["area"] = state ? state.area : undefined;
            resourceInputs["auth"] = state ? state.auth : undefined;
            resourceInputs["authId"] = state ? state.authId : undefined;
            resourceInputs["authKey"] = state ? state.authKey : undefined;
            resourceInputs["authenticationKey"] = state ? state.authenticationKey : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["cost"] = state ? state.cost : undefined;
            resourceInputs["deadInterval"] = state ? state.deadInterval : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["helloInterval"] = state ? state.helloInterval : undefined;
            resourceInputs["inactive"] = state ? state.inactive : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
            resourceInputs["passive"] = state ? state.passive : undefined;
            resourceInputs["prefixList"] = state ? state.prefixList : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["retransmitInterval"] = state ? state.retransmitInterval : undefined;
            resourceInputs["routingOspfInterfaceTemplateId"] = state ? state.routingOspfInterfaceTemplateId : undefined;
            resourceInputs["transmitDelay"] = state ? state.transmitDelay : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vlinkNeighborId"] = state ? state.vlinkNeighborId : undefined;
            resourceInputs["vlinkTransitArea"] = state ? state.vlinkTransitArea : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.area === undefined) && !opts.urn) {
                throw new Error("Missing required property 'area'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___unset_"] = args ? args.___unset_ : undefined;
            resourceInputs["area"] = args ? args.area : undefined;
            resourceInputs["auth"] = args ? args.auth : undefined;
            resourceInputs["authId"] = args ? args.authId : undefined;
            resourceInputs["authKey"] = (args === null || args === void 0 ? void 0 : args.authKey) ? pulumi.secret(args.authKey) : undefined;
            resourceInputs["authenticationKey"] = (args === null || args === void 0 ? void 0 : args.authenticationKey) ? pulumi.secret(args.authenticationKey) : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["cost"] = args ? args.cost : undefined;
            resourceInputs["deadInterval"] = args ? args.deadInterval : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["helloInterval"] = args ? args.helloInterval : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["networks"] = args ? args.networks : undefined;
            resourceInputs["passive"] = args ? args.passive : undefined;
            resourceInputs["prefixList"] = args ? args.prefixList : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["retransmitInterval"] = args ? args.retransmitInterval : undefined;
            resourceInputs["routingOspfInterfaceTemplateId"] = args ? args.routingOspfInterfaceTemplateId : undefined;
            resourceInputs["transmitDelay"] = args ? args.transmitDelay : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["vlinkNeighborId"] = args ? args.vlinkNeighborId : undefined;
            resourceInputs["vlinkTransitArea"] = args ? args.vlinkTransitArea : undefined;
            resourceInputs["inactive"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["authKey", "authenticationKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(RoutingOspfInterfaceTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.RoutingOspfInterfaceTemplate = RoutingOspfInterfaceTemplate;
/** @internal */
RoutingOspfInterfaceTemplate.__pulumiType = 'routeros:index/routingOspfInterfaceTemplate:RoutingOspfInterfaceTemplate';
//# sourceMappingURL=routingOspfInterfaceTemplate.js.map