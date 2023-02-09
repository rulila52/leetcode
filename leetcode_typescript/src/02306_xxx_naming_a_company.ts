export function distinctNames1(ideas: string[]): number {
    let totalNames = 0;
    let valueCache: Record<string, boolean> = {};
    let sliceCache: Record<string, string> = {};

    for (let i = 0; i < ideas.length - 1; i++) {
        for (let j = i + 1; j < ideas.length; j++) {
            if (ideas[i][0] == ideas[j][0]) {
                continue;
            }

            let flag1 = false,
                flag2 = false;

            if (!sliceCache[ideas[j]]) {
                sliceCache[ideas[j]] = ideas[j].slice(1);
            }

            let newNamePart = ideas[i][0] + sliceCache[ideas[j]];
            if (valueCache[newNamePart] == null) {
                flag1 = ideas.includes(newNamePart);
                valueCache[newNamePart] = flag1;
            } else {
                flag1 = valueCache[newNamePart];
            }

            if (flag1) {
                continue;
            }

            if (!sliceCache[ideas[i]]) {
                sliceCache[ideas[i]] = ideas[i].slice(1);
            }

            newNamePart = ideas[j][0] + sliceCache[ideas[i]];
            if (valueCache[newNamePart] == null) {
                flag2 = ideas.includes(newNamePart);
                valueCache[newNamePart] = flag2;
            } else {
                flag2 = valueCache[newNamePart];
            }

            if (flag2) {
                continue;
            }

            totalNames += 2;
        }
    }

    return totalNames;
}

export function distinctNames2(ideas: string[]): number {
    let ideaGroups: Record<string, string[]> = {};
    let keys: string[] = [];

    for (let i = 0; i < ideas.length; i++) {
        if (!ideaGroups[ideas[i][0]]) {
            ideaGroups[ideas[i][0]] = [];
            keys.push(ideas[i][0]);
        }
        ideaGroups[ideas[i][0]].push(ideas[i]);
    }

    let totalNames = 0;
    let valueCache: Record<string, boolean> = {};
    let sliceCache: Record<string, string> = {};

    for (let i = 0; i < keys.length - 1; i++) {
        for (let ii = 0; ii < ideaGroups[keys[i]].length; ii++) {
            for (let j = i + 1; j < keys.length; j++) {
                for (let jj = 0; jj < ideaGroups[keys[j]].length; jj++) {
                    let flag1 = false,
                        flag2 = false;

                    if (!sliceCache[ideaGroups[keys[j]][jj]]) {
                        sliceCache[ideaGroups[keys[j]][jj]] = ideaGroups[keys[j]][jj].slice(1);
                    }

                    let newNamePart =
                        ideaGroups[keys[i]][ii][0] + sliceCache[ideaGroups[keys[j]][jj]];
                    if (valueCache[newNamePart] == null) {
                        flag1 = ideaGroups[newNamePart[0]].includes(newNamePart);
                        valueCache[newNamePart] = flag1;
                    } else {
                        flag1 = valueCache[newNamePart];
                    }

                    if (flag1) {
                        continue;
                    }

                    if (!sliceCache[ideaGroups[keys[i]][ii]]) {
                        sliceCache[ideaGroups[keys[i]][ii]] = ideaGroups[keys[i]][ii].slice(1);
                    }

                    newNamePart = ideaGroups[keys[j]][jj][0] + sliceCache[ideaGroups[keys[i]][ii]];
                    if (valueCache[newNamePart] == null) {
                        flag2 = ideaGroups[newNamePart[0]].includes(newNamePart);
                        valueCache[newNamePart] = flag2;
                    } else {
                        flag2 = valueCache[newNamePart];
                    }

                    if (flag2) {
                        continue;
                    }

                    totalNames += 2;
                }
            }
        }
    }

    return totalNames;
}
