"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterfaceBridgePort = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class InterfaceBridgePort extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceBridgePort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new InterfaceBridgePort(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of InterfaceBridgePort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceBridgePort.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["___skip_"] = state ? state.___skip_ : undefined;
            resourceInputs["autoIsolate"] = state ? state.autoIsolate : undefined;
            resourceInputs["bpduGuard"] = state ? state.bpduGuard : undefined;
            resourceInputs["bridge"] = state ? state.bridge : undefined;
            resourceInputs["broadcastFlood"] = state ? state.broadcastFlood : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["designatedBridge"] = state ? state.designatedBridge : undefined;
            resourceInputs["designatedCost"] = state ? state.designatedCost : undefined;
            resourceInputs["designatedPortNumber"] = state ? state.designatedPortNumber : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["dynamic"] = state ? state.dynamic : undefined;
            resourceInputs["edge"] = state ? state.edge : undefined;
            resourceInputs["edgePort"] = state ? state.edgePort : undefined;
            resourceInputs["edgePortDiscovery"] = state ? state.edgePortDiscovery : undefined;
            resourceInputs["externalFdbStatus"] = state ? state.externalFdbStatus : undefined;
            resourceInputs["fastLeave"] = state ? state.fastLeave : undefined;
            resourceInputs["forwarding"] = state ? state.forwarding : undefined;
            resourceInputs["frameTypes"] = state ? state.frameTypes : undefined;
            resourceInputs["horizon"] = state ? state.horizon : undefined;
            resourceInputs["hw"] = state ? state.hw : undefined;
            resourceInputs["hwOffload"] = state ? state.hwOffload : undefined;
            resourceInputs["hwOffloadGroup"] = state ? state.hwOffloadGroup : undefined;
            resourceInputs["inactive"] = state ? state.inactive : undefined;
            resourceInputs["ingressFiltering"] = state ? state.ingressFiltering : undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceBridgePortId"] = state ? state.interfaceBridgePortId : undefined;
            resourceInputs["internalPathCost"] = state ? state.internalPathCost : undefined;
            resourceInputs["learn"] = state ? state.learn : undefined;
            resourceInputs["learning"] = state ? state.learning : undefined;
            resourceInputs["multicastRouter"] = state ? state.multicastRouter : undefined;
            resourceInputs["mvrpApplicantState"] = state ? state.mvrpApplicantState : undefined;
            resourceInputs["mvrpRegistrarState"] = state ? state.mvrpRegistrarState : undefined;
            resourceInputs["nextid"] = state ? state.nextid : undefined;
            resourceInputs["pathCost"] = state ? state.pathCost : undefined;
            resourceInputs["pointToPoint"] = state ? state.pointToPoint : undefined;
            resourceInputs["pointToPointPort"] = state ? state.pointToPointPort : undefined;
            resourceInputs["priority"] = state ? state.priority : undefined;
            resourceInputs["pvid"] = state ? state.pvid : undefined;
            resourceInputs["restrictedRole"] = state ? state.restrictedRole : undefined;
            resourceInputs["restrictedTcn"] = state ? state.restrictedTcn : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["rootPathCost"] = state ? state.rootPathCost : undefined;
            resourceInputs["sendingRstp"] = state ? state.sendingRstp : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tagStacking"] = state ? state.tagStacking : undefined;
            resourceInputs["trusted"] = state ? state.trusted : undefined;
            resourceInputs["unknownMulticastFlood"] = state ? state.unknownMulticastFlood : undefined;
            resourceInputs["unknownUnicastFlood"] = state ? state.unknownUnicastFlood : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.bridge === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bridge'");
            }
            if ((!args || args.interface === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interface'");
            }
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["___skip_"] = args ? args.___skip_ : undefined;
            resourceInputs["autoIsolate"] = args ? args.autoIsolate : undefined;
            resourceInputs["bpduGuard"] = args ? args.bpduGuard : undefined;
            resourceInputs["bridge"] = args ? args.bridge : undefined;
            resourceInputs["broadcastFlood"] = args ? args.broadcastFlood : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["edge"] = args ? args.edge : undefined;
            resourceInputs["fastLeave"] = args ? args.fastLeave : undefined;
            resourceInputs["frameTypes"] = args ? args.frameTypes : undefined;
            resourceInputs["horizon"] = args ? args.horizon : undefined;
            resourceInputs["hw"] = args ? args.hw : undefined;
            resourceInputs["ingressFiltering"] = args ? args.ingressFiltering : undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceBridgePortId"] = args ? args.interfaceBridgePortId : undefined;
            resourceInputs["internalPathCost"] = args ? args.internalPathCost : undefined;
            resourceInputs["learn"] = args ? args.learn : undefined;
            resourceInputs["multicastRouter"] = args ? args.multicastRouter : undefined;
            resourceInputs["mvrpApplicantState"] = args ? args.mvrpApplicantState : undefined;
            resourceInputs["mvrpRegistrarState"] = args ? args.mvrpRegistrarState : undefined;
            resourceInputs["pathCost"] = args ? args.pathCost : undefined;
            resourceInputs["pointToPoint"] = args ? args.pointToPoint : undefined;
            resourceInputs["priority"] = args ? args.priority : undefined;
            resourceInputs["pvid"] = args ? args.pvid : undefined;
            resourceInputs["restrictedRole"] = args ? args.restrictedRole : undefined;
            resourceInputs["restrictedTcn"] = args ? args.restrictedTcn : undefined;
            resourceInputs["tagStacking"] = args ? args.tagStacking : undefined;
            resourceInputs["trusted"] = args ? args.trusted : undefined;
            resourceInputs["unknownMulticastFlood"] = args ? args.unknownMulticastFlood : undefined;
            resourceInputs["unknownUnicastFlood"] = args ? args.unknownUnicastFlood : undefined;
            resourceInputs["designatedBridge"] = undefined /*out*/;
            resourceInputs["designatedCost"] = undefined /*out*/;
            resourceInputs["designatedPortNumber"] = undefined /*out*/;
            resourceInputs["dynamic"] = undefined /*out*/;
            resourceInputs["edgePort"] = undefined /*out*/;
            resourceInputs["edgePortDiscovery"] = undefined /*out*/;
            resourceInputs["externalFdbStatus"] = undefined /*out*/;
            resourceInputs["forwarding"] = undefined /*out*/;
            resourceInputs["hwOffload"] = undefined /*out*/;
            resourceInputs["hwOffloadGroup"] = undefined /*out*/;
            resourceInputs["inactive"] = undefined /*out*/;
            resourceInputs["learning"] = undefined /*out*/;
            resourceInputs["nextid"] = undefined /*out*/;
            resourceInputs["pointToPointPort"] = undefined /*out*/;
            resourceInputs["role"] = undefined /*out*/;
            resourceInputs["rootPathCost"] = undefined /*out*/;
            resourceInputs["sendingRstp"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceBridgePort.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.InterfaceBridgePort = InterfaceBridgePort;
/** @internal */
InterfaceBridgePort.__pulumiType = 'routeros:index/interfaceBridgePort:InterfaceBridgePort';
//# sourceMappingURL=interfaceBridgePort.js.map