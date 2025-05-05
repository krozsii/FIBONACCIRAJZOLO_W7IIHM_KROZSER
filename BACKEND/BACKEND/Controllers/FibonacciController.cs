using BACKEND.Data;
using Microsoft.AspNetCore.Mvc;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FibonacciController : ControllerBase
    {
        FibonacciRepository repo;
        public FibonacciController()
        {
            repo = new FibonacciRepository();
        }

        [HttpPost]
        public List<int> FibonacciNumbers([FromBody] int iteration)
        {
            return repo.Calculate(iteration);
        }
    }
}
