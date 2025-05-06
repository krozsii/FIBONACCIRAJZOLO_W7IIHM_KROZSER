namespace BACKEND.Data
{
    public class FibonacciRepository
    {
        public List<int> Calculate(int iteration)
        {
            List<int> fib = new List<int>();

            if (iteration == 0)
                return fib;

            if(iteration == 1)
                fib.Add(0);

            if(iteration == 2)
            {
                fib.Add(0);
                fib.Add(1);
            }

            if(iteration > 2)
                for(int i = 2; fib.Count() < iteration; i++)
                    fib.Add(fib[i-2] + fib[i-1]);

            return fib;
        }
    }
}
