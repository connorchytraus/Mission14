using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JoelHiltonAPI.Controllers.Data;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace JoelHiltonAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]

    //build api controller here
    public class MoviesController : Controller
    {
        private MoviesDbContext context;

        public MoviesController(MoviesDbContext temp)
        {
            context = temp;
        }
        // GET: /<controller>/
        public IEnumerable<Movies> Get()
        {
            return context.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(x => x.Title)
                .ToArray();
        }
    }
}

