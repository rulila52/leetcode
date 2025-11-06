import java.util.TreeSet;
import java.util.HashMap;
import java.util.Comparator;
import java.util.*;

// Java 11
// https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/description/
class Solution {
    public long[] findXSum(int[] nums, int k, int x) {
        int n = nums.length;
        long[] ans = new long[n - k + 1];

        HashMap<Integer, Integer> freq = new HashMap<>();

        Comparator<Integer> cmp = (a, b) -> {
            int fa = freq.getOrDefault(a, 0), fb = freq.getOrDefault(b, 0);
            if (fa != fb) {
                return Integer.compare(fa, fb);
            }
            return Integer.compare(a, b);
        };

        TreeSet<Integer> topX = new TreeSet<>(cmp);
        TreeSet<Integer> rest = new TreeSet<>(cmp);

        long sumTop = 0L;

        for (int i = 0; i < k; i++) {
            int v = nums[i];

            int vOldFreq = freq.getOrDefault(v, 0);
            int vNewFreq = vOldFreq + 1;
            boolean isVTopX = topX.contains(v);

            topX.remove(v);
            rest.remove(v);
            freq.put(v, vNewFreq);
            rest.add(v);

            if (isVTopX) {
                sumTop -= (long) vOldFreq * v;
            }

            sumTop = balanceSets(
                topX, rest, x,
                freq, cmp, sumTop
            );
        }

        ans[0] = sumTop;

        for (int i = k; i < n; i++) {
            int ve = nums[i];
            int vs = nums[i - k];

            // handling ve (end of window)

            int veOldFreq = freq.getOrDefault(ve, 0);
            int veNewFreq = veOldFreq + 1;
            boolean isVeTopX = topX.contains(ve);

            topX.remove(ve);
            rest.remove(ve);
            freq.put(ve, veNewFreq);
            rest.add(ve);

            if (isVeTopX) {
                sumTop -= (long) veOldFreq * ve;
            }

            sumTop = balanceSets(
                topX, rest, x,
                freq, cmp, sumTop
            );

            int vsOldFreq = freq.get(vs);
            int vsNewFreq = vsOldFreq - 1;
            boolean isVsTopX = topX.contains(vs);

            topX.remove(vs);
            rest.remove(vs);

            if (vsNewFreq > 0) {
                freq.put(vs, vsNewFreq);
                rest.add(vs);
            } else {
                freq.remove(vs);
            }

            if (isVsTopX) {
                sumTop -= (long) vsOldFreq * vs;
            }

            sumTop = balanceSets(
                topX, rest, x,
                freq, cmp, sumTop
            );

            ans[i - k + 1] = sumTop;
        }

        return ans;
    }

    private long balanceSets(
        TreeSet<Integer> topX,
        TreeSet<Integer> rest,
        int x,
        HashMap<Integer, Integer> freq,
        Comparator<Integer> cmp,
        long sumTop
    ) {
        while (topX.size() < x && !rest.isEmpty()) {
            int restLast = rest.last();
            rest.remove(restLast);
            topX.add(restLast);
            sumTop += (long) freq.get(restLast) * restLast;
        }

        while (topX.size() > x) {
            int topXFirst = topX.first();
            topX.remove(topXFirst);
            rest.add(topXFirst);
            sumTop -= (long) freq.get(topXFirst) * topXFirst;
        }

        if (!topX.isEmpty() && !rest.isEmpty()) {
            int restLast = rest.last();
            int topXFirst = topX.first();

            if (cmp.compare(restLast, topXFirst) > 0) {
                topX.remove(topXFirst);
                rest.remove(restLast);
                topX.add(restLast);
                rest.add(topXFirst);
                sumTop += (long) freq.get(restLast) * restLast;
                sumTop -= (long) freq.get(topXFirst) * topXFirst;
            }
        }
        return sumTop;
    }

    public static void main (String [] args) {
        long[] ans = new Solution().findXSum(new int[] {1,1,2,2,3,4,2,3}, 6, 2);

        System.out.println("");
        System.out.println("---------- answer");
        System.out.println(Arrays.toString(ans));
    }
}