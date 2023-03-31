package com.example.trying;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class tryrt {
    public class Main {
        public static void main(String[] args) {
            Integer[] a = {5, 2, 8, 17, 2};
            Integer[] b = {3, 17, 2, 19, 6, 17};

            Set<Integer> setA = new HashSet<>(Arrays.asList(a));
            Set<Integer> setB = new HashSet<>(Arrays.asList(b));

            System.out.println("Duplicates are removed automatically:");
            System.out.println("a=" + setA);
            System.out.println("b=" + setB);
            System.out.println();

            System.out.println("Size of " + Arrays.toString(a) + " is " + setA.size());
            System.out.println("Size of " + Arrays.toString(b) + " is " + setB.size());
            System.out.println();

            System.out.println("2 belongs to " + Arrays.toString(a) + ": " + setA.contains(2));
            System.out.println("5 belongs to " + Arrays.toString(a) + ": " + setA.contains(5));
            System.out.println("2 belongs to " + Arrays.toString(b) + ": " + setB.contains(2));
            System.out.println("5 belongs to " + Arrays.toString(b) + ": " + setB.contains(5));
            System.out.println();

            Set<Integer> union = new HashSet<>(setA);
            union.addAll(setB);
            System.out.println("Union of " + setA + " and " + setB + ": " + union);

            Set<Integer> intersection = new HashSet<>(setA);
            intersection.retainAll(setB);
            System.out.println("Intersection of " + setA + " and " + setB + ": " + intersection);
            System.out.println();

            System.out.println("Set building:");
            Set<Integer> oddNumbersOfA = new HashSet<>();
            for (Integer num : setA) {
                if (num % 2 == 1) {
                    oddNumbersOfA.add(num);
                }
            }
            System.out.println("Set of odd numbers of " + setA + " is " + oddNumbersOfA);

            Set<Integer> notInA = new HashSet<>();
            for (Integer num : setB) {
                if (!setA.contains(num)) {
                    notInA.add(num);
                }
            }
            System.out.println("Set of numbers from " + setB + " that do not belong to " + setA + ":");
            System.out.println(notInA);
        }
    }
}
