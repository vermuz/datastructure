/**
 * IQueue.ts
 * (C) Copyright, Alva Chien, 2017
 */

// Queue stands for FIFO
export interface IQueue<T> {
    /**
     * The length of the whole stack
     */
    Length(): number;

    /**
     * Is empty? true means it is empty
     */
    IsEmpty(): boolean;

    /**
     * Enqueue the  element at the tailor of the queue, returns the result: true means success
     * @param elem the element to be inserted.
     */
    Enqueue(elem: T): boolean;

    /**
     * Peek the top element without remove it, returns the top element.
     */
    Peek(): T;

    /**
     * Return the first element and remove it from the queue, returns the poped element.
     */
    Dequeue(): T;

    /**
     * Clear all elements, returns the result: true means suces
     */
    ClearAll(): boolean;
}

