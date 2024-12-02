import * as pulumi from "@pulumi/pulumi";
export declare class SystemRouterboardSettings extends pulumi.CustomResource {
    /**
     * Get an existing SystemRouterboardSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemRouterboardSettingsState, opts?: pulumi.CustomResourceOptions): SystemRouterboardSettings;
    /**
     * Returns true if the given object is an instance of SystemRouterboardSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SystemRouterboardSettings;
    /**
     * <em>Resource ID type (.id / name). This is an internal service field, setting a value is not required.</em>
     */
    readonly ___id_: pulumi.Output<number | undefined>;
    /**
     * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
     */
    readonly ___path_: pulumi.Output<string | undefined>;
    /**
     * An option to enable firmware upgrade automatically after the RouterOS upgrade.
     */
    readonly autoUpgrade: pulumi.Output<boolean | undefined>;
    /**
     * An option to choose the onboard RS232 speed in bits per second.
     */
    readonly baudRate: pulumi.Output<number | undefined>;
    /**
     * A delay for a keystroke while booting.
     */
    readonly bootDelay: pulumi.Output<string | undefined>;
    /**
     * An option to choose the way RouterBOOT loads the operating system. Possible values: `ethernet`, `flash-boot`,
     * `flash-boot-once-then-nand`, `nand-if-fail-then-ethernet`, `nand-only`, `try-ethernet-once-then-nand`.
     */
    readonly bootDevice: pulumi.Output<string | undefined>;
    /**
     * An option to choose the booting operating system for CRS3xx series switches. Possible values: `router-os`, `swos`.
     */
    readonly bootOs: pulumi.Output<string | undefined>;
    /**
     * Boot protocol to use. Possible values: `bootp`, `dhcp`.
     */
    readonly bootProtocol: pulumi.Output<string | undefined>;
    /**
     * An option to change the CPU frequency of the device.
     */
    readonly cpuFrequency: pulumi.Output<string | undefined>;
    /**
     * An option whether to enter CPU suspend mode in HTL instruction. Possible values: `power-save`, `regular`.
     */
    readonly cpuMode: pulumi.Output<string | undefined>;
    /**
     * An option to enable reset via the onboard jumper.
     */
    readonly enableJumperReset: pulumi.Output<boolean | undefined>;
    /**
     * An option to set which key will cause the BIOS to enter configuration mode during boot delay. Possible values:
     * `any-key`, `delete-key`.
     */
    readonly enterSetupOn: pulumi.Output<string | undefined>;
    /**
     * An option to use the backup RouterBOOT.
     */
    readonly forceBackupBooter: pulumi.Output<boolean | undefined>;
    /**
     * An option to set a delay before the USB port is initialized. Used for mPCIe modems with RB9xx series devices only.
     */
    readonly initDelay: pulumi.Output<string | undefined>;
    /**
     * An option to change the memory data rate of the device. Values depend on the model.
     */
    readonly memoryDataRate: pulumi.Output<string | undefined>;
    /**
     * An option to change the memory frequency of the device. Values depend on the model.
     */
    readonly memoryFrequency: pulumi.Output<string | undefined>;
    /**
     * An option to enable preboot `etherboot`, which runs before the regular boot device.
     */
    readonly prebootEtherboot: pulumi.Output<string | undefined>;
    /**
     * An option to instruct `preboot-etherboot` to accept only from the specified Netinstall server.
     */
    readonly prebootEtherbootServer: pulumi.Output<string | undefined>;
    /**
     * An option to disable any access to the RouterBOOT configuration settings over a console cable and disables the operation
     * of the reset button to change the boot mode (Netinstall will be disabled). Possible values: `disabled`, `enabled`.
     */
    readonly protectedRouterboot: pulumi.Output<string | undefined>;
    /**
     * An option to enable resetting everything by pressing the button at power-on for longer than the specified time but less
     * than `reformat_hold_button_max.`
     */
    readonly reformatHoldButton: pulumi.Output<string | undefined>;
    /**
     * See `reformat_hold_button`.
     */
    readonly reformatHoldButtonMax: pulumi.Output<string | undefined>;
    /**
     * An option to enable extra-low TX power for high antenna gain devices.
     */
    readonly regulatoryDomainCe: pulumi.Output<boolean | undefined>;
    /**
     * An option to turn off output on the serial console and beeping sounds during booting.
     */
    readonly silentBoot: pulumi.Output<boolean | undefined>;
    readonly systemRouterboardSettingsId: pulumi.Output<string>;
    /**
     * Create a SystemRouterboardSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemRouterboardSettingsArgs, opts?: pulumi.CustomResourceOptions);
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
