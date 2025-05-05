using Microsoft.AspNetCore.Mvc;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FibonacciController : ControllerBase
    {
        [HttpPost]
        public List<int> FibonacciNumbers()
        {
            return new List<int>() { 1, 2, 3, 4, 5};
        }
    }
}
