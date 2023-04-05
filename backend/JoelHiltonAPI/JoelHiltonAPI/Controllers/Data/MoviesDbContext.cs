using Microsoft.EntityFrameworkCore;
namespace JoelHiltonAPI.Controllers.Data
{
	public class MoviesDbContext : DbContext
	{
		public MoviesDbContext (DbContextOptions<MoviesDbContext> options): base(options) { }

		//model and future table name
		public DbSet<Movies> Movies { get; set; }
	}
}

