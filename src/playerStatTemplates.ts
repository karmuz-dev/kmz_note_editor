import type { PlayerStatKind, UserInfoBarVisibility } from "./types";
import type { DiceMode } from "./dice";

export interface PlayerStatTemplateStat {
    key: string;
    label: string;
    kind: PlayerStatKind;
    value: number;
    maxValue?: number;
    color?: string;
    showTo?: UserInfoBarVisibility;
    isReversed?: boolean;
    rollName?: string;
    rollKey?: string;
    rollConfigId?: string;
    rollModifierStatKey?: string;
    rollDiceStatKey?: string;
    rollDiceOperation?: "" | "add" | "multiply";
    rollMode?: "" | "set-value";
    rollTargetStatKey?: string;
    rollOwnerId?: string;
    rollBaseDiceCount?: number;
    rollResultMode?: "" | "sum" | "max" | "min";
    rollFormula?: string;
    rollVisibility?: "global" | "private";
}

export interface PlayerStatTemplate {
    id: string;
    name: string;
    stats: PlayerStatTemplateStat[];
    requiredKeys?: string[];
    diceConfigs?: PlayerStatTemplateDiceConfig[];
}

export interface PlayerStatTemplateDiceConfig {
    configId: string;
    name: string;
    diceType: string;
    diceCount: number;
    mode: DiceMode;
    visibility?: "global" | "private";
}

export interface DndSkillDefinition {
    key: string;
    label: string;
    ability: DndAbilityKey;
}

export type DndAbilityKey = "str" | "dex" | "con" | "int" | "wis" | "cha";

export interface DndAbilityDefinition {
    key: DndAbilityKey;
    label: string;
    shortLabel: string;
    skills: DndSkillDefinition[];
}

export interface RbrbSkillDefinition {
    key: string;
    label: string;
    group: string;
}

export const DND_ABILITIES: DndAbilityDefinition[] = [
    {
        key: "str",
        label: "Strength",
        shortLabel: "STR",
        skills: [{ key: "athletics", label: "Athletics", ability: "str" }],
    },
    {
        key: "dex",
        label: "Dexterity",
        shortLabel: "DEX",
        skills: [
            { key: "acrobatics", label: "Acrobatics", ability: "dex" },
            { key: "sleight-of-hand", label: "Sleight of Hand", ability: "dex" },
            { key: "stealth", label: "Stealth", ability: "dex" },
        ],
    },
    {
        key: "con",
        label: "Constitution",
        shortLabel: "CON",
        skills: [],
    },
    {
        key: "int",
        label: "Intelligence",
        shortLabel: "INT",
        skills: [
            { key: "arcana", label: "Arcana", ability: "int" },
            { key: "history", label: "History", ability: "int" },
            { key: "investigation", label: "Investigation", ability: "int" },
            { key: "nature", label: "Nature", ability: "int" },
            { key: "religion", label: "Religion", ability: "int" },
        ],
    },
    {
        key: "wis",
        label: "Wisdom",
        shortLabel: "WIS",
        skills: [
            { key: "animal-handling", label: "Animal Handling", ability: "wis" },
            { key: "insight", label: "Insight", ability: "wis" },
            { key: "medicine", label: "Medicine", ability: "wis" },
            { key: "perception", label: "Perception", ability: "wis" },
            { key: "survival", label: "Survival", ability: "wis" },
        ],
    },
    {
        key: "cha",
        label: "Charisma",
        shortLabel: "CHA",
        skills: [
            { key: "deception", label: "Deception", ability: "cha" },
            { key: "intimidation", label: "Intimidation", ability: "cha" },
            { key: "performance", label: "Performance", ability: "cha" },
            { key: "persuasion", label: "Persuasion", ability: "cha" },
        ],
    },
];

const CORE_DND_STATS: PlayerStatTemplateStat[] = [
    { key: "level", label: "Level", kind: "value", value: 1, showTo: "all" },
    { key: "xp", label: "XP", kind: "value", value: 0, showTo: "all" },
    {
        key: "hp",
        label: "HP",
        kind: "bar",
        value: 10,
        maxValue: 10,
        showTo: "roomMaster",
    },
    {
        key: "temporary-hp",
        label: "Temporary HP",
        kind: "value",
        value: 0,
        showTo: "roomMaster",
    },
    {
        key: "armor-class",
        label: "Armor Class",
        kind: "value",
        value: 10,
        showTo: "roomMaster",
    },
    {
        key: "initiative",
        label: "Initiative",
        kind: "value",
        value: 0,
        showTo: "roomMaster",
        rollName: "Initiative",
        rollKey: "initiative-roll",
        rollConfigId: "template:dnd:base-d20",
        rollModifierStatKey: "initiative",
        rollMode: "set-value",
        rollTargetStatKey: "initiative",
    },
    {
        key: "speed",
        label: "Speed",
        kind: "value",
        value: 30,
        showTo: "roomMaster",
    },
    {
        key: "proficiency-bonus",
        label: "Proficiency Bonus",
        kind: "value",
        value: 2,
        showTo: "private",
    },
];

const DND_ABILITY_STATS: PlayerStatTemplateStat[] = DND_ABILITIES.flatMap(
    (ability) => [
        {
            key: `${ability.key}-score`,
            label: `${ability.label} Score`,
            kind: "value",
            value: 10,
        },
        {
            key: `${ability.key}-mod`,
            label: `${ability.label} Modifier`,
            kind: "value",
            value: 0,
        },
        {
            key: `${ability.key}-saving-throw-check`,
            label: `${ability.label} Saving Throw Proficiency`,
            kind: "value",
            value: 0,
        },
        {
            key: `${ability.key}-saving-throw-mod`,
            label: `${ability.label} Saving Throw`,
            kind: "value",
            value: 0,
            rollName: `${ability.label} Saving Throw`,
            rollKey: `${ability.key}-saving-throw-roll`,
            rollConfigId: "template:dnd:base-d20",
            rollModifierStatKey: `${ability.key}-saving-throw-mod`,
        },
        ...ability.skills.flatMap((skill) => [
            {
                key: `${skill.key}-check`,
                label: `${skill.label} Proficiency`,
                kind: "value" as const,
                value: 0,
            },
            {
                key: `${skill.key}-mod`,
                label: skill.label,
                kind: "value" as const,
                value: 0,
                rollName: skill.label,
                rollKey: `${skill.key}-roll`,
                rollConfigId: "template:dnd:base-d20",
                rollModifierStatKey: `${skill.key}-mod`,
            },
        ]),
    ],
);

const RBRB_CORE_STATS: PlayerStatTemplateStat[] = [
    {
        key: "level",
        label: "Level",
        kind: "value",
        value: 1,
        showTo: "all",
    },
    {
        key: "xp",
        label: "XP",
        kind: "value",
        value: 0,
        showTo: "all",
    },
    {
        key: "killing-aura",
        label: "Killing Aura",
        kind: "value",
        value: 1,
        showTo: "roomMaster",
    },
    {
        key: "drinking-limit",
        label: "Drinking Limit",
        kind: "value",
        value: 1,
        showTo: "roomMaster",
    },
    {
        key: "killing-aura-darkness",
        label: "Killing Aura Darkness",
        kind: "value",
        value: 0,
        showTo: "roomMaster",
    },
    {
        key: "hp",
        label: "Wounds",
        kind: "bar",
        value: 0,
        maxValue: 3,
        color: "#d05a4f",
        showTo: "roomMaster",
        isReversed: true,
    },
    {
        key: "resist",
        label: "Resist",
        kind: "value",
        value: 0,
        showTo: "roomMaster",
    },
];

export const RBRB_SKILL_GROUPS: Array<{
    title: string;
    stats: RbrbSkillDefinition[];
}> = [
    {
        title: "Martial Arts",
        stats: [
            { key: "external-arts", label: "External Arts", group: "Martial Arts" },
            { key: "internal-arts", label: "Internal Arts", group: "Martial Arts" },
            { key: "lightness-arts", label: "Lightness Arts", group: "Martial Arts" },
        ],
    },
    {
        title: "Specialist Skills",
        stats: [
            { key: "medicine-alchemy", label: "Medicine & Alchemy", group: "Specialist Skills" },
            { key: "meditation", label: "Meditation", group: "Specialist Skills" },
            { key: "survival", label: "Survival", group: "Specialist Skills" },
            { key: "talent", label: "Talent", group: "Specialist Skills" },
            { key: "trade", label: "Trade", group: "Specialist Skills" },
        ],
    },
    {
        title: "Unorthodox Skills",
        stats: [
            { key: "disguise", label: "Disguise", group: "Unorthodox Skills" },
            { key: "drinking", label: "Drinking", group: "Unorthodox Skills" },
            { key: "gambling", label: "Gambling", group: "Unorthodox Skills" },
            { key: "magical-arts", label: "Magical Arts", group: "Unorthodox Skills" },
            { key: "theft", label: "Theft", group: "Unorthodox Skills" },
        ],
    },
    {
        title: "Mental Skills",
        stats: [
            { key: "command", label: "Command", group: "Mental Skills" },
            { key: "detect", label: "Detect", group: "Mental Skills" },
            { key: "empathy", label: "Empathy", group: "Mental Skills" },
            { key: "persuade", label: "Persuade", group: "Mental Skills" },
            { key: "reasoning", label: "Reasoning", group: "Mental Skills" },
        ],
    },
    {
        title: "Physical Skills",
        stats: [
            { key: "athletics", label: "Athletics", group: "Physical Skills" },
            { key: "endurance", label: "Endurance", group: "Physical Skills" },
            { key: "muscle", label: "Muscle", group: "Physical Skills" },
            { key: "ride", label: "Ride", group: "Physical Skills" },
            { key: "speed", label: "Speed", group: "Physical Skills" },
        ],
    },
    {
        title: "Knowledge Skills",
        stats: [
            { key: "institutions", label: "Institutions", group: "Knowledge Skills" },
            { key: "jianghu", label: "Jianghu", group: "Knowledge Skills" },
            { key: "people-places", label: "People and Places", group: "Knowledge Skills" },
            { key: "religion", label: "Religion", group: "Knowledge Skills" },
            { key: "scholarly-arts", label: "Scholarly Arts", group: "Knowledge Skills" },
        ],
    },
];

export const RBRB_DEFENCES: RbrbSkillDefinition[] = [
    { key: "evade", label: "Evade", group: "Defences" },
    { key: "hardiness", label: "Hardiness", group: "Defences" },
    { key: "wits", label: "Wits", group: "Defences" },
];

const RBRB_SKILL_STATS: PlayerStatTemplateStat[] = RBRB_SKILL_GROUPS.flatMap(
    (group) =>
        group.stats.map((skill) => ({
            key: skill.key,
            label: skill.label,
            kind: "value" as const,
            value: 0,
            showTo: "private" as const,
            rollName: skill.label,
            rollKey: `${skill.key}-roll`,
            rollConfigId: "template:rbrb:base-d10",
            rollDiceStatKey: skill.key,
            rollDiceOperation: "multiply" as const,
            rollBaseDiceCount: 1,
            rollResultMode: "max" as const,
        })),
);

const RBRB_DEFENCE_STATS: PlayerStatTemplateStat[] = RBRB_DEFENCES.map(
    (defence) => ({
        key: defence.key,
        label: defence.label,
        kind: "value",
        value: 5,
        showTo: "roomMaster",
    }),
);

export const PLAYER_STAT_TEMPLATES: PlayerStatTemplate[] = [
    {
        id: "dnd",
        name: "D&D",
        diceConfigs: [
            {
                configId: "template:dnd:base-d20",
                name: "D&D Base Check",
                diceType: "d20",
                diceCount: 1,
                mode: "sum",
                visibility: "global",
            },
        ],
        stats: [...CORE_DND_STATS, ...DND_ABILITY_STATS],
    },
    {
        id: "rbrb",
        name: "Righteous Blood, Ruthless Blades",
        requiredKeys: ["level", "hp", "external-arts", "hardiness"],
        diceConfigs: [
            {
                configId: "template:rbrb:base-d10",
                name: "RBRB Base Skill",
                diceType: "d10",
                diceCount: 1,
                mode: "max",
                visibility: "global",
            },
        ],
        stats: [
            ...RBRB_CORE_STATS,
            ...RBRB_SKILL_STATS,
            ...RBRB_DEFENCE_STATS,
        ],
    },
];

export function getPlayerStatTemplate(
    templateId: string,
): PlayerStatTemplate | null {
    return (
        PLAYER_STAT_TEMPLATES.find((template) => template.id === templateId) ||
        null
    );
}
