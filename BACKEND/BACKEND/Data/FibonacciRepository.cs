namespace BACKEND.Data
{
    public class FibonacciRepository
    {
        public List<int> Calculate(int iteration)
        {
            List<int> fib = new List<int>();

            for(int i = 0; i < iteration; i++)
            {
                if (i == 0)
                {
                    fib.Add(0);
                }
                else
                    if (i == 1)
                    {
                        fib.Add(1);
                    }
                else
                    fib.Add(fib[i - 2] + fib[i-1]);
            }

            return fib;
        }
    }
}
