package dsa.queue;

import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {

        // Create a Queue of Integers using LinkedList
        Queue<String> queue = new LinkedList<>();

        // add elements 
        queue.add("apple");
        queue.add("banana");
        queue.add("cherry");

        // Displaying the Queue
        System.out.println("Queue elements: " + queue);

        // Remove the element at the front of the queue
        String front = queue.remove();
        System.out.println("Removed element: " + front);

        // Print the updated queue
        System.out.println("Queue after removal: " + queue);

        // Add another element to the queue
        queue.add("date");

        // Peek at the element at the front of the queue
        String peeked = queue.peek();
        System.out.println("Peeked element: " + peeked);

        // Print the updated queue
        System.out.println("Queue after peek: " + queue);
    }
}


