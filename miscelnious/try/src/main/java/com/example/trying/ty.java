package com.example.trying;

public class ty {

    public static void main(String[] args) {
        // Create an object that implements the interface using a named class
        MyImplementation obj = new MyImplementation();

        // Call the method on the object
        obj.doSomething();
    }

    // Define the interface
    public interface MyInterface {
        void doSomething();
    }

    // Define a class that implements the interface
    public static class MyImplementation implements MyInterface {
        public void doSomething() {
            System.out.println("Hello from a named class!");
        }
    }
}
