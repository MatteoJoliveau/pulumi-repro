"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingBgpTemplate = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class RoutingBgpTemplate extends pulumi.CustomResource {
    /**
     * Get an existing RoutingBgpTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new RoutingBgpTemplate(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of RoutingBgpTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RoutingBgpTemplate.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["addPathOut"] = state ? state.addPathOut : undefined;
            resourceInputs["addressFamilies"] = state ? state.addressFamilies : undefined;
            resourceInputs["as"] = state ? state.as : undefined;
            resourceInputs["asOverride"] = state ? state.asOverride : undefined;
            resourceInputs["ciscoVplsNlriLenFmt"] = state ? state.ciscoVplsNlriLenFmt : undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["default"] = state ? state.default : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["holdTime"] = state ? state.holdTime : undefined;
            resourceInputs["input"] = state ? state.input : undefined;
            resourceInputs["keepaliveTime"] = state ? state.keepaliveTime : undefined;
            resourceInputs["multihop"] = state ? state.multihop : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nexthopChoice"] = state ? state.nexthopChoice : undefined;
            resourceInputs["output"] = state ? state.output : undefined;
            resourceInputs["removePrivateAs"] = state ? state.removePrivateAs : undefined;
            resourceInputs["routerId"] = state ? state.routerId : undefined;
            resourceInputs["routingBgpTemplateId"] = state ? state.routingBgpTemplateId : undefined;
            resourceInputs["routingTable"] = state ? state.routingTable : undefined;
            resourceInputs["saveTo"] = state ? state.saveTo : undefined;
            resourceInputs["templates"] = state ? state.templates : undefined;
            resourceInputs["useBfd"] = state ? state.useBfd : undefined;
            resourceInputs["vrf"] = state ? state.vrf : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.as === undefined) && !opts.urn) {
                throw new Error("Missing required property 'as'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["addPathOut"] = args ? args.addPathOut : undefined;
            resourceInputs["addressFamilies"] = args ? args.addressFamilies : undefined;
            resourceInputs["as"] = args ? args.as : undefined;
            resourceInputs["asOverride"] = args ? args.asOverride : undefined;
            resourceInputs["ciscoVplsNlriLenFmt"] = args ? args.ciscoVplsNlriLenFmt : undefined;
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["holdTime"] = args ? args.holdTime : undefined;
            resourceInputs["input"] = args ? args.input : undefined;
            resourceInputs["keepaliveTime"] = args ? args.keepaliveTime : undefined;
            resourceInputs["multihop"] = args ? args.multihop : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nexthopChoice"] = args ? args.nexthopChoice : undefined;
            resourceInputs["output"] = args ? args.output : undefined;
            resourceInputs["removePrivateAs"] = args ? args.removePrivateAs : undefined;
            resourceInputs["routerId"] = args ? args.routerId : undefined;
            resourceInputs["routingBgpTemplateId"] = args ? args.routingBgpTemplateId : undefined;
            resourceInputs["routingTable"] = args ? args.routingTable : undefined;
            resourceInputs["saveTo"] = args ? args.saveTo : undefined;
            resourceInputs["templates"] = args ? args.templates : undefined;
            resourceInputs["useBfd"] = args ? args.useBfd : undefined;
            resourceInputs["vrf"] = args ? args.vrf : undefined;
            resourceInputs["default"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RoutingBgpTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.RoutingBgpTemplate = RoutingBgpTemplate;
/** @internal */
RoutingBgpTemplate.__pulumiType = 'routeros:index/routingBgpTemplate:RoutingBgpTemplate';
//# sourceMappingURL=routingBgpTemplate.js.map