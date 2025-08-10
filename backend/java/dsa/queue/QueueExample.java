package dsa.queue;

import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {

        // Create a Queue of Integers using LinkedList
        Queue<String> queue = new LinkedList<>();

        // Add elements 
        queue.add("apple");
        queue.add("banana");
        queue.add("cherry");

        // Displaying the Queue
        System.out.println("Queue elements: " + queue);

        // Remove the element at the front of the queue
        String Dequeue = queue.remove();
        System.out.println("\nRemoved element: " + Dequeue);

        // Print the updated queue
        System.out.println("\nQueue after removal: " + queue);

        // Add another element to the queue
        queue.add("orange");

        // Peek at the element at the front of the queue
        String Enqueue = queue.peek();
        System.out.println("\nPeeked element: " + Enqueue);

        // Print the updated queue
        System.out.println("\nQueue after peek: " + queue);
    }
}
