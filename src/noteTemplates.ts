import {
    DND_ABILITIES,
    RBRB_DEFENCES,
    RBRB_SKILL_GROUPS,
} from "./playerStatTemplates";

export interface NoteTemplate {
    id: string;
    name: string;
    content: string;
    isCustom?: boolean;
    ownerId?: string;
    linked_stats?: string;
}

function statTag({
    key,
    label,
    field = "value",
    value = "0",
    reversed = false,
    attrs = "",
}: {
    key: string;
    label: string;
    field?: "value" | "maxValue" | "checkbox" | "checks";
    value?: string;
    reversed?: boolean;
    attrs?: string;
}) {
    const attrText = [
        reversed ? 'data-reversed="true"' : "",
        attrs.trim(),
    ]
        .filter(Boolean)
        .join(" ");
    const extraAttrs = attrText ? ` ${attrText}` : "";
    return `<stat data-key="${key}" data-label="${label}" data-field="${field}"${extraAttrs}>${value}</stat>`;
}

function dndModifierAttrs(proficiencyKey?: string) {
    return proficiencyKey
        ? `data-modifier-key="${proficiencyKey}" data-modifier-stat-key="proficiency-bonus"`
        : "";
}

function rollKeyAttr(rollKey: string) {
    return `data-roll-key="${rollKey}"`;
}

function buildDndAbilitySections() {
    return DND_ABILITIES.map((ability) => {
        const savingThrowCheckKey = `${ability.key}-saving-throw-check`;
        const savingThrowLabel = `${ability.label} Saving Throw`;
        const skillLines = ability.skills
            .map((skill) => {
                const checkKey = `${skill.key}-check`;
                return `- **${skill.label}** ${statTag({
                    key: checkKey,
                    label: `${skill.label} Proficiency`,
                    field: "checkbox",
                    value: "☐",
                })} : ${statTag({
                    key: `${skill.key}-mod`,
                    label: skill.label,
                    attrs: `${dndModifierAttrs(checkKey)} ${rollKeyAttr(`${skill.key}-roll`)}`,
                })}`;
            })
            .join("\n");

        return `## ${ability.label} (${ability.shortLabel})
- **Score:** ${statTag({
            key: `${ability.key}-score`,
            label: `${ability.label} Score`,
            value: "10",
        })}
- **Modifier:** ${statTag({
            key: `${ability.key}-mod`,
            label: `${ability.label} Modifier`,
        })}
- **Saving Throw** ${statTag({
            key: savingThrowCheckKey,
            label: `${ability.label} Saving Throw Proficiency`,
            field: "checkbox",
            value: "☐",
        })} : ${statTag({
            key: `${ability.key}-saving-throw-mod`,
            label: savingThrowLabel,
            attrs: `${dndModifierAttrs(savingThrowCheckKey)} ${rollKeyAttr(`${ability.key}-saving-throw-roll`)}`,
        })}${skillLines ? `\n${skillLines}` : ""}`;
    }).join("\n\n---\n\n");
}

function plainTable(rows: string[][]) {
    return `<table data-display="plain"><tbody>${rows
        .map(
            (row) =>
                `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`,
        )
        .join("")}</tbody></table>`;
}

function buildRbrbSkillSections() {
    const skillCell = (
        stat:
            | (typeof RBRB_SKILL_GROUPS)[number]["stats"][number]
            | undefined,
        checkCount: number,
    ) => {
        if (!stat) return ["", ""];
        return [
            stat.label,
            statTag({
                key: stat.key,
                label: stat.label,
                field: "checks",
                value: "0",
                attrs: `data-check-count="${checkCount}" ${rollKeyAttr(`${stat.key}-roll`)}`,
            }),
        ];
    };
    const groupPairs: Array<[number, number]> = [
        [0, 3],
        [1, 4],
        [2, 5],
    ];

    return groupPairs
        .map(([leftIndex, rightIndex]) => {
            const left = RBRB_SKILL_GROUPS[leftIndex];
            const right = RBRB_SKILL_GROUPS[rightIndex];
            if (!left || !right) return "";
            const rowCount = Math.max(
                left.stats.length || 0,
                right.stats.length || 0,
            );
            const rows = Array.from({ length: rowCount }, (_, index) => {
                const [leftLabel, leftCheck] = skillCell(
                    left.stats[index],
                    3,
                );
                const [rightLabel, rightCheck] = skillCell(
                    right.stats[index],
                    3,
                );
                return `| ${leftLabel} | ${leftCheck} | ${rightLabel} | ${rightCheck} |`;
            }).join("\n");

            return `| ${left.title} |  | ${right.title} |  |
|-------|-------|-------|-------|
${rows}`;
        })
        .join("\n\n");
}

function buildRbrbSectionRows(sections: string[]) {
    return sections.map((section) => `| ${section} | |`).join("\n");
}

function buildRbrbNameNoteTable(sections: string[]) {
    return sections
        .map(
            (section) => `## ${section}
| Name | Notes |
|------|-------|
|      |       |
|      |       |
|      |       |`,
        )
        .join("\n\n---\n\n");
}

function buildRbrbItemNoteTable(sections: string[]) {
    return `| Items | Note |
|-------|------|
${buildRbrbSectionRows(sections)}`;
}

function buildRbrbStoryTable() {
    return buildRbrbItemNoteTable([
        "Eccentricities",
        "Fire Deviation Eccentricities",
        "Injuries",
        "Blocked Acupoints",
        "Grudges",
        "Notes",
    ]);
}

function buildRbrbWeaponTable() {
    return `## Weapons
| Weapon | Damage / Dice | Notes |
|--------|---------------|-------|
|        |               |       |
|        |               |       |
|        |               |       |`;
}

function buildRbrbResourceTable() {
    return buildRbrbItemNoteTable([
        "Equipment",
        "Social Resources",
        "Wealth and Property",
    ]);
}

function buildRbrbMartialSections() {
    return `${buildRbrbNameNoteTable(["Signature Abilities", "Counters"])}

---

${buildRbrbWeaponTable()}`;
}

function buildRbrbPlainFieldTable() {
    return plainTable([
        [
            "Level",
            statTag({ key: "level", label: "Level", value: "1" }),
            "XP",
            statTag({ key: "xp", label: "XP" }),
        ],
        [
            "Killing Aura",
            statTag({
                key: "killing-aura",
                label: "Killing Aura",
                value: "1",
            }),
            "Max Wounds",
            statTag({
                key: "hp",
                label: "Wounds",
                field: "maxValue",
                value: "3",
                reversed: true,
            }),
        ],
        [
            "Drinking Limit",
            statTag({
                key: "drinking-limit",
                label: "Drinking Limit",
                value: "1",
            }),
            "Current Wounds",
            statTag({
                key: "hp",
                label: "Wounds",
                reversed: true,
            }),
        ],
        [
            "Killing Aura Darkness",
            statTag({
                key: "killing-aura-darkness",
                label: "Killing Aura Darkness",
            }),
            "Resist",
            statTag({ key: "resist", label: "Resist" }),
        ],
    ]);
}

function buildRbrbDefenceTable() {
    return plainTable(
        RBRB_DEFENCES.map((defence) => [
            defence.label,
            statTag({
                key: defence.key,
                label: defence.label,
                field: "checks",
                value: "5",
                attrs: 'data-check-count="10"',
            }),
        ]),
    );
}

export const BUILTIN_TEMPLATES: NoteTemplate[] = [
    {
        id: "blank",
        name: "Blank Note",
        content: "",
    },
    {
        id: "dnd-2024-character-sheet",
        name: "D&D 2024 Character Sheet",
        linked_stats: "dnd",
        content: `<!-- @TAB: Character -->
# Character Name

## Identity
- **Class:**
- **Subclass:**
- **Level:** ${statTag({ key: "level", label: "Level", value: "1" })}
- **Species:**
- **Background:**
- **Alignment:**
- **XP:** ${statTag({ key: "xp", label: "XP" })}

---

## Core Stats

### Combat Overview
- **Armor Class (AC):** ${statTag({ key: "armor-class", label: "Armor Class", value: "10" })}
- **Initiative:** ${statTag({ key: "initiative", label: "Initiative", attrs: rollKeyAttr("initiative-roll") })}
- **Speed:** ${statTag({ key: "speed", label: "Speed", value: "30" })}
- **Size:**
- **Passive Perception:**
- **Proficiency Bonus:** ${statTag({ key: "proficiency-bonus", label: "Proficiency Bonus", value: "2" })}
- **Heroic Inspiration:**

### Hit Points
- **Current HP:** ${statTag({ key: "hp", label: "HP", value: "10" })}
- **Max HP:** ${statTag({ key: "hp", label: "HP", field: "maxValue", value: "10" })}
- **Temporary HP:** ${statTag({ key: "temporary-hp", label: "Temporary HP" })}

### Hit Dice
- **Total:**
- **Spent:**

### Death Saves
Success     : ☐ ☐ ☐
Failure     : ☐ ☐ ☐

---

# Abilities

${buildDndAbilitySections()}

---  

<!-- @TAB: Combat -->
## Weapons & Damage Cantrips
| Name | Atk Bonus / DC | Damage & Type | Notes |
|------|----------------|---------------|-------|
|      |                |               |       |
|      |                |               |       |
|      |                |               |       |
|      |                |               |       |
|      |                |               |       |
|      |                |               |       |

---

## Equipment Training & Proficiencies
- **Armor Training:**
    - ☐ Light 
    - ☐ Medium 
    - ☐ Heavy 
    - ☐ Shields
- **Weapons:**
- **Tools:**
- **Languages:**


## Actions in Combat

### Actions
-

### Bonus Actions
-

### Reactions
-

---

## Features

### Class Features
-

### Species Traits
-

### Feats
-

<!-- @TAB: Spells -->
## Spellcasting

### Spellcasting Info
- **Spellcasting Ability:**
- **Spellcasting Modifier:**
- **Spell Save DC:**
- **Spell Attack Bonus:**

---

## Cantrips & Prepared Spells
| Name | Level | Casting Time | Range | Notes |
|------|------|--------------|-------|-------|
|      |      |              |       |       |
|      |      |              |       |       |
|      |      |              |       |       |
|      |      |              |       |       |
|      |      |              |       |       |
|      |      |              |       |       |
|      |      |              |       |       |
|      |      |              |       |       |

---

## Spell Slots
| Level | Total | Expended |
|------|------|-----------|
| 1    |      |           |
| 2    |      |           |
| 3    |      |           |
| 4    |      |           |
| 5    |      |           |
| 6    |      |           |
| 7    |      |           |
| 8    |      |           |
| 9    |      |           |

<!-- @TAB: Equipment -->
## Equipment

### Gear
-

### Coins
- **CP:**
- **SP:**
- **EP:**
- **GP:**
- **PP:**

---

## Magic Item Attunement
- [ ] Item 1
- [ ] Item 2
- [ ] Item 3

<!-- @TAB: Background -->
## Backstory & Personality
- **Traits:**
- **Ideals:**
- **Bonds:**
- **Flaws:**

---

## Appearance
-

---

## Notes
-
`,
    },
    {
        id: "rbrb-character-sheet",
        name: "Righteous Blood, Ruthless Blades Character Sheet",
        linked_stats: "rbrb",
        content: `<!-- @TAB: Character -->
# Character Sheet

| Name |
|------|
|      |

${buildRbrbPlainFieldTable()}

---

## Defences
${buildRbrbDefenceTable()}

<!-- @TAB: Skills -->
${buildRbrbSkillSections()}

<!-- @TAB: Martial -->
${buildRbrbMartialSections()}

<!-- @TAB: Resources -->
${buildRbrbResourceTable()}

<!-- @TAB: Story -->
${buildRbrbStoryTable()}

<!-- @TAB: Identity -->
## Identity
- **Name:**
- **Alias:**
- **Homeland:**
- **Sect / Faction:**
- **Rank / Station:**
- **Concept:**
- **Physical Description:**
`,
    },
    {
        id: "dnd-character-sheet",
        name: "D&D Character Sheet",
        content: `# Character Name

## Basic Info
- **Class:**
- **Race:**
- **Level:** <stat data-key="level" data-field="value">1</stat>
- **Background:**
- **Alignment:**

## Ability Scores
| Ability | Score | Modifier |
|---------|-------|----------|
| STR     |       |          |
| DEX     |       |          |
| CON     |       |          |
| INT     |       |          |
| WIS     |       |          |
| CHA     |       |          |

## Combat
- **AC:** <stat data-key="armor-class" data-field="value">10</stat>
- **Current HP:** <stat data-key="hp" data-field="value">10</stat>
- **Max HP:** <stat data-key="hp" data-field="maxValue">10</stat>
- **Initiative:** <stat data-key="initiative" data-field="value">0</stat>
- **Speed:** <stat data-key="speed" data-field="value">30</stat>

## Saving Throws
- **STR:**
- **DEX:**
- **CON:**
- **INT:**
- **WIS:**
- **CHA:**

## Skills & Proficiencies


## Equipment


## Spells / Abilities


## Features & Traits


## Notes

`,
    },
    {
        id: "session-notes",
        name: "Session Notes",
        content: `# Session Notes

## Date


## Recap


## Key NPCs Met


## Locations Visited


## Loot / Rewards


## Next Session Goals

`,
    },
];
