"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceEthernetSwitchVlan = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class InterfaceEthernetSwitchVlan extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceEthernetSwitchVlan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new InterfaceEthernetSwitchVlan(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of InterfaceEthernetSwitchVlan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceEthernetSwitchVlan.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["independentLearning"] = state ? state.independentLearning : undefined;
            resourceInputs["interfaceEthernetSwitchVlanId"] = state ? state.interfaceEthernetSwitchVlanId : undefined;
            resourceInputs["invalid"] = state ? state.invalid : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["switch"] = state ? state.switch : undefined;
            resourceInputs["vlanId"] = state ? state.vlanId : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.ports === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ports'");
            }
            if ((!args || args.switch === undefined) && !opts.urn) {
                throw new Error("Missing required property 'switch'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["independentLearning"] = args ? args.independentLearning : undefined;
            resourceInputs["interfaceEthernetSwitchVlanId"] = args ? args.interfaceEthernetSwitchVlanId : undefined;
            resourceInputs["ports"] = args ? args.ports : undefined;
            resourceInputs["switch"] = args ? args.switch : undefined;
            resourceInputs["vlanId"] = args ? args.vlanId : undefined;
            resourceInputs["invalid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceEthernetSwitchVlan.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.InterfaceEthernetSwitchVlan = InterfaceEthernetSwitchVlan;
/** @internal */
InterfaceEthernetSwitchVlan.__pulumiType = 'routeros:index/interfaceEthernetSwitchVlan:InterfaceEthernetSwitchVlan';
//# sourceMappingURL=interfaceEthernetSwitchVlan.js.map