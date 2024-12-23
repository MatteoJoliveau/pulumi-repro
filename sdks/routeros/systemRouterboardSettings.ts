// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemRouterboardSettings extends pulumi.CustomResource {
    /**
     * Get an existing SystemRouterboardSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemRouterboardSettingsState, opts?: pulumi.CustomResourceOptions): SystemRouterboardSettings {
        return new SystemRouterboardSettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'routeros:index/systemRouterboardSettings:SystemRouterboardSettings';

    /**
     * Returns true if the given object is an instance of SystemRouterboardSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemRouterboardSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemRouterboardSettings.__pulumiType;
    }

    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___id_!: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    public readonly ___path_!: pulumi.Output<string | undefined>;
    /**
     * An option to enable firmware upgrade automatically after the RouterOS upgrade.
     */
    public readonly autoUpgrade!: pulumi.Output<boolean | undefined>;
    /**
     * An option to choose the onboard RS232 speed in bits per second.
     */
    public readonly baudRate!: pulumi.Output<number | undefined>;
    /**
     * A delay for a keystroke while booting.
     */
    public readonly bootDelay!: pulumi.Output<string | undefined>;
    /**
     * An option to choose the way RouterBOOT loads the operating system. Possible values: `ethernet`, `flash-boot`,
     * `flash-boot-once-then-nand`, `nand-if-fail-then-ethernet`, `nand-only`, `try-ethernet-once-then-nand`.
     */
    public readonly bootDevice!: pulumi.Output<string | undefined>;
    /**
     * An option to choose the booting operating system for CRS3xx series switches. Possible values: `router-os`, `swos`.
     */
    public readonly bootOs!: pulumi.Output<string | undefined>;
    /**
     * Boot protocol to use. Possible values: `bootp`, `dhcp`.
     */
    public readonly bootProtocol!: pulumi.Output<string | undefined>;
    /**
     * An option to change the CPU frequency of the device.
     */
    public readonly cpuFrequency!: pulumi.Output<string | undefined>;
    /**
     * An option whether to enter CPU suspend mode in HTL instruction. Possible values: `power-save`, `regular`.
     */
    public readonly cpuMode!: pulumi.Output<string | undefined>;
    /**
     * An option to enable reset via the onboard jumper.
     */
    public readonly enableJumperReset!: pulumi.Output<boolean | undefined>;
    /**
     * An option to set which key will cause the BIOS to enter configuration mode during boot delay. Possible values:
     * `any-key`, `delete-key`.
     */
    public readonly enterSetupOn!: pulumi.Output<string | undefined>;
    /**
     * An option to use the backup RouterBOOT.
     */
    public readonly forceBackupBooter!: pulumi.Output<boolean | undefined>;
    /**
     * An option to set a delay before the USB port is initialized. Used for mPCIe modems with RB9xx series devices only.
     */
    public readonly initDelay!: pulumi.Output<string | undefined>;
    /**
     * An option to change the memory data rate of the device. Values depend on the model.
     */
    public readonly memoryDataRate!: pulumi.Output<string | undefined>;
    /**
     * An option to change the memory frequency of the device. Values depend on the model.
     */
    public readonly memoryFrequency!: pulumi.Output<string | undefined>;
    /**
     * An option to enable preboot `etherboot`, which runs before the regular boot device.
     */
    public readonly prebootEtherboot!: pulumi.Output<string | undefined>;
    /**
     * An option to instruct `preboot-etherboot` to accept only from the specified Netinstall server.
     */
    public readonly prebootEtherbootServer!: pulumi.Output<string | undefined>;
    /**
     * An option to disable any access to the RouterBOOT configuration settings over a console cable and disables the operation
     * of the reset button to change the boot mode (Netinstall will be disabled). Possible values: `disabled`, `enabled`.
     */
    public readonly protectedRouterboot!: pulumi.Output<string | undefined>;
    /**
     * An option to enable resetting everything by pressing the button at power-on for longer than the specified time but less
     * than `reformat_hold_button_max.`
     */
    public readonly reformatHoldButton!: pulumi.Output<string | undefined>;
    /**
     * See `reformat_hold_button`.
     */
    public readonly reformatHoldButtonMax!: pulumi.Output<string | undefined>;
    /**
     * An option to enable extra-low TX power for high antenna gain devices.
     */
    public readonly regulatoryDomainCe!: pulumi.Output<boolean | undefined>;
    /**
     * An option to turn off output on the serial console and beeping sounds during booting.
     */
    public readonly silentBoot!: pulumi.Output<boolean | undefined>;
    public readonly systemRouterboardSettingsId!: pulumi.Output<string>;

    /**
     * Create a SystemRouterboardSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemRouterboardSettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemRouterboardSettingsArgs | SystemRouterboardSettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemRouterboardSettingsState | undefined;
            resourceInputs["___id_"] = state ? state.___id_ : undefined;
            resourceInputs["___path_"] = state ? state.___path_ : undefined;
            resourceInputs["autoUpgrade"] = state ? state.autoUpgrade : undefined;
            resourceInputs["baudRate"] = state ? state.baudRate : undefined;
            resourceInputs["bootDelay"] = state ? state.bootDelay : undefined;
            resourceInputs["bootDevice"] = state ? state.bootDevice : undefined;
            resourceInputs["bootOs"] = state ? state.bootOs : undefined;
            resourceInputs["bootProtocol"] = state ? state.bootProtocol : undefined;
            resourceInputs["cpuFrequency"] = state ? state.cpuFrequency : undefined;
            resourceInputs["cpuMode"] = state ? state.cpuMode : undefined;
            resourceInputs["enableJumperReset"] = state ? state.enableJumperReset : undefined;
            resourceInputs["enterSetupOn"] = state ? state.enterSetupOn : undefined;
            resourceInputs["forceBackupBooter"] = state ? state.forceBackupBooter : undefined;
            resourceInputs["initDelay"] = state ? state.initDelay : undefined;
            resourceInputs["memoryDataRate"] = state ? state.memoryDataRate : undefined;
            resourceInputs["memoryFrequency"] = state ? state.memoryFrequency : undefined;
            resourceInputs["prebootEtherboot"] = state ? state.prebootEtherboot : undefined;
            resourceInputs["prebootEtherbootServer"] = state ? state.prebootEtherbootServer : undefined;
            resourceInputs["protectedRouterboot"] = state ? state.protectedRouterboot : undefined;
            resourceInputs["reformatHoldButton"] = state ? state.reformatHoldButton : undefined;
            resourceInputs["reformatHoldButtonMax"] = state ? state.reformatHoldButtonMax : undefined;
            resourceInputs["regulatoryDomainCe"] = state ? state.regulatoryDomainCe : undefined;
            resourceInputs["silentBoot"] = state ? state.silentBoot : undefined;
            resourceInputs["systemRouterboardSettingsId"] = state ? state.systemRouterboardSettingsId : undefined;
        } else {
            const args = argsOrState as SystemRouterboardSettingsArgs | undefined;
            resourceInputs["___id_"] = args ? args.___id_ : undefined;
            resourceInputs["___path_"] = args ? args.___path_ : undefined;
            resourceInputs["autoUpgrade"] = args ? args.autoUpgrade : undefined;
            resourceInputs["baudRate"] = args ? args.baudRate : undefined;
            resourceInputs["bootDelay"] = args ? args.bootDelay : undefined;
            resourceInputs["bootDevice"] = args ? args.bootDevice : undefined;
            resourceInputs["bootOs"] = args ? args.bootOs : undefined;
            resourceInputs["bootProtocol"] = args ? args.bootProtocol : undefined;
            resourceInputs["cpuFrequency"] = args ? args.cpuFrequency : undefined;
            resourceInputs["cpuMode"] = args ? args.cpuMode : undefined;
            resourceInputs["enableJumperReset"] = args ? args.enableJumperReset : undefined;
            resourceInputs["enterSetupOn"] = args ? args.enterSetupOn : undefined;
            resourceInputs["forceBackupBooter"] = args ? args.forceBackupBooter : undefined;
            resourceInputs["initDelay"] = args ? args.initDelay : undefined;
            resourceInputs["memoryDataRate"] = args ? args.memoryDataRate : undefined;
            resourceInputs["memoryFrequency"] = args ? args.memoryFrequency : undefined;
            resourceInputs["prebootEtherboot"] = args ? args.prebootEtherboot : undefined;
            resourceInputs["prebootEtherbootServer"] = args ? args.prebootEtherbootServer : undefined;
            resourceInputs["protectedRouterboot"] = args ? args.protectedRouterboot : undefined;
            resourceInputs["reformatHoldButton"] = args ? args.reformatHoldButton : undefined;
            resourceInputs["reformatHoldButtonMax"] = args ? args.reformatHoldButtonMax : undefined;
            resourceInputs["regulatoryDomainCe"] = args ? args.regulatoryDomainCe : undefined;
            resourceInputs["silentBoot"] = args ? args.silentBoot : undefined;
            resourceInputs["systemRouterboardSettingsId"] = args ? args.systemRouterboardSettingsId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemRouterboardSettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemRouterboardSettings resources.
 */
export interface SystemRouterboardSettingsState {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to enable firmware upgrade automatically after the RouterOS upgrade.
     */
    autoUpgrade?: pulumi.Input<boolean>;
    /**
     * An option to choose the onboard RS232 speed in bits per second.
     */
    baudRate?: pulumi.Input<number>;
    /**
     * A delay for a keystroke while booting.
     */
    bootDelay?: pulumi.Input<string>;
    /**
     * An option to choose the way RouterBOOT loads the operating system. Possible values: `ethernet`, `flash-boot`,
     * `flash-boot-once-then-nand`, `nand-if-fail-then-ethernet`, `nand-only`, `try-ethernet-once-then-nand`.
     */
    bootDevice?: pulumi.Input<string>;
    /**
     * An option to choose the booting operating system for CRS3xx series switches. Possible values: `router-os`, `swos`.
     */
    bootOs?: pulumi.Input<string>;
    /**
     * Boot protocol to use. Possible values: `bootp`, `dhcp`.
     */
    bootProtocol?: pulumi.Input<string>;
    /**
     * An option to change the CPU frequency of the device.
     */
    cpuFrequency?: pulumi.Input<string>;
    /**
     * An option whether to enter CPU suspend mode in HTL instruction. Possible values: `power-save`, `regular`.
     */
    cpuMode?: pulumi.Input<string>;
    /**
     * An option to enable reset via the onboard jumper.
     */
    enableJumperReset?: pulumi.Input<boolean>;
    /**
     * An option to set which key will cause the BIOS to enter configuration mode during boot delay. Possible values:
     * `any-key`, `delete-key`.
     */
    enterSetupOn?: pulumi.Input<string>;
    /**
     * An option to use the backup RouterBOOT.
     */
    forceBackupBooter?: pulumi.Input<boolean>;
    /**
     * An option to set a delay before the USB port is initialized. Used for mPCIe modems with RB9xx series devices only.
     */
    initDelay?: pulumi.Input<string>;
    /**
     * An option to change the memory data rate of the device. Values depend on the model.
     */
    memoryDataRate?: pulumi.Input<string>;
    /**
     * An option to change the memory frequency of the device. Values depend on the model.
     */
    memoryFrequency?: pulumi.Input<string>;
    /**
     * An option to enable preboot `etherboot`, which runs before the regular boot device.
     */
    prebootEtherboot?: pulumi.Input<string>;
    /**
     * An option to instruct `preboot-etherboot` to accept only from the specified Netinstall server.
     */
    prebootEtherbootServer?: pulumi.Input<string>;
    /**
     * An option to disable any access to the RouterBOOT configuration settings over a console cable and disables the operation
     * of the reset button to change the boot mode (Netinstall will be disabled). Possible values: `disabled`, `enabled`.
     */
    protectedRouterboot?: pulumi.Input<string>;
    /**
     * An option to enable resetting everything by pressing the button at power-on for longer than the specified time but less
     * than `reformat_hold_button_max.`
     */
    reformatHoldButton?: pulumi.Input<string>;
    /**
     * See `reformat_hold_button`.
     */
    reformatHoldButtonMax?: pulumi.Input<string>;
    /**
     * An option to enable extra-low TX power for high antenna gain devices.
     */
    regulatoryDomainCe?: pulumi.Input<boolean>;
    /**
     * An option to turn off output on the serial console and beeping sounds during booting.
     */
    silentBoot?: pulumi.Input<boolean>;
    systemRouterboardSettingsId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemRouterboardSettings resource.
 */
export interface SystemRouterboardSettingsArgs {
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    ___id_?: pulumi.Input<number>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    ___path_?: pulumi.Input<string>;
    /**
     * An option to enable firmware upgrade automatically after the RouterOS upgrade.
     */
    autoUpgrade?: pulumi.Input<boolean>;
    /**
     * An option to choose the onboard RS232 speed in bits per second.
     */
    baudRate?: pulumi.Input<number>;
    /**
     * A delay for a keystroke while booting.
     */
    bootDelay?: pulumi.Input<string>;
    /**
     * An option to choose the way RouterBOOT loads the operating system. Possible values: `ethernet`, `flash-boot`,
     * `flash-boot-once-then-nand`, `nand-if-fail-then-ethernet`, `nand-only`, `try-ethernet-once-then-nand`.
     */
    bootDevice?: pulumi.Input<string>;
    /**
     * An option to choose the booting operating system for CRS3xx series switches. Possible values: `router-os`, `swos`.
     */
    bootOs?: pulumi.Input<string>;
    /**
     * Boot protocol to use. Possible values: `bootp`, `dhcp`.
     */
    bootProtocol?: pulumi.Input<string>;
    /**
     * An option to change the CPU frequency of the device.
     */
    cpuFrequency?: pulumi.Input<string>;
    /**
     * An option whether to enter CPU suspend mode in HTL instruction. Possible values: `power-save`, `regular`.
     */
    cpuMode?: pulumi.Input<string>;
    /**
     * An option to enable reset via the onboard jumper.
     */
    enableJumperReset?: pulumi.Input<boolean>;
    /**
     * An option to set which key will cause the BIOS to enter configuration mode during boot delay. Possible values:
     * `any-key`, `delete-key`.
     */
    enterSetupOn?: pulumi.Input<string>;
    /**
     * An option to use the backup RouterBOOT.
     */
    forceBackupBooter?: pulumi.Input<boolean>;
    /**
     * An option to set a delay before the USB port is initialized. Used for mPCIe modems with RB9xx series devices only.
     */
    initDelay?: pulumi.Input<string>;
    /**
     * An option to change the memory data rate of the device. Values depend on the model.
     */
    memoryDataRate?: pulumi.Input<string>;
    /**
     * An option to change the memory frequency of the device. Values depend on the model.
     */
    memoryFrequency?: pulumi.Input<string>;
    /**
     * An option to enable preboot `etherboot`, which runs before the regular boot device.
     */
    prebootEtherboot?: pulumi.Input<string>;
    /**
     * An option to instruct `preboot-etherboot` to accept only from the specified Netinstall server.
     */
    prebootEtherbootServer?: pulumi.Input<string>;
    /**
     * An option to disable any access to the RouterBOOT configuration settings over a console cable and disables the operation
     * of the reset button to change the boot mode (Netinstall will be disabled). Possible values: `disabled`, `enabled`.
     */
    protectedRouterboot?: pulumi.Input<string>;
    /**
     * An option to enable resetting everything by pressing the button at power-on for longer than the specified time but less
     * than `reformat_hold_button_max.`
     */
    reformatHoldButton?: pulumi.Input<string>;
    /**
     * See `reformat_hold_button`.
     */
    reformatHoldButtonMax?: pulumi.Input<string>;
    /**
     * An option to enable extra-low TX power for high antenna gain devices.
     */
    regulatoryDomainCe?: pulumi.Input<boolean>;
    /**
     * An option to turn off output on the serial console and beeping sounds during booting.
     */
    silentBoot?: pulumi.Input<boolean>;
    systemRouterboardSettingsId?: pulumi.Input<string>;
}
