function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
    const priority: Record<string, number> = {
        "electronics": 0,
        "grocery": 1,
        "pharmacy": 2,
        "restaurant": 3
    };
    const allowedBusiness = Object.keys(priority);

    const validCoupons: Array<[string, string, number]> = [];
    const n = code.length;

    for (let i = 0; i < n; i++) {
        if (!isActive[i]) {
            continue;
        }


        if (!allowedBusiness.includes(businessLine[i])) {
            continue;
        }

        const c = code[i]
        if (!c) {
            continue;
        }

        const regex = /^[a-zA-Z0-9_]+$/;
        if (!regex.test(c)) {
            continue;
        }

        validCoupons.push([
            businessLine[i],
            code[i],
            priority[businessLine[i]]
        ])
    }

    validCoupons.sort((a, b) => {
        if (a[2] !== b[2]) {
            return a[2] - b[2];
        }

        if (a[1] > b[1]) {
            return 1;
        }

        if (a[1] < b[1]) {
            return -1;
        }

        return 0;
    })

    return validCoupons.map((value) => value[1]);
}