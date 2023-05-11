﻿namespace StackApp
{
    internal class Program
    {
        private class Aman
        {
            public int value;

            public Aman(int value)
            {
                this.value = value;
            }
        }

        static void Main(string[] args)
        {
            //ICustomStack<int> intStack = new CustomStack<int>();
            //intStack.Push(1);
            //intStack.Push(2);
            //intStack.Push(3);
            //Console.WriteLine(intStack.Pop()); // Output: 3
            //Console.WriteLine(intStack.Pop()); // Output: 2
            //Console.WriteLine(intStack.IsEmpty()); // Output: False


            CustomStack<int> stack = new CustomStack<int>();
            stack.Push(1);
            stack.Push(2);
            stack.Push(3);
            stack.Push(4);

            Console.WriteLine(stack.Pop());
            Console.WriteLine(stack.Pop());
            Console.WriteLine(stack.IsEmpty());
            Console.WriteLine(stack.Pop());
            Console.WriteLine(stack.Pop());
            Console.WriteLine(stack.IsEmpty());



            CustomStack<string> stack2 = new CustomStack<string>();
            stack2.Push("aman");
            stack2.Push("hrithik");
            stack2.Push("rahul");
            stack2.Push("sanu");

            Console.WriteLine(stack2.Pop());
            Console.WriteLine(stack2.Pop());
            Console.WriteLine(stack2.IsEmpty());
            Console.WriteLine(stack2.Pop());
            Console.WriteLine(stack2.Pop());
            Console.WriteLine(stack2.IsEmpty());



            CustomStack<Aman> stack3 = new CustomStack<Aman>();
            stack3.Push(new Aman(1));
            stack3.Push(new Aman(2));
            stack3.Push(new Aman(3));
            stack3.Push(new Aman(4));
            stack3.Push(new Aman(5));
            stack3.Push(new Aman(6));



            Console.WriteLine(stack3.Pop());
            Console.WriteLine(stack3.Pop());
            Console.WriteLine(stack3.IsEmpty());
            Console.WriteLine(stack3.Pop());
            Console.WriteLine(stack3.Pop());
            Console.WriteLine(stack3.IsEmpty());


            Console.ReadLine();
        }
    }

    public class CustomStack<T>
    {
        private List<T> list;
        private int size;

        public CustomStack()
        {
            list = new List<T>();
            size = 0;
        }

        public void Push(T item)
        {
            list.Add(item);
            size++;
        }

        public T Pop()
        {
            if(this.IsEmpty())
            {
                throw new IndexOutOfRangeException();
            }
            T value = list[size-1];
            list.RemoveAt(size-1);
            size--;
            return value;
        }

        public bool IsEmpty()
        {
            return size == 0;
        }

    }
}