namespace Circle
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Circle myCircle = new Circle(10);
            double areaOfMyCircle = myCircle.GetArea();
            double circumferenceOfMyCircle = myCircle.GetCircumference();

            Console.WriteLine("Area of my circle is: " + areaOfMyCircle);
            Console.WriteLine("Circumference of my circle is: " + circumferenceOfMyCircle);
        }
    }

    class Circle
    {
        double Radius;

        public Circle(double radius)
        {
            this.Radius = radius;
        }

        public double GetArea()
        {
            double area = 3.14 * this.Radius * this.Radius;
            return area;
        }

        public double GetCircumference()
        {
            double circumference = 2 * 3.14 * this.Radius;
            return circumference;
        }
    }
}